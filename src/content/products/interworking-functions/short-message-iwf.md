---
title: SMS Interworking Function
shortName: SMS-IWF
category: interworking-functions
order: 3
heroIcon: /images/products/chf-iwf_bannerpod.png
heroDescription: >-
  The Short Message Service Interworking Function (SMS-IWF) is dedicated to
  the conversion of short text messages between the 3G, 4G, 5G and
  enterprise networks. The SMS-IWF can frontend any existing SMSC an
  extend its capabilities removing the need to replace the entire network
  function to evolve to new network technologies.
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
      Ability to block undesired and unexpected messages through Firewall
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
      - IETF RFC 4006 Diameter Credit-Control Application
      - IETF RFC 3588 / 6733 Diameter base Protocol
      - 3GPP TS 32.299 Telecommunication management; Charging management; Diameter charging applications.
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

### SMS-IWF for Operators

**Brings SMS over NAS, SMS over IP and SMS over 5G SBI to legacy SMSC**

SMS is a popular service that allows users to send and receive short text messages on their mobile devices. In 5G networks, there are two basic methods to transport SMS: SMS-over-NAS (SMSoNAS) and SMS-over-IP (SMSoIP).

SMSoNAS uses Non-Access Stratum (NAS) signaling to deliver SMS messages between the user device and the SMS Function (SMSF) in the 5G Core (5GC). SMSoNAS is defined in 3GPP TS 23.501 and can be used when the device is connected to either 5G or 4G networks. SMSoNAS is recommended for devices that do not support voice services over IMS or for data-only devices.

SMSoIP uses IP Multimedia Subsystem (IMS) to deliver SMS messages over IP using SIP (Session Initiation Protocol) messages. SMSoIP is defined in 3GPP TS 24.341 and can be used when the device is connected to IMS, either over 5G or 4G networks. SMSoIP can be deployed simultaneously with voice services over IMS to provide both voice and SMS services.

The choice of SMSoNAS or SMSoIP depends on several factors, such as the device capabilities, the network architecture, the service requirements, and the operator preferences. Both methods have advantages and disadvantages in terms of complexity, performance, interoperability, and roaming. Operators need to carefully evaluate their options and plan their migration strategy from EPS to 5GS accordingly.

### SMS-IWF for ESME

**Bridges the mobile network with External Short Messages Entities**

External Short Messages Entities (ESMEs) are applications or systems that can send and receive short messages to and from a Short Message Service Center (SMSC) using the Short Message Peer-to-Peer (SMPP) protocol. ESMEs can provide various benefits for businesses, such as:

- Enhancing customer engagement and loyalty by sending personalized, timely and relevant messages to customers via SMS, such as appointment reminders, order confirmations, delivery notifications, feedback requests, etc.
- Improving operational efficiency and productivity by automating workflows and processes that involve SMS communication, such as sending alerts, confirmations, reports, etc. to employees, partners or suppliers.
- Increasing revenue and profitability by leveraging SMS as a marketing channel to promote products, services, offers, discounts, etc. to potential or existing customers, or as a payment channel to enable customers to pay for goods or services via SMS.
- Reducing costs and risks by using SMS as a reliable and secure communication channel that can reach customers or stakeholders in any location, at any time, and with minimal infrastructure requirements.

ESMEs can help businesses achieve their goals and objectives by providing a simple, fast and effective way to communicate with their target audiences via SMS. ESMEs can also integrate with other applications or systems to enable seamless data exchange and interoperability. Therefore, ESMEs can offer significant business value for various industries and sectors that rely on SMS communication.

[Get the microservice guide](/contact)
