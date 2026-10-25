---
title: "Internet calls: VoIP, SIP, RTP and SRTP"
description: "VoIP, SIP, RTP and SRTP explained like you're 10: how a phone call travels over the internet, which protocol does which job, and how calls get eavesdropped or abused."
pubDate: 2026-10-24
number: 11
topic: voip
chapter: "Gibson & Shelley, Ch. 3"
oneLiner: "An internet call needs a doorbell to start it (SIP), a conveyor belt to carry your voice (RTP), and a locked tunnel so nobody listens in (SRTP)."
grownLiner: "SIP sets up and ends calls, RTP carries the audio over UDP, and SRTP encrypts and authenticates that audio. A secure call protects both the signalling and the media."
draft: false
image: "/images/og/voip.jpg"
imageAlt: "Poster: SIP, RTP and SRTP. Tin-can phones joined by the internet, a doorbell asking want to talk, a conveyor belt of numbered speech bubbles, and the same belt inside a locked glass tunnel."
buyerScore:
  budget: 1.5
  pain: 1
  pressure: 0.5
  owner: 1
  verdict: "Companies spend heavily on calling platforms, but the security piece is usually a feature inside them rather than a separate purchase."
flashcards:
  - q: "What does SIP do in a VoIP call?"
    a: "It sets up, manages and ends the call: ringing the other side, agreeing how to talk, and hanging up. It doesn’t carry the voice itself."
  - q: "What does RTP do?"
    a: "It carries the actual audio and video in real time. Each packet has a sequence number and timestamp so the receiver can put them back in order."
  - q: "What is the difference between RTP and SRTP?"
    a: "SRTP is RTP with encryption, message authentication and replay protection, so calls can’t be listened to or tampered with."
  - q: "Which ports does SIP use?"
    a: "5060 for unencrypted SIP and 5061 for SIP over TLS (SIPS)."
  - q: "What is toll fraud?"
    a: "When attackers break into a company’s phone system and use it to make large numbers of expensive international or premium-rate calls, leaving the company with the bill."
---

![Poster: SIP, RTP and SRTP. Tin-can phones joined by the internet, a doorbell asking want to talk, a conveyor belt of numbered speech bubbles, and the same belt inside a locked glass tunnel.](./images/voip-poster.jpg)

<p class="caption">Tap the poster to zoom in.</p>

<div class="layer layer-kid">
<p class="layer-name">Like you’re 10</p>

Remember the **tin-can telephone**, two cans joined by a string? **VoIP** is the same idea, except the string is the internet, and your voice is chopped into **tiny pieces** that race across it and get stuck back together on the other side.

Three helpers make it work:

**SIP is the doorbell.** It rings your friend’s phone, asks “Do you want to talk?”, and when you’re done it says goodbye and hangs up.

**RTP is the conveyor belt.** Once you’re talking, it carries the pieces of your voice, each with a **number stamped on it**, so your friend’s phone can put them in the right order.

**SRTP is the conveyor belt inside a locked glass tunnel.** Your voice still travels the same way, but anyone peeking in only sees **scrambled pieces**.

</div>

<div class="layer layer-grown">
<p class="layer-name">Grown-up version</p>

**VoIP (Voice over IP)** carries voice calls over IP networks instead of traditional phone lines. A call uses two kinds of traffic: **signalling** to set it up, and **media** to carry the sound.

| Protocol | Job | Port | Secure version |
|---|---|---|---|
| **SIP** (Session Initiation Protocol) | Signalling: start, change and end the call | 5060 | SIP over TLS (SIPS), 5061 |
| **RTP** (Real-time Transport Protocol) | Media: carries the audio and video, usually over UDP | Dynamic, agreed during setup | **SRTP** |
| **SRTP** (Secure RTP) | Encrypted, authenticated media with replay protection | Same as RTP | — |

**Two things people get wrong:**

- **RTP doesn’t guarantee delivery or order.** It runs over UDP and stamps each packet with a sequence number and timestamp so the receiver can reorder and time them. Packets that arrive too late are simply dropped, which is better than a delayed conversation.
- **Encrypting SIP alone isn’t enough.** SIPS protects the call setup, but the voice itself is only protected if the media uses SRTP. A secure call needs both.

**Threats to know:** eavesdropping on unencrypted calls, **toll fraud** through hacked phone systems, **caller ID spoofing** behind phone scams (vishing), and denial of service against the phone system.

</div>

## A real-world example

In 2023, attackers broke into **3CX**, a company that makes calling software used by hundreds of thousands of businesses. They slipped malware into an official 3CX desktop app update, so customers installed it themselves, trusting it because it came from the real supplier. This kind of attack is called a **supply chain attack**.

<div class="layer layer-buyer">
<p class="layer-name">Why a buyer cares</p>

- **The risk it reduces:** eavesdropping on sensitive calls, surprise bills from toll fraud, and phone scams that spoof trusted numbers.
- **Who owns it at a company:** the IT or unified communications team, with security involved for regulated industries like finance and healthcare.
- **What gets bought:** cloud calling platforms (Microsoft Teams Phone, Zoom Phone, RingCentral), where encryption comes included, and **session border controllers** (Ribbon, AudioCodes) that act as a firewall for phone traffic.
- **A good discovery question:** *“If someone broke into your phone system this weekend, how would you find out before Monday’s bill?”*

</div>

## The one thing to remember

SIP rings the doorbell, RTP carries the voice, and SRTP locks the tunnel. Encrypt both the doorbell and the voice.
