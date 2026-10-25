---
title: "Directory services: AD DS, LDAP and LDAPS"
description: "Active Directory, LDAP and LDAPS explained like you're 10: the company's master list of people and permissions, how apps ask it questions, and why attackers target it first."
pubDate: 2026-10-24
number: 9
topic: directory-services
chapter: "Gibson & Shelley, Ch. 3"
oneLiner: "A directory is a company’s master list of every person, computer and permission. Whoever controls it controls the company."
grownLiner: "Active Directory Domain Services stores users, groups and permissions in one place. Apps query it over LDAP, and LDAPS wraps those queries in TLS so nobody can read them in transit."
draft: false
image: "/images/og/directory-services.jpg"
imageAlt: "Poster: Directory services. A head teacher with a giant binder and key cards, a new pupil getting a key card while a leaver’s card is crossed out, a robot asking whether Sam is a teacher (LDAP), and an eavesdropper hearing only scrambled noise (LDAPS)."
buyerScore:
  budget: 2.5
  pain: 2.5
  pressure: 2
  owner: 2
  verdict: "Identity is where most modern attacks go first, and Active Directory holds the keys to everything else."
  pitch: "Protects the system that decides who can access everything in the company, the attacker’s favourite target."
posterGrid: [2.0, 49.5, 50.6, 98.2, 11.0, 52.0, 53.2, 97.1]
panels:
  - title: "Active Directory"
    note: "Active Directory Domain Services holds every user, group and permission, and runs on servers called domain controllers."
    find: "Active Directory Domain Services"
  - title: "Joiners & Leavers"
    note: "Disable one account and access to everything tied to it stops. That’s why the directory sits at the centre of security."
    find: "Fast joiners and leavers"
  - title: "LDAP"
    note: "LDAP is the standard protocol apps use to query the directory, on TCP port 389."
    find: "Lightweight Directory Access Protocol"
  - title: "LDAPS"
    note: "LDAPS wraps LDAP in TLS on TCP port 636, so passwords and answers can’t be read in transit."
    find: "Plain LDAP sends data unencrypted"
flashcards:
  - q: "What is Active Directory Domain Services (AD DS)?"
    a: "Microsoft’s directory service. It stores users, groups, computers and policies centrally, and runs on servers called domain controllers."
  - q: "What is LDAP, and which port does it use?"
    a: "Lightweight Directory Access Protocol, the standard way for apps and devices to query and update a directory. It uses TCP 389."
  - q: "What is LDAPS, and which port does it use?"
    a: "LDAP over TLS, so directory queries and passwords are encrypted in transit. It uses TCP 636."
  - q: "Which protocol does Active Directory mainly use to log users in?"
    a: "Kerberos. It relies on synchronised clocks, which is why NTP matters for Active Directory."
  - q: "Why do attackers target domain controllers?"
    a: "Control of a domain controller means control of every account and computer in the domain. Attackers can create admin accounts or push ransomware to every machine."
---

![Poster: Directory services. A head teacher with a giant binder and key cards, a new pupil getting a key card while a leaver’s card is crossed out, a robot asking whether Sam is a teacher (LDAP), and an eavesdropper hearing only scrambled noise (LDAPS).](./images/directory-services-poster.jpg)

<p class="caption">Tap any panel to explore it.</p>

<div class="layer layer-kid">
<p class="layer-name">Like you’re 10</p>

Imagine the **head teacher’s big binder**. It lists every pupil and teacher, which class they’re in, and exactly **which doors their key card opens**. When someone joins, they’re added once, and their card works everywhere it should. When someone leaves, they’re crossed out once, and every door locks them out.

That binder is a **directory**. In most companies it’s Microsoft’s **Active Directory**.

**LDAP is the polite way to ask the binder a question**, like “Is this person a teacher?” without being allowed to flick through the whole book.

**LDAPS is asking that question in a whisper** through a scrambled walkie-talkie, so a nosy kid in the corridor can’t overhear the answer, or anyone’s password.

</div>

<div class="layer layer-grown">
<p class="layer-name">Grown-up version</p>

A **directory service** is a central database of identities and resources (users, groups, computers, printers) and the rules about who can access what.

| | What it is | Port |
|---|---|---|
| **AD DS** (Active Directory Domain Services) | Microsoft’s directory for Windows networks. Runs on **domain controllers**, applies settings through **Group Policy**, and authenticates users mainly with **Kerberos** | Kerberos TCP/UDP 88 |
| **LDAP** (Lightweight Directory Access Protocol) | The standard protocol for querying and updating a directory. Apps use it to check who a user is and which groups they belong to | TCP 389 |
| **LDAPS** (LDAP over TLS) | LDAP inside an encrypted TLS connection | TCP 636 |

**Main use cases:**

- **Central authentication:** one account per person, used to sign in to computers, email and many apps.
- **Access control:** permissions assigned to groups (“Finance”, “HR”), so access follows the role, not the individual.
- **Fast joiners and leavers:** disable one account and access to everything tied to it stops.

**Security points for the exam:**

- **Plain LDAP sends data unencrypted.** A simple LDAP sign-in can expose passwords to anyone listening. Use LDAPS (or LDAP upgraded with StartTLS).
- **LDAP injection** is an application attack where crafted input changes a directory query, much like SQL injection.
- **Kerberos needs synchronised clocks**, so if time drifts too far (5 minutes by default), sign-ins fail. That’s the link back to NTP.

</div>

## A real-world example

In 2017, the NotPetya malware wiped computers at the shipping giant Maersk worldwide, including its domain controllers, the servers holding Active Directory. Without them, nobody could log in to anything. Recovery hinged on one domain controller in Ghana that happened to be offline during the attack because of a power cut. Its hard drive was flown to the UK, and the company’s whole identity system was rebuilt from it.

<div class="layer layer-buyer">
<p class="layer-name">Why a buyer cares</p>

- **The risk it reduces:** many serious attacks, ransomware included, rely on stealing or abusing accounts. Taking over Active Directory gives an attacker the whole company at once.
- **Pressure:** cyber insurers and auditors ask about privileged accounts, MFA and joiner/leaver controls. Weak answers raise premiums or block cover.
- **Who owns it at a company:** IT infrastructure runs it, while the CISO and the identity and access management (IAM) team own the risk. It’s a board-level topic after any ransomware story.
- **What gets bought:** identity platforms (Microsoft Entra ID, Okta), **identity threat detection and response** (CrowdStrike, Microsoft Defender for Identity), Active Directory backup and recovery (Semperis, Quest), and privileged access management.
- **A good discovery question:** *“If your Active Directory was encrypted tonight, how long would it take to get everyone logging in again?”*

</div>

## The one thing to remember

AD DS is the master binder, LDAP is how apps ask it questions, and LDAPS keeps those questions private. Protect the binder above everything else.
