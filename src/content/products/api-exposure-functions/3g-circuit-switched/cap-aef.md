---
title: CAP API Exposure Function
shortName: CAP-AEF
category: api-exposure-functions
order: 1
heroIcon: /images/products/aef_bannerpod.png
heroDescription: >-
  The CAMEL Application Part (CAP) API Exposure Function is a communication
  engine that enables the access and control of CAMEL services by external
  applications. CAMEL (Customized Applications for Mobile network Enhanced
  Logic) is a set of standards that defines how mobile network operators
  can provide value-added services to their subscribers. The microservice
  acts as an interface between the CAMEL service logic and the external
  applications, allowing them to invoke CAMEL operations and receive
  notifications. The CAP-AEF is commonly used to perform authentication,
  authorization, charging and policy enforcement for the exposed CAMEL
  services.
features:
  - title: Handling of simultaneous CAMEL versions
    description: >-
      Supports through all 3GPP versions; Phase 1, 2, 3 and 4.
  - title: Programmable via a internal scripting
    description: >-
      Provides ability to quickly and easily implement zero-code call flows
      using simple scripting language to shorten time-to-market.
  - title: Multi-function
    description: >-
      Implements all mobile IN function interfaces, Service Switching
      Function (SCF), Service Control Function (SCF) & Service Resource
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

### Standalone mode

**Implements a multi-service SCF based on service key subscriptions**

One of the benefits of implementing IN services with CAMEL is that it allows service providers to create and deploy new services independently of the underlying network infrastructure. CAMEL enables service logic to be executed on an application server, rather than on the network switches, which reduces the complexity and cost of service development and maintenance. CAMEL also supports interoperability between different networks and protocols, such as GSM, UMTS, and SIP, by providing a common interface for service invocation and control. CAMEL can be used to implement various IN services, such as prepaid calling, number portability, call screening, and location-based services.

### 3rd Party API Exposure mode

**Expose SCF API to 3rd pary domain with the CAPIF Core Function**

MNO (Mobile Network Operator) would most typically expose APIs to MVNOs (Mobile Virtual Network Operator) to enable better integration and interoperability between their services. By exposing APIs, MNO can allow MVNO to access its network resources, such as billing, authentication, provisioning, and customer care. This can benefit both parties by reducing operational costs, improving customer satisfaction, and creating new revenue streams. For example, MVNO can offer customized plans and features to its subscribers using MNO's network infrastructure, while MNO can leverage MVNO's market reach and brand loyalty.

*Ask us for the swagger file...*
