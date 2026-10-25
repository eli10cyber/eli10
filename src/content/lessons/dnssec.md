---
title: "DNSSEC: a wax seal on the internet’s address book"
description: "DNSSEC explained like you're 10: what it is, how the chain of trust works, what it doesn't do, and why companies care."
pubDate: 2026-10-17
number: 7
topic: dnssec
chapter: "Gibson & Shelley, Ch. 3 (protocols)"
oneLiner: "DNSSEC puts a seal on the internet’s address book, so you know the address you were given is real and nobody swapped it on the way."
grownLiner: "DNSSEC signs DNS records with RRSIG, DNSKEY and DS records, so a validating resolver can prove an answer is authentic and unaltered. It does not encrypt anything."
buyerScore:
  budget: 0.5
  pain: 1
  pressure: 1.5
  owner: 1
  verdict: "A checkbox feature inside managed DNS. Important, but rarely bought on its own."
  pitch: "Proves customers are reaching your real website, not a forged copy."
flashcards:
  - q: "What does DNSSEC add to DNS?"
    a: "Digital signatures. They let a resolver check that a DNS answer is authentic and hasn’t been changed."
  - q: "Does DNSSEC encrypt your DNS lookups?"
    a: "No. It protects integrity and authenticity, not confidentiality. Anyone on the path can still see what you looked up. Encrypted DNS (DNS over HTTPS or TLS) handles privacy."
  - q: "Which record in the parent zone links it to the child zone’s key?"
    a: "The DS (Delegation Signer) record. It holds a hash of the child’s key, which builds the chain of trust from the root down."
  - q: "Which attack is DNSSEC mainly designed to stop?"
    a: "DNS spoofing and cache poisoning, where an attacker slips a forged answer into a resolver so people are sent to the wrong server."
  - q: "Which record holds the actual signature on a set of DNS records?"
    a: "RRSIG. The public key used to check it is published in a DNSKEY record."
image: "/images/og/dnssec.jpg"
imageAlt: "Poster: DNSSEC. A sneaky person swapping a page in the address book, an intact and a broken wax seal, books labelled ROOT and .com passing seals down a chain, and a glass envelope that is sealed but readable."
---

![Poster: DNSSEC. A sneaky person swapping a page in the address book, an intact and a broken wax seal, books labelled ROOT and .com passing seals down a chain, and a glass envelope that is sealed but readable.](./images/dnssec-poster.jpg)

<p class="caption">Tap the poster to zoom in.</p>

<div class="layer layer-kid">
<p class="layer-name">Like you’re 10</p>

The internet has a giant **address book** called DNS. When you type `eli10cyber.com`, your computer asks the address book, “Where does this website live?” and gets back a house number (an IP address).

But what if a sneaky person **swapped the page** in the address book? You’d go to *their* house instead, and it might look exactly like the real one.

**DNSSEC adds a wax seal** to every answer. Only the real owner can make that seal, but anyone can check it. If the seal is broken or missing, your computer says “Nope, that’s not trustworthy” and refuses the fake address.

And who vouches that the seal itself is real? The **parent** book does. The `.com` book says “this is the real seal for eli10cyber.com”, and the **root** book at the very top says “this is the real seal for `.com`”. Everyone checks the chain all the way up.

</div>

![Three address books, root, .com and eli10cyber.com, each with a wax seal. Each parent vouches for its child's seal and the resolver checks every seal.](/images/dnssec-chain.svg)

<p class="caption">The chain of trust: each level vouches for the seal below it. Tap to enlarge.</p>

<div class="layer layer-grown">
<p class="layer-name">Grown-up version</p>

**DNS Security Extensions (DNSSEC)** add cryptographic signatures to DNS data so that a **validating resolver** can confirm two things: the answer came from the authoritative source (*authenticity*), and it wasn’t altered in transit (*integrity*).

The key record types:

| Record | What it does | In the kid version |
|---|---|---|
| **RRSIG** | The digital signature over a set of DNS records | The wax seal |
| **DNSKEY** | The zone’s public keys, used to check signatures | The stamp pattern everyone can compare against |
| **DS** | A hash of the child zone’s key, stored in the **parent** zone | The parent vouching for the child’s seal |
| **NSEC / NSEC3** | Signed proof that a name *doesn’t* exist | A sealed note saying “no such page” |

This creates a **chain of trust** from the root zone (signed since 2010), through the top-level domain (`.com`), down to your domain. If any link fails to validate, the resolver treats the answer as bogus and the lookup fails.

**What DNSSEC does *not* do** (a classic exam trap):

- It does **not encrypt** DNS. Lookups are still visible. For privacy, you need DNS over HTTPS (DoH) or DNS over TLS (DoT).
- It does **not** stop DDoS attacks on DNS servers.
- It does **not** protect you if the attacker controls your registrar account. They could simply change the real records. That’s why registrar accounts need strong MFA.

**Why it exists:** in 2008, researcher Dan Kaminsky showed how easily attackers could poison resolver caches at scale. DNSSEC is the long-term fix for that class of attack.

</div>

## What I did on my own site

When I registered `eli10cyber.com` on Cloudflare, turning DNSSEC on took one click in the domain’s settings. Cloudflare then sent the DS record up to the `.com` registry for me. Anyone can check it: look the domain up on [lookup.icann.org](https://lookup.icann.org/) and the DNSSEC field shows **signedDelegation**.

So this very website is protected by the thing this lesson is about.

<div class="layer layer-buyer">
<p class="layer-name">Why a buyer cares</p>

- **The risk it reduces:** customers being silently redirected to a fake site, which leads to credential theft, payment fraud and brand damage. For banks, retailers and government services, that’s a board-level worry.
- **Who owns it at a company:** usually the network or infrastructure team (often called the DNS or “DDI” team), with input from security. Domain registration itself sometimes sits with legal or marketing, which is how important domains get forgotten.
- **What gets bought:** DNSSEC itself is rarely sold on its own. It’s a feature inside bigger purchases: **managed DNS** (Cloudflare, Akamai, AWS Route 53, Azure DNS), **DDI platforms** that combine DNS, DHCP and IP management (Infoblox, BlueCat, EfficientIP), and **enterprise registrars** with domain-locking and brand protection.
- **Compliance angle:** US federal agencies have been required to sign their `.gov` domains with DNSSEC since 2008, and it appears in many security baselines.

**A good discovery question if you sell in this space:** *“If someone hijacked DNS for your main customer login domain this afternoon, how quickly would you know, and who would get the call?”*

</div>

## The one thing to remember

DNSSEC answers **“Is this address real?”**, not **“Can anyone see what I looked up?”** Integrity, not confidentiality.
