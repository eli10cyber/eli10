---
title: "Firewalls: the security guards of the network"
description: "Firewalls explained like you're 10: packet filtering, stateful firewalls, next-generation firewalls (NGFW), web application firewalls (WAF), implicit deny, and what fail-open and fail-closed mean."
pubDate: 2026-11-17
number: 14
topic: firewalls
chapter: "Gibson & Shelley, Ch. 3"
oneLiner: "Firewalls are the guards at the gate. The basic one reads the envelope, the smart one remembers who was invited, the super scanner looks inside the bag, and the website bodyguard watches one door very closely."
grownLiner: "Packet-filtering firewalls check addresses and ports, stateful firewalls track connections, next-generation firewalls inspect applications and content, and web application firewalls protect websites from attacks like SQL injection."
draft: false
image: "/images/og/firewalls.jpg"
imageAlt: "Poster: Firewalls, the security guards of the network. Five panels: a clerk who only reads envelope addresses (packet filtering), a bouncer with a list of active conversations (stateful), an X-ray scanner finding malware in a bag (next-generation), a guard protecting the eli10cyber.com website from a malicious script (WAF), and a guard turning away everyone not on the allowed list (implicit deny)."
buyerScore:
  budget: 2.5
  pain: 2
  pressure: 2
  owner: 2
  verdict: "One of the biggest and most established security budgets. Every company has firewalls, every auditor checks them, and they are replaced on a regular cycle."
  pitch: "The gate every attack has to pass and every auditor inspects: firewalls are the core of the network security budget."
quiz:
  - q: "Which firewall automatically lets in replies to a conversation started from inside, but drops uninvited traffic?"
    options: ["Packet-filtering firewall", "Stateful firewall", "Web application firewall", "None of them"]
    answer: 1
    why: "A stateful firewall keeps a state table of active connections, so it knows which incoming packets are replies."
  - q: "A company wants to block SQL injection attacks against its online shop. What should sit in front of the web server?"
    options: ["A packet-filtering firewall", "A DHCP server", "A web application firewall (WAF)", "A switch with port security"]
    answer: 2
    why: "A WAF understands web traffic and looks for web-specific attacks like SQL injection and cross-site scripting."
  - q: "A firewall crashes and all traffic stops until it is fixed. What is that called?"
    options: ["Fail-closed", "Fail-open", "Implicit allow", "Port forwarding"]
    answer: 0
    why: "Fail-closed puts security first: nothing gets through while the firewall is down. Fail-open keeps traffic flowing but unprotected."
flashcards:
  - q: "What does a packet-filtering (stateless) firewall check?"
    a: "Only header information: source and destination IP address, port and protocol. It doesn’t look inside the packet or remember connections."
  - q: "What is a state table?"
    a: "The list a stateful firewall keeps of active connections, so it can allow replies and drop packets that don’t belong to any conversation."
  - q: "What can a next-generation firewall do that older firewalls can’t?"
    a: "Inspect traffic at Layer 7: identify applications, look inside the content with deep packet inspection, and usually block malware and intrusions too."
  - q: "NGFW vs WAF?"
    a: "An NGFW protects a whole network and its users. A WAF protects specific web applications from web attacks like SQL injection and XSS."
  - q: "Fail-open vs fail-closed?"
    a: "Fail-open lets traffic through unchecked when the device fails. Fail-closed blocks everything. Security devices usually fail closed."
---

![Poster: Firewalls, the security guards of the network. Five panels: a clerk who only reads envelope addresses (packet filtering), a bouncer with a list of active conversations (stateful), an X-ray scanner finding malware in a bag (next-generation), a guard protecting the eli10cyber.com website from a malicious script (WAF), and a guard turning away everyone not on the allowed list (implicit deny).](./images/firewalls-poster.jpg)

<p class="caption">Tap the poster to zoom in.</p>

<div class="layer layer-kid">
<p class="layer-name">Like you’re 10</p>

Imagine a giant wall around your treehouse. **Firewalls are the guards at the gate**, checking everyone who comes in or goes out. There are different kinds of guard:

