---
title: "SPF, DKIM and DMARC: proving an email is really from who it says"
description: "SPF, DKIM and DMARC explained like you're 10: a guest list, a wax seal and a rulebook that stop fake emails, plus the exam trap most people get wrong."
pubDate: 2026-10-24
number: 8
topic: email-auth
chapter: "Gibson & Shelley, Ch. 3"
oneLiner: "SPF lists who may send email for a company, DKIM seals each email so changes show, and DMARC tells inboxes what to do with fakes."
grownLiner: "SPF lists the servers allowed to send for a domain, DKIM signs each message, and DMARC tells receivers what to do when neither passes in alignment with the From domain."
draft: false
image: "/images/og/email-auth.jpg"
imageAlt: "Poster: SPF, DKIM and DMARC. A castle bouncer with an approved senders list, an intact and a broken wax seal, a postman following the DMARC rulebook into a REJECT bin, and two paths that both lead to delivery."
buyerScore:
  budget: 2
  pain: 2.5
  pressure: 2
  owner: 1.5
  verdict: "Fake emails are behind some of the costliest fraud there is, and the big inbox providers now refuse bulk mail without these records."
  pitch: "Stops criminals sending emails that look like they came from your company, to your customers or your finance team."
posterGrid: [2.0, 49.5, 50.6, 98.2, 11.0, 52.0, 53.2, 97.1]
panels:
  - title: "SPF: The Guest List"
    note: "SPF lists the servers allowed to send email for a domain, published as a DNS TXT record."
    find: "Sender Policy Framework"
  - title: "DKIM: The Wax Seal"
    note: "DKIM adds a digital signature to each email. If the message is changed on the way, the signature no longer verifies."
    find: "DomainKeys Identified Mail"
  - title: "DMARC: The Rulebook"
    note: "DMARC tells receivers what to do when checks fail (monitor, quarantine or reject) and sends the domain owner reports."
    find: "DMARC policies"
  - title: "SPF or DKIM = Delivered"
    note: "An email passes DMARC if either SPF or DKIM passes and aligns with the visible From domain. It fails only when both fail."
    find: "The exam trap"
quiz:
  - q: "An email fails SPF but passes DKIM, and the DKIM domain aligns with the From address. What does DMARC decide?"
    options: ["It passes: one aligned pass is enough", "It fails: both checks must pass", "DMARC only looks at SPF", "It goes to spam automatically"]
    answer: 0
    why: "DMARC passes if either SPF or DKIM passes and aligns. It fails only when both fail."
  - q: "Which DMARC policy tells receivers to refuse failing email?"
    options: ["p=reject", "p=block", "p=none", "p=quarantine"]
    answer: 0
    why: "none only monitors, quarantine sends to spam, and reject refuses the email."
  - q: "Where are SPF, DKIM and DMARC published?"
    options: ["As TXT records in the sending domain’s DNS", "Inside every email’s body", "In the reader’s browser", "On the receiving mail server"]
    answer: 0
    why: "Receivers look up the sender’s DNS to check the email against them."
flashcards:
  - q: "What does SPF check?"
    a: "Whether the server that sent the email is on the domain’s published list of approved sending servers."
  - q: "What does DKIM add to an email?"
    a: "A digital signature in the email header. The receiver checks it with the public key published in the sender’s DNS, which proves the email wasn’t changed and came from that domain."
  - q: "When does an email pass DMARC?"
    a: "When SPF or DKIM passes and the domain it checked matches the visible From address (this is called alignment). It only takes one of the two."
  - q: "What are the three DMARC policies?"
    a: "p=none (just monitor and report), p=quarantine (send to spam) and p=reject (refuse delivery)."
  - q: "Where are SPF, DKIM and DMARC published?"
    a: "As TXT records in the sending domain’s DNS. DMARC lives at _dmarc.yourdomain."
---

![Poster: SPF, DKIM and DMARC. A castle bouncer with an approved senders list, an intact and a broken wax seal, a postman following the DMARC rulebook into a REJECT bin, and two paths that both lead to delivery.](./images/email-auth-poster.jpg)

