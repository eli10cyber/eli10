---
title: "BBC, CNN, Zoom and HSBC served malware to their own visitors through one marketing tool"
description: "The BBC, CNN, Zoom, HSBC, IKEA, Salesforce and 172 other websites served a card skimmer and crypto thief to their visitors after attackers hijacked Optimizely, an A/B testing tool. Explained like you're 10, properly, and from the ad tech and buyer side."
pubDate: 2026-11-17
oneLiner: "On Monday 16 November 2026, the BBC, CNN, Zoom, HSBC and 174 other websites handed their visitors a hidden pickpocket for about 16 hours, because one marketing tool they all trusted had been broken into."
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
diagram: optimjack
image: "/images/og/optimizely-script-hijack.jpg"
imageAlt: "Diagram: how 178 websites served a card skimmer. Attacker exploits a flaw in Optimizely, plants malicious code, Optimizely’s servers serve the script, big-name websites load it, your browser runs it and sends stolen data to the attacker’s server."
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

![Diagram: how 178 websites served a card skimmer. 1. The attacker exploits a flaw in Optimizely. 2. Plants malicious code in the control panel. 3. Optimizely’s servers serve the script. 4. Big-name websites load it. 5. Your browser runs it and sends stolen data to the attacker’s server.](./images/optimjack-flow.jpg)

<p class="caption">The whole attack in one picture. Tap to zoom, or play it step by step further down.</p>

<div class="layer layer-kid">
<p class="layer-name">Like you’re 10</p>

Imagine **178 schools**, including the most famous ones in the country, all hire the same company to put up **posters** in their corridors. The company sometimes hangs two different designs to see which one pupils like more. That’s called **A/B testing**.

The schools never check the posters, because they trust the company. One night a **thief sneaks into the poster company** and slips a tiny trick into the posters: whenever a pupil copies down a number, the poster quietly **changes it to the thief’s number**.

Next morning, pupils in all **178 schools** walk past the posters. Nobody broke into a single school. The thief only had to break into **the one company every school trusted**.

</div>

## Who was hit

Researchers at Report URI counted **178 organisations** whose websites served the malicious script. The names include some of the most visited sites in the world:

<ul class="hit-list">
<li>BBC</li><li>CNN</li><li>Zoom</li><li>HSBC</li><li>Salesforce</li><li>IKEA</li><li>Equifax</li><li>GitLab</li><li>Air France-KLM</li><li>Fox News</li><li>Peacock</li><li>Ledger</li>
</ul>

<p class="caption">None of these companies’ own servers were broken into. Several, including Salesforce and Equifax, switched off Optimizely’s scripts while they investigated.</p>

## First, two words you need

**What is a script?** Think of a web page as a recipe card. The words and pictures are the ingredients. The **script** is the set of instructions that makes things happen: menus that open, forms that check what you typed, videos that play. Your browser follows those instructions automatically the moment the page opens.

Websites don’t write every script themselves. One line on a page can say: *“go and fetch more instructions from this other company, and follow them too.”* It looks like this:

```html
<script src="https://cdn.optimizely.com/js/12345.js"></script>
```

That one line is how big websites add tools for analytics, adverts and design tests. Here’s the catch: **your browser can’t tell good instructions from bad ones.** Whatever comes back from that address runs with the same powers as the website’s own code. It can read what you type and change what you see.

**What is a card skimmer?** In the real world, a skimmer is a fake card slot glued over a cash machine or petrol pump. Your payment still works, but a copy of your card is kept for the criminals. An **online card skimmer** is the same trick, written as a script: it sits on a checkout page, copies the card number, expiry date and security code as you type them, and quietly sends a copy away. Your order goes through normally, so nobody notices until strange payments appear on your statement.

This attack also carried a **crypto clipper**: when someone copied a crypto wallet address, it swapped in the attacker’s address, so the money went to the wrong person.

## How they did it, step by step

<div data-diagram="optimjack"></div>

<div class="layer layer-grown">
<p class="layer-name">Grown-up version</p>

**The short version:** the attackers never touched the servers of the BBC, CNN, Zoom or HSBC. They broke into the one tool all those sites had invited onto their pages.

**When and how big:** on Monday 16 November 2026, an attacker exploited a flaw in **Optimizely Web Experimentation**, an A/B testing service. Optimizely says the flaw was in its account sign-up process; it hasn’t yet explained how that let the attacker edit other customers’ projects. The attacker wrote malicious JavaScript into each project’s **“Project JavaScript”** field, which runs on every page of the customer’s site. Researchers at Report URI counted **178 organisations** affected, including Zoom, the BBC, CNN, Salesforce, GitLab, IKEA, HSBC and Equifax. The first injection was around 04:00 UTC and most sites were cleaned up by about 21:00 UTC: roughly **16 hours**.

**What the script did to visitors:**

- **Card skimmer:** read card numbers, expiry dates and security codes typed into checkout forms and sent them away.
- **Crypto clipper:** swapped copied wallet addresses for the attacker’s, choosing ones that pass the wallet’s checks so they look valid, then sent a screenshot of the page to the attacker.
- **iPhone attack:** on older iOS versions it loaded exploit kits aimed at taking over the device.
- **Shape-shifting:** researchers counted 26 versions of the main program in one day, set to refresh every 15 seconds, so the attacker could change it almost instantly.

**Why it’s a supply chain attack:** each website trusted a script hosted by a vendor, so whoever could change that script could reach every visitor. Security people call this **client-side** or **web supply chain** risk.

**Why the usual defences missed it:**

| Defence | Why it didn’t help |
|---|---|
| Code review | The bad code lived on the vendor’s servers, not in the company’s own code |
| Web application firewall | It protects your server. This attack ran in visitors’ browsers |
| Cookie consent banner | It decides **when** a script runs, not **what** it contains |
| Subresource Integrity (SRI) | Locks a script to one exact version, but testing tools change theirs every time a test changes |

**What would have helped:**

- **Content Security Policy (CSP)** with an allow list of script and connection domains: the browser refuses to load code from, or send data to, anywhere not on the list.
- **Script monitoring:** tools that alert when a page’s scripts change or start talking to new domains.
- **Payment fields hosted by the payment provider:** the skimmer couldn’t read card boxes that sit in the provider’s own separate secure frame.
- **Protective DNS** can block known malicious domains once they’re identified.

</div>

## Follow the money: the ad tech side

I spent seven years in ad tech, and this is the bit I recognise.

A typical big website loads **dozens of scripts it didn’t write**: analytics, A/B testing, ad tags, chat widgets, heatmaps. Most are added by **marketing**, often through a tag manager, and rarely reviewed by security. Each one is a door into the page, with the same powers as the site’s own code.

A/B testing tools are especially powerful because their job is to **change the page**. That’s the feature. So when an attacker controls one, they can change anything: the checkout form, the wallet address, the download link.

The traced crypto theft was small, about **$7,000**. The real cost is what can’t be traced: stolen card details and any phones that were compromised.

## What to do about it

**For yourself:** if you bought something or entered card details on a big-name site on Monday 16 November 2026, watch your statement, and ask your bank for a new card if you’re worried. When sending crypto, check the address on your wallet’s own screen, not just what you pasted. Keep your phone updated.

**For a company:**

- **Make a list** of every third-party script on your site, who added it and why.
- **Lock down payment pages:** only the scripts that must be there, and card details in the payment provider’s hosted fields.
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
