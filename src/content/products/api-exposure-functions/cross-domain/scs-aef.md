---
title: SCS API Exposure Function
shortName: SCS-AEF
category: api-exposure-functions
order: 9
heroIcon: /images/products/aef_bannerpod.png
heroDescription: >-
  The Signaling Capture Services API Exposure Function exposes APIs that
  allow to generate on-demand network captures on a specific worker node.
  The function can also be configured to generate ongoing metrics and KPIs
  as well as Call Data Records to give visibility on the behavior and the
  performance of network functions hosted by the same worker node.
features:
  - title: Observability, tracing, and security
    description: >-
      Leverage eBPF to capture at kernel space.
  - title: Non-intrusive
    description: >-
      Do not interfer with other applications running on the same node. Do
      not require any involvement of any specific applications.
  - title: Generate KPIs
    description: >-
      Generate & allow collection Key Performance Indicators for telecom
      interfaces at the node level.
  - title: Generate CDRs
    description: >-
      Generate Call Data Records for telecom interfaces at the node level.
  - title: On-demand live capture
    description: >-
      Expose APIs to perform on-demand packet captures at the node level.
  - title: Rolling pcap captures
    description: >-
      Expose APIs to perform rolling packet captures at the node level.
  - title: Open architecture
    description: >-
      Allows to add protocols parsers and decoders.
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
      - 3GPP TS.24.229 IMS SIP extensions
      - TISPAN ES 283 003 IMS extensions
      - IETF RFC 3266 support for IPv6 in SDP
      - IETF RFC 3261 (Session Initiation Protocol – SIP)
      - IETF RFC 3262 (Reliability of Provisional Responses in SIP)
      - IETF RFC 3263 (Locating SIP Servers)
      - IETF RFC 2327 (Session Description Protocol – SDP)
      - IETF RFC 3264 (An Offer/Answer Model with SDP)
      - IETF RFC 3265 (SIP Specific Event Notification)
      - IETF RFC 3266 (Support for IPv6 in SDP)
      - IETF RFC 1889 and 1890 (RTP/RTCP)
      - IETF RFC 3329 SIP security agreement
      - IETF RFC 3455 Private headers
  - label: DIAMETER
    wide: true
    values:
      - IETF RFC 4006 Diameter Credit-Control Application
      - IETF RFC 3588 / 6733 Diameter base Protocol
      - 3GPP TS 32.299 Telecommunication management; Charging management; Diameter charging applications.
      - 3GPP TS 29.338 Diameter based protocols to support Short Message Service capable MME.
  - label: SMPP
    values:
      - SMPP v3.2
      - SMPP v3.4
      - SMPP v5.0
useCasesIcon: /images/products/computer2.png
useCases:
  - label: Private Networks
    href: /use-cases/private-networks
  - label: 3rd party API Exposure
    href: /use-cases/3rd-party-api-exposure
---

### Standalone mode

**Standalone SCS-AEF instance per worker node.**

### Discovery mode

**Aggregated SCS-AEF instance control with CAPIF-CF discoverery.**

*Ask us for the swagger file...*
