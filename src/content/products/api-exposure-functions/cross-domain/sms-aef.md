---
title: SMS API Exposure Function
shortName: SMS-AEF
category: api-exposure-functions
order: 7
heroDescription: >-
  The SMS API Exposure Function is a communication engine that enables the
  access and control of short message services by external applications.
features:
  - title: Handling of simultaneous MAP versions
    description: >-
      Supports through all GSM-MAP versions 1, 2, 3.
  - title: Handling of SMS over NAS
    description: >-
      Supports SMS over NAS through DIAMETER SGd interface.
  - title: Handling of SMS over IP
    description: >-
      Supports SMS over IP through SIP ISC interface.
  - title: Handling of external short messaging entities
    description: >-
      Supports external entities through Short Message Peer-to-Peer
      Protocol (SMPP).
  - title: Unified API
    description: >-
      Easy to use unified API for all interfaces.
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
      - IETF RFC 3261-3266, RFC 1889-1890, RFC 3329, RFC 3455
  - label: DIAMETER
    wide: true
    values:
      - RFC 3588 / 6733 - Diameter base Protocol
      - 3GPP TS 29.338 - Diameter based protocols to support SMS capable MMEs
  - label: SMPP
    values:
      - v3.2
      - v3.4
      - v5.0
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

What makes SMS-AEF unique is bringing every SMS delivery path — legacy
GSM-MAP, SMS over NAS, SMS over IP, and SMPP-based external entities — behind
a single unified API, so a consuming application never needs to know which
underlying transport actually carried the message.

This lets developers build messaging-dependent services once and have them
keep working as the operator's network evolves, or as traffic shifts between
circuit-switched, IP and third-party SMPP routes.
