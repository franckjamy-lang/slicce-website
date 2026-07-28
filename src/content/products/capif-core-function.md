---
title: Common API Framework Core Function
shortName: CAPIF-CF
category: capif-core-function
order: 1
heroDescription: >-
  The Common API Framework Core Function is an element defined by 3GPP to
  harmonize all aspects of northbound service APIs. It covers functionality
  related to on-board and off-board API invokers, APIs that need to be
  exposed for registration and release, API discovery by third-party
  entities, and authorization and authentication.
features:
  - title: JWT Authentication Server
    description: >-
      Stateless: the JWT is a self-contained token which has authentication
      information, expire time information, and other user-defined claims
      digitally signed. Portable across multiple backends, mobile-friendly,
      with improved performance.
  - title: HTTP/2 with TLS 1.3 encryption
    description: >-
      Faster and more secure than TLS 1.2, with reduced round trips and
      performance gains.
  - title: API Invokers & API Providers management
    description: >-
      Maintains identity information, enables mutual authentication, and
      manages authorization to access service APIs.
  - title: Policy Control & Realtime charging
    description: >-
      Control API access, limit traffic rates, balance loads, and charge
      subscriptions and calls.
  - title: Built-in logging and auditing service
    description: >-
      Central logging and auditing service to ease troubleshooting.
  - title: Persistent data store
    description: >-
      Maintains persistent data across multiple access points enabling
      stateless operations at scale.
specs:
  - label: CAPIF
    wide: true
    values:
      - 3GPP TS 23.222 - Common API Framework for 3GPP northbound APIs
      - 3GPP TS 23.122 - NAS functions related to Mobile Station in idle mode
      - 3GPP TS 23.682 - Architecture enhancements for facilitating communications with packet data networks and applications
  - label: 5G Core
    wide: true
    values:
      - 3GPP TS 23.501 - System architecture for the 5G System
      - 3GPP TS 23.502 - Procedures for the 5G System
      - 3GPP TS 32.240 - Charging architecture and principles
  - label: Security
    values:
      - JWT (RFC 7519)
      - TLS 1.3
  - label: OMA
    values:
      - OMA framework standards
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

CAPIF functionality is considered a cornerstone in realizing 5G openness
because it allows secure exposure of 5G core APIs to third-party domains and
enables third parties to define and expose their own APIs. Slicce extends
the use case of the Common API Framework by publishing and exposing
northbound APIs for 3G and 4G networks as well, not just 5G.

Every other Slicce engine — API Exposure Functions, Application Functions,
Interworking Functions — relies on this same CAPIF-CF foundation to
harmonize invoker registration, discovery, authorization and charging, so
adding a new engine to a workload never means reinventing how it is
secured or billed.
