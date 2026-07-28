---
title: IP Multimedia Interworking Function
shortName: IMS-IWF
category: interworking-functions
order: 2
heroDescription: >-
  The IP Multimedia Subsystem Interworking Function (IMS-IWF) is a powerful
  enabler for interoperability between 3G circuit switched and VoLTE/VoNR
  packet switched calls and messaging services.
features:
  - title: Multi-purpose communication engine
    description: >-
      Supports **IP-SM-GW mode** for SMSoIP to GSM-MAP Short Message Service
      Center, **IMS-GWF mode** for IMS online charging conversion and
      **IMS-IWF mode** for interconnecting CS and PS networks in roaming
      scenarios.
  - title: Programmable via a simple scripting
    description: >-
      Provides ability to quickly and easily adjust and customize call flows
      using simple scripting language to shorten time-to-market.
  - title: Online charging
    description: >-
      Supports prepaid calls and messages through DIAMETER Ro interface.
  - title: Optional data store
    description: >-
      Enables to keep MSRNs assignments and their status in a shared memory
      store for distributed configurations.
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
  - label: SCCP
    values:
      - ITU-T Q.711 through Q.714 Connectionless Class 0 & 1
  - label: TCAP
    values:
      - |-
        ITU-T Q.700 through Q.707,
        Q.781, Q.782, Q.791
  - label: MAP
    values:
      - ETSI ETS 300 374-1
      - ITU-T Q.1218 CS-1R
  - label: HTTP2
    values:
      - RFC9113
      - RFC7541
  - label: SIP
    wide: true
    values:
      - 3GPP TS.24.229
      - TISPAN ES 283 003
      - IETF RFC 3261-3266
      - RFC 1889-1890
      - RFC 3329
      - RFC 3455
  - label: DIAMETER
    wide: true
    values:
      - RFC 4006 - Diameter Credit-Control Application
      - RFC 3588 / 6733 - Diameter base Protocol
      - 3GPP TS 32.299 - Telecommunication management; Charging management; Diameter charging applications.
useCasesIcon: /images/products/computer2.png
useCases:
  - label: Single Engine
    href: /use-cases/single-engine
  - label: Value Added Services
    href: /use-cases/value-added-services
  - label: 3rd party API Exposure
    href: /use-cases/3rd-party-api-exposure
  - label: Charging Interworking
    href: /use-cases/charging-interworking
  - label: Private Networks
    href: /use-cases/private-networks
  - label: 5G Northbound APIs
    href: /use-cases/5g-northbound-apis
---

What makes IMS-IWF unique is its ability to operate in three distinct modes
— IP-SM-GW, IMS-GWF and IMS-IWF — within the same engine, letting a single
deployment bridge SMS, charging and call interworking between
circuit-switched and IMS packet-switched domains.

This flexibility means operators evolving toward VoLTE and VoNR can keep
their existing 3G infrastructure, billing systems (via the DIAMETER Ro
interface for prepaid charging) and numbering plans intact, instead of
running a costly parallel migration.

An optional shared-memory data store keeps MSRN assignments and their
status available across distributed, horizontally-scaled deployments,
making IMS-IWF as suited to a single-site rollout as to a multi-region
carrier network.
