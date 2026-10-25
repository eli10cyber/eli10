---
title: "Broadcast storms and loops: STP and BPDU guard"
description: "Broadcast storms explained like you're 10: how one extra cable can freeze a whole network, how Spanning Tree Protocol stops loops, and what BPDUs and BPDU guard do."
pubDate: 2026-10-25
number: 3
topic: network-loops
chapter: "Gibson & Shelley, Ch. 3"
oneLiner: "One extra cable can make messages run round in circles until the whole network jams. Spanning tree switches off the extra path before that happens."
grownLiner: "A switching loop makes broadcast frames circulate forever, because Ethernet frames have no time-to-live. Spanning Tree Protocol blocks redundant paths, and BPDU guard shuts ports where rogue switches appear."
draft: false
image: "/images/og/network-loops.jpg"
imageAlt: "Poster: Broadcast storms and loops. A corridor that loops into a circle, children running round shouting in a storm, a caretaker locking one door marked BLOCKED (spanning tree), and an alarm when a toy robot is plugged into a socket (BPDU guard)."
buyerScore:
  budget: 0.5
  pain: 1
  pressure: 0
  owner: 0.5
  verdict: "Essential engineering that comes built into every business switch. Nobody buys it, but everyone needs it switched on."
posterGrid: [1.7, 49.3, 50.6, 98.3, 12.7, 52.2, 54.1, 98.0]
panels:
  - title: "One Cable Too Many"
    note: "Two paths between switches, added for resilience or by accident, can form a loop."
    find: "Switching loops"
  - title: "The Broadcast Storm"
    note: "In a loop, broadcasts multiply forever because Ethernet frames have no time-to-live. The network freezes within seconds."
    find: "Why loops are so destructive"
  - title: "Spanning Tree"
    note: "STP blocks redundant ports so only one active path remains, and reopens a spare if the active one fails."
    find: "IEEE 802.1D"
  - title: "BPDU Guard"
    note: "A normal PC never sends BPDUs. If one arrives on a user port, BPDU guard shuts that port down."
    find: "err-disables"
flashcards:
  - q: "What causes a broadcast storm?"
    a: "A switching loop. Broadcast frames go out of every port, travel round the loop and come back, multiplying until they swamp the network."
  - q: "Why don’t looping frames ever die out on their own?"
    a: "Ethernet frames have no time-to-live counter, unlike IP packets, so a switch will forward them round a loop forever."
  - q: "What does Spanning Tree Protocol (STP) do?"
    a: "It finds redundant paths between switches and blocks enough ports to leave exactly one active path, preventing loops while keeping spare links ready."
  - q: "What is a BPDU?"
    a: "A Bridge Protocol Data Unit: the message switches running spanning tree send each other to map the network and agree which ports to block."
  - q: "What does BPDU guard do?"
    a: "It shuts down a port meant for a normal device, like a PC, if a BPDU arrives on it. That means someone has plugged in a switch where none should be."
---

![Poster: Broadcast storms and loops. A corridor that loops into a circle, children running round shouting in a storm, a caretaker locking one door marked BLOCKED (spanning tree), and an alarm when a toy robot is plugged into a socket (BPDU guard).](./images/network-loops-poster.jpg)

<p class="caption">Tap any panel to explore it.</p>

<div class="layer layer-kid">
<p class="layer-name">Like you’re 10</p>

Imagine two school corridors that join up into a **circle**. A pupil runs down one, shouting a message, and comes out the other end. Someone hears it and shouts it again. Soon there are dozens of pupils running round and round, all shouting, and **nobody can hear anything else**. That’s a **broadcast storm**.

The fix is the **caretaker**. Every morning the caretakers on each floor pass **notes** to each other to draw a map of the corridors. If they spot a circle, they **lock one door**, so there’s only ever one way round. If the main corridor gets blocked, they unlock the spare door.

Those notes are called **BPDUs**. And if a pupil sneaks in their own toy caretaker, **BPDU guard** spots the fake notes and locks that classroom door straight away.

</div>

<div class="layer layer-grown">
<p class="layer-name">Grown-up version</p>

**Switching loops** happen when there is more than one path between switches, often added on purpose for resilience, or by accident when someone connects two wall sockets with one cable.

**Why loops are so destructive:** a switch sends broadcasts out of every port. In a loop they come back and get sent out again, multiplying each time. Unlike IP packets, **Ethernet frames have no time-to-live**, so they never expire. Within seconds the **broadcast storm** uses all the bandwidth and the switches’ processing power, and the network freezes.

**Loop prevention:**

| Tool | What it does |
|---|---|
| **STP** (Spanning Tree Protocol, IEEE 802.1D) | Switches elect a root switch and block redundant ports so only one active path remains. Blocked links take over if the active one fails |
| **RSTP** (Rapid STP, 802.1w) | The same idea, recovering in seconds instead of up to about a minute |
| **BPDU** (Bridge Protocol Data Unit) | The messages switches exchange to build the spanning tree |
| **BPDU guard** | Shuts down (err-disables) an edge port if a BPDU arrives, because a PC should never send one |
| **Root guard** | Stops a newly connected switch taking over as the root |

**The security angle:** an attacker who plugs in a switch, or software pretending to be one, can send BPDUs to become the root and pull traffic through their device, or simply crash the network. BPDU guard on every user-facing port stops both.

</div>

## A real-world example

In November 2002, Beth Israel Deaconess Medical Center in Boston lost its network for about four days. Investigators traced the meltdown to spanning tree failures on a network that had grown too large and flat. Staff went back to paper records and runners carrying messages between departments, and the hospital rebuilt its network design afterwards.

<div class="layer layer-buyer">
<p class="layer-name">Why a buyer cares</p>

- **The risk it reduces:** sudden network-wide outages, from an accidental cable or a deliberate attack, that stop every system at once.
- **Who owns it at a company:** the network team. It rarely reaches the security budget until something breaks.
- **What gets bought:** nothing separately. Loop prevention is built into business switches. The spend shows up in network design work and in monitoring that spots a storm early.
- **A good discovery question:** *“If someone looped a cable between two meeting room sockets, how quickly would the network recover, and who would find out first?”*

</div>

## The one thing to remember

Loops make broadcasts multiply forever. Spanning tree blocks the extra path, BPDUs are the messages it uses, and BPDU guard shuts out anyone faking them.