**The basic guard (packet filtering)** is like a mailroom clerk who only reads the **To** and **From** on the envelope. He never opens it, so a trickster can write a fake return address and slip a nasty note inside.

**The smart bouncer (stateful)** keeps a **notepad**. If you shout out of the window, “Hey Jimmy, come in!”, he writes Jimmy down and lets him in when he arrives. A random kid who wasn’t invited gets turned away.

**The super scanner (next-generation)** is an **X-ray machine**. It doesn’t just check your badge. It looks inside your bag for a water balloon disguised as a lunchbox.

**The website bodyguard (WAF)** stands next to the school’s **noticeboard**. Its only job is to stop bullies pinning up fake notices or scribbling over the real ones.

And every guard follows **the golden rule**: if you’re not on the list, **the answer is no**.

</div>

<div class="layer layer-grown">
<p class="layer-name">Grown-up version</p>

A **firewall** allows or blocks traffic based on rules. The types build on each other:

| Type | What it looks at | Good at, and blind to |
|---|---|---|
| **Packet filtering** (stateless) | IP addresses, ports, protocol | Fast and simple. Can’t see inside packets or tell a reply from a new connection |
| **Stateful** | The above, plus a **state table** of active connections | Lets replies in and drops uninvited traffic. Still can’t see what’s inside |
| **Next-generation (NGFW)** | Applications and content, using **deep packet inspection** | Knows “this is Dropbox”, not just “port 443”, and usually blocks intrusions and malware. Has to **decrypt** HTTPS to see inside |
| **Web application firewall (WAF)** | Web requests to one site or app | Blocks **SQL injection**, **cross-site scripting** and other web attacks. Protects websites only |

**Exam words to know:**

- **Layer 4 vs Layer 7:** a Layer 4 firewall decides on addresses and ports. A Layer 7 firewall understands the application itself.
- **UTM (unified threat management):** one box that combines firewall, intrusion prevention, antivirus and web filtering. Popular with smaller companies.
- **Network vs host-based:** network firewalls guard the gates between networks. Host-based firewalls, like the one built into Windows, guard a single device.
- **Fail-open vs fail-closed:** if the firewall breaks, does traffic flow unchecked (open) or stop completely (closed)? Security devices normally fail closed.
- **Implicit deny:** anything not explicitly allowed is blocked. See the [routers lesson](/lessons/routers-acls/) for how rule order works.

**Where firewalls sit:** at the edge of the network, on both sides of a [screened subnet](/lessons/screened-subnet/), between internal zones, and as software on every laptop and server. In the cloud they’re often called **security groups**.

</div>

## A real-world example

In 2019, an attacker stole the personal data of about **106 million Capital One customers** in the US and Canada. The way in was a **web application firewall that had been set up wrongly** in Capital One’s cloud environment. It let the attacker trick a server into handing over access credentials, which opened the storage holding customer data. US regulators fined Capital One $80 million. A firewall is only as good as its configuration.

<div class="layer layer-buyer">
<p class="layer-name">Why a buyer cares</p>

- **The risk it reduces:** attackers reaching systems they shouldn’t, malware coming in, data going out, and web attacks on public sites.
- **Pressure:** payment card rules (PCI DSS) require network security controls between trusted and untrusted networks, and an automated solution protecting public web apps, which is typically a WAF. Auditors and cyber insurers ask about both.
- **Who owns it at a company:** the network security team, reporting to the CISO.
- **What gets bought:** **NGFWs** (Palo Alto Networks, Fortinet, Check Point, Cisco), **WAFs** (Cloudflare, Akamai, F5, Imperva, AWS WAF), and **firewall policy management** to keep thousands of rules under control. Firewalls are replaced every five to seven years, which creates a predictable buying cycle.
- **A good discovery question:** *“Can your firewalls see inside encrypted traffic, or are they still only reading the envelope?”*

</div>

## The one thing to remember

Packet filters read the envelope, stateful firewalls remember the conversation, NGFWs look inside, WAFs guard websites, and everything not allowed is denied.
