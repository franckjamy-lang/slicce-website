---
title: CAP API Exposure Function
shortName: CAP-AEF
category: api-exposure-functions
order: 1
heroDescription: >-
  The CAMEL Application Part (CAP) API Exposure Function is a communication
  engine that enables the access and control of CAMEL services by external
  applications.
features:
  - title: Handling of simultaneous CAMEL versions
    description: >-
      Supports through all 3GPP versions; Phase 1, 2, 3 and 4.
  - title: Programmable via internal scripting
    description: >-
      Provides ability to quickly and easily implement zero-code call flows
      using simple scripting language to shorten time-to-market.
  - title: Multi-function
    description: >-
      Implements all mobile IN function interfaces, Service Switching
      Function (SSF), Service Control Function (SCF) & Service Resource
      Function (SRF).
  - title: Optional data store
    description: >-
      Enables to keep number lists in a shared memory store for distributed
      configurations.
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
  - label: CAP
    wide: true
    values:
      - GSM 09.78 (ETSI TS101 046 - V5.6.0) CAMEL Phase 1
      - GSM 09.78 (ETSI TS101 046 - V6.3.0) CAMEL Phase 2
      - GSM 09.78 (ETSI TS129 078 - V4.6.0) CAMEL Phase 3
      - 3GPP TS 29.078 V7.3.0 R7, 3GPP TS 29.278 V7.0.0 R7 (IMS) CAMEL Phase 4
useCasesIcon: /images/products/computer2.png
useCases:
  - label: 3rd party API Exposure
    href: /use-cases/3rd-party-api-exposure
  - label: Value Added Services
    href: /use-cases/value-added-services
---

CAP-AEF can be deployed standalone, implementing a multi-service SCF based
on service key subscriptions, or in third-party API exposure mode, publishing
CAMEL services to external providers via the CAPIF Core Function.

This means an operator can open up legacy IN/CAMEL logic to modern
application developers through simple, scriptable REST calls, without
touching the underlying SCP infrastructure or requiring CAMEL expertise on
the consuming side.
