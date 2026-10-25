---
title: "DNS: the internet’s address book"
description: "DNS explained like you're 10: how a name like eli10cyber.com becomes an address, the main record types, the attacks on DNS, and why it's a security control."
pubDate: 2026-10-24
number: 6
topic: dns
chapter: "Gibson & Shelley, Ch. 3"
oneLiner: "DNS turns names people can remember, like eli10cyber.com, into the number addresses computers actually use."
draft: false
image: "/images/og/dns.jpg"
imageAlt: "Poster: DNS. A child wondering what eli10cyber.com is, a librarian walking between ROOT and .com shelves, the librarian handing over 203.0.113.5, and the librarian refusing to give out the address of a bad site."
buyerScore:
  budget: 2
  pain: 2
  pressure: 1.5
  owner: 1.5
  verdict: "Every connection starts with a DNS lookup, so blocking bad lookups is one of the cheapest, widest security controls a company can buy."
  pitch: "Protective DNS stops users reaching malicious sites before any connection is even made."
flashcards:
  - q: "What does a DNS A record do, and what does an AAAA record do?"
    a: "An A record maps a name to an IPv4 address. An AAAA record maps a name to an IPv6 address."
  - q: "Which DNS record tells the world where to deliver email for a domain?"
    a: "The MX (mail exchanger) record."
  - q: "What is a DNS resolver?"
    a: "The server that does the lookup work for you, asking other DNS servers in turn and caching the answers. Your internet provider or company usually runs one."
  - q: "Which port does DNS use?"
    a: "Port 53, mainly over UDP, with TCP for larger answers. Encrypted DNS uses 853 (DNS over TLS) or 443 (DNS over HTTPS)."
  - q: "What is protective DNS?"
    a: "A resolver that refuses to answer lookups for known malicious domains, so users and malware can’t reach them."
---

![Poster: DNS. A child wondering what eli10cyber.com is, a librarian walking between ROOT and .com shelves, the librarian handing over 203.0.113.5, and the librarian refusing to give out the address of a bad site.](./images/dns-poster.jpg)

<p class="caption">Tap the poster to zoom in.</p>

<div class="layer layer-kid">
<p class="layer-name">Like you’re 10</p>

You know your friend’s name, but to send them a letter you need their **house number**. Computers are the same: you type a name like `eli10cyber.com`, but to connect, your computer needs a number (an IP address).

**DNS is the internet’s address book.** Your computer asks, “Where does eli10cyber.com live?” and DNS answers with the number.

There isn’t one giant book. It’s more like a library: the **librarian** (called a resolver) asks the main desk where the `.com` books are, then asks the `.com` shelf where `eli10cyber.com` is, then writes the answer down so next time it can **remember it instantly**.

</div>

<div class="layer layer-grown">
<p class="layer-name">Grown-up version</p>

**DNS (Domain Name System)** is a distributed, hierarchical database that maps domain names to IP addresses and other information. A **recursive resolver** answers your query by asking, in turn, the **root** servers, the **top-level domain** servers (like `.com`) and the domain’s **authoritative** servers. It then **caches** the answer for as long as the record’s time-to-live (TTL) allows.

**Record types to know:**

| Record | Purpose |
|---|---|
| **A** | Name to IPv4 address |
| **AAAA** | Name to IPv6 address |
| **CNAME** | Alias from one name to another |
| **MX** | Where to deliver email for the domain |
| **TXT** | Free text, used for email security (SPF, DKIM, DMARC) and proving domain ownership |
| **NS** | Which servers are authoritative for the domain |

**Attacks to know:** **DNS spoofing and cache poisoning** (forged answers, fixed by DNSSEC), **domain hijacking** (taking over the domain’s registrar account), **DNS tunnelling** (smuggling data out inside DNS queries), and **DDoS** against DNS providers.

**Privacy:** plain DNS is unencrypted on port 53, so anyone on the network can see which sites you look up. **DNS over HTTPS (DoH)** and **DNS over TLS (DoT)** encrypt the lookups.

</div>

## A real-world example

In October 2016, a botnet of hacked cameras and home routers flooded the DNS provider Dyn with traffic. Dyn’s servers couldn’t answer, so for hours millions of people couldn’t reach major sites like Twitter, Netflix and Reddit, even though those sites were running perfectly. Nobody could look up their addresses.

<div class="layer layer-buyer">
<p class="layer-name">Why a buyer cares</p>

- **The risk it reduces:** almost all malware has to look up a domain to phone home, and almost every phishing link needs a lookup to load. Blocking bad lookups stops attacks very early. DNS outages also take a company offline.
- **Who owns it at a company:** the network team runs it. Security teams increasingly use it as a control.
- **What gets bought:** **protective DNS** that blocks malicious domains (Cisco Umbrella, Cloudflare Gateway, Infoblox, Akamai). In the UK, the NCSC runs a protective DNS service for the public sector. Also **managed DNS** for resilience, and **DDI** platforms.
- **A good discovery question:** *“If a laptop on your network tried to reach a known malware domain right now, what would stop it?”*

</div>

## The one thing to remember

DNS turns names into numbers. Because every connection starts with it, it’s both a single point of failure and one of the best places to block attacks.
