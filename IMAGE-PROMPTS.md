# Image prompts for eli10cyber.com

How to use:
1. Start a new Gemini chat and paste the **style setup** once.
2. Then send one **poster** block at a time. Each block is one image.
3. Check every label against the block before using the image (spelling, numbers, the badge).

---

## Style setup (paste once per Gemini chat)

```
You will illustrate a series of educational posters for the website eli10cyber.com.
For every poster I send after this message, follow these rules exactly.

STYLE: hand-drawn children's-book illustration, coloured pencil and ink on cream
paper. Thick navy-blue outlines, warm soft colours, highlighter-yellow accents.
Friendly, diverse cartoon children and adults. Clean and uncluttered.

FORMAT: landscape 4:3, high resolution. A flat, straight-on scan of the poster
filling the whole frame. No photo of the poster, no person holding it, no table,
no wall, no background around it.

LAYOUT: a yellow title bar across the top. Below it, a 2 x 2 grid of four panels.
Each panel has a heading bar with its number (1 to 4) in a red circle, the scene,
and a one-line caption strip along the bottom of the panel.

BADGE: at the exact centre of the poster, where the four panels meet, a round
cream badge with a navy border overlapping all four panels, with
"eli10cyber.com" written clearly inside it in navy lettering.

TEXT RULES: use ONLY the words I give you, spelled exactly, character for
character, including numbers and punctuation. No other words, letters, numbers,
logos, brand names or watermarks anywhere. Where I say a sign or object is
blank, leave it blank.

Reply "Ready" and wait for my first poster.
```

---

## Lesson 1: IPv4 vs IPv6

```
POSTER
Title: "IPv4 vs IPv6: House Numbers for Computers"

Panel 1 heading: "What is an IP Address?"
Scene: a postman delivering a letter to a house whose door plate reads "203.0.113.5".
Caption: "Every device needs its own address."

Panel 2 heading: "IPv4: The Full Street"
Scene: a crowded street of tiny houses squeezed together, a sign on a post reading "FULL".
Caption: "About 4 billion addresses. All used up!"

Panel 3 heading: "NAT: One Front Door"
Scene: one big house with a single door plate "203.0.113.5", many children waving from its windows.
Caption: "Many devices share one public address."

Panel 4 heading: "IPv6: Endless Plots"
Scene: a huge new neighbourhood stretching to the horizon with endless empty plots; one house's door plate reads "2001:db8::5".
Caption: "Enough addresses for every grain of sand."
```

## Lesson 2: Switches

```
POSTER
Title: "Switches: Delivering Inside the Building"

Panel 1 heading: "Unicast"
Scene: in a classroom, one child passes a folded note to one friend; nobody else notices.
Caption: "A note for one friend only."

Panel 2 heading: "Broadcast"
Scene: a child with a megaphone in a school dining hall; every child turns to listen. At the hall doorway, a closed gate with a sign reading "ROUTER" stops the sound going outside.
Caption: "Everyone nearby hears. Routers stop it."

Panel 3 heading: "Port Security"
Scene: a hallway monitor at a row of classroom doors checks a child's name badge; another child with a copied, smudged badge is turned away.
Caption: "Only approved devices on each port."

Panel 4 heading: "Physical vs Logical Ports"
Scene: left half, a cable plugged into a real socket in a wall. Right half, a small building with numbered doors reading "22", "53" and "443".
Caption: "Sockets you plug into vs numbered service doors."
```

## Lesson 3: Broadcast storms and loops

```
POSTER
Title: "Broadcast Storms & Loops"

Panel 1 heading: "One Cable Too Many"
Scene: two school corridors joined into a circle; a child runs round it shouting.
Caption: "Two paths can make a loop."

Panel 2 heading: "The Broadcast Storm"
Scene: dozens of children running round the circular corridor, all shouting into megaphones; teachers covering their ears.
Caption: "Copies multiply until everything jams."

Panel 3 heading: "Spanning Tree"
Scene: a caretaker locks one of the two corridor doors; the door has a sign reading "BLOCKED". Children walk calmly along the single open path.
Caption: "One extra path is blocked. Loop gone."

Panel 4 heading: "BPDU Guard"
Scene: a child plugs a toy robot caretaker into a classroom wall socket; an alarm light flashes and the socket's little door slams shut.
Caption: "Unexpected switch? Port shuts down."
```

