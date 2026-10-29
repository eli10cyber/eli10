---
title: "13 million Chrome users became someone’s ad revenue"
description: "319 Chrome extensions quietly rerouted millions of searches to earn search-ad money. The story explained like you're 10, then properly, then from the ad tech and buyer side."
pubDate: 2026-10-29
oneLiner: "Hundreds of harmless-looking browser add-ons secretly swapped the signpost to everyone’s search engine, so every search took a detour that earned someone money."
related: ["dns", "remote-access"]
sources:
  - title: "Searchjacked"
    publisher: "Socket (John Tuckner)"
    url: "https://socket.dev/blog/searchjacked"
  - title: "Chrome extensions with 13.4 million installs caught hijacking searches"
    publisher: "BleepingComputer (Bill Toulas)"
    url: "https://www.bleepingcomputer.com/news/security/chrome-extensions-with-134-million-installs-caught-hijacking-searches/"
buyerScore:
  budget: 1.5
  pain: 1.5
  pressure: 1
  owner: 1.5
  verdict: "A growing category: companies are starting to pay to control browsers and extensions, but most still let staff install anything."
quiz:
  - q: "One extension in this campaign had no code and asked for no permissions. How did it take over search?"
    options: ["It found a bug in Chrome", "It used Chrome’s built-in setting that lets an extension replace the default search engine", "It installed malware on the computer", "It changed the computer’s DNS settings"]
    answer: 1
    why: "Chrome lets an extension declare a new default search engine in its manifest. No code is needed, which is why ‘no permissions’ doesn’t mean safe."
  - q: "How did the operators make money?"
    options: ["By selling the extensions", "By demanding ransom payments", "From search-ad partner programmes that pay for the traffic they send", "By stealing card details"]
    answer: 2
    why: "Each search reached Bing or Yahoo carrying the operator’s partner code, so the operator earned a share of the ad money from those searches."
  - q: "Why is the operator’s server in the middle the most dangerous part?"
    options: ["It can change where searches go at any time, without updating the extension", "It slows searches down", "It deletes browser history", "It uses up the computer’s battery"]
    answer: 0
    why: "The extension only points at the server. The server picks each destination, so it could start sending people to phishing pages tomorrow."
---

<div class="layer layer-kid">
<p class="layer-name">Like you’re 10</p>

Imagine a stranger offers you a free sticker that says **“PDF Helper”**. You stick it on your bike. Secretly, the sticker **swaps the signpost** at the end of your street.

You still get to the shop, so you don’t notice. But now **every trip goes past the stranger’s stall first**, and the shop pays the stranger a coin for every customer who arrives that way.

Here’s the scary bit: the stranger can **turn the signpost any time they like**. Today it points to the real shop. Tomorrow it could point to a fake shop that steals your pocket money.

</div>

<div class="layer layer-grown">
<p class="layer-name">Grown-up version</p>

**What happened:** researchers at Socket found **319 Chrome extensions** with about **13.4 million reported installs** (some users may be counted twice) that quietly replaced the browser’s default search engine. They posed as PDF converters, manual finders, “safe search” and AI search tools.

**How the takeover works:** Chrome lets an extension declare a new default search engine in its **manifest**, the file that describes the extension, using a setting called `chrome_settings_overrides`. One example contained **only a manifest and icons**: no code and no permissions. So a permission check alone would not have flagged it.

**The server in the middle:** every search first went to a **proxy server** run by the operator, then on to Bing or Yahoo. That server sees every search a person makes, and it decides where to send each one. In one test, six identical searches through the same extension ended up in four different places. The researcher warns this is a waiting game, like a **watering hole attack**: earn ad money now, then redirect some users to phishing pages or malicious downloads later, without changing the extension at all.

**How they spread:** most were **unlisted** on the Chrome Web Store, so you couldn’t find them by searching the store. People reached them through ads on low-quality websites, a cousin of **malvertising**. Many have since been removed, but new ones keep appearing.

**Is it malware?** Browser hijacking tools like this sit on the line between a **PUP** (potentially unwanted program) and malware. Today they mostly steal attention and data. Tomorrow the same tool could deliver something worse.

**Where it fits in Security+:**

| Exam idea | In this story |
|---|---|
| Threat vector | A malicious browser extension, installed by the user |
| Supply chain | A trusted store used to hand out bad software |
| Watering hole | Waiting to redirect people once enough have gathered |
| Hardening | Allow lists for extensions, and a locked default search engine |

</div>

## Follow the money: the ad tech side

I spent seven years in ad tech, and this part is the one most coverage skips.

Search engines run **search syndication** programmes. A partner, such as a browser or an app, sends searches to Bing or Yahoo with its own **partner code** in the web address. When people click the ads on those results, the advertiser pays the search engine, and the search engine shares part of that money with the partner. The partner code is how it knows whom to pay.

That’s legitimate when people chose the partner. Here, the “choice” was a fake PDF converter. It is a classic **ad fraud** pattern: buy cheap traffic with low-quality ads, then turn it into search-ad money worth more than the ads cost.

The losers are the **users**, whose searches are logged by a stranger, and the **advertisers**, who pay for clicks from people who never chose that route.

## What to do about it

**For yourself:** open `chrome://extensions`, remove anything you don’t recognise or no longer use, then check which search engine is set in Chrome’s settings. Install only tools you went looking for, from publishers you know.

**For a company:**

- **Take an inventory:** find out which extensions are installed across the company. Most firms have never looked.
- **Use an allow list:** Chrome and Edge policies can block every extension except approved ones.
- **Lock the search engine:** browser policy can set the default search engine so an extension can’t change it.
- **Block the detour:** protective DNS can stop devices reaching known hijacking servers.

<div class="layer layer-buyer">
<p class="layer-name">Why a buyer cares</p>

- **The risk it reduces:** a stranger reading every search staff make (customer names, deal codes, health questions), and a ready-made route to phishing pages.
- **Who owns it at a company:** often nobody. The browser sits between IT, who manage laptops, and security, who manage threats. That gap is the opening.
- **What gets bought:** browser management (Chrome Enterprise, Microsoft Edge for Business), **enterprise browsers** and browser security (Island, Palo Alto Networks Prisma Access Browser, LayerX), and supply chain security tools like Socket, which found this campaign.
- **A good discovery question:** *“How many browser extensions are installed across your company right now, and who approved them?”*

</div>

## The one thing to remember

A browser extension can reroute every search with almost no code. Decide which extensions are allowed, and lock the search engine.
