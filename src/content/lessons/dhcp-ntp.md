---
title: "DHCP and NTP: the car park attendant and the school bell"
description: "DHCP and NTP explained like you're 10: how devices get an address automatically, why every clock must agree, and the attacks on both."
pubDate: 2026-10-24
number: 5
topic: dhcp-ntp
chapter: "Gibson & Shelley, Ch. 3"
oneLiner: "DHCP hands every new device an address the moment it joins a network. NTP makes sure every device’s clock shows exactly the same time."
grownLiner: "DHCP hands out IP addresses automatically, and DHCP snooping blocks rogue servers. NTP keeps every clock in sync, so logs from different systems line up during an investigation."
draft: false
image: "/images/og/dhcp-ntp.jpg"
imageAlt: "Poster: DHCP and NTP. A car park attendant handing out address tickets, a fake attendant being stopped, a town clock and computer screens all showing 10:30, and a detective lining up clues all stamped 10:31."
buyerScore:
  budget: 1
  pain: 0.5
  pressure: 1
  owner: 0.5
  verdict: "Invisible until it breaks. Time sync is an audit requirement, but it’s bought as part of network platforms, not on its own."
flashcards:
  - q: "What does DHCP give a device when it joins a network?"
    a: "An IP address for a limited time (a lease), plus settings such as the default gateway and which DNS servers to use."
  - q: "What is a rogue DHCP server, and how is it stopped?"
    a: "An unauthorised DHCP server that hands out bad settings, for example pointing devices at an attacker’s gateway or DNS. Switches block it with DHCP snooping, which only trusts DHCP replies from approved ports."
  - q: "Why do security teams care that clocks are synchronised?"
    a: "Logs from different systems can only be lined up during an investigation if their timestamps agree. Kerberos login also fails if clocks drift too far apart (5 minutes by default in Active Directory)."
  - q: "Which ports do DHCP and NTP use?"
    a: "DHCP uses UDP 67 (server) and 68 (client). NTP uses UDP 123."
---

![Poster: DHCP and NTP. A car park attendant handing out address tickets, a fake attendant being stopped, a town clock and computer screens all showing 10:30, and a detective lining up clues all stamped 10:31.](./images/dhcp-ntp-poster.jpg)

<p class="caption">Tap the poster to zoom in.</p>

<div class="layer layer-kid">
<p class="layer-name">Like you’re 10</p>

**DHCP is the car park attendant.** When a car drives in, the attendant gives it a ticket with its own **numbered space**, and a note saying how long it can stay. Nobody has to argue over spaces, and when a car leaves, its space goes back to the pile for the next car.

**NTP is the school bell.** One master clock tells every classroom clock the exact time, so the whole school agrees when lessons start and end. If one clock was ten minutes fast, nobody could work out who was really late.

</div>

<div class="layer layer-grown">
<p class="layer-name">Grown-up version</p>

**DHCP (Dynamic Host Configuration Protocol)** automatically gives a device an **IP address lease** and its network settings: subnet mask, **default gateway** and **DNS servers**. The exchange has four steps, often remembered as **DORA**: Discover, Offer, Request, Acknowledge. It runs on UDP 67 and 68.

**NTP (Network Time Protocol)** synchronises clocks to a trusted reference source, arranged in levels called *strata* (stratum 0 is an atomic or GPS clock). It runs on UDP 123.

**Attacks to know:**

| Attack | What happens | Defence |
|---|---|---|
| **Rogue DHCP server** | A fake server hands out settings that route victims through the attacker | DHCP snooping on switches |
| **DHCP starvation** | An attacker requests every address until none are left | Port security, limits per port |
| **NTP amplification** | Attackers use badly configured NTP servers to flood a victim with traffic (a type of DDoS) | Disable unneeded NTP features, filter traffic |
| **Time tampering** | Wrong clocks break logins and make logs useless as evidence | Authenticated time sources, monitoring for drift |

</div>

## A real-world example

When an incident happens, investigators line up logs from firewalls, servers, laptops and cloud services to rebuild what the attacker did, minute by minute. If one system’s clock was out by even a few minutes, the story falls apart. That’s why payment card rules (PCI DSS) explicitly require time synchronisation.

<div class="layer layer-buyer">
<p class="layer-name">Why a buyer cares</p>

- **The risk it reduces:** attackers hijacking traffic through fake network settings, and investigations that collapse because timestamps don’t agree.
- **Who owns it at a company:** the network or infrastructure team. The security operations team depends on the clocks being right.
- **What gets bought:** **DDI** platforms that manage DNS, DHCP and IP addresses together, and network switches with security features such as DHCP snooping.
- **A good discovery question:** *“If you had to rebuild the timeline of an incident across your firewalls, servers and cloud logs tomorrow, would the timestamps agree?”*

</div>

## The one thing to remember

DHCP hands out addresses, NTP hands out the time. Both are boring until an attacker fakes them.
