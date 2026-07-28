---
title: USSD API Exposure Function
shortName: USSD-AEF
category: api-exposure-functions
order: 3
heroDescription: >-
  USSD applications can create new revenue streams for the mobile operator
  and its business clients. USSD can be used for real-time charging, content
  delivery, polling and surveys, banking services and more.
features:
  - title: Handling of simultaneous MAP versions
    description: >-
      Supports through all 3GPP versions; v1, 2, and 3.
  - title: Simplified GSM-MAP integration
    description: >-
      Simplifies the integration process by providing a RESTful interface to
      interact with GSM-MAP services.
  - title: Expose GSM-MAP Supplementary services as RESTful endpoints
    description: >-
      Expose GSM-MAP services such as Subscriber Location, Call Control,
      Short Message Service (SMS), and more, as RESTful endpoints.
  - title: Rapid development & deployment
    description: >-
      Enables rapid application development by providing predefined,
      tested, and ready-to-use REST endpoints.
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
    wide: true
    values:
      - GSM 09.002
      - ETSI TS 100.974 MAP v1/v2/v3/v4
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

USSD sessions are interactive and session-based rather than store-and-forward
like SMS, which makes them well suited to real-time menus: balance checks,
polling, surveys and mobile banking all rely on that immediacy.

By exposing GSM-MAP supplementary services as simple REST endpoints,
USSD-AEF lets application developers build these interactive services
without writing directly against the underlying MAP signaling, shortening
the path from idea to a live USSD menu.
