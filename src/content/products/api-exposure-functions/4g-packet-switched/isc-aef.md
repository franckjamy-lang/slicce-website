---
title: ISC API Exposure Function
shortName: ISC-AEF
category: api-exposure-functions
order: 5
heroDescription: >-
  ISC (IMS Service Control Interface) AEF exposes SIP APIs and allows the
  implementation of intelligent services for IMS and VoLTE networks. It
  exposes two different sets of APIs: the IMS Service Control Function API
  and the IMS Media Resource Function Control API.
features:
  - title: IMS Integration
    description: >-
      Easy access to IMS functions (call control, media management, session
      management).
  - title: Rapid development of IN services
    description: >-
      Allows real-time session and media management for dynamic service
      adjustments.
  - title: Use REST APIs in any coding language
    description: >-
      Lets developers interact with network functions in the IMS network
      without needing to master SIP directly.
  - title: Cross-network support
    description: >-
      Develop services that work across LTE, Wi-Fi, and other access
      networks.
specs:
  - label: SIP
    wide: true
    values:
      - RFC 3261 - Session Initiation Protocol (SIP)
      - RFC 3262 - Reliability of Provisional Responses in SIP
      - RFC 3263, RFC 3264, RFC 3265
      - RFC 2617 - HTTP Authentication
      - RFC 3711 - Secure Real-time Transport Protocol (SRTP)
      - RFC 4346 - TLS Transport Layer Security
useCasesIcon: /images/products/computer2.png
useCases:
  - label: Single Engine
    href: /use-cases/single-engine
  - label: Value Added Services
    href: /use-cases/value-added-services
  - label: 3rd party API Exposure
    href: /use-cases/3rd-party-api-exposure
  - label: 5G Northbound APIs
    href: /use-cases/5g-northbound-apis
---

By exposing both call-control and media-resource functions as REST APIs,
ISC-AEF lets developers build IMS and VoLTE value-added services in any
language, without needing deep SIP protocol expertise.

That same abstraction makes services portable across access networks — LTE,
Wi-Fi calling, and beyond — since the application talks to a stable REST
interface regardless of what changes underneath on the IMS side.
