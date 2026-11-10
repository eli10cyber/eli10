---
title: "Practice problem: the executive who can’t reach the internet"
description: "A Security+ performance-based question, solved step by step: check two workstations, find the broken one, and fix the router's ACL without opening anything else. With a working simulator."
pubDate: 2026-11-10
oneLiner: "One executive can print, email and use the intranet, but can’t open a secure website. Work out why, then fix it without breaking anything else."
related: ["routers-acls", "ip-addressing", "dns", "dhcp-ntp"]
game: pbq-acl
sources:
  - title: "Performance-based questions explained"
    publisher: "CompTIA"
    url: "https://www.comptia.org/en-gb/resources/test-policies/exam-development/performance-based-questions-explained/"
  - title: "Example simulation (try CompTIA’s own version)"
    publisher: "CompTIA"
    url: "https://demosim.comptia.org/"
quiz:
  - q: "Workstation 2 can’t reach the internet, but it can still print on the office printer. Why does printing work?"
    options: ["Printers ignore ACLs", "The printer has its own internet connection", "The printer is on the same network, so that traffic never crosses the router", "Printing uses HTTPS"]
    answer: 2
    why: "Devices on the same network talk directly. The router, and its ACL, only sees traffic that leaves the network."
  - q: "What does 192.168.1.10/32 mean in an ACL rule?"
    options: ["Every address from 192.168.1.0 to 192.168.1.255", "Exactly one address: 192.168.1.10", "The first 32 addresses on the network", "Any address"]
    answer: 1
    why: "/32 means all 32 bits are fixed, so it matches one address. /24 fixes the first three numbers, so it matches the whole 192.168.1.x network."
  - q: "Which is the best fix for this problem?"
    options: ["Add PERMIT ANY to ANY at the top", "Change rule 3’s source to 192.168.1.20/32", "Change rule 3’s source to the office network, 192.168.1.0/24", "Remove the implicit deny"]
    answer: 2
    why: "It lets both workstations use HTTPS with one change and opens nothing else. Using .20/32 would lock out Workstation 1 instead."
---

<p class="note">This is a practice problem in the style of the <strong>performance-based questions</strong> (PBQs) in the Security+ exam. It’s modelled on CompTIA’s free example simulation, but the network, addresses and rules here are our own, so you can try both.</p>

## The problem

After attacks on its servers, a company moved them into their own network behind the router and tightened the router’s rules. Since then, an assistant reports that one of the executives can’t open secure websites, such as `https://example.org`. Strangely, the executive can still send internal email, use the intranet and print on the office printer.

**Your task:**

- Check the IP settings and connectivity of both workstations to find the affected one.
- Fix the router’s ACL so every workstation can reach the internet.
- The ACL ends with an implicit deny.
- Only change what you need to fix the problem.

<div class="layer layer-kid">
<p class="layer-name">Like you’re 10</p>

Two pupils share a classroom. Both can walk to the library and use the classroom printer. But one of them is **turned away at the park gate**.

Before blaming the gate guard, a good detective checks four things, in order:

1. Does the pupil know their **own desk number**?
2. Can they reach the **classroom door**, the way out?
3. Do they know **where the park is**?
4. What does the **guard’s list** say?

The first three are fine. Then you read the guard’s list: **“Park gate: Desk 10 only.”** Our pupil sits at Desk 20. Nobody is being naughty. Someone just wrote the list for one desk instead of the whole class.

</div>

<div class="layer layer-grown">
<p class="layer-name">Grown-up version</p>

**Troubleshoot from the bottom up.** Four checks, each ruling something out:

| Check | Command | What it tells you |
|---|---|---|
| 1. Is the address sensible? | `ipconfig` | IP address, **subnet mask**, **default gateway** and DNS server. Both workstations should be on the same network, with the same gateway |
| 2. Can it reach the way out? | `ping 192.168.1.1` | The **default gateway** (the router) answers, so the local network works |
| 3. Can it find names? | `nslookup example.org` | **DNS** works, so the problem isn’t name lookups |
| 4. What works, and what doesn’t? | Open the site over HTTP and HTTPS | If plain web works but secure web fails, something is blocking **TCP port 443** for this machine |

**Two exam traps hidden in the story:**

- **Why printing still works:** the printer is on the same network as the workstation, so print jobs never cross the router. The ACL never sees them.
- **Why email and the intranet still work:** those servers are in the server room, and a separate rule allows the office to reach them. Internal success tells you the device is fine and points you at the route out.

**Reading the addresses:** `/24` and `/32` are **CIDR** notation, a short way to write a subnet mask. `/24` means the first three numbers are fixed, so `192.168.1.0/24` covers every address from 192.168.1.0 to 192.168.1.255. `/32` fixes all four numbers, so it matches exactly one device.

</div>

## Try it yourself

<div data-game="pbq-acl"></div>

## The answer

<details class="answer">
<summary>Show the answer (try the simulation first)</summary>

**The affected machine is Workstation 2** (192.168.1.20). Its settings are correct, it can reach the gateway and DNS, and plain web works. Only HTTPS fails.

**The cause is rule 3.** It allows HTTPS only from `192.168.1.10/32`, which is Workstation 1 alone. Workstation 2’s HTTPS traffic matches nothing, so it falls through to the **implicit deny**.

**The fix:** change rule 3’s source to the office network, `192.168.1.0/24`. One change, and both executives can use secure websites.

**Fixes that lose marks:**

- `192.168.1.20/32` fixes Workstation 2 but breaks Workstation 1.
- A source of `ANY` works, but it is broader than needed. The principle of **least privilege** says allow only what is required.
- Adding “permit everything” makes the symptom go away and the security go with it.

</details>

## Tips for PBQs in the exam

- **Read the instructions twice.** The constraint (“only change what you need”) is part of the marking.
- **Gather evidence before changing anything.** Compare the working machine with the broken one.
- **Remember the invisible last rule.** If traffic isn’t explicitly allowed, the implicit deny blocks it.
- **Prefer the narrowest fix.** It’s the secure answer and usually the expected one.
- **Use the rules CompTIA publishes.** Simulation PBQs can be skipped and revisited, more than one approach can be correct, and partial credit is possible. Many people flag them and come back after the multiple-choice questions.

<div class="layer layer-buyer">
<p class="layer-name">Why a buyer cares</p>

- **The risk it reduces:** security changes that break the business. Rule mistakes like this one are a common cause of outages and help-desk tickets, and people who get burned start avoiding security changes altogether.
- **Who owns it at a company:** the network or firewall team, with **change management** (testing, peer review and a way to undo) owned by IT operations.
- **What gets bought:** firewall policy management tools (AlgoSec, Tufin, FireMon) that check a rule change before it goes live, and network monitoring that spots blocked traffic quickly.
- **A good discovery question:** *“When a security change breaks something, how long does it take you to find which rule did it?”*

</div>

## The one thing to remember

Check the device, the way out, the name, then the rules. And fix the one rule, not the whole wall.
