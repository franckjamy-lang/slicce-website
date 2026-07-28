---
title: SCS API Exposure Function
shortName: SCS-AEF
category: api-exposure-functions
order: 9
heroDescription: >-
  The Signaling Capture Services API Exposure Function exposes APIs that
  allow generating on-demand network captures on a specific worker node.
features:
  - title: Observability, tracing, and security
    description: >-
      Leverages eBPF to capture at kernel space.
  - title: Non-intrusive
    description: >-
      Does not interfere with other applications running on the same node,
      and does not require any involvement of any specific applications.
  - title: Generate KPIs
    description: >-
      Generates and allows collection of Key Performance Indicators for
      telecom interfaces at the node level.
  - title: Generate CDRs
    description: >-
      Generates Call Data Records for telecom interfaces at the node level.
  - title: On-demand live capture
    description: >-
      Exposes APIs to perform on-demand packet captures at the node level.
  - title: Rolling pcap captures
    description: >-
      Exposes APIs to perform rolling packet captures at the node level.
  - title: Open architecture
    description: >-
      Allows adding protocol parsers and decoders.
specs:
  - label: SCTP
    values:
      - RFC2960
      - RFC3309
  - label: MTP
    values:
      - |-
        ITU-T Q.700 through Q.707,
        Q.781, Q.782, Q.791
  - label: M2PA
    values:
      - RFC4165
  - label: M3UA
    values:
      - RFC3332
  - label: SIP
    wide: true
    values:
      - RFC 3261-3266, 1889, 1890, 3329, 3455
      - 3GPP TS.24.229, TISPAN ES 283 003
  - label: DIAMETER
    wide: true
    values:
      - RFC 4006, 3588 / 6733
      - 3GPP TS 32.299, 3GPP TS 29.338
  - label: SMPP
    values:
      - v3.2
      - v3.4
      - v5.0
useCasesIcon: /images/products/computer2.png
useCases:
  - label: Private Networks
    href: /use-cases/private-networks
  - label: 3rd party API Exposure
    href: /use-cases/3rd-party-api-exposure
---

By capturing traffic at kernel space through eBPF, SCS-AEF gives operators
node-level observability, KPIs and CDRs for telecom interfaces without
deploying a dedicated probe or touching the applications already running on
that node.

Exposing on-demand and rolling packet captures as simple APIs means
troubleshooting a signaling issue no longer requires SSH access and manual
tcpdump sessions — a support team can trigger and retrieve a capture
remotely, on any worker node, through the same interface used to manage
the rest of the workload.
