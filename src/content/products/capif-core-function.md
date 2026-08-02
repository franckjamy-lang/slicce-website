---
title: CAPIF Core Function
shortName: CAPIF-CF
category: capif-core-function
order: 1
heroIcon: /images/products/capif_bannerpod.png
heroDescription: >-
  The Common API Framework Core Function is an element defined by 3GPP to
  harmonize all aspects of northbound service APIs. It covers functionality
  related to on-board and off-board API invokers, APIs that need to be
  exposed for registration and release, API discovery by third-party
  entities, and authorization and authentication.
heroDescriptionSecondary: >-
  CAPIF functionality is considered a cornerstone in realizing 5G openness
  because it allows secure exposure of 5G core APIs to third-party domains
  and enables third parties to define and expose their own APIs. Slicce
  extends the use case of the Common API Framework by publishing and
  exposing northbound APIs for 3G and 4G networks.
features:
  - title: JWT Authentication Server
    description:
      - >-
        Stateless: The JWT is a self-contained token which has
        authentication information, expire time information, and other
        user-defined claims digitally signed. This means that there is no
        session to manage.
      - "Portable: A single token can be used with multiple backends."
      - "No cookies required: So it's very mobile-friendly."
      - "Good performance: It reduces the network round trip time."
  - title: HTTP/2 with TLS 1.3 encryption
    description:
      - Faster and more secure than TLS 1.2
      - >-
        Shorter process by requiring only one round trip (or
        back-and-forth communication) instead of two.
      - >-
        Speeds up encrypted connections even more with features such as
        TLS false start and Zero Round Trip Time.
      - Results in significant performance gains while also providing security benefits
  - title: API Invokers & API Providers management
    description:
      - Maintain identity information for authentication.
      - Mutual authentication with a central entity.
      - Provides and manage the authorization needed to access service APIs.
  - title: Policy Control & Realtime charging
    description:
      - Control which Invoker can consume which API.
      - Limit Invokers traffic rate per API family.
      - Balance the traffic load accross providers.
      - Charge API subscriptions, API calls and JWTs.
  - title: Built-in logging and auditing service
    description:
      - Central logging and auditing service to ease troubleshooting.
  - title: Persistent data store
    description:
      - Maintains data persistent and make it available from many access point.
      - Allow CAPIF Core Function stateless operation at scale.
specs:
  - label: 3GPP TS 23.222
    values:
      - Common API Framework for 3GPP Northbound APIs
  - label: 3GPP TS 23.122
    values:
      - Security Aspects of Common API Framework for 3GPP Northbound APIs
  - label: 3GPP TS 23.682
    values:
      - Architecture enhancements to facilitate communications with packet data networks and applications
  - label: 3GPP TS 23.501
    values:
      - System Architecture for the 5G System; Stage 2
  - label: 3GPP TS 23.502
    values:
      - Procedures for the 5G System; Stage 2
  - label: 3GPP TS 32.240
    values:
      - Telecommunication management; Charging management; Charging architecture and principles
  - label: OMA-ER_Autho4API-V1_0-20141209-A
    values:
      - Authorization Framework for Network APIs
  - label: OMA-TS-REST_NetAPI_Common-V1_0-20180116-A
    values:
      - Common definitions for RESTful Network APIs
  - label: OMA-TS-NGSI_Registration_and_Discovery-V1_0-20120529-A
    values:
      - NGSI Registration and Discovery
useCases: []
microserviceGuide:
  href: /contact
---
