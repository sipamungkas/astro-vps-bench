---
title: Onidel KVM Singapore 8GB
provider: Onidel (Onidel Pty Ltd)
location: Singapore
price_monthly: 8.00
currency: USD
cpu_cores: 4
ram_gb: 8
storage_gb: 116
storage_type: NVMe
bandwidth_tb: 2
virtualization: KVM
status: Available
last_updated: 2024-06-22
tags:
  - KVM
  - Singapore
  - AMD EPYC
  - 8GB RAM
  - NVMe
affiliate_link: "https://yukcek.com/onidel"
raw_yabs_output: |
  # ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## #
  #              Yet-Another-Bench-Script              #
  #                     v2024-12-20                    #
  # https://github.com/masonr/yet-another-bench-script #
  # ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## #

  Fri Dec 27 03:48:33 UTC 2024

  Basic System Information:
  ---------------------------------
  Uptime     : 0 days, 0 hours, 11 minutes
  Processor  : AMD EPYC 7543P 32-Core Processor
  CPU cores  : 4 @ 2794.750 MHz
  AES-NI     : ✔ Enabled
  VM-x/AMD-V : ✔ Enabled
  RAM        : 7.7 GiB
  Swap       : 0.0 KiB
  Disk       : 116.2 GiB
  Distro     : Ubuntu 24.04.1 LTS
  Kernel     : 6.8.0-44-generic
  VM Type    : KVM
  IPv4/IPv6  : ✔ Online / ✔ Online

  IPv6 Network Information:
  ---------------------------------
  ISP        : Onidel Pty Ltd
  ASN        : AS152900 Onidel Pty Ltd
  Host       : Onidel Pty Ltd
  Location   : Singapore, North West (03)
  Country    : Singapore

  fio Disk Speed Tests (Mixed R/W 50/50) (Partition /dev/vda1):
  ---------------------------------
  Block Size | 4k            (IOPS) | 64k           (IOPS)
    ------   | ---            ----  | ----           ---- 
  Read       | 381.90 MB/s  (95.4k) | 1.09 GB/s    (17.1k)
  Write      | 382.91 MB/s  (95.7k) | 1.10 GB/s    (17.2k)
  Total      | 764.82 MB/s (191.2k) | 2.20 GB/s    (34.3k)
             |                      |                     
  Block Size | 512k          (IOPS) | 1m            (IOPS)
    ------   | ---            ----  | ----           ---- 
  Read       | 1.04 GB/s     (2.0k) | 1.03 GB/s     (1.0k)
  Write      | 1.10 GB/s     (2.1k) | 1.10 GB/s     (1.0k)
  Total      | 2.14 GB/s     (4.1k) | 2.13 GB/s     (2.0k)

  iperf3 Network Speed Tests (IPv4):
  ---------------------------------
  Provider        | Location (Link)           | Send Speed      | Recv Speed      | Ping           
  -----           | -----                     | ----            | ----            | ----           
  Clouvider       | London, UK (10G)          | 670 Mbits/sec   | 834 Mbits/sec   | 155 ms         
  Eranium         | Amsterdam, NL (100G)      | 652 Mbits/sec   | 668 Mbits/sec   | 168 ms         
  Uztelecom       | Tashkent, UZ (10G)        | 806 Mbits/sec   | 870 Mbits/sec   | 186 ms         
  Leaseweb        | Singapore, SG (10G)       | 1.07 Gbits/sec  | 1.02 Gbits/sec  | 1.31 ms        
  Clouvider       | Los Angeles, CA, US (10G) | 734 Mbits/sec   | 780 Mbits/sec   | 162 ms         
  Leaseweb        | NYC, NY, US (10G)         | 597 Mbits/sec   | 784 Mbits/sec   | 227 ms         
  Edgoo           | Sao Paulo, BR (1G)        | busy            | 423 Mbits/sec   | 334 ms         

  iperf3 Network Speed Tests (IPv6):
  ---------------------------------
  Provider        | Location (Link)           | Send Speed      | Recv Speed      | Ping           
  -----           | -----                     | ----            | ----            | ----           
  Clouvider       | London, UK (10G)          | 645 Mbits/sec   | 897 Mbits/sec   | 155 ms         
  Eranium         | Amsterdam, NL (100G)      | 653 Mbits/sec   | 710 Mbits/sec   | 168 ms         
  Uztelecom       | Tashkent, UZ (10G)        | 735 Mbits/sec   | 827 Mbits/sec   | 186 ms         
  Leaseweb        | Singapore, SG (10G)       | 1.07 Gbits/sec  | 1.01 Gbits/sec  | 1.18 ms        
  Clouvider       | Los Angeles, CA, US (10G) | 738 Mbits/sec   | 817 Mbits/sec   | 162 ms         
  Leaseweb        | NYC, NY, US (10G)         | 602 Mbits/sec   | 789 Mbits/sec   | 227 ms         
  Edgoo           | Sao Paulo, BR (1G)        | busy            | 340 Mbits/sec   | 334 ms         

  Geekbench 6 Benchmark Test:
  ---------------------------------
  Test            | Value                         
                  |                               
  Single Core     | 1401                          
  Multi Core      | 4343                          
  Full Test       | https://browser.geekbench.com/v6/cpu/9632103

  YABS completed in 14 min 51 sec
