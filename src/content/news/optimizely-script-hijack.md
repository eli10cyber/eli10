---
title: "178 big-name websites served malware through a marketing tool"
description: "Attackers slipped malicious JavaScript into Optimizely, an A/B testing tool, so sites like the BBC, CNN, Zoom and HSBC served a card skimmer and crypto thief to their visitors. Explained like you're 10, properly, and from the ad tech and buyer side."
pubDate: 2026-11-17
oneLiner: "A company that helps websites try out two designs got broken into, and for about 16 hours 178 famous websites handed their visitors a pickpocket along with the page."
related: ["firewalls", "dns"]
sources:
  - title: "OPTIMJACK: Optimizely-hosted scripts loaded a crypto clipper and card skimmer on 178 organizations"
    publisher: "StepSecurity"
    url: "https://www.stepsecurity.io/blog/optimjack-optimizely-hosted-scripts-crypto-clipper-card-skimmer"
  - title: "Malware spread through Optimizely hits 178 organizations, including BBC, CNN and Zoom"
    publisher: "Help Net Security"
    url: "https://www.helpnetsecurity.com/2026/11/17/optimizely-vulnerability-malicious-javascript/"
  - title: "Optimizely vulnerability exploited to serve malware on major websites"
    publisher: "SecurityWeek"
    url: "https://www.securityweek.com/optimizely-vulnerability-exploited-to-serve-malware-on-major-websites/"
  - title: "Optimizely hack infected CNN, Fox News, BBC, Salesforce sites with malware"
    publisher: "BleepingComputer"
    url: "https://www.bleepingcomputer.com/news/security/optimizely-supply-chain-attack-delivers-malware-to-cnn-fox-news-bbc-salesforce-sites/"
buyerScore:
  budget: 2
  pain: 2
  pressure: 2
  owner: 1.5
  verdict: "Payment card rules now require companies to list and watch every script on their payment pages, and most marketing teams add scripts without asking security."
  pitch: "Every marketing tag on your checkout page is someone else’s code running next to your customers’ card details."
quiz:
  - q: "None of the 178 companies were hacked themselves. How did their websites end up serving malware?"
    options: ["Their firewalls were switched off", "They loaded JavaScript from Optimizely, and the attacker changed it there", "Their DNS was poisoned", "Their staff clicked a phishing email"]
    answer: 1
    why: "Each site trusted a script hosted by a third party. When the attacker edited that script, every site loading it passed the attack to its visitors. That’s a supply chain attack."
  - q: "Why couldn’t a web application firewall (WAF) stop this?"
    options: ["WAFs only work on weekends", "The malicious code ran in visitors’ browsers, loaded straight from the vendor, not through the company’s web server", "WAFs only protect email", "It did stop it"]
    answer: 1
    why: "A WAF inspects requests coming to your server. This attack happened on the client side: the browser fetched the script from Optimizely directly."
  - q: "Which browser defence lets a website say exactly which domains its pages may load scripts from and send data to?"
    options: ["Content Security Policy (CSP)", "DNSSEC", "NAT", "Port security"]
    answer: 0
    why: "A CSP with an allow list of script and connection domains would have blocked the payload’s download or its data being sent away. Subresource Integrity didn’t fit, because testing tools change their script all the time."
---

<div class="layer layer-kid">
<p class="layer-name">Like you’re 10</p>

Imagine **178 schools** all hire the same company to hang **posters** in their corridors. The company tries two designs at a time to see which one pupils like more. That’s **A/B testing**.

The schools never check the posters, because they trust the company. One night, a **thief sneaks into the poster company** and adds a tiny note to every poster: *“Copied your bank details? Let me change them for you.”*

Next morning, pupils in **178 schools** walk past the posters. Nobody broke into a single school. The thief only had to break into **the one company every school trusted**.

</div>

<div class="layer layer-grown">
<p class="layer-name">Grown-up version</p>

