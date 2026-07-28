---
title: Load Balancers
shortName: LB
category: load-balancers
order: 1
heroDescription: >-
  Load balancers most commonly come as part of the Kubernetes cluster in the
  form of an ingress controller, or as part of the cloud infrastructure in
  various forms. While these perform perfectly for UDP/TCP/HTTP type of
  traffic, we sometimes need more telecom-protocol-aware load balancers to
  properly distribute the telecom control plane within a workload.
features:
  - title: SS7 Load Balancer
    description: >-
      Terminates M3UA IPSPs, SGPs or ASPs and load balances SCCP payloads
      based on SCCP GT or SCCP SSN, performing Global Title Translation on
      calling/called party addresses. Acts as a single entry point for
      SIGTRAN traffic into a workload.
  - title: SIP Load Balancer
    description: >-
      Uses rules to determine forwarding destinations for new SIP sessions,
      and ensures all following SIP messages sharing the same Call-ID
      header are forwarded to the same destination. A single entry point
      for SIP traffic into a workload.
  - title: DIAMETER Load Balancer
    description: >-
      Routes initial DIAMETER session requests via provisioned rules, and
      maintains following DIAMETER requests/responses using the same
      Session-Id to the same destination. A single entry point for DIAMETER
      traffic into a workload.
  - title: GTP Load Balancer
    description: >-
      Handles control plane only (GTP-C v1 and v2) and can override
      specific information elements such as APN or IMSI, distributing
      sessions to localized, containerized PGW-Us or UPFs.
specs:
  - label: SS7
    values:
      - M3UA - RFC3332
      - SCCP - ITU-T Q.711 through Q.714, Global Title Translation
  - label: SIP
    values:
      - RFC 3261-3266
  - label: DIAMETER
    values:
      - RFC 3588 / 6733
  - label: GTP
    values:
      - GTP-C v1
      - GTP-C v2
useCasesIcon: /images/products/computer2.png
useCases:
  - label: Single Engine
    href: /use-cases/single-engine
  - label: Private Networks
    href: /use-cases/private-networks
  - label: 5G Northbound APIs
    href: /use-cases/5g-northbound-apis
---

What sets Slicce's load balancers apart from a generic ingress controller
is that each one understands the telecom protocol it distributes: an SS7
load balancer performs Global Title Translation, a SIP or DIAMETER load
balancer keeps every message of a session pinned to the same backend
instance, and a GTP load balancer can rewrite control-plane information
elements on the fly.

That protocol awareness is what lets a workload scale its control plane
horizontally — across multiple containerized SCP, IMS, OCS or PGW-U/UPF
instances — without breaking the session affinity that these stateful
telecom protocols require.
