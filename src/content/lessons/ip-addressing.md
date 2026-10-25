---
title: "IPv4 vs IPv6: why the internet ran out of house numbers"
description: "IPv4 and IPv6 explained like you're 10: what an IP address is, why IPv4 ran out, what IPv6 changes, and why it matters for security."
pubDate: 2026-10-24
number: 1
topic: ip-addressing
chapter: "Gibson & Shelley, Ch. 3"
oneLiner: "Every device on the internet needs a house number. The old system (IPv4) ran out of numbers, so we built a new one (IPv6) that never will."
grownLiner: "IPv4 uses 32-bit addresses, about 4.3 billion in total and now exhausted, so NAT lets many devices share one public address. IPv6 uses 128-bit addresses and removes that shortage."
draft: false
image: "/images/og/ip-addressing.jpg"
imageAlt: "Poster: IPv4 vs IPv6. A postman at a house numbered 203.0.113.5, a full street of IPv4 houses, NAT as one front door shared by many children, and endless IPv6 plots with a house numbered 2001:db8::5."
buyerScore:
  budget: 1
  pain: 0.5
  pressure: 0.5
  owner: 1
  verdict: "Pure plumbing. It matters to network teams, but nobody buys “IPv6” as a security product."
posterGrid: [1.7, 49.3, 50.6, 98.3, 12.7, 52.2, 54.1, 98.0]
panels:
  - title: "What is an IP Address?"
    note: "An IP address identifies a device on a network so data can be delivered to it, like a house number for the postman."
    find: "identifies a device"
  - title: "IPv4: The Full Street"
    note: "IPv4 addresses are 32 bits long, which allows about 4.3 billion. The last free blocks were handed out from 2011 onwards."
    find: "global pool of free IPv4"
  - title: "NAT: One Front Door"
    note: "NAT lets a whole home or office share one public IPv4 address. It hides internal addresses, but it is not a firewall."
    find: "NAT is not a firewall"
  - title: "IPv6: Endless Plots"
    note: "IPv6 addresses are 128 bits long, about 3.4 × 10³⁸ of them. Networks running both versions must watch both."
    find: "Dual stack"
flashcards:
  - q: "How long is an IPv4 address, and how is it written?"
    a: "32 bits, written as four numbers from 0 to 255 separated by dots, like 192.168.1.5. That allows about 4.3 billion addresses."
  - q: "How long is an IPv6 address, and how is it written?"
    a: "128 bits, written as eight groups of hexadecimal separated by colons, like 2001:db8::5. A double colon (::) stands in for a run of zero groups."
  - q: "What is NAT, and why did IPv4 need it?"
    a: "Network Address Translation lets many devices share one public IPv4 address. It stretched IPv4’s limited supply as the internet grew."
  - q: "Why can IPv6 create a security blind spot?"
    a: "It is often switched on by default in operating systems. If the security team only monitors and filters IPv4, attackers can move over IPv6 unseen."
---

![Poster: IPv4 vs IPv6. A postman at a house numbered 203.0.113.5, a full street of IPv4 houses, NAT as one front door shared by many children, and endless IPv6 plots with a house numbered 2001:db8::5.](./images/ip-addressing-poster.jpg)

<p class="caption">Tap any panel to explore it.</p>

<div class="layer layer-kid">
<p class="layer-name">Like you’re 10</p>

Every house on your street has a **number** so the postman knows where to deliver. Every computer, phone and smart TV on the internet needs a number too. That number is its **IP address**.

The old numbering system, **IPv4**, was invented when only a few big computers were online. It had room for about four billion numbers. That sounded like plenty, until everyone got a phone, a tablet, a games console and a smart doorbell. **The numbers ran out.**

So engineers built **IPv6**, a new system with numbers so long that every grain of sand on Earth could have its own address, with plenty left over.

</div>

<div class="layer layer-grown">
<p class="layer-name">Grown-up version</p>

An **IP address** identifies a device’s network interface so packets can be routed to it.

| | IPv4 | IPv6 |
|---|---|---|
| Length | 32 bits | 128 bits |
| Written as | Four decimal numbers, `203.0.113.5` | Eight hex groups, `2001:db8::5` |
| How many | About 4.3 billion | About 3.4 × 10³⁸ |
| Getting an address | Manually or via DHCP | Manually, DHCPv6, or the device builds its own (SLAAC) |
| Private ranges | `10.x`, `172.16–31.x`, `192.168.x` | Unique local addresses (`fd00::/8`) |

**Why IPv4 survived so long:** **NAT** (Network Address Translation) lets a whole office or home share one public IPv4 address. The global pool of free IPv4 addresses still ran dry: the central registry handed out its last blocks in 2011, and Europe’s registry ran out in 2019. Today, spare IPv4 addresses are bought and sold.

**Security points worth knowing for the exam:**

- **NAT is not a firewall.** It hides internal addresses, but it is not a security control by itself.
- **Dual stack** means a network runs IPv4 and IPv6 side by side. Firewall rules, monitoring and logging must cover both, or IPv6 becomes an unwatched side door.
- IPv6 did originally make **IPsec** support mandatory, but using it was never required. Don’t assume IPv6 traffic is encrypted.

</div>

## A real-world example

The device you’re reading this on almost certainly has both an IPv4 and an IPv6 address right now. Many mobile networks now run mainly on IPv6, and translate to IPv4 only when a website still needs it.

<div class="layer layer-buyer">
<p class="layer-name">Why a buyer cares</p>

- **The risk it reduces:** blind spots. An organisation that monitors only IPv4 can miss attackers using IPv6, and messy address records slow down every investigation.
- **Who owns it at a company:** the network team. Security cares when an incident needs to trace “which device had this address at 2am?”
- **What gets bought:** IP address management, usually inside **DDI** platforms (DNS, DHCP and IP address management combined), and firewalls that inspect both IPv4 and IPv6.
- **A good discovery question:** *“Do your firewall rules and monitoring cover IPv6 as thoroughly as IPv4, or is it switched on and unwatched?”*

</div>

## The one thing to remember

IPv4 is a short house number that ran out. IPv6 is a very long one that won’t. Both must be watched.