raw_benchsh_output: |
  V e r s i o n : v 2 0 2 4 - 1 1 - 1 1
  : w g e t - q o - b e n c h . s h | b a s h
  C P U M o d e l AMD E P Y C 7 5 4 3 P 3 2 - C o r e P r o c e s s o r
  C P U C o r e s : 4 @ 2 7 9 4 . 7 5 0 MHz
  C P U C a c h e : 5 1 2 KB
  A E S - N I : V E n a b l e d
  VM-x/ AMD-V : v E n a b l e d
  T o t a l D i s k : 1 1 6 . 2 G B ( 1 . 7 G B U s e d )
  T o t a l Mem : 7 . 7 G B ( 4 4 4 . 8 MB U s e d )
  S y s t e m uptime : 0 d a y s , 0 h o u r 3 min
  L o a d a v e r a g e : 0 . 0 6 , 0 . 0 8 , 0.03
  O S : U b u n t u 2 4 . 0 4 . 1 LTS
  A r c h : x86_64 (64 Bit)
  K e r n e l : 6 . 8 . 0-44-generic
  T C P C C : b b r
  V i r t u a l i z a t i o n : KVM
  P v 4 / I P v 6 : v O n l i n e / v O n l i n e
  O rg a n i z a t i o n : AS152900 O n i d e l P t y L t d
  L o c a t i o n : S i n g a p o r e / SG
  Region : S i n g a p o r e
  I / 0 S p e e d 1 s t r u n ) : 1 3 9 MB/s
  I / O Speed ( 2 n d r u n ) : 7 0 9 MB/s
  I / O Speed ( 3 r d r u n ) : 7 2 1 MB/s
  I / O Speed ( a v e r a g e ) : 5 2 3 . 0 MB/s
  N o d e Name U p l o a d Speed Download Speed L a t e n c y
  S p e e d t e s t . n e t 1 0 7 0 . 9 1 Mbps 1 0 3 0 . 8 3 Mbps 0 . 5 5 ms
  Los Angeles, US 3 5 8 . 5 5 Mbps 9 7 9 . 7 7 Mbps 1 8 1 . 5 9 m s
  D a l l a s , US 3 2 4 . 0 9 Mbps 1 0 0 5 . 9 6 Mbps 2 0 7 . 3 1 m s
  Montreal, CA 2 3 1 . 4 2 Mbps 9 1 3 . 8 2 Mbps 3 2 7 . 8 3 m s
  P a r i s , FR 5 6 4 . 7 0 Mbps 1 0 2 8 . 3 3 Mbps 1 4 9 . 1 9 m s
  Amsterdam,N L 4 9 2 . 6 3 Mbps 9 3 0 . 2 5 Mbps 1 6 1 . 8 5 m s
  Shanghai,C N 1 6 9 . 2 8 Mbps 8 1 1 . 9 4 Mbps 3 5 1 . 3 4 m s
  Hong Kong, CN 1 0 1 8 . 9 8 Mbps 1 0 2 4 . 2 2 Mbps 3 1 . 5 5 m s
  Singapore, SG 1 0 6 4 . 0 0 Mbps 1 0 3 0 . 5 5 Mbps 1 . 1 6 m s
  Tokyo, J P
  F i n i s h e d i n
  T i m e s t a m p
  4 4 9 . 0 0 Mbps
  : 5 m i n 1 9 s e c
  : 2 0 2 4 - 1 2 - 2 7 0 3 : 4 5 : 5 6 UTC
  9 6 6 . 2 6 Mbps 1 8 9 . 7 7 m s
---
