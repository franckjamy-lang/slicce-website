---
title: Network Resource Driven Application Function
shortName: NRD-AF
category: application-functions
order: 1
heroIcon: /images/products/af_bannerpod.png
heroDescription: >-
  The NRD-AF (Network-Resource-Driven Application Function) is Slicce's
  revolutionary Low-Code Service Creation Environment (SCE). Designed to
  simplify the rapid development of complex, event-driven services, NRD-AF
  liberates service designers from intricate coding. Built on our core
  Cloud Communication Engine architecture, it combines the power of the
  3GPP Common API Framework (CAPIF) with an intuitive low-code environment,
  enabling ultra-fast innovation and monetization for telecom operators.
features:
  - title: Low-Code Visual Designer
    description: >-
      Accelerated Time-to-Market: Launch new, sophisticated services in
      days, not months.
  - title: Native CAPIF Integration
    description: >-
      Seamless Network Access: Safely and easily consume 3G, 4G, and 5G
      network APIs (e.g., location, charging, QoS).
  - title: Event-Driven Architecture
    description: >-
      Real-Time Responsiveness: Deliver highly personalized and
      context-aware services based on immediate network state.
  - title: Web API & External Integration
    description: >-
      Convergence & Innovation: Fuse network capabilities with external
      data for powerful new cross-domain services.
  - title: AI Service Integration
    description: >-
      Connects seamlessly to external AI services (OpenAI, Google Cloud,
      Azure, etc.) for advanced capabilities like natural language
      processing, speech transcription, sentiment analysis, and image
      recognition — enabling intelligent, context-aware workflows.
  - title: Cloud-Native & Scalable
    description: >-
      Operational Efficiency: Scales automatically with demand, ensuring
      high availability and cost-effective operation.
specs: []
useCasesIcon: /images/products/computer2.png
useCases:
  - label: Value Added Services
    href: /use-cases/value-added-services
  - label: 3rd party API Exposure
    href: /use-cases/3rd-party-api-exposure
  - label: Charging Interworking
    href: /use-cases/charging-interworking
  - label: 5G Northbound APIs
    href: /use-cases/5g-northbound-apis
---

### Technology Under the Hood

**The NRD-AF leverages the Cloud Communication Engine foundation**

- Low-Code Engine: A proprietary runtime optimized for execution of visual programming flows.
- Protocol Abstraction: All 3GPP protocols are abstracted into simple, secure REST API calls via the CAPIF-CF.
- Security & Policy: Inherits the strict security and access control policies defined by the Common API Framework, ensuring that all network resource consumption is authorized and logged.

### AI Service Integration

**Enabling Intelligent Workflows via AI Services**

NRD-AF supports seamless connectivity to external AI services (OpenAI, Google Cloud, Azure, etc.), enabling advanced features like natural language processing, speech transcription, sentiment analysis, and image recognition — all fully customizable via API.

- Use Case: Generate contextual responses or summaries based on network events. Example: Trigger a GPT-4 chatbot session when a customer experiences poor QoS or roaming issues.
- Use Case: Analyze voice messages or transcribe calls. Example: Detect emotional distress in a voicemail or transcribe and summarize a support call.
- Use Case: Speech-to-text and email automation. Example: Convert a phone call into text and auto-send a summary email to the support team.
- Use Case: Visual analysis and object detection. Example: Analyze video streams to detect faces, objects, or anomalies linked to network events.

### Some Use Cases

**Ideas of what you can build with NRD-AF**

**Contextual VAS**

Example service: Smart Traffic Prioritization: Temporarily increase QoS for a user's session when they open a specific mission-critical application (e.g., remote healthcare or broadcast).

Network Events/APIs Used: Location Change Event, QoS API, External Application Trigger.

**Enterprise Automation**

Example service: Fleet Management Geo-Fencing: Trigger an alert in an enterprise system when a vehicle's SIM crosses a specific geographic boundary.

Network Events/APIs Used: Location Reporting API, SMS-AEF, External Enterprise Webhook.

**Security & Fraud**

Example service: SIM Swap Detection Service: Automatically flag and block a charging session if a significant change in device/location is detected within minutes of a SIM replacement.

Network Events/APIs Used: Charging API, Subscriber API, External Fraud Detection System.

**Personalized Charging**

Example service: "Pay-Per-Session" Charging: Start and stop a specific, premium charging session only when the user is actively using a partnered streaming service.

Network Events/APIs Used: Charging Interworking Function (IWF), Packet Flow Description (PFD) API.

### Extensibility and Open Standards

**Built on Node-RED: Community Power and Unparalleled Flexibility**

The NRD-AF's low-code environment is built upon the robust, community-driven principles of Node-RED. This powerful foundation means that NRD-AF is not a closed platform; rather, it is highly extensible. Developers can leverage the vast ecosystem of pre-built community node libraries to quickly integrate with virtually any external system, database, or cloud service. For specialized network functions or proprietary enterprise systems, custom nodes can be easily created and integrated, providing unparalleled flexibility and future-proofing your service development efforts.

### Ready to Transform Your Network?

Stop relying on complex, lengthy development cycles. With NRD-AF, your network engineers and service designers can become instant innovators. Scheduled with a Slicce expert today a live demonstration of the NRD-AF Low-Code Designer and see how quickly you can bring your next event-driven application to life.
