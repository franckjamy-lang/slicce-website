---
title: MAP API Exposure Function
shortName: MAP-AEF
category: api-exposure-functions
order: 2
heroIcon: /images/products/aef_bannerpod.png
heroDescription: >-
  The GSM MAP (Mobile Application Part) stack is a critical part of the GSM
  (Global System for Mobile Communications) network architecture. It is a
  protocol layer used for communication between different elements in the
  GSM network, specifically for signaling and handling mobile applications
  such as call control, location management, and text messaging. It
  operates as part of the Signaling System No. 7 (SS7) protocol, which is
  used in traditional telecommunication networks.
features:
  - title: Handling of simultaneous MAP versions
    description: >-
      Supports through all 3GPP versions; v1, 2, and 3.
  - title: Simplified GSM-MAP integration
    description: >-
      Simplifies the integration process by providing a RESTful interface to
      interact with GSM-MAP services. Developers no longer need to
      understand the intricacies of GSM-MAP protocols, as the Slicce API
      abstracts the complexity behind a simple REST API interface.
  - title: Expose GSM-MAP services as RESTful endpoints
    description: >-
      Expose GSM-MAP services such as Subscriber Location, Call Control,
      Short Message Service (SMS), and more, as RESTful endpoints. This
      means that your applications can interact with telecom services via
      standard HTTP methods (GET, POST, PUT, DELETE) rather than dealing
      with low-level telecom signaling protocols.
  - title: Rapid development & deployment
    description: >-
      Enables rapid application development by providing predefined,
      tested, and ready-to-use REST endpoints that perform GSM-MAP
      operations. Whether you're building a real-time location-based
      service or managing telecom-related events, you can quickly
      integrate GSM-MAP functionality into your application.
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

### Standalone mode

**Quickly develop GSM-MAP applications with a simple REST API**

Developing GSM-MAP (Global System for Mobile Communications – Mobile Application Part) applications with a simple REST API can be made easier and more efficient using a service like Slicce MAP API Exposure Function. This approach allows you to seamlessly integrate GSM-MAP functionalities into applications without the complexity of dealing with low-level protocols directly.

### 3rd Party API Exposure mode

**Expose MAP API to 3rd pary domain with the CAPIF Core Function**

MNO (Mobile Network Operator) would most typically expose APIs to MVNOs (Mobile Virtual Network Operator) to enable better integration and interoperability between their services. By exposing APIs, MNO can allow MVNO to access its network resources, such as billing, authentication, provisioning, and customer care. This can benefit both parties by reducing operational costs, improving customer satisfaction, and creating new revenue streams. For example, MVNO can offer customized plans and features to its subscribers using MNO's network infrastructure, while MNO can leverage MVNO's market reach and brand loyalty.

*Ask us for the swagger file...*