## Lesson 4: Routers, ACLs and SNMP

```
POSTER
Title: "Routers, ACLs & SNMP"

Panel 1 heading: "Routers"
Scene: a crossroads guard standing between two different neighbourhoods, waving travellers onto the right road.
Caption: "Routers connect different networks."

Panel 2 heading: "ACLs & Implicit Deny"
Scene: the guard checks a clipboard; the last line on the clipboard reads "DENY EVERYTHING ELSE". A traveller not on the list is turned back.
Caption: "Read top to bottom. Not listed? Not allowed."

Panel 3 heading: "Route Security"
Scene: a prankster tries to swap two road signs, but the signposts are padlocked.
Caption: "Protect the maps routers follow."

Panel 4 heading: "SNMP v1/v2c vs v3"
Scene: left, a child shouting the word "public" across a playground while others overhear. Right, a child whispering inside a glowing bubble labelled "v3".
Caption: "Old versions shout passwords. v3 encrypts."
```

## Lesson 5: DHCP and NTP

```
POSTER
Title: "DHCP & NTP: Addresses and Time"

Panel 1 heading: "DHCP: The Car Park Attendant"
Scene: an attendant hands a car a ticket reading "192.168.1.23". Parked cars sit in spaces numbered "20", "21" and "22".
Caption: "Every new device gets its own address."

Panel 2 heading: "Rogue DHCP"
Scene: a sneaky person in a fake attendant's cap hands out tickets; a guard in a real uniform stops them.
Caption: "Only the real attendant is trusted."

Panel 3 heading: "NTP: The School Bell"
Scene: a big master clock in a town square; every classroom clock and two computer screens all show exactly "10:30".
Caption: "Every clock shows the same time."

Panel 4 heading: "Why Time Matters"
Scene: a child detective lines up three clue cards in a row, each stamped "10:31".
Caption: "Matching times help solve the case."
```

## Lesson 6: DNS

```
POSTER
Title: "DNS: The Internet's Address Book"

Panel 1 heading: "Names vs Numbers"
Scene: a child at a laptop with a thought bubble reading "eli10cyber.com?".
Caption: "You know the name. Computers need the number."

Panel 2 heading: "The Librarian"
Scene: a librarian walks between giant shelves labelled "ROOT" and ".com" in a huge library.
Caption: "The resolver asks, step by step."

Panel 3 heading: "The Answer"
Scene: the librarian hands the child a card reading "203.0.113.5" and writes it in a notebook.
Caption: "Then remembers it for next time."

Panel 4 heading: "Protective DNS"
Scene: the librarian refuses to give the address of a shadowy house with a sign reading "BAD SITE".
Caption: "Bad addresses are never handed out."
```

## Lesson 7: DNSSEC (optional, the lesson already has a diagram)

```
POSTER
Title: "DNSSEC: A Wax Seal on the Address Book"

Panel 1 heading: "The Swapped Page"
Scene: a sneaky person secretly swaps a page in a giant address book.
Caption: "Fake answers send you to the wrong house."

Panel 2 heading: "The Wax Seal"
Scene: an address card with an intact red wax seal next to a card with a cracked seal.
Caption: "A broken seal means don't trust it."

Panel 3 heading: "Chain of Trust"
Scene: three books in a row, the first labelled "ROOT", the second ".com", the third blank; each hands a seal to the next.
Caption: "Each level vouches for the next."

Panel 4 heading: "Sealed, Not Secret"
Scene: a glass envelope with a wax seal; anyone can read the letter inside.
Caption: "DNSSEC proves it's real. It doesn't hide it."
```

## Lesson 8: SPF, DKIM and DMARC

