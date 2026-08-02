---
title: USSD API Exposure Function
shortName: USSD-AEF
category: api-exposure-functions
order: 3
heroIcon: /images/products/aef_bannerpod.png
heroDescription: >-
  USSD applications can create new revenue streams for the mobile operator
  and its business clients. USSD can be used for real-time charging,
  content delivery, polling and surveys, banking services and more. The
  USSD Gateway allows subscribers to send USSD messages in order to
  receive information and services from the operator. USSD messages are
  session-based, meaning they require an online continuous connection.
  This makes USSD messaging much faster than SMS messages (no
  Store-and-Forward). Our simple and easy RESTful HTTP API allows any web
  developer to easily create new USSD applications for the mobile network.
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
  - title: Expose GSM-MAP Supplementary services as RESTful endpoints
    description: >-
      Expose GSM-MAP services such as Subscriber Location, Call Control,
      Short Message Service (SMS), and more, as RESTful endpoints. This
      means that your applications can interact with telecom services via
      standard HTTP methods (GET, POST, PUT, DELETE) rather than dealing
      with low-level telecom signaling protocols.
  - title: Rapid development & deployment
    description: >-
      Dnables rapid application development by providing predefined,
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

### Standalone mode

**Traditional USSD service use case**

A balance check using USSD (Unstructured Supplementary Service Data) allows users to quickly check their account balance on a mobile phone without needing an internet connection. To perform a balance check, you typically dial a specific code provided by your mobile carrier (e.g., *123# or *151#) and press the call button. The system will then respond with your current balance on the screen. This service is available on most mobile networks and is free or low-cost.

### 3rd Party API Exposure mode

**Expose MAP API to 3rd pary domain with the CAPIF Core Function**

MNO (Mobile Network Operator) would most typically expose APIs to MVNOs (Mobile Virtual Network Operator) to enable better integration and interoperability between their services. By exposing APIs, MNO can allow MVNO to access its network resources, such as billing, authentication, provisioning, and customer care. This can benefit both parties by reducing operational costs, improving customer satisfaction, and creating new revenue streams. For example, MVNO can offer customized plans and features to its subscribers using MNO's network infrastructure, while MNO can leverage MVNO's market reach and brand loyalty.

*Ask us for the swagger file...*
