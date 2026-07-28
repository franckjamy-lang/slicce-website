---
title: INAP API Exposure Function
shortName: INAP-AEF
category: api-exposure-functions
order: 4
heroDescription: >-
  The IN Application Part (INAP) API Exposure Function is a communication
  engine that enables the access and control of IN services by external
  applications.
features:
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
  - label: INAP
    wide: true
    values:
      - ITU-T Recommendation Q.1210 - Q.1213, Q.1220 & Q.1250
      - ETSI TS 101 393
useCasesIcon: /images/products/computer2.png
useCases:
  - label: 3rd party API Exposure
    href: /use-cases/3rd-party-api-exposure
  - label: Value Added Services
    href: /use-cases/value-added-services
---

INAP-AEF can run standalone, implementing a multi-service SCF based on
service key subscriptions, or expose INAP-based services to third-party
providers through the CAPIF Core Function.

Alongside its sibling CAP-AEF, it gives operators still relying on
Intelligent Network infrastructure a way to keep that investment relevant —
opening INAP-based service logic to modern applications through a scripted,
API-first interface instead of legacy SCP tooling.
