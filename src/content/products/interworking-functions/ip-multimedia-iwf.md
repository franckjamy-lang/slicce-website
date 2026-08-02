---
title: IMS Interworking Function
shortName: IMS-IWF
category: interworking-functions
order: 2
heroIcon: /images/products/chf-iwf_bannerpod.png
heroDescription: >-
  The IP Multimedia Subsystem Interworking Function (IMS-IWF) is a powerful
  enabler for interoperability between 3G circuit switched and VoLTE/VoNR
  packet switched calls and messaging services. The IMS-WF interface the
  S-CSCF through the standard ISC interface and the 3G network GSM-MAP
  interfaces to ensure service continuity when roaming across networks
  which are not inter-connected using IMS. The IMS-IWF can natively be
  deployed as an IP-SM-GW to bridge IMS messages to the SMSC or as an
  IMS-GWF to apply credit control procedures with the OCS for VoLTE calls
  and messages.
features:
  - title: Multi-purpose communication engine
    description: >-
      Supports IP-SM-GW mode for SMSoIP to GSM-MAP Short Message Service
      Center, IMS-GWF mode for IMS online charging conversion and IMS-IWF
      mode for interconnecting CS and PS networks in roaming scenarios.
  - title: Programmable via a simple scripting
    description: >-
      Provides ability to quickly and easily adjust and customize call flows
      using simple scripting language to shorten time-to-market.
  - title: Online charging
    description: >-
      Supports prepaid calls and messages through DIAMETER Ro interface.
  - title: Optional data store
    description: >-
      Enables to keep MSRNs assignments and their status in a shared memory
      store for distributed configurations.
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
      - RFC 4006 - Diameter Credit-Control Application
      - RFC 3588 / 6733 - Diameter base Protocol
      - 3GPP TS 32.299 - Telecommunication management; Charging management; Diameter charging applications.
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

### IMS-IWF as an IP-SM-GW

**Bridges SMS over IP to the SMSC for 3G interoperability and store & forward capabilities**

The IP Short Message Gateway (IP-SM-GW) is a network element that enables the delivery of SMS messages over IP networks, such as LTE or IMS. It acts as an interworking function between the IP-based SMS service and the legacy circuit-switched SMS service. The IP-SM-GW is defined by 3GPP TS 24.341 and GSMA IR.92, and it supports both mobile-originated and mobile-terminated SMS scenarios.

The role of the IP-SM-GW is to ensure that SMS messages can be exchanged between different types of devices and networks, without compromising the quality, reliability and security of the service. The IP-SM-GW performs several functions, such as:

- Translating between different protocols and formats, such as SIP MESSAGE and MAP
- Routing SMS messages to the appropriate destination, based on the IMSI or MSISDN of the sender or receiver
- Interacting with other network elements, such as HSS, SMSC, MSC or SGSN
- Providing charging and accounting information for SMS over IP
- Supporting third-party registration and notification mechanisms for SMS over IP
- Handling error scenarios and fallback mechanisms for SMS over IP.

The IP-SM-GW is a key component for enabling SMS continuity and interoperability in an evolving network landscape. It allows operators to leverage their existing SMS infrastructure and offer a seamless SMS experience to their customers across different access technologies.

### IMS-IWF as an IMS-GWF

**Converts SIP ISC interface to DIAMETER Ro interface to allow online charging of calls and SMS**

The IMS-GWF (IP Multimedia Subsystem - Gateway Function) is a component of the IMS charging architecture that enables online charging for IMS services. Online charging means that the service usage is authorized and charged in real time, based on the user's account balance and credit limit. The IMS-GWF acts as an interface between the IMS network and the Online Charging System (OCS), which is responsible for managing the user's account and credit reservations. The IMS-GWF can be regarded as a special kind of SIP application server, whose role is to provide communication with the OCS.

The IMS-GWF performs the following functions:

- It intercepts the SIP INVITE messages from the originating or terminating IMS nodes and sends a Credit-Control-Request (CCR) message to the OCS, requesting an initial amount of credit for the session.
- It receives a Credit-Control-Answer (CCA) message from the OCS, indicating whether the credit request is granted or rejected, and how much credit is reserved for the session.
- It forwards the SIP INVITE message to the next hop in the IMS network, if the credit request is granted, or rejects the session with a SIP error response, if the credit request is rejected.
- It monitors the duration and volume of the session and sends periodic CCR messages to the OCS, requesting more credit or reporting the consumed credit.
- It receives CCA messages from the OCS, indicating whether the additional credit requests are granted or rejected, and how much credit is reserved or released for the session.
- It terminates the session with a SIP BYE message, if the credit request is rejected, or if the user's account balance reaches zero, or if the user's credit limit is exceeded.
- It sends a final CCR message to the OCS at the end of the session, reporting the total amount of credit consumed by the session.
- It receives a final CCA message from the OCS, confirming the final amount of credit charged for the session.

The IMS-GWF ensures that only authorized and prepaid users can access IMS services, and that they are charged according to their service usage. The IMS-GWF also provides a consistent and transparent charging mechanism for different types of IMS services, such as voice calls, video calls, conferencing, messaging, etc...

### IMS-IWF for CS/PS interconnect

**Enables calls and SMS when roaming on a VoLTE only network**

The IMS-IWF (Interworking Function) is a component that enables the integration and communication of different network elements and protocols in the context of IMS (IP Multimedia Subsystem). The IMS-IWF acts as a gateway between the IMS core network and the legacy networks.

The IMS-IWF connects to one or many VPLMN IMS core through the ISC interface and to the HPLMN 3G core through the GSM-MAP interfaces over SIGTRAN. It can optionally performs interface the onlince charging system through DIAMETER Ro interface.

- A roaming subscriber registration on a VPLMN is forwarded to the IMS-IWF.
- The IMS-IWF converts the IMS registration procedure into a 3G registration procedure.
- The IMS-IWF then acts as a VLR towards the 3G network and will provide an MSRN in case the HPLMN requests to route a call.
- The MSRN provided is routed to the border controller of the VPLMN IMS core to complete the MT call.
- The IMS-IWF will allow MO calls coming from the VPLMN so they are routed through the border controller to their destination.

[Get the microservice guide](/contact)
