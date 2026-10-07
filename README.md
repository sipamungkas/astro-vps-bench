# astro-vpsbench

Situs bandingkan performa VPS. Data diambil dari `bench.sh` (Teddysun) dan
`YABS.sh`, lalu disimpan sebagai JSON sehingga bisa dibandingkan antar server.

## Sumber data

JSON, bukan Markdown:

```
src/data/vps/<slug>.json      metadata + hasil benchmark   <- sumber data situs
src/data/raw/<slug>/yabs.txt  output mentah YABS
src/data/raw/<slug>/benchsh.txt  output mentah bench.sh
```

Output mentah **tidak** disimpan di dalam JSON. Alasannya halaman `compare`
menyertakan data semua VPS ke dalam HTML; kalau teks mentah ikut, payloadnya
bertambah ratusan KB per VPS. Teks mentah dibaca dari disk saat build.

Isi tiap `result.json`:

```jsonc
{
  "slug": "nevacloud-nvme-1c-1g-id-jkt",
  "title": "Nevacloud NVME Jakarta 2",
  "provider": "Nevacloud",          // dipisah dari badan usaha -> filter kategori
  "provider_legal": "PT Deneva",
  "location": "Jakarta, Indonesia",
  "price_monthly": 90000,
  "currency": "IDR",
  "summary": {                      // dihitung sekali oleh tool, dipakai UI
    "geekbench_single": null,
    "geekbench_multi": null,
    "max_iops": 88700,
    "max_read_mb_s": 1474.6,
    "max_write_mb_s": 1484.8,
    "dd_avg_mb_s": 5700.4,
    "best_iperf_send": "935 Mbits/sec",
    "speedtest_best_download": "495.07 Mbps"
  },
  "benchmarks": {
    "yabs": {
      "fio": [
        { "bs": "4k", "speed_r": 181514, "iops_r": 44300, "speed_units": "KBps" }
      ],
      "iperf": [
        { "mode": "IPv4", "loc": "Warsaw, Poland (10G)", "send": "412.55 Mbit/s" }
      ],
      "geekbench": [{ "version": 6, "single": 1560, "multi": 3980 }],
      "raw_file": "yabs.txt"
    },
    "benchsh": {
      "io_mb_s": { "average": 5700.4 },
      "speedtest": [{ "node": "Tokyo, JP", "download": "495.07 Mbps" }],
      "raw_file": "benchsh.txt"
    }
  }
}
```

Semua angka sudah dinormalkan supaya bisa dibandingkan:

- Kecepatan disk fio → **KBps**, IOPS → **angka penuh** (`44.3k` → `44300`)
- Laju I/O bench.sh → **MB/s** (`5.4 GB/s` → `5529.6`)
- Kecepatan jaringan disimpan apa adanya karena satuan tiap lokasi berbeda,
  tapi `summary` sudah menormalkan ke Mbit/s saat memilih yang terbaik

## Menambah atau memperbarui VPS

```bash
# 1. Jalankan benchmark di server (10-20 menit)
./tools/vps-bench yabs vps-jakarta

# 2. Masukkan hasilnya ke data situs
./tools/vps-bench import nevacloud-nvme-2c-4g \
    --yabs bench-results/yabs/vps-jakarta/20261007-031452/raw.txt \
    --benchsh bench-results/bench/vps-jakarta/20261007-034512/raw.txt \
    --title "Nevacloud NVMe 2" \
    --provider "Nevacloud (PT Deneva)" \
    --location "Jakarta, Indonesia" \
    --price 99000 --currency IDR \
    --cpu-cores 2 --ram-gb 4 --storage-gb 50 --storage-type NVMe \
    --bandwidth-tb 2 --virtualization KVM --status Available \
    --affiliate "https://yukcek.com/nevacloud" \
    --tag KVM --tag Jakarta --tag NVMe
```

Perintah `import` bisa dijalankan ulang kapan saja. Metadata yang sudah ada
(harga, kategori, link affiliate) **tidak** tertimpa; hanya blok `benchmarks`
dan `summary` yang diperbarui. Jadi benchmark ulang tidak menghapus informasi
yang diisi manual.

`--provider "Nama (Badan Usaha)"` otomatis dipecah jadi `provider` dan
`provider_legal`, supaya filter kategori tidak ikut berubah kalau nama badan
usaha diganti.

### Kalau tidak bisa lewat SSH

Kirim skrip ke server, ambil hasilnya, lalu parse di lokal:

```bash
./tools/vps-bench import slug-vps --yabs hasil-yabs.txt
./tools/vps-bench yabs-parse hasil-yabs.txt -o /tmp/cek   # JSON + Markdown
```

### Perintah lain

| Perintah | Fungsi |
|---|---|
| `vps-bench yabs <host>` | Jalankan YABS.sh lewat SSH |
| `vps-bench bench <host>` | Jalankan bench.sh lewat SSH |
| `vps-bench yabs-parse <file>` | Parse teks YABS → JSON + Markdown |
| `vps-bench bench-parse <file>` | Parse teks bench.sh → JSON + Markdown |
| `vps-bench md <file.json>` | Render JSON menjadi Markdown |
| `vps-bench migrate` | Ubah data `.md` lama menjadi JSON + raw terpisah |

Butuh hanya `bash`, `jq`, `ssh`, `curl`. `bash 3.2` (default macOS) sudah
cukup. Tanpa dependensi Node atau Python.

## Develop

```bash
pnpm install
pnpm dev      # localhost:4321
pnpm build    # -> dist/
pnpm check    # type-check Astro + TypeScript
```

Tambah VPS baru cukup dengan menjalankan `vps-bench import`; tidak perlu
menyunting halaman atau komponen.

## Test

```bash
pnpm test          # = bash tests/run_tests.sh
pnpm check         # type-check
```

164 assertion, tanpa perlu akses server maupun menjalankan Astro. Fixture
`tests/fixture-*-legacy.txt` berasal dari output **nyata** VPS supaya regresi
format lama (v2024/v2025) langsung ketahuan — nama label, satuan, dan format
IOPS di script itu berubah beberapa kali.

## Jebakan yang perlu diwaspadai

Menambah filter jq di `tools/lib/` harus tahu dua hal ini.
Keduanya pernah membuat data hilang **tanpa indication apa pun**:

1. **`capture()` yang tidak cocok tidak melempar error, tapi menghasilkan output
   kosong.** `try/catch` tidak menangkapnya. Objek yang salah satu field-nya nol
   output ikut jadi nol output, dan array menyusut diam-diam sehingga
   `[a, b]` menjadi `[]`. Di `bench_parse.sh` ini membuat seluruh tabel fio
   lenyap begitu ada satu nilai IOPS gagal diparse. Pakai `scan()` yang tidak
   pernah kosong, dan tutup tiap cabang dengan `// null`.

2. **`sub()` di jq 1.7 tidak memproses `\1` sebagai referensi grup.** Hasilnya
   string literal `\1`, yang gagal saat dikonversi ke angka. Untuk mengambil
   angka dari `"1.20 Gbits/sec"`, pakai `split(" ")` plus `tonumber`.