---
title: Load Balancers
shortName: LB
category: load-balancers
order: 1
heroIcon: /images/products/lb_bannerpod.png
heroDescription: >-
  Load balancers are most commonly coming as a part of the kubernetes
  cluster in a form of ingress controller or as part of the cloud
  infrastructure in various forms. While these perform perfectly for
  UDP/TCP/HTTP type of traffic, we sometimes need more telecom protocols
  aware load balancers to properly distribute the telecom control plane
  within a workload. Slicce load balancers come to fulfill this need when
  the generic load balancer of the infrastructure is not able to load
  balance a specific telecom protocol.
features: []
specs: []
useCasesIcon: /images/products/computer2.png
useCases:
  - label: Single Engine
    href: /use-cases/single-engine
  - label: Private Networks
    href: /use-cases/private-networks
  - label: 5G Northbound APIs
    href: /use-cases/5g-northbound-apis
---

### SS7 Load Balancer

The SS7 load balancer terminates one or many M3UA IPSPs, SGPs or ASPs and load balance SCCP payloads based on SCCP GT or SCCP SSN. The engine also has the ability to perform Global Title Translation on the calling or called party addresses. This is ideal to have a single entry point for SIGTRAN traffic into a workload and distribute traffic across multiple SIGTRAN-based microservices.

### SIP Load Balancer

The SIP load balancer is provisioned with a set of rules to determine where to forward a new initiated SIP session. Once a destination is assigned, it will make sure that all the following SIP messages including the same Call-ID Header are forwarded to the same destination. This is ideal to have a single entry point for SIP traffic into a workload and distribute traffic across multiple SIP-based microservices.

### DIAMETER Load Balancer

The DIAMETER load balancer is provisioned with a set of rules to determine where to forward an initial DIAMETER session request. Once a destination is assigned, it will keep on delivering the following DIAMETER requests/responses using the same Session-Id to the same destination. This is ideal to have a single entry point for DIAMETER traffic into a workload and distribute traffic across multiple DIAMETER-based microservices.

### GTP Load Balancer

The GTP load balancer handles only the control plane and does not process the user plane. Supporting GTP-C v1 and v2, it can make a route selection for a new session, override specific information elements such as APN or IMSI and route the session follow-on messages to the selected PGW-C or SMF. The load balancer re-writes its own IP address in the GTP packet of the egress path and acts as a NATing function for the GRX control plane IP address. This is ideal to distribute data sessions to individual localized PGW-Us or UPFs and have small containerized instances of UPFs in a workload.

### Ask us about our load balancers?

**When and how to use a telecom protocol aware load balancer to optimize a workload.**
