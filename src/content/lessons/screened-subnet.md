---
title: "Screened subnets (DMZ): the castle courtyard"
description: "Screened subnets and DMZs explained like you're 10: why public servers live in a buffer zone between two firewalls, what belongs there, and how segmentation stops one break-in from reaching everything."
pubDate: 2026-11-17
number: 12
topic: segmentation
chapter: "Gibson & Shelley, Ch. 3"
oneLiner: "Put the things strangers must visit in the castle courtyard, behind one wall. Keep everything precious in the keep, behind a second wall with its own guard."
grownLiner: "A screened subnet (DMZ) is a separate network for internet-facing servers, filtered by firewalls on both sides, so a compromised public server can’t reach the internal network directly."
draft: false
buyerScore:
  budget: 2
  pain: 2
  pressure: 1.5
  owner: 1.5
  verdict: "Segmentation projects are big-ticket and audit-driven, but they are slow, multi-year programmes that compete with every other priority."
quiz:
  - q: "Which of these belongs in a screened subnet?"
    options: ["The HR file server", "The customer database", "The public website’s web server", "The domain controller"]
    answer: 2
    why: "The screened subnet is for servers the internet must reach. Anything precious stays on the internal network, behind the second firewall."
  - q: "Why use two firewalls instead of one?"
    options: ["An attacker who takes over a DMZ server still has to get through a second firewall", "It doubles the internet speed", "It means servers no longer need patching", "It encrypts all traffic"]
    answer: 0
    why: "The internal firewall is a second, separate barrier. Using a different make of firewall for each adds even more protection."
  - q: "What is the main job of a screened subnet?"
    options: ["To hand out IP addresses", "To limit what an attacker can reach if a public server is compromised", "To speed up the website", "To replace antivirus"]
    answer: 1
    why: "It doesn’t stop public servers being attacked. It stops one break-in from spreading to everything else."
flashcards:
  - q: "What is a screened subnet?"
    a: "A separate network for servers the internet must reach, with firewalls filtering traffic on both sides. Its older name is DMZ (demilitarised zone)."
  - q: "What are the two common ways to build one?"
    a: "One firewall with three interfaces (internet, DMZ, internal), or two firewalls in a row with the DMZ in between. Two firewalls give a second barrier."
  - q: "Name three things that typically live in a screened subnet."
    a: "Public web servers, email gateways, public DNS servers, reverse proxies and VPN gateways."
  - q: "What is a jump server?"
    a: "A hardened server that admins connect to first, and from which they manage other servers. It means admin access comes through one watched door."
  - q: "What is the difference between segmentation and an air gap?"
    a: "Segmentation splits a network into zones that talk through controlled rules. An air gap means the network is physically disconnected, with no link at all."
---

<div class="layer layer-kid">
<p class="layer-name">Like you’re 10</p>

Imagine a **castle**. Visitors need to buy bread at the market stall and drop letters at the post room. But the **treasure** must stay safe.

So the castle has **two walls**. The **outer wall** has a guard who lets visitors into the **courtyard** and nowhere else. That’s where the market stall and the post room are.

Behind the courtyard is the **keep**, with a **second wall** and a **second guard**. Only a few named helpers may pass, and only through one small door.

If a thief sneaks into the courtyard pretending to be a customer, he still can’t reach the treasure. He has to beat a **second guard**, who never lets strangers through.

The courtyard is the **screened subnet**, also called the **DMZ**.

</div>

<div class="layer layer-grown">
<p class="layer-name">Grown-up version</p>

A **screened subnet** is a separate network for servers that people on the internet must reach. Firewalls filter traffic on both sides of it. Security+ SY0-701 uses the term *screened subnet*; you will still hear **DMZ** (demilitarised zone) everywhere at work.

**Three zones of trust:**

| Zone | Trust | Example |
|---|---|---|
| Internet | Untrusted | Anyone |
| Screened subnet | Semi-trusted | Web server, email gateway |
| Internal network | Trusted | Staff laptops, file servers, databases |

**Two ways to build it:**

| Design | How it works | Trade-off |
|---|---|---|
| **One firewall, three interfaces** | One firewall with a port each for the internet, the DMZ and the internal network | Cheaper and simpler, but if that one firewall falls, everything is exposed |
| **Two firewalls** | A **perimeter firewall** in front of the DMZ and an **internal firewall** behind it | A second barrier. Using two different makes means one flaw doesn’t open both |

**Typical rules:**

- Internet to DMZ: only what’s needed, such as HTTPS to the web server.
- DMZ to internal: almost nothing. For example, the web server may query one database on one port.
- Internet to internal: never directly.
- Admin access: through a **jump server**, a hardened machine admins connect to first.

**What belongs in the DMZ:** public web servers, email gateways, public DNS, reverse proxies and VPN gateways.

**What doesn’t:** file servers, databases with customer data and domain controllers. They stay inside.

**Segmentation beyond the DMZ:** the same idea applies inside the network. Separate zones for guest Wi-Fi, payments, factory machines and staff, using **VLANs** and firewall rules. **Microsegmentation** goes further, controlling traffic between individual servers. An **air gap** is the extreme version: a network with no connection at all.

**Exam traps:**

- A screened subnet does **not** make its servers safe. They still need hardening and patching. It limits how far an attacker gets.
- DMZ servers are **not trusted** by the internal network just because they belong to the company.

</div>

## A real-world example

In 2013, attackers stole a login belonging to **Target’s heating and air-conditioning contractor**, used it to get into Target’s network through a supplier system, then moved on to the **tills in its stores**. Around 40 million payment cards were stolen. US Senate investigators later highlighted that systems a contractor could reach should never have had a path to the payment systems. Better segmentation would have stopped the attack at the first wall.

Want to see a DMZ in an exam-style network? Try the [practice problem: the executive who can’t reach the internet](/practice/executive-cant-reach-internet/).

<div class="layer layer-buyer">
<p class="layer-name">Why a buyer cares</p>

- **The risk it reduces:** one hacked server, laptop or supplier login turning into a company-wide breach. Segmentation limits the **blast radius**.
- **Pressure:** payment card rules (PCI DSS) don’t strictly require segmentation, but separating card systems shrinks what auditors must check, which saves real money. Cyber insurers also ask how ransomware would spread.
- **Who owns it at a company:** network security and the CISO, with the infrastructure team doing the work.
- **What gets bought:** **firewalls** (Palo Alto Networks, Fortinet, Check Point, Cisco), **microsegmentation** (Illumio, Akamai Guardicore Segmentation), and consulting for multi-year segmentation projects.
- **A good discovery question:** *“If one of your public-facing servers was taken over tonight, what could it reach inside your network?”*

</div>

## The one thing to remember

Public things in the courtyard, precious things in the keep, and a wall with a guard on both sides.
