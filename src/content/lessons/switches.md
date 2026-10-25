---
title: "Switches: unicast, broadcast and locking the ports"
description: "Switches explained like you're 10: how messages reach one device or everyone, how switches are hardened with port security and MAC filtering, and physical versus logical ports."
pubDate: 2026-10-25
number: 2
topic: switching
chapter: "Gibson & Shelley, Ch. 3"
oneLiner: "A switch is the hallway monitor of a network: it delivers each message to the right door, and a hardened one won’t let strangers plug in."
grownLiner: "Switches forward frames by MAC address. Port security limits which devices each port accepts, but MAC addresses can be spoofed, so 802.1X is the strong control."
draft: false
image: "/images/og/switches.jpg"
imageAlt: "Poster: Switches. A note passed to one friend (unicast), a megaphone in the dining hall stopped at a router gate (broadcast), a hallway monitor checking badges (port security), and a wall socket next to doors numbered 22, 53 and 443 (physical vs logical ports)."
buyerScore:
  budget: 1.5
  pain: 1
  pressure: 1
  owner: 1
  verdict: "Switch hardening is configuration, not a purchase. The money is in network access control, which checks every device before it gets on."
posterGrid: [1.7, 49.3, 50.6, 98.3, 12.7, 52.2, 54.1, 98.0]
panels:
  - title: "Unicast"
    note: "Unicast sends a frame to one specific device. The switch looks up which port leads to it in its MAC address table."
    find: "How a switch works"
  - title: "Broadcast"
    note: "A broadcast reaches every device on the local network. Routers mark the edge, and IPv6 has no broadcast at all."
    find: "cross routers"
  - title: "Port Security"
    note: "Port security limits which devices each switch port accepts. Badges can be copied (MAC spoofing), so 802.1X is the strong version."
    find: "limit how many MAC"
  - title: "Physical vs Logical Ports"
    note: "A physical port is a socket for a cable. A logical port is a number for a service, like 22 for SSH or 443 for HTTPS."
    find: "A physical port"
quiz:
  - q: "A device sends one message that every device on the local network receives. What is this called?"
    options: ["Unicast", "Broadcast", "Routing", "Multicast"]
    answer: 1
    why: "A broadcast reaches every device on the local network and stops at the router. IPv6 uses multicast instead."
  - q: "Why is MAC filtering a weak control on its own?"
    options: ["MAC addresses can be copied in software", "It only works with IPv6", "MAC addresses change every day", "Switches can’t read MAC addresses"]
    answer: 0
    why: "An attacker can spoof an approved device’s MAC address in seconds."
  - q: "Which control makes a device prove its identity before a switch port opens?"
    options: ["MAC filtering", "Spanning Tree Protocol", "NAT", "802.1X"]
    answer: 3
    why: "802.1X checks a certificate or credentials first. It is the basis of network access control (NAC)."
flashcards:
  - q: "What is the difference between unicast and broadcast?"
    a: "Unicast goes from one device to one specific device. Broadcast goes from one device to every device on the local network."
  - q: "Do broadcasts cross routers?"
    a: "No. A router marks the edge of a broadcast domain, so broadcasts stay on the local network. IPv6 doesn’t use broadcast at all; it uses multicast instead."
  - q: "How does a switch know which port to send a frame to?"
    a: "It learns which MAC address sits behind each port by watching traffic, and stores this in its MAC address table."
  - q: "Why is MAC filtering a weak control on its own?"
    a: "MAC addresses can be changed in software in seconds, so an attacker can copy an approved device’s MAC address."
  - q: "What is the difference between a physical port and a logical port?"
    a: "A physical port is the socket you plug a cable into. A logical port is a number, such as 443 for HTTPS, that identifies a service on a device."
---

![Poster: Switches. A note passed to one friend (unicast), a megaphone in the dining hall stopped at a router gate (broadcast), a hallway monitor checking badges (port security), and a wall socket next to doors numbered 22, 53 and 443 (physical vs logical ports).](./images/switches-poster.jpg)

<p class="caption">Tap any panel to explore it.</p>

<div class="layer layer-kid">
<p class="layer-name">Like you’re 10</p>

There are two ways to share a message at school. **Unicast** is passing a folded note to **one friend**. **Broadcast** is standing in the dining hall and shouting “Free pizza in the gym!” so **everyone** hears.

A **switch** is the school’s **hallway monitor**. It knows exactly which classroom each pupil sits in, so when a note arrives it walks it straight to the right door instead of shouting it everywhere.

**Port security** is the hallway monitor checking **name badges** at each classroom door: only the pupils who belong in that room get in. But badges can be copied, which is why a clever school checks more than the badge.

</div>

<div class="layer layer-grown">
<p class="layer-name">Grown-up version</p>

**Delivery types:**

| Type | Who receives it | Example |
|---|---|---|
| **Unicast** | One specific device | Loading a web page |
| **Broadcast** | Every device on the local network | A DHCP request asking “Is there a server out there?” |
| **Multicast** | A group of devices that opted in | IPv6 neighbour discovery, video streams |

Broadcasts don’t cross routers. Each router interface marks the edge of a **broadcast domain**.

**How a switch works:** it learns which **MAC address** (a device’s hardware ID) sits behind each port and keeps a **MAC address table**. Unicast frames go only to the right port; broadcasts go out of every port.

**Hardening a switch:**

- **Port security:** limit how many MAC addresses each port will accept, optionally “sticking” to the first one it sees, and shut the port if a stranger appears.
- **MAC filtering:** allow only listed MAC addresses. Easy to defeat, because MAC addresses can be spoofed.
- **802.1X:** the strong option. A device must prove its identity, with a certificate or credentials, before the port opens. This is **network access control (NAC)**.
- **Disable unused ports** and put them in an unused VLAN, so an empty wall socket in a meeting room isn’t a free way in.

**Physical vs logical ports:**

- A **physical port** is a socket on a switch, router or computer that you plug a cable into.
- A **logical port** is a number that identifies a service on a device: 22 for SSH, 53 for DNS, 443 for HTTPS. Hardening means closing every logical port that isn’t needed.

</div>

## A real-world example

Penetration testers, hired to break in legally, often walk into an office with a small device the size of a phone charger, plug it into a spare wall socket behind a printer, and leave. If the port isn’t locked down, the device quietly gives them remote access to the internal network from the car park.

<div class="layer layer-buyer">
<p class="layer-name">Why a buyer cares</p>

- **The risk it reduces:** unknown devices joining the network, from a visitor’s laptop to an attacker’s planted device, and network-wide slowdowns from misused ports.
- **Who owns it at a company:** the network team, with security setting the policy.
- **What gets bought:** **network access control** (Cisco ISE, HPE Aruba ClearPass, Forescout) to check every device before it connects, and managed switches with security features built in.
- **A good discovery question:** *“If someone plugged an unknown device into a meeting room socket today, would anything stop it or alert you?”*

</div>

## The one thing to remember

Unicast is a note to one friend, broadcast is a shout to everyone. A switch delivers notes to the right door, and port security decides who may plug in.
