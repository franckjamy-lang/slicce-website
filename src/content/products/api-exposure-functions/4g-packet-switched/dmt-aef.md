---
title: DMT API Exposure Function
shortName: DMT-AEF
category: api-exposure-functions
order: 6
heroIcon: /images/products/aef_bannerpod.png
heroDescription: >-
  DMT AEF (Diameter API Exposure Function) is an advanced API gateway
  designed to expose Diameter-based network functions via RESTful APIs,
  enabling seamless integration between 4G LTE core network elements (HSS,
  PCRF, OCS, DRA, etc.) and external applications, OSS/BSS, and
  third-party services.
features:
  - title: API-Driven Diameter Access
    description: >-
      Convert complex Diameter signaling (RFC 6733) into simplified RESTful
      APIs for seamless application integration.
  - title: Enhanced Monetization
    description: >-
      Enable third-party developers to securely access network functions
      (e.g., charging, policy control, authentication) for innovative
      service offerings.
  - title: Real-Time Policy & Charging Control
    description: >-
      Expose key Diameter interfaces (e.g., Gx, Gy, Ro) via APIs for dynamic
      QoS enforcement and billing updates.
  - title: Simplified Integration with OSS/BSS & Cloud Applications
    description: >-
      Reduce time-to-market for new services, IoT, VoLTE, and 5G
      transition.
specs:
  - label: DIAMETER
    wide: true
    values:
      - RFC 4006 - Diameter Credit-Control Application
      - RFC 3588 / 6733 - Diameter base Protocol
      - 3GPP TS 32.299 - Telecommunication management; Charging management; Diameter charging applications.
  - label: DIAMETER Interfaces
    wide: true
    values:
      - "S6a/S6d — HSS ↔ MME — Authentication & subscription management"
      - "Gx — PCRF ↔ P-GW — Policy control, QoS enforcement"
      - "Gy — OCS ↔ P-GW — Real-time charging, credit control"
      - "Ro — OCS ↔ IMS — Online charging for VoLTE & IMS"
      - "S9 — PCRF ↔ PCRF — Policy control for roaming"
      - "Rx — PCRF ↔ IMS AS — QoS management for VoLTE & IMS"
useCasesIcon: /images/products/computer2.png
useCases:
  - label: 3rd party API Exposure
    href: /use-cases/3rd-party-api-exposure
  - label: Charging Interworking
    href: /use-cases/charging-interworking
  - label: 5G Northbound APIs
    href: /use-cases/5g-northbound-apis
---

### Simplify network integration without Diameter expertise

**Accelerate service deployment, enable policy-driven automation, and simplify network integration**

In 4G networks, DIAMETER plays a critical role in authentication, authorization, accounting, and policy control. However, directly working with the DIAMETER protocol can be complex. The DMT AEF simplifies this process for developers, offering an abstraction layer that facilitates seamless interaction with DIAMETER services.

DMT AEF enables telecom operators, MVNOs, and enterprises to expose, monetize, and manage Diameter-based services through a powerful API framework—bridging the gap between legacy 4G core networks and future 5G service ecosystems.

### Expose DIAMETER API to 3rd party domain with the CAPIF CF

**DMT-AEF CAPIF mode, DIAMETER API with 3rd Party Exposure**

MNO (Mobile Network Operator) would most typically expose APIs to MVNOs (Mobile Virtual Network Operator) to enable better integration and interoperability between their services. By exposing APIs, MNO can allow MVNO to access its network resources, such as billing, authentication, provisioning, and customer care. This can benefit both parties by reducing operational costs, improving customer satisfaction, and creating new revenue streams. For example, MVNO can offer customized plans and features to its subscribers using MNO's network infrastructure, while MNO can leverage MVNO's market reach and brand loyalty.

[Get the microservice guide](/contact)
