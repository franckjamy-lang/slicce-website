---
title: Short Message Interworking Function
shortName: SMS-IWF
category: interworking-functions
order: 3
heroDescription: >-
  The Short Message Service Interworking Function (SMS-IWF) is dedicated to
  the conversion of short text messages between the 3G, 4G, 5G and
  enterprise networks. The SMS-IWF can frontend any existing SMSC and extend
  its capabilities, removing the need to replace the entire network function
  to evolve to new network technologies.
features:
  - title: Multi-purpose communication engine
    description: >-
      Supports conversion of most common SMS technologies, SMSoNAS, SMSoIP,
      GSM-MAP SMS, 5G SMS, ESME via SMPP and WhatsApp API.
  - title: Programmable via a simple scripting
    description: >-
      Provides ability to quickly and easily adjust and customize call flows
      using simple scripting language to shorten time-to-market.
  - title: Application level firewall
    description: >-
      Ability to block undesired and unexpected messages through firewall
      like allow/block rule mechanism.
  - title: Adjustable rate control
    description: >-
      Secures the home network SMSC with rate control mechanism for inbound
      traffic.
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
      - 3GPP TS.24.229
      - TISPAN ES 283 003
      - IETF RFC 3261-3266
      - RFC 1889-1890
      - RFC 3329
      - RFC 3455
  - label: DIAMETER
    wide: true
    values:
      - RFC 4006 - Diameter Credit-Control Application
      - RFC 3588 / 6733 - Diameter base Protocol
      - 3GPP TS 32.299 / 29.338 - Telecommunication management; Charging management; Diameter charging applications.
  - label: SMPP
    values:
      - v3.2
      - v3.4
      - v5.0
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

What makes SMS-IWF unique is its ability to convert short messages across
virtually every generation and channel in use today — SMSoNAS, SMSoIP,
GSM-MAP SMS, 5G SMS, SMPP-based ESMEs and even WhatsApp — through a single,
protocol-agnostic engine.

This lets operators front-end an existing SMSC and extend its reach to new
channels and network generations without replacing the whole network
function, protecting past investment while opening the door to new
messaging use cases.

Built-in protections — an allow/block firewall for undesired or unexpected
messages, and adjustable inbound rate control — keep the home network's
SMSC safe from abuse, so the added flexibility never comes at the cost of
stability.
