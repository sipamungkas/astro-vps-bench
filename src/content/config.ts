import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

/**
 * Sumber data: src/data/vps/<slug>.json
 *
 * Diisi oleh tools/vps-bench (perintah `migrate` atau `import`).
 * Output mentah TIDAK disimpan di sini - ada di src/data/raw/<slug>/*.txt
 * dan dibaca saat build, supaya payload compare page tetap ringan.
 *
 * Skema sengaja longgar di banyak field: parser benchmark bisa `null` kalau
 * datanya tidak terbaca (mis. Geekbench gagal karena RAM kecil), dan itu
 * tidak boleh menggagalkan build.
 */

const fioSchema = z.object({
  bs: z.string().nullish(),
  speed_r: z.number().nullish(),
  iops_r: z.number().nullish(),
  speed_w: z.number().nullish(),
  iops_w: z.number().nullish(),
  speed_rw: z.number().nullish(),
  iops_rw: z.number().nullish(),
  speed_units: z.string().nullish(),
});

const iperfSchema = z.object({
  mode: z.string().nullish(),
  provider: z.string().nullish(),
  loc: z.string().nullish(),
  send: z.string().nullish(),
  recv: z.string().nullish(),
  latency: z.string().nullish(),
});

const geekbenchSchema = z.object({
  version: z.number().nullish(),
  single: z.number().nullish(),
  multi: z.number().nullish(),
  url: z.string().nullish(),
});

const speedtestSchema = z.object({
  node: z.string().nullish(),
  upload: z.string().nullish(),
  download: z.string().nullish(),
  latency: z.string().nullish(),
});

const ipInfoSchema = z.object({
  isp: z.string().nullish(),
  asn: z.string().nullish(),
  org: z.string().nullish(),
  location: z.string().nullish(),
  country: z.string().nullish(),
});

const yabsSchema = z.object({
  schema: z.string().nullish(),
  source: z.string().nullish(),
  version: z.string().nullish(),
  time: z.string().nullish(),
  os: z.object({
    arch: z.string().nullish(),
    distro: z.string().nullish(),
    kernel: z.string().nullish(),
    vm: z.string().nullish(),
  }).nullish(),
  vm: z.string().nullish(),
  uptime: z.string().nullish(),
  cpu: z.object({
    model: z.string().nullish(),
    cores: z.number().nullish(),
    freq: z.string().nullish(),
    aes: z.boolean().nullish(),
  }).nullish(),
  mem: z.object({
    ram: z.string().nullish(),
    swap: z.string().nullish(),
    disk: z.string().nullish(),
  }).nullish(),
  net: z.object({
    ipv4: z.boolean().nullish(),
    ipv6: z.boolean().nullish(),
  }).nullish(),
  ip_info: ipInfoSchema.nullish(),
  fio: z.array(fioSchema).nullish(),
  iperf: z.array(iperfSchema).nullish(),
  geekbench: z.array(geekbenchSchema).nullish(),
  runtime_sec: z.number().nullish(),
  raw_file: z.string().nullish(),
});

const benchshSchema = z.object({
  schema: z.string().nullish(),
  source: z.string().nullish(),
  version: z.string().nullish(),
  time: z.string().nullish(),
  cpu: z.object({
    model: z.string().nullish(),
    cores: z.number().nullish(),
    cores_raw: z.string().nullish(),
    freq_mhz: z.number().nullish(),
    cache: z.string().nullish(),
    aes: z.boolean().nullish(),
    virt_flag: z.boolean().nullish(),
  }).nullish(),
  mem: z.object({
    ram: z.string().nullish(),
    swap: z.string().nullish(),
    disk: z.string().nullish(),
  }).nullish(),
  system: z.object({
    os: z.string().nullish(),
    arch: z.string().nullish(),
    kernel: z.string().nullish(),
    virtualization: z.string().nullish(),
    tcp_congestion: z.string().nullish(),
    uptime: z.string().nullish(),
    load_average: z.string().nullish(),
  }).nullish(),
  net: z.object({
    ipv4: z.boolean().nullish(),
    ipv6: z.boolean().nullish(),
    organization: z.string().nullish(),
    location: z.string().nullish(),
    region: z.string().nullish(),
  }).nullish(),
  io_mb_s: z.object({
    run1: z.number().nullish(),
    run2: z.number().nullish(),
    run3: z.number().nullish(),
    average: z.number().nullish(),
  }).nullish(),
  speedtest: z.array(speedtestSchema).nullish(),
  runtime_sec: z.number().nullish(),
  raw_file: z.string().nullish(),
});

const summarySchema = z.object({
  geekbench_single: z.number().nullish(),
  geekbench_multi: z.number().nullish(),
  max_iops: z.number().nullish(),
  max_read_mb_s: z.number().nullish(),
  max_write_mb_s: z.number().nullish(),
  dd_avg_mb_s: z.number().nullish(),
  best_iperf_send: z.string().nullish(),
  speedtest_best_download: z.string().nullish(),
});

const vpsCollection = defineCollection({
  loader: glob({ pattern: '**/*.json', base: './src/data/vps' }),
  schema: z.object({
    slug: z.string(),
    title: z.string(),
    provider: z.string(),
    provider_legal: z.string().nullish(),
    location: z.string().nullish(),
    price_monthly: z.number().nullish(),
    currency: z.string().nullish(),
    cpu_cores: z.number().nullish(),
    ram_gb: z.number().nullish(),
    storage_gb: z.number().nullish(),
    storage_type: z.string().nullish(),
    bandwidth_tb: z.number().nullish(),
    virtualization: z.string().nullish(),
    status: z.string().nullish(),
    last_updated: z.string().nullish(),
    affiliate_link: z.string().nullish(),
    tags: z.array(z.string()).default([]),
    summary: summarySchema,
    benchmarks: z.object({
      yabs: yabsSchema.nullish(),
      benchsh: benchshSchema.nullish(),
    }),
  }),
});

export const collections = {
  vps: vpsCollection,
};