<p class="caption">Tap any panel to explore it.</p>

<div class="layer layer-kid">
<p class="layer-name">Like you’re 10</p>

Imagine getting a letter that says it’s from your favourite football club, but it’s really from a trickster after your pocket money. Anyone can write any name on an envelope, and email works the same way. So the internet uses **three helpers**:

**SPF is the guest list.** The club publishes a list of the only post offices allowed to send its letters. If a letter arrives from a post office that isn’t on the list, something is fishy.

**DKIM is the wax seal.** Every real letter gets a special seal that only the club can make. If someone opens the letter and changes it on the way, the seal won’t match.

**DMARC is the club’s rulebook for your postman.** It says: “If a letter claiming to be from us has **neither** the right post office **nor** a matching seal, put it in the bin.” It also asks the postman to send the club a report about the fakes.

</div>

<div class="layer layer-grown">
<p class="layer-name">Grown-up version</p>

All three are published as **TXT records in the sending domain’s DNS**.

| | What it checks | Published at |
|---|---|---|
| **SPF** (Sender Policy Framework) | Is the sending server’s IP address authorised to send for this domain? | `yourdomain` TXT `v=spf1 …` |
| **DKIM** (DomainKeys Identified Mail) | Does the signature in the header verify against the domain’s public key, proving the content wasn’t altered? | `selector._domainkey.yourdomain` |
| **DMARC** (Domain-based Message Authentication, Reporting and Conformance) | Did SPF or DKIM pass for a domain that **aligns** with the visible From address? What should happen if not? | `_dmarc.yourdomain` |

**The exam trap:** DMARC does **not** fail an email just because one check fails. An email **passes DMARC if either SPF or DKIM passes and aligns** with the From domain. It fails only when both do.

**Why alignment matters:** SPF on its own checks a hidden “envelope” sender address, not the From address people see. A scammer can pass SPF for their own domain while showing your company’s name. DMARC closes that gap by requiring the checked domain to match the visible one.

**DMARC policies:** `p=none` (monitor only), `p=quarantine` (spam folder), `p=reject` (refuse). Companies usually start at `none`, read the reports to find all their legitimate senders, then tighten to `reject`.

**What they don’t do:** none of them encrypt email, and none stop a scammer using a lookalike domain such as `paypa1.com`. They only protect the exact domain that publishes them.

</div>

## Try it yourself

You can look up any company’s DMARC policy from a terminal. On Mac or Linux, type `dig TXT _dmarc.bbc.co.uk +short`. On Windows, type `nslookup -type=TXT _dmarc.bbc.co.uk`. Swap in your bank or employer’s domain and look at the `p=` value: `reject` means fakes are refused, `none` means they’re only being watched.

<div class="layer layer-buyer">
<p class="layer-name">Why a buyer cares</p>

- **The risk it reduces:** **business email compromise**, where criminals pose as a CEO or supplier to get payments redirected. It is consistently one of the costliest cybercrimes reported to the FBI. Spoofed emails also damage a brand’s reputation with its customers.
- **Pressure:** since 2024, Google and Yahoo require SPF, DKIM and DMARC from anyone sending email in bulk, and Microsoft followed for Outlook in 2025. Without them, marketing emails get rejected. In the UK, the NCSC’s Mail Check helps public bodies enforce DMARC.
- **Who owns it at a company:** IT or security, but marketing often feels the pain first, because their email platform is one of the senders that must be authorised.
- **What gets bought:** DMARC management services (Valimail, dmarcian, Red Sift), and email security gateways (Proofpoint, Mimecast) that use these checks alongside phishing detection.
- **A good discovery question:** *“Is your domain’s DMARC policy at reject yet, and do you know every service that sends email in your name?”*

</div>

## The one thing to remember

SPF checks **who** sent it, DKIM checks it **wasn’t changed**, and DMARC decides **what happens** when neither check passes.