```
POSTER
Title: "SPF, DKIM & DMARC: Is This Email Real?"

Panel 1 heading: "SPF: The Guest List"
Scene: a bouncer at a castle gate holding a clipboard headed "APPROVED SENDERS" with three ticked lines; a mail van not on the list is turned away.
Caption: "Only listed servers may send for us."

Panel 2 heading: "DKIM: The Wax Seal"
Scene: one envelope with an intact red wax seal, and one with a broken seal that someone has tampered with.
Caption: "A broken seal means it was changed."

Panel 3 heading: "DMARC: The Rulebook"
Scene: a postman reads a rulebook labelled "DMARC" and drops a letter with no seal into a bin labelled "REJECT".
Caption: "Neither check passes? Into the bin."

Panel 4 heading: "SPF or DKIM = Delivered"
Scene: two paths, one marked with a tick on a guest list and one with an intact wax seal, both leading to a happy child at a mailbox.
Caption: "Only one check needs to pass and match."
```

## Lesson 9: Directory services

```
POSTER
Title: "Directory Services: Who Opens Which Door?"

Panel 1 heading: "Active Directory"
Scene: a head teacher with an enormous binder, surrounded by key cards on hooks.
Caption: "One list of every person and permission."

Panel 2 heading: "Joiners & Leavers"
Scene: a new pupil receives a key card; a leaving pupil's key card is crossed out.
Caption: "Add once. Remove once. Works everywhere."

Panel 3 heading: "LDAP"
Scene: a small friendly robot at the head teacher's desk with a speech bubble reading "Is Sam a teacher?".
Caption: "Apps ask the directory questions."

Panel 4 heading: "LDAPS"
Scene: the robot asks through a walkie-talkie; an eavesdropping child behind a door hears only "#@%&".
Caption: "Encrypted, so nobody can overhear."
```

## Lesson 10: Remote access, SSH and RDP

```
POSTER
Title: "Remote Access: SSH & RDP"

Panel 1 heading: "SSH: The Secret Tunnel"
Scene: a child in a treehouse types on a laptop; a glowing tunnel runs to a server building far away; a spy outside the tunnel sees only "#@%&".
Caption: "Encrypted commands to a faraway computer."

Panel 2 heading: "SSH Keys"
Scene: the child hangs a padlock on the server's door and keeps the only key in their pocket.
Caption: "The server holds the lock. You keep the key."

Panel 3 heading: "No Super-Boss Logins"
Scene: a door labelled "root" is bolted shut; a child wearing a name badge reading "Sam" walks in through a side door.
Caption: "Log in as yourself, then ask for powers."

Panel 4 heading: "RDP: The Magic Remote"
Scene: a child uses a TV remote to control a computer screen far away; the gate to the outside world is padlocked and the child checks a code on their phone.
Caption: "Never leave it open to the internet."
```

## Lesson 11: Internet calls, VoIP

```
POSTER
Title: "Internet Calls: SIP, RTP & SRTP"

Panel 1 heading: "VoIP"
Scene: two children talking through tin-can telephones joined by a glowing internet cable instead of string.
Caption: "Phone calls over the internet."

Panel 2 heading: "SIP: The Doorbell"
Scene: a child presses a doorbell; a speech bubble from the door reads "Want to talk?".
Caption: "Starts and ends the call."

Panel 3 heading: "RTP: The Conveyor Belt"
Scene: a conveyor belt carrying speech bubbles numbered "1", "2", "3" and "4".
Caption: "Carries your voice in numbered pieces."

Panel 4 heading: "SRTP: The Locked Tunnel"
Scene: the same conveyor belt inside a glass tunnel with a padlock; a spy peeking in sees only "#@%&".
Caption: "Encrypted so nobody can listen in."
```

---

## Checklist before sending me an image

- [ ] Every word matches the block exactly (watch for 4 instead of A, missing letters, invented words)
- [ ] The centre badge reads exactly "eli10cyber.com"
- [ ] No real company names or logos
- [ ] A flat poster, not a photo of one
- [ ] At least 2000 px wide
