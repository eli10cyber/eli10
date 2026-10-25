---
title: "Remote access: SSH and RDP"
description: "SSH and RDP explained like you're 10: controlling a computer from far away, how SSH keys work, the commands for the exam, and why exposed RDP is a ransomware magnet."
pubDate: 2026-10-24
number: 10
topic: remote-access
chapter: "Gibson & Shelley, Ch. 3"
oneLiner: "SSH lets you type commands on a faraway computer through a secret tunnel. RDP lets you see and control its whole screen. Both are powerful, so attackers love them too."
draft: true
buyerScore:
  budget: 2
  pain: 2.5
  pressure: 2
  owner: 1.5
  verdict: "Remote access is one of the main doors ransomware walks through, and insurers check how it’s locked."
  pitch: "Closes the remote-access doors that ransomware gangs use most to get in."
flashcards:
  - q: "Which ports do SSH and RDP use?"
    a: "SSH uses TCP 22. RDP uses TCP 3389."
  - q: "What does ssh-keygen create?"
    a: "A key pair: a private key that stays on your computer, and a public key you can share."
  - q: "What does ssh-copy-id do?"
    a: "Adds your public key to the server’s list of authorised keys, so you can log in by proving you hold the matching private key instead of typing a password."
  - q: "Why is logging in directly as root discouraged?"
    a: "Root has unlimited power and every attacker tries it first. Best practice is to disable direct root login, log in as a named user, and use sudo for admin tasks, which also leaves an audit trail."
  - q: "What is the main risk of exposing RDP to the internet?"
    a: "Attackers constantly scan for open RDP and try stolen or guessed passwords. It is one of the most common ways ransomware gets in. Put RDP behind a VPN or gateway with MFA."
---

<div class="layer layer-kid">
<p class="layer-name">Like you’re 10</p>

Imagine you could **control your computer at home while sitting in your treehouse**.

**SSH is a secret walkie-talkie tunnel.** You whisper typed instructions down the tunnel, like “show me my files”, and the computer whispers the answers back. Anyone listening in only hears scrambled noise.

**SSH keys are a special padlock and key.** You make a matching pair. You give the computer the **padlock** to hang on its door and you keep the **only key** in your pocket. Next time, the door opens for you without a password, because only your key fits.

**RDP is a magic TV remote.** Instead of whispering instructions, you see the other computer’s **whole screen** on yours and move its mouse as if you were sitting in front of it.

</div>

<div class="layer layer-grown">
<p class="layer-name">Grown-up version</p>

| | SSH (Secure Shell) | RDP (Remote Desktop Protocol) |
|---|---|---|
| What you get | An encrypted command line | A full graphical desktop |
| Typical use | Administering Linux servers and network devices | Administering Windows machines, remote working |
| Port | TCP 22 | TCP 3389 |
| Common tool | OpenSSH | Windows Remote Desktop |

**The SSH commands for the exam** (`gcga` is just the name of the server):

| Command | What it does |
|---|---|
| `ssh gcga` | Connect to the server `gcga` as your current username |
| `ssh root@gcga` | Connect as the user `root`, the all-powerful administrator |
| `ssh-keygen -t rsa` | Create a key pair using the RSA algorithm. Modern guidance often prefers `-t ed25519` |
| `ssh-copy-id root@gcga` | Copy your **public** key onto the server so you can log in with your key instead of a password |

**Key-based login, properly:** the public key goes into the server’s `authorized_keys` file. The private key never leaves your machine, and should be protected with a passphrase. The server proves you hold the private key without it ever being sent.

**Security points:**

- **Disable direct root login** (`PermitRootLogin no`). Log in as a named user and use `sudo`, so every admin action is tied to a person.
- **Never expose RDP directly to the internet.** Put it behind a VPN or a remote desktop gateway, require MFA, and turn on Network Level Authentication.
- **Telnet** (port 23) is the old, unencrypted ancestor of SSH. If you see it, it’s a finding.

</div>

## A real-world example

In March 2024, an engineer at Microsoft noticed that SSH logins on his Linux machine were taking half a second longer than usual. He dug in and found a backdoor hidden inside **XZ Utils**, a compression tool that SSH servers on some Linux systems relied on. It had been planted by someone who had spent two years earning the trust of the project’s volunteer maintainer. It was caught just before it reached the major stable Linux releases.

<div class="layer layer-buyer">
<p class="layer-name">Why a buyer cares</p>

- **The risk it reduces:** exposed RDP and stolen remote-access passwords are among the most common ways ransomware crews get in. Once inside with admin access, they can reach everything.
- **Pressure:** cyber insurance questionnaires routinely ask whether RDP is exposed and whether remote access requires MFA. The wrong answer can mean no cover.
- **Who owns it at a company:** IT infrastructure and the security team, often with a dedicated identity or privileged access owner in larger companies.
- **What gets bought:** **privileged access management** (CyberArk, BeyondTrust, Delinea) to control and record admin sessions, and **zero trust network access** (Zscaler, Cloudflare Access, Palo Alto Networks) to replace exposed services and old VPNs.
- **A good discovery question:** *“Can you show me every way an administrator can connect to a server from outside the office, and which of those need MFA?”*

</div>

## The one thing to remember

SSH is a secure command line, RDP is a remote screen. Both should sit behind MFA and never be left open to the internet.
