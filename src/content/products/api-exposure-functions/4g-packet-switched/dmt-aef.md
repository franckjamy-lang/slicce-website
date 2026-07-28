---
title: DMT API Exposure Function
shortName: DMT-AEF
category: api-exposure-functions
order: 6
heroDescription: >-
  DMT-AEF (Diameter API Exposure Function) is an advanced API gateway
  designed to expose Diameter-based network functions via RESTful APIs,
  enabling seamless integration between 4G LTE core network elements (HSS,
  PCRF, OCS, DRA, etc.) and external applications, OSS/BSS, and third-party
  services.
features:
  - title: API-Driven Diameter Access
    description: >-
      Converts complex Diameter signaling (RFC 6733) into simplified
      RESTful APIs for seamless application integration.
  - title: Enhanced Monetization
    description: >-
      Enables third-party developers to securely access network functions
      (e.g. charging, policy control, authentication) for innovative
      service offerings.
  - title: Real-Time Policy & Charging Control
    description: >-
      Exposes key Diameter interfaces (e.g. Gx, Gy, Ro) via APIs for dynamic
      QoS enforcement and billing updates.
  - title: Simplified Integration with OSS/BSS & Cloud Applications
    description: >-
      Reduces time-to-market for new services, IoT, VoLTE, and 5G
      transition.
specs:
  - label: DIAMETER
    wide: true
    values:
      - RFC 4006 - Diameter Credit-Control Application
      - RFC 3588 / 6733 - Diameter base Protocol
      - 3GPP TS 32.299 - Telecommunication management; Charging management; Diameter charging applications
  - label: Interfaces
    wide: true
    values:
      - S6a / S6d - HSS subscriber data and mobility management
      - Gx - PCRF policy and charging control
      - Gy - Online charging (OCS)
      - Ro - Diameter-based real-time charging
      - S9 - Roaming policy and charging control
      - Rx - Application/policy interaction
useCasesIcon: /images/products/computer2.png
useCases:
  - label: 3rd party API Exposure
    href: /use-cases/3rd-party-api-exposure
  - label: Charging Interworking
    href: /use-cases/charging-interworking
  - label: 5G Northbound APIs
    href: /use-cases/5g-northbound-apis
---

DMT-AEF's core value is simplifying network integration without requiring
Diameter expertise on the consuming side: HSS, PCRF, OCS and DRA functions
that would otherwise demand deep protocol knowledge become plain REST calls.

This accelerates service deployment and policy-driven automation, letting
OSS/BSS platforms and third-party applications tap into real-time charging
and QoS control as they extend services toward IoT, VoLTE and the 5G
transition.
