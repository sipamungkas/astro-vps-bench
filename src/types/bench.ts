/**
 * Tipe hasil benchmark.
 *
 * Dipisah ke berkas .ts karena frontmatter .astro tidak boleh berisi
 * pernyataan `export`.
 *
 * Semua field OPSIONAL: skema di src/content/config.ts memakai `.nullish()`,
 * jadi tipe yang dihasilkan zod adalah `{ field?: T | null }` - field boleh
 * tidak ada, `null`, atau berisi nilai. Interface di sini harus memakai `?:`
 * dan bukan properti wajib; kalau ditulis wajib, pemanggilan komponen gagal
 * saat type-check dengan pesan "Property 'x' is optional ... but required".
 *
 * `null` berarti "dibaca tapi tidak ada nilainya" (mis. Geekbench gagal
 * dijalankan karena RAM kecil); `undefined` berarti field-nya tidak ada sama
 * sekali di JSON. Keduanya ditampilkan sebagai "—" supaya tidak mengecoh.
 */

export interface FioResult {
  bs?: string | null;
  speed_r?: number | null;
  iops_r?: number | null;
  speed_w?: number | null;
  iops_w?: number | null;
  speed_rw?: number | null;
  iops_rw?: number | null;
  speed_units?: string | null;
}

export interface IperfResult {
  mode?: string | null;
  provider?: string | null;
  loc?: string | null;
  send?: string | null;
  recv?: string | null;
  latency?: string | null;
}

export interface GeekbenchResult {
  version?: number | null;
  single?: number | null;
  multi?: number | null;
  url?: string | null;
}

export interface SpeedtestResult {
  node?: string | null;
  upload?: string | null;
  download?: string | null;
  latency?: string | null;
}

export interface VpsSummary {
  geekbench_single?: number | null;
  geekbench_multi?: number | null;
  max_iops?: number | null;
  max_read_mb_s?: number | null;
  max_write_mb_s?: number | null;
  dd_avg_mb_s?: number | null;
  best_iperf_send?: string | null;
  speedtest_best_download?: string | null;
}