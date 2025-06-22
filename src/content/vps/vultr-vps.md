---
title: "Regular Cloud"
provider: "Vultr"
location: "Tokyo, Japan"
price_monthly: 5.00
currency: "USD"
cpu_cores: 1
ram_gb: 1
storage_gb: 25
storage_type: "NVMe SSD"
bandwidth_tb: 2
virtualization: "KVM"
status: "active"
last_updated: 2023-10-27
tags: ["cloud", "asia", "nvme"]
affiliate_link: "https://vultr.com/"
raw_yabs_output: |
  # ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## #
  #              Yet-Another-Bench-Script              #
  #                     v2023-04-23                    #
  # https://github.com/masonr/yet-another-bench-script #
  # ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## #

  fio Disk Speed Tests (Mixed R/W 50/50):
  ---------------------------------
  Block Size | 4k            (IOPS) | 64k           (IOPS)
    ------   | ---            ----  | ----           ----
  Read       | 945.67 MB/s   (241.9k) | 6800.2 MB/s   (106.2k)
  Write      | 890.12 MB/s   (227.7k) | 6700.1 MB/s   (104.7k)
  Total      | 1835.79 MB/s  (469.6k) | 13500.3 MB/s  (210.9k)

  iperf3 Network Speed Tests (IPv4):
  ---------------------------------
  Provider        | Location (Link)           | Send Speed      | Recv Speed      | Ping
  -----           | -----                     | ----            | ----            | ----
  Vultr           | Tokyo, JP (10G)           | 945.67 Mbps     | 890.12 Mbps     | 2.1 ms

raw_benchsh_output: |
  CPU model:    Intel(R) Xeon(R) CPU E5-2697 v2 @ 2.70GHz
  Number of cores: 1
  CPU frequency:  4000.000 MHz
  Total size of Disk: 25.0 GiB (26843545600 Bytes)
  Total amount of Mem: 1.0 GiB (1073741824 Bytes)
  Total amount of Swap: 1.0 GiB (1073741824 Bytes)
  System uptime:   2 days, 3 hours, 12 minutes
  Load average:  0.00, 0.01, 0.05
  OS:         Ubuntu 20.04.6 LTS
  Arch:       x86_64 (64 Bit)
  Kernel:     5.4.0-110-generic
  I/O speed(1st run): 6800.2 MB/s
  I/O speed(2nd run): 6700.1 MB/s
  I/O speed(3rd run): 6900.0 MB/s
  I/O speed(average): 6800.1 MB/s
---

This is a dummy Vultr VPS for comparison.