**What happened:** on 16 November 2026, an attacker exploited a flaw in **Optimizely Web Experimentation**, an A/B testing service, and wrote malicious JavaScript into the “Project JavaScript” field of customer projects. That field runs on every page of the customer’s site. Researchers at Report URI counted **178 organisations** affected, including Zoom, the BBC, CNN, Salesforce, GitLab, IKEA, HSBC and Equifax. For most sites the code was live for about **16 hours** before it was cleaned up.

**What the script did to visitors:**

- **Crypto clipper:** when you copied a wallet address, it quietly swapped in the attacker’s address, choosing one that passes the wallet’s checks so it looks valid.
- **Card skimmer:** it read card numbers, expiry dates and security codes typed into checkout forms and sent them away.
- **iPhone attack:** on older iOS versions it loaded exploit kits aimed at taking over the device.

**Why it’s a supply chain attack:** none of the 178 websites was breached. Each one **trusted a script hosted by a vendor**, so whoever could change that script could reach every visitor. Security people call this **client-side** or **web supply chain** risk.

**Why the usual defences missed it:**

| Defence | Why it didn’t help |
|---|---|
| Code review | The bad code lived on the vendor’s servers, not in the company’s own code |
| Web application firewall | It protects your server. This attack ran in visitors’ browsers |
| Cookie consent banner | It decides **when** a script runs, not **what** it contains |
| Subresource Integrity (SRI) | Locks a script to one exact version, but testing tools change theirs every time an experiment changes |

**What would have helped:**

- **Content Security Policy (CSP)** with an allow list of script and connection domains: the browser refuses to load code from, or send data to, anywhere not on the list.
- **Script monitoring**: tools that alert when a page’s scripts change or start talking to new domains.
- **Keep third-party scripts off payment pages**, and take card details in the payment provider’s own secure fields.
- **Protective DNS** can block known malicious domains once they’re identified.

</div>

## Follow the money: the ad tech side

I spent seven years in ad tech, and this is the bit I recognise.

A typical big website loads **dozens of scripts it didn’t write**: analytics, A/B testing, ad tags, chat widgets, heatmaps. Most are added by **marketing**, often through a tag manager, and rarely reviewed by security. Each one is a door into the page, with the same powers as the site’s own code.

A/B testing tools are especially powerful because their job is to **change the page**. That’s the feature. So when an attacker controls one, they can change anything: the checkout form, the wallet address, the download link.

The traced crypto theft was small, about **$7,000**. The real cost is what can’t be traced: stolen card details and any phones that were compromised.

## What to do about it

**For yourself:** if you bought something or entered card details on a big-name site on 16 November, watch your statement. When sending crypto, check the address on your wallet’s own screen, not just what you pasted. Keep your phone updated.

**For a company:**

- **Make a list** of every third-party script on your site, who added it and why.
- **Lock down payment pages:** only the scripts that must be there.
- **Set a Content Security Policy** and watch its reports.
- **Agree who owns it:** marketing adds the tags, but security owns the risk.

<div class="layer layer-buyer">
<p class="layer-name">Why a buyer cares</p>

- **The risk it reduces:** card theft and fraud happening on your own website, under your own brand, without your servers ever being touched.
- **Pressure:** payment card rules (PCI DSS v4.0) now require companies to **keep an inventory of every script on payment pages**, justify each one (requirement 6.4.3), and **detect unauthorised changes** to those pages (requirement 11.6.1). Both became mandatory in 2025.
- **Who owns it at a company:** often nobody clearly. Marketing adds the scripts, web teams run the site, security owns the risk. That gap is the sales opening.
- **What gets bought:** client-side protection and script monitoring (Akamai, Cloudflare Page Shield, Imperva, Feroot, Jscrambler, Report URI), tag governance, and hosted payment fields from payment providers.
- **A good discovery question:** *“How many third-party scripts run on your checkout page today, and who would notice if one of them changed?”*

</div>

## The one thing to remember

Every script you load from someone else is someone else’s code running on your page. List them, limit them, and lock them down with a Content Security Policy.
