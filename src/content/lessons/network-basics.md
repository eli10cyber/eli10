---
title: "Clocks, name tags and addresses: NTP, DHCP, IPv4 and IPv6"
description: "Four network basics explained like you're 10, and why each one matters for security."
pubDate: 2026-10-24
number: 2
topic: network-basics
chapter: "Gibson & Shelley, Ch. 3"
oneLiner: "Computers on a network need the same time, an address each, and enough addresses to go round. Four protocols handle that."
draft: true
flashcards:
  - q: "Why does a security team care that every computer has the same time?"
    a: "Logs from different machines can only be lined up during an investigation if their clocks agree. Some login systems, like Kerberos, also reject requests when clocks drift too far apart."
  - q: "What does DHCP do?"
    a: "It automatically gives each device that joins a network its own IP address, for a limited time called a lease."
  - q: "What is a rogue DHCP server?"
    a: "An unauthorised server that hands out addresses with bad settings, for example pointing devices at an attacker’s gateway or DNS. Switches block it with DHCP snooping."
  - q: "How long are IPv4 and IPv6 addresses?"
    a: "IPv4 addresses are 32 bits (about 4.3 billion possible). IPv6 addresses are 128 bits, enough that running out is not a practical concern."
---

The whole set on one page. Tap it to see it full size.

![A four-panel comic. NTP: a grandfather clock keeping other clocks in time. DHCP: a car park attendant handing out numbered spaces. IPv4: a postman with an old, full address book. IPv6: a rocket over an endless city of addresses.](./images/network-essentials-poster.jpg)

<p class="caption">Network essentials in four panels. Draft illustration: some labels still need fixing.</p>

## The four ideas, one at a time

<div class="panels">

![NTP panel: a master grandfather clock keeping other clocks in time](./images/panel-ntp.jpg)

![DHCP panel: an attendant handing a car its own numbered parking space](./images/panel-dhcp.jpg)

![IPv4 panel: a postman with an old address book that is running out of space](./images/panel-ipv4.jpg)

![IPv6 panel: a rocket flying over a huge city of addresses](./images/panel-ipv6.jpg)

</div>

<div class="layer layer-kid">
<p class="layer-name">Like you’re 10</p>

**NTP** is the school bell. One master clock tells every other clock the time, so everyone agrees when lunch starts.

**DHCP** is the car park attendant. Every car that arrives gets **its own numbered space** and a ticket saying how long it can stay.

**IPv4** is the old street address book. It has room for about four billion houses, and the world has already **run out of pages**.

**IPv6** is the new address book. It has so many pages that every grain of sand could have its own address.

</div>

<div class="layer layer-grown">
<p class="layer-name">Grown-up version</p>

| Protocol | What it does | Security angle |
|---|---|---|
| **NTP** | Synchronises device clocks to a reference time source | Accurate timestamps for logs and forensics; Kerberos rejects requests when clocks drift too far |
| **DHCP** | Assigns IP address, gateway and DNS settings automatically, for a lease period | Rogue DHCP servers and starvation attacks; mitigated by DHCP snooping on switches |
| **IPv4** | 32-bit addresses, written like `192.168.1.5` | Address shortage led to NAT, which hides internal devices but complicates tracing |
| **IPv6** | 128-bit addresses, written like `2001:db8::8a2e:370:7334` | Often enabled by default but not monitored, creating blind spots |

</div>

<div class="layer layer-buyer">
<p class="layer-name">Why a buyer cares</p>

- **The risk it reduces:** investigations that stall because logs can’t be lined up, and attackers hijacking traffic through fake network settings.
- **Who owns it at a company:** the network team, with the security operations team relying on the timestamps.
- **What gets bought:** DDI platforms that manage DNS, DHCP and IP addresses together, network access control, and SIEM tools that depend on accurate time.
- **A good discovery question:** *“If you had to rebuild the timeline of an incident across your firewalls, servers and cloud logs tomorrow, would the timestamps agree?”*

</div>
