---
title: SMS API Exposure Function
shortName: SMS-AEF
category: api-exposure-functions
order: 7
heroIcon: /images/products/aef_bannerpod.png
heroDescription: >-
  The SMS API Exposure Function is a communication engine that enables the
  access and control of short message services by external applications.
  The AEF is supports termination of GSM-MAP interfaces for 3G SMS,
  DIAMETER SGd interfaces for SMS over NAS, IP Multimedia Service Control
  interface for SMS over IP and SMPP interfaces for External Short
  Messaging Entities. APIs provided by AEF are both inbound and outbound
  short message delivery and are unified for all interfaces.
features:
  - title: Handling of simultaneous MAP versions
    description: >-
      Supports through all GSM-MAP versions 1, 2, 3.
  - title: Handling of SMS over NAS
    description: >-
      Supports SMS over NAS through DIAMETER SGd interface.
  - title: Handling of SMS over IP
    description: >-
      Supports SMS over IP through SIP ISC interface.
  - title: Handling of external short messaging entities
    description: >-
      Supports external entities through Short Message Peer-to-Peer
      Protocol (SMPP).
  - title: Unified API
    description: >-
      Easy to use Unified API for all interfaces.
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
    values:
      - ETSI ETS 300 374-1
      - ITU-T Q.1218 CS-1R
  - label: HTTP2
    values:
      - RFC9113
      - RFC7541
  - label: SIP
    wide: true
    values:
      - 3GPP TS.24.229 IMS SIP extensions
      - TISPAN ES 283 003 IMS extensions
      - IETF RFC 3266 support for IPv6 in SDP
      - IETF RFC 3261 (Session Initiation Protocol – SIP)
      - IETF RFC 3262 (Reliability of Provisional Responses in SIP)
      - IETF RFC 3263 (Locating SIP Servers)
      - IETF RFC 2327 (Session Description Protocol – SDP)
      - IETF RFC 3264 (An Offer/Answer Model with SDP)
      - IETF RFC 3265 (SIP Specific Event Notification)
      - IETF RFC 3266 (Support for IPv6 in SDP)
      - IETF RFC 1889 and 1890 (RTP/RTCP)
      - IETF RFC 3329 SIP security agreement
      - IETF RFC 3455 Private headers
  - label: DIAMETER
    wide: true
    values:
      - IETF RFC 3588 / 6733 Diameter base Protocol
      - 3GPP TS 29.338 Diameter based protocols to support Short Message Service capable MME.
  - label: SMPP
    values:
      - SMPP v3.2
      - SMPP v3.4
      - SMPP v5.0
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

### Universal SMS Gateway

**Implements universal network-based SMS services using the short messages API**

In this context, universal short message services are network-based sms services implemented in the operator network to serve local subscribers. The practice abstract the low level details of the protocols used to exchange short messages in the network by using a single and simple API to post messages to subscribers without caring if they are registered as 3G or 4G subscribers.

This model can be extended by using SMPP if we want to extend delivery to foreign networks as well.

### Programmable SMS

**Expose, Charge & rate control short messages API to 3rd parties**

Programmable SMS is popular in the CPaaS market, it allows 3rd parties to use the short messages API for external web sites or mobile applications.

In this configuration the SMS AEF publish its APIs to the CAPIF-CF and the CAPIF-CF is responsible to authenticate 3rd party users and grant them access to authorized APIs. The CAPIF-CF can also be provisioned with rate control policies to limit each user on API calls. The CAPIF-CF can be configured with an online or offline interface to a charging function to gain the ability to charge 3rd party users.

It is possible to share the SMS-AEF stack for use with internal services and 3rd party services if required.

[Get the microservice guide](/contact)
