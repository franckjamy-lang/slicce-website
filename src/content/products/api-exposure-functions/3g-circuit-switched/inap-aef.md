---
title: INAP API Exposure Function
shortName: INAP-AEF
category: api-exposure-functions
order: 4
heroIcon: /images/products/aef_bannerpod.png
heroDescription: >-
  The IN Application Part (INAP) API Exposure Function is a communication
  engine that enables the access and control of IN services by external
  applications. IN (Intelligent Network) is a set of standards that
  defines how fixed-line network operators can provide value-added
  services to their subscribers. The microservice acts as an interface
  between the IN service logic and the external applications, allowing
  them to invoke INAP operations and receive notifications. The INAP-AEF
  is commonly used to perform authentication, authorization, charging and
  policy enforcement for the exposed INAP services.
features:
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
  - label: INAP
    wide: true
    values:
      - ITU-T Recommendation Q.1210 - Q.1213, Q.1220 & Q.1250
      - ETSI TS 101 393 - ntelligent Networks (IN)
useCasesIcon: /images/products/computer2.png
useCases:
  - label: 3rd party API Exposure
    href: /use-cases/3rd-party-api-exposure
  - label: Value Added Services
    href: /use-cases/value-added-services
---

### Standalone mode

**Implements a multi-service SCF based on service key subscriptions**

One of the benefits of implementing IN services with INAP is that it allows service providers to create and deploy new services independently of the underlying network infrastructure. INAP enables service logic to be executed on an application server, rather than on the network switches, which reduces the complexity and cost of service development and maintenance. INAP also commonly used in fixed and mobile networks, such as GSM, UMTS, and SIP, by providing a common interface for service invocation and control. INAP can be used to implement various IN services, such as prepaid calling, number portability, call screening, and location-based services.

### 3rd Party API Exposure mode

**Expose SCF API to 3rd party domain with the CAPIF Core Function**

A WNO (Wireline Network Operator) would most typically expose APIs to third-party providers or resellers (who could be thought of as virtual network operators in this context) to enable better integration and interoperability between their services. By exposing APIs, WNO can allow these providers to access its network resources, such as billing, authentication, provisioning, and customer care. This can benefit both parties by reducing operational costs, improving customer satisfaction, and creating new revenue streams. For example, third-party providers can offer customized plans and features to their subscribers using WNO's network infrastructure, while WNO can leverage these providers' market reach and brand loyalty.

*Ask us for the swagger file...*
