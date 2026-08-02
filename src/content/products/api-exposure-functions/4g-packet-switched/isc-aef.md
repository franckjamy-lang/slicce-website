---
title: ISC API Exposure Function
shortName: ISC-AEF
category: api-exposure-functions
order: 5
heroIcon: /images/products/aef_bannerpod.png
heroDescription: >-
  ISC (IMS Service Control Interface) AEF exposes SIP APIs and allows the
  implementation of intelligent services for IMS and VoLTE networks.
  Exposes 2 different sets of APIs, IMS Service Control Function API and
  IMS Media Resource Function Control API.
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
      Developers to interact with network functions in the IMS network.
  - title: Cross-network support
    description: >-
      Develop services that work across LTE, Wi-Fi, and other networks.
specs:
  - label: SIP stack
    wide: true
    values:
      - "RFC 3261 | SIP: Session Initiation Protocol"
      - "RFC 3262 | SIP Reliability (PRACK)"
      - "RFC 3263 | SIP: Locating SIP Servers"
      - "RFC 3264 | SDP Offer/Answer"
      - "RFC 3265 | SIP Specific Event Notification"
      - "RFC 1321 | MD5: Message Digest Algorithm"
      - "RFC 2617 | HTTP Authentication"
      - "RFC 2806 | URLs for Telephone Calls"
      - "RFC 2833 | RTP Payload for DTMF & Tones"
      - "RFC 2915 | NAPTR: Naming Authority Pointer"
      - "RFC 2976 | SIP INFO Method"
      - "RFC 3204 | MIME Objects for ISUP and QSIG"
      - "RFC 3310 | HTTP Digest Authentication – AKA"
      - "RFC 3311 | SIP Update Method"
      - "RFC 3329 | Security Mechanism for SIP"
      - "RFC 3428 | SIP Extension for IM"
      - "RFC 3489 | STUN: Simple Traversal UDP - NATs"
      - "RFC 3515 | SIP Refer Method"
      - "RFC 3581 | Symmetric Response Routing Ext'n"
      - "RFC 3665 | SIP Basic Call Flow Examples"
      - "RFC 3711 | SRTP Secure RTP"
      - "RFC 3891 | SIP 'Replaces' Header"
      - "RFC 3903 | SIMPLE SIP for IM and Presence"
      - "RFC 4028 | Session Timers in SIP"
      - "RFC 4346 | TLS Transport Layer Security"
      - "RFC 4566 | SDP Session Descrip'n Protocol/IPv6"
      - "RFC 4568 | SDP Security for Media Streams"
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

### Advanced voice & video service logic made simple

**Implements a multi-volte services based on Initial Filter Criterias (IFC)**

The ISC interface connects the CSCF and the IMS core network components, allowing the Call Session Control Function (CSCF) to interact with other IMS core network entities (like the P-CSCF (Proxy-CSCF), I-CSCF (Interrogating-CSCF), S-CSCF (Serving-CSCF)) to facilitate VoLTE calls.

Multimedia services, such as video calling, messaging, and data sharing, rely on the IMS architecture to function properly. The ISC interface ensures that various multimedia components in the IMS network work together to provide end-to-end services.

The ISC AEF microservice helps developers build and deploy VoLTE and multimedia services by providing a flexible, cloud-native platform. It enables easy integration with IMS core components like CSCFs, facilitating seamless voice, video calls, and messaging over LTE networks.

In summary, ISC AEF simplifies the development of advanced, scalable, and customizable VoLTE and multimedia applications over LTE, with real-time control, cloud capabilities, and ready integration with emerging 5G services.

### Expose SIP API to 3rd party domain with the CAPIF CF

**ISC-AEF CAPIF mode, SIP API with 3rd Party Exposure**

MNO (Mobile Network Operator) would most typically expose APIs to MVNOs (Mobile Virtual Network Operator) to enable better integration and interoperability between their services. By exposing APIs, MNO can allow MVNO to access its network resources, such as billing, authentication, provisioning, and customer care. This can benefit both parties by reducing operational costs, improving customer satisfaction, and creating new revenue streams. For example, MVNO can offer customized plans and features to its subscribers using MNO's network infrastructure, while MNO can leverage MVNO's market reach and brand loyalty.

[Get the microservice guide](/contact)
