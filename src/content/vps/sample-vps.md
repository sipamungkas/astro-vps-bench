---
title: 'My Awesome VPS'
provider: 'Contabo'
location: 'Nuremberg, Germany'
price_monthly: 5.99
currency: 'USD'
cpu_cores: 4
ram_gb: 8
storage_gb: 200
storage_type: 'NVMe SSD'
bandwidth_tb: 32
virtualization: 'KVM'
status: 'active'
last_updated: 2023-10-27
tags: ['cheap', 'powerful', 'kvm']
affiliate_link: 'https://contabo.com/'
raw_yabs_output: |
  # ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## #
  #              Yet-Another-Bench-Script              #
  #                     v2023-04-23                    #
  # https://github.com/masonr/yet-another-bench-script #
  # ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## #

  Sun 23 Apr 2023 01:41:14 PM EDT

  Basic System Information:
  ---------------------------------
  Uptime     : 342 days, 18 hours, 35 minutes
  Processor  : Intel(R) Xeon(R) E-2276G CPU @ 3.80GHz
  CPU cores  : 12 @ 4693.667 MHz
  AES-NI     : ✔ Enabled
  VM-x/AMD-V : ✔ Enabled
  RAM        : 15.5 GiB
  Swap       : 14.9 GiB
  Disk       : 864.5 GiB
  Distro     : Ubuntu 20.04.6 LTS
  Kernel     : 5.4.0-110-generic
  VM Type    : NONE
  IPv4/IPv6  : ✔ Online / ✔ Online

  IPv6 Network Information:
  ---------------------------------
  ISP        : Clouvider Limited
  ASN        : AS62240 Clouvider
  Host       : USA Network
  Location   : New York, New York (NY)
  Country    : United States

  fio Disk Speed Tests (Mixed R/W 50/50):
  ---------------------------------
  Block Size | 4k            (IOPS) | 64k           (IOPS)
    ------   | ---            ----  | ----           ----
  Read       | 405.41 MB/s (101.3k) | 407.96 MB/s   (6.3k)
  Write      | 406.48 MB/s (101.6k) | 410.11 MB/s   (6.4k)
  Total      | 811.90 MB/s (202.9k) | 818.08 MB/s  (12.7k)
             |                      |
  Block Size | 512k          (IOPS) | 1m            (IOPS)
    ------   | ---            ----  | ----           ----
  Read       | 380.21 MB/s    (742) | 394.55 MB/s    (385)
  Write      | 400.41 MB/s    (782) | 420.82 MB/s    (410)
  Total      | 780.62 MB/s   (1.5k) | 815.37 MB/s    (795)

  iperf3 Network Speed Tests (IPv4):
  ---------------------------------
  Provider        | Location (Link)           | Send Speed      | Recv Speed      | Ping
  -----           | -----                     | ----            | ----            | ----
  Clouvider       | London, UK (10G)          | 1.61 Gbits/sec  | 2.39 Gbits/sec  | 77.5 ms
  Scaleway        | Paris, FR (10G)           | busy            | 2.25 Gbits/sec  | 83.3 ms
  Clouvider       | NYC, NY, US (10G)         | 9.10 Gbits/sec  | 8.85 Gbits/sec  | 1.21 ms

  iperf3 Network Speed Tests (IPv6):
  ---------------------------------
  Provider        | Location (Link)           | Send Speed      | Recv Speed      | Ping
  -----           | -----                     | ----            | ----            | ----
  Clouvider       | London, UK (10G)          | 2.00 Gbits/sec  | 21.1 Mbits/sec  | 76.7 ms
  Scaleway        | Paris, FR (10G)           | 2.66 Gbits/sec  | 1.56 Gbits/sec  | 75.9 ms
  Clouvider       | NYC, NY, US (10G)         | 3.42 Gbits/sec  | 7.80 Gbits/sec  | 1.15 ms

  Geekbench 6 Benchmark Test:
  ---------------------------------
  Test            | Value
                  |
  Single Core     | 1549
  Multi Core      | 5278
  Full Test       | https://browser.geekbench.com/v6/cpu/1021916

raw_benchsh_output: |
  CPU model:    Intel(R) Xeon(R) CPU E5-2697 v2 @ 2.70GHz
  Number of cores: 1
  CPU frequency:  2699.998 MHz
  Total size of Disk: 492.2 GiB (528482304000 Bytes)
  Total amount of Mem: 477.9 MiB (501174272 Bytes)
  Total amount of Swap: 1.1 GiB (1207955456 Bytes)
  System uptime:   7 days, 19 hours, 18 minutes
  Load average:  0.00, 0.01, 0.05
  OS:         Ubuntu 18.04.5 LTS
  Arch:       x86_64 (64 Bit)
  Kernel:     4.15.0-128-generic
  I/O speed(1st run): 3.88 MB/s
  I/O speed(2nd run): 47.39 MB/s
  I/O speed(3rd run): 148.26 MB/s
  I/O speed(average): 66.51 MB/s
---
This is some content for the VPS page. 