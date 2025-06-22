---
title: Nevacloud NVME Jakarta 2
provider: Nevacloud (PT Deneva)
location: Jakarta, Indonesia
price_monthly: 90000
currency: IDR
cpu_cores: 1
ram_gb: 1
storage_gb: 20
storage_type: NVMe
bandwidth_tb: 1
virtualization: KVM
status: Available
last_updated: 2024-06-22
tags:
  - KVM
  - Indonesia
  - Jakarta
  - AMD EPYC
  - 1GB RAM
  - NVMe
affiliate_link: "https://yukcek.com/nevacloud"
raw_yabs_output: |
  # ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## #
  #              Yet-Another-Bench-Script              #
  #                     v2025-04-20                    #
  # https://github.com/masonr/yet-another-bench-script #
  # ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## #

  Sat Jun 21 22:45:35 UTC 2025

  Basic System Information:
  ---------------------------------
  Uptime     : 0 days, 0 hours, 19 minutes
  Processor  : AMD EPYC 9654 96-Core Processor
  CPU cores  : 1 @ 2396.400 MHz
  AES-NI     : ✔ Enabled
  VM-x/AMD-V : ✔ Enabled
  RAM        : 960.7 MiB
  Swap       : 0.0 KiB
  Disk       : 19.9 GiB
  Distro     : Ubuntu 24.04 LTS
  Kernel     : 6.8.0-31-generic
  VM Type    : KVM
  IPv4/IPv6  : ✔ Online / ✔ Online

  IPv6 Network Information:
  ---------------------------------
  ISP        : PT Deneva
  ASN        : AS138115 PT Deneva
  Host       : PT Deneva
  Location   : Jakarta, Jakarta (JK)
  Country    : Indonesia

  fio Disk Speed Tests (Mixed R/W 50/50) (Partition /dev/sda1):
  ---------------------------------
  Block Size | 4k            (IOPS) | 64k           (IOPS)
    ------   | ---            ----  | ----           ---- 
  Read       | 177.26 MB/s  (44.3k) | 1.44 GB/s    (22.6k)
  Write      | 177.73 MB/s  (44.4k) | 1.45 GB/s    (22.7k)
  Total      | 354.99 MB/s  (88.7k) | 2.90 GB/s    (45.3k)
             |                      |                     
  Block Size | 512k          (IOPS) | 1m            (IOPS)
    ------   | ---            ----  | ----           ---- 
  Read       | 997.98 MB/s   (1.9k) | 756.17 MB/s    (738)
  Write      | 1.05 GB/s     (2.0k) | 806.53 MB/s    (787)
  Total      | 2.04 GB/s     (4.0k) | 1.56 GB/s     (1.5k)

  iperf3 Network Speed Tests (IPv4):
  ---------------------------------
  Provider        | Location (Link)           | Send Speed      | Recv Speed      | Ping           
  -----           | -----                     | ----            | ----            | ----           
  Clouvider       | London, UK (10G)          | 241 Mbits/sec   | 203 Mbits/sec   | 189 ms         
  Eranium         | Amsterdam, NL (100G)      | 388 Mbits/sec   | 334 Mbits/sec   | 169 ms         
  Uztelecom       | Tashkent, UZ (10G)        | 82.7 Mbits/sec  | 109 Mbits/sec   | 248 ms         
  Leaseweb        | Singapore, SG (10G)       | 935 Mbits/sec   | 333 Mbits/sec   | 13.8 ms        
  Clouvider       | Los Angeles, CA, US (10G) | 224 Mbits/sec   | 122 Mbits/sec   | 183 ms         
  Leaseweb        | NYC, NY, US (10G)         | 241 Mbits/sec   | 264 Mbits/sec   | 253 ms         
  Edgoo           | Sao Paulo, BR (1G)        | busy            | 63.3 Mbits/sec  | 326 ms         

  iperf3 Network Speed Tests (IPv6):
  ---------------------------------
  Provider        | Location (Link)           | Send Speed      | Recv Speed      | Ping           
  -----           | -----                     | ----            | ----            | ----           
  Clouvider       | London, UK (10G)          | 310 Mbits/sec   | 86.4 Mbits/sec  | 189 ms         
  Eranium         | Amsterdam, NL (100G)      | 264 Mbits/sec   | 342 Mbits/sec   | 169 ms         
  Uztelecom       | Tashkent, UZ (10G)        | 69.2 Mbits/sec  | 55.5 Mbits/sec  | 247 ms         
  Leaseweb        | Singapore, SG (10G)       | 467 Mbits/sec   | 382 Mbits/sec   | 15.9 ms        
  Clouvider       | Los Angeles, CA, US (10G) | 229 Mbits/sec   | 70.7 Mbits/sec  | 182 ms         
  Leaseweb        | NYC, NY, US (10G)         | 272 Mbits/sec   | 192 Mbits/sec   | 252 ms         
  Edgoo           | Sao Paulo, BR (1G)        | 192 Mbits/sec   | 40.7 Mbits/sec  | 326 ms         

  Geekbench test failed and low memory was detected. Add at least 1GB of SWAP or use GB4 instead (higher compatibility with low memory systems).

  YABS completed in 10 min 5 sec
raw_benchsh_output: |
  -------------------- A Bench.sh Script By Teddysun -------------------
   Version            : v2025-05-08
   Usage              : wget -qO- bench.sh | bash
  ----------------------------------------------------------------------
   CPU Model          : AMD EPYC 9654 96-Core Processor
   CPU Cores          : 1 @ 2396.400 MHz
   CPU Cache          : 512 KB
   AES-NI             : ✓ Enabled
   VM-x/AMD-V         : ✓ Enabled
   Total Disk         : 19.9 GB (1.6 GB Used)
   Total Mem          : 960.7 MB (288.4 MB Used)
   System uptime      : 0 days, 0 hour 4 min
   Load average       : 0.00, 0.00, 0.00
   OS                 : Ubuntu 24.04 LTS
   Arch               : x86_64 (64 Bit)
   Kernel             : 6.8.0-31-generic
   TCP CC             : cubic
   Virtualization     : KVM
   IPv4/IPv6          : ✓ Online / ✓ Online
   Organization       : AS138115 PT Deneva
   Location           : Cileungsir / ID
   Region             : West Java
  ----------------------------------------------------------------------
   I/O Speed(1st run) : 5.4 GB/s
   I/O Speed(2nd run) : 6.4 GB/s
   I/O Speed(3rd run) : 4.9 GB/s
   I/O Speed(average) : 5700.3 MB/s
  ----------------------------------------------------------------------
   Node Name        Upload Speed      Download Speed      Latency     
   Speedtest.net    685.24 Mbps       477.13 Mbps         0.51 ms     
   Paris, FR        462.50 Mbps       495.07 Mbps         185.62 ms   
   Amsterdam, NL    422.90 Mbps       351.32 Mbps         175.42 ms   
   Shanghai, CN     93.90 Mbps        251.15 Mbps         366.32 ms   
   Hong Kong, CN    42.55 Mbps        356.27 Mbps         43.37 ms    
   Singapore, SG    414.27 Mbps       299.39 Mbps         45.62 ms    
   Tokyo, JP        581.30 Mbps       228.96 Mbps         92.35 ms    
  ----------------------------------------------------------------------
   Finished in        : 3 min 31 sec
   Timestamp          : 2025-06-21 22:34:01 UTC
  ----------------------------------------------------------------------
---
