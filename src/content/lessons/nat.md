---
title: "NAT and PAT: one phone number for the whole school"
description: "NAT explained like you're 10: static NAT, dynamic NAT and PAT, port forwarding, private address ranges, and why NAT hides addresses but is not a security guard."
pubDate: 2026-11-17
number: 13
topic: nat
chapter: "Gibson & Shelley, Ch. 3"
oneLiner: "The school has hundreds of pupils but one phone number. The receptionist gives every call its own extension code, so each answer finds its way back to the right desk."
grownLiner: "NAT rewrites private IP addresses into public ones at the router. Static NAT maps one-to-one, dynamic NAT lends addresses from a pool, and PAT shares one public address by giving every connection its own port."
draft: false
buyerScore:
  budget: 0.5
  pain: 0.5
  pressure: 0.5
  owner: 0.5
  verdict: "Built into every router and firewall, so nobody buys NAT. But it shapes how firewalls, logging and investigations have to work."
quiz:
  - q: "A company’s web server must always be reachable at the same public address. Which type of NAT fits?"
    options: ["Dynamic NAT", "Static NAT", "PAT", "No NAT at all"]
    answer: 1
    why: "Static NAT links one private address to one public address permanently, so the outside world always knows where to find the server."
  - q: "How does PAT let hundreds of devices share one public IP address?"
    options: ["It gives each connection its own port number", "It takes turns, one device at a time", "It encrypts the traffic", "It converts everything to IPv6"]
    answer: 0
    why: "The router keeps a table of which port belongs to which private address and connection, so every reply goes back to the right device."
  - q: "An attack log shows a company’s public IP address, and the company uses PAT. What else does an investigator need to find the device?"
    options: ["The router’s MAC address", "The DNS server’s address", "The source port and the exact time", "Nothing else"]
    answer: 2
    why: "Hundreds of devices share that address. Only the port plus an accurate timestamp, matched against the router’s NAT logs, points to one device. That’s why NTP matters."
flashcards:
  - q: "What are the three private IPv4 ranges?"
    a: "10.0.0.0/8, 172.16.0.0/12 and 192.168.0.0/16. They work inside networks but are never routed on the internet."
  - q: "Static NAT vs dynamic NAT?"
    a: "Static NAT permanently links one private address to one public address. Dynamic NAT lends public addresses from a pool while a device needs one."
  - q: "What is PAT, also called NAT overload?"
    a: "Many private addresses share one public address, with the router giving each connection its own port number to tell them apart."
  - q: "What is port forwarding?"
    a: "A fixed rule that sends traffic arriving on one public port to one internal device, such as public port 443 to the web server."
  - q: "Is NAT a security control?"
    a: "Not on its own. It hides internal addresses, but deciding what may come in is a firewall’s job."
---

<div class="layer layer-kid">
<p class="layer-name">Like you’re 10</p>

Inside the school, every desk has its own **room number**. But the outside world can’t dial room numbers. They only know the school’s phone number. So the **receptionist** sits in the middle and connects calls in and out. That receptionist is **NAT**.

There are three ways she can do it:

**The VIP hotline (static NAT).** The head teacher has her **own permanent outside number**. Anyone who dials it is always put straight through to her desk.

**The badge bucket (dynamic NAT).** There’s a **bucket of outside badges** by the door. A pupil heading out grabs whichever badge is free and drops it back when they return. If the bucket is empty, the next pupil has to wait.

**Extension codes (PAT).** The whole school shares **one phone number**. Every time someone starts a call, the receptionist writes down a new **extension code**, like 5042. When the answer comes back for 5042, she knows exactly which desk it’s for. If one pupil makes three calls, they get three codes.

The receptionist is not a **security guard**, though. She connects calls. Deciding who is allowed in is someone else’s job.

</div>

<div class="layer layer-grown">
<p class="layer-name">Grown-up version</p>

**NAT (Network Address Translation)** rewrites addresses as traffic passes through a router or firewall, usually turning **private IP addresses** into public ones.

**Private IPv4 ranges** (an exam favourite): `10.0.0.0/8`, `172.16.0.0/12` and `192.168.0.0/16`. Anyone can use them inside a network, but they are never routed on the internet.

| Type | How it maps | Typical use |
|---|---|---|
| **Static NAT** | One private address ↔ one public address, permanently. The outside **can** start a connection | Servers that must be reachable, such as a web server in the DMZ |
| **Dynamic NAT** | Private addresses borrow from a **pool** of public addresses. Only inside devices start connections | Older setups. When the pool runs out, new devices can’t get out |
| **PAT** (NAT overload) | Many private addresses share **one** public address, told apart by port number | Almost every home and office |

**How PAT keeps track:** the router keeps a **translation table**. Each connection gets its own public port:

| Inside (private) | Outside (public) |
|---|---|
| `192.168.1.20:51000` | `203.0.113.5:40001` |
| `192.168.1.21:51000` | `203.0.113.5:40002` |
| `192.168.1.20:51001` | `203.0.113.5:40003` |

With around 65,000 ports per address, one public IP can carry tens of thousands of connections at once.

**Port forwarding** (also called static PAT) is the way in: a fixed rule such as “anything arriving on public port 443 goes to the web server at `192.168.10.80`”.

**The security angle:**

- **NAT is not a firewall.** It hides internal addresses, and unsolicited traffic usually has nowhere to go. But a firewall’s rules decide what is allowed.
- **PAT complicates investigations.** A public IP address alone doesn’t identify a device. You need the **port and the exact time**, matched against NAT logs. Internet providers use the same trick at huge scale, called **carrier-grade NAT (CGNAT)**.
- **IPv6 doesn’t need NAT**, so every device can have a public address. That makes firewall rules even more important.
- **Exam extra:** IPsec in AH mode breaks through NAT, because AH protects the address fields that NAT changes. ESP with NAT traversal works.

</div>

## A real-world example

In November 2020, security researcher **Samy Kamkar** showed **NAT Slipstreaming**. Simply visiting a booby-trapped website could trick many home and office routers into opening a port straight to the visitor’s computer. It abused a router feature that helps internet calls get through NAT. Browser makers blocked the trick, then researchers at Armis found a second version in 2021 that could reach other devices on the network, and the browsers were patched again. The lesson: NAT is plumbing, not a lock.

<div class="layer layer-buyer">
<p class="layer-name">Why a buyer cares</p>

- **The risk it reduces:** almost none directly. NAT is a by-product of the IPv4 shortage, not a security product.
- **Where it matters commercially:** firewalls do NAT and filtering together, so it comes up in every firewall deal. Security tools that collect logs (SIEM) must keep NAT logs, or investigators can’t trace an attack back to a device. And because spare IPv4 addresses now trade for tens of dollars each, companies avoid buying more by using PAT.
- **Who owns it at a company:** the network or firewall team.
- **What gets bought:** nothing separately. It comes with firewalls and routers.
- **A good discovery question:** *“If an outside party told you an attack came from your public IP address at 3:14 last Tuesday, could you work out which device it was?”*

</div>

## The one thing to remember

Static NAT is a permanent hotline, dynamic NAT is a badge bucket, and PAT is one number with extension codes. NAT hides addresses, but a firewall decides who gets in.
