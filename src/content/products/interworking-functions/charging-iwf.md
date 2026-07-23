---
title: Charging Interworking Function
shortName: CHF-IWF
category: interworking-functions
order: 1
heroDescription: >-
  The Charging Interworking Function (CHF-IWF) is a powerful enabler for fast
  and easy mediation of real-time control of calls in fixed and mobile
  networks using INAP, CAMEL, DIAMETER or HTTP2. The CHF-IWF supports
  real-time billing for users in home and roaming networks. It can be
  configured to connect to any billing system via DIAMETER or CAMEL
  interfaces in order to perform real-time checks of customer balances,
  calculate charges for consumed services (like phone calls, sms or gprs
  sessions), and prevent any unauthorized usage or balance overdrafts. The
  CHF-IWF is commonly used to harmonize and mediate between the network
  elements and the online charging system (OCS).
features:
  - title: Handling of simultaneous conversion schemes
    description: >-
      Supports **conversion mode** for any to any simultaneous conversion
      schemes for CAP, INAP, DIAMETER CC and HTTP2 N28/N40/Nchf or **proxy
      mode** for same protocol mediation. (E.g. CAPv1 to CAPv2)
  - title: Cross-technology billing
    description: >-
      Enables sending CAP and INAP signals to the same DIAMETER element,
      allowing two networks with different technologies to operate with one
      single billing system (OCS).
  - title: Programmable via a simple scripting
    description: >-
      Provides ability to quickly and easily implement conversion and
      mediation call flows using simple scripting language to shorten
      time-to-market.
  - title: Real-time control using the DIAMETER protocol
    description: >-
      Extends standard DIAMETER Credit Control AVP set to enables complete
      call control by any connected OCS to the southbound protocols.
specs:
  - label: SCTP
    values:
      - RFC2960
      - RFC3309
  - label: MTP
    values:
      - ITU-T Q.700 through Q.707, Q.781, Q.782, Q.791
  - label: M2PA
    values:
      - RFC4165
  - label: M3UA
    values:
      - RFC3332
  - label: SCCP
    values:
      - ITU-T Q.711 through Q.a714 Connectionless Class 0 & 1
  - label: TCAP
    values:
      - ITU-T Q.700 through Q.707, Q.781, Q.782, Q.791
  - label: INAP
    values:
      - ETSI ETS 300 374-1
      - ITU-T Q.1218 CS-1R
  - label: HTTP2
    values:
      - RFC9113
      - RFC7541
  - label: CAP
    values:
      - GSM 09.78 (ETSI TS101 046 - V5.6.0) CAMEL Phase 1
      - GSM 09.78 (ETSI TS101 046 - V6.3.0) CAMEL Phase 2
      - GSM 09.78 (ETSI TS129 078 - V4.6.0) CAMEL Phase 3
      - 3GPP TS 29.078 V7.3.0 R7, 3GPP TS 29.278 V7.0.0 R7 (IMS) CAMEL Phase 4
  - label: DIAMETER
    values:
      - RFC 4006 - Diameter Credit-Control Application
      - RFC 3588 / 6733 - Diameter base Protocol
      - 3GPP TS 32.299 - Telecommunication management; Charging management; Diameter charging applications.
useCases:
  - label: Charging Interworking
    href: /use-cases/charging-interworking
---

What makes CHF-IWF unique is its support for simultaneous conversion of both
technologies within the same CAMEL SCP, and unifying the converted signaling
to the same billing server (OCS). This enables operators managing
multi-technology and multi-generational networks to use one billing system
for all of their different network infrastructures, saving huge expenditures
on upgrading entire network infrastructures or purchasing entirely new
billing systems.

Another features that make the CHF-IWF special is the ability to customize
the scenarios and the interfaces involved in a specific call flow. For
example, you could easily translate an IDP message (service request) into a
DIAMETER request towards a third-party system.

This approach is much more flexible in comparison with traditional SCP
architecture because the solution provider receives a powerful and flexible
tool for creating new services without creating any constraint on the
development environment he is familiar with. The manufacturer can
dramatically decrease time to market while deploying innovative services
that will enrich its offering and strengthen competitive standing.
