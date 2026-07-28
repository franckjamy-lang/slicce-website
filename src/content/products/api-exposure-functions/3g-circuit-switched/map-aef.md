---
title: MAP API Exposure Function
shortName: MAP-AEF
category: api-exposure-functions
order: 2
heroDescription: >-
  The GSM MAP (Mobile Application Part) stack is a critical part of the GSM
  network architecture. It is a protocol layer used for communication
  between different elements in the GSM network, specifically for signaling
  and handling mobile applications such as call control, location
  management, and text messaging.
features:
  - title: Handling of simultaneous MAP versions
    description: >-
      Supports through all 3GPP versions; v1, 2, and 3.
  - title: Simplified GSM-MAP integration
    description: >-
      Simplifies the integration process by providing a RESTful interface to
      interact with GSM-MAP services. Developers no longer need to
      understand the intricacies of GSM-MAP protocols.
  - title: Expose GSM-MAP services as RESTful endpoints
    description: >-
      Expose GSM-MAP services such as Subscriber Location, Call Control,
      Short Message Service (SMS), and more, as RESTful endpoints.
  - title: Rapid development & deployment
    description: >-
      Enables rapid application development by providing predefined,
      tested, and ready-to-use REST endpoints that perform GSM-MAP
      operations.
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
  - label: 3rd party API Exposure
    href: /use-cases/3rd-party-api-exposure
  - label: Value Added Services
    href: /use-cases/value-added-services
---

MAP-AEF offers two deployment modes: standalone, for rapid GSM-MAP
application development, and third-party API exposure, leveraging the
CAPIF Core Function for MNO-to-MVNO integration scenarios.

By turning Subscriber Location, Call Control and SMS into predefined,
ready-to-use REST endpoints, it removes the need for application developers
to understand the intricacies of GSM-MAP signaling, cutting the time needed
to bring a new GSM-MAP-dependent service to market.
