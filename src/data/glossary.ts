// Glossary entries.
//   kid      the explain-like-I'm-10 version (also shown when hovering a linked term)
//   grownup  the proper definition
//   lesson   the lesson that teaches this term. Mentions link to the glossary until that lesson is published.
//   aliases  other spellings to auto-link (plurals, short forms)
//
// Every term below is auto-linked the first time it appears in any lesson.
export type Term = { term: string; kid: string; grownup: string; lesson?: string; aliases?: string[] };

export const glossary: Term[] = [
  // Addressing
  {
    term: 'IP address',
    aliases: ['IP addresses'],
    kid: 'A house number for a computer, so data knows where to go.',
    grownup: 'A numerical label identifying a device’s network interface so packets can be routed to it.',
    lesson: 'ip-addressing',
  },
  {
    term: 'IPv4',
    kid: 'The old address book, with room for about four billion houses. It’s full.',
    grownup: 'Internet Protocol version 4: 32-bit addresses such as 203.0.113.5. The global pool of free addresses has run out.',
    lesson: 'ip-addressing',
  },
  {
    term: 'IPv6',
    kid: 'The new address book with practically endless pages.',
    grownup: 'Internet Protocol version 6: 128-bit addresses such as 2001:db8::5, designed to replace IPv4.',
    lesson: 'ip-addressing',
  },
  {
    term: 'NAT',
    kid: 'One front door number shared by everyone living in a big house.',
    grownup: 'Network Address Translation: lets many devices share one public IP address by rewriting addresses at the router.',
    lesson: 'ip-addressing',
  },
  {
    term: 'Dual stack',
    kid: 'A street signposted in two languages at once.',
    grownup: 'Running IPv4 and IPv6 side by side on the same network. Security controls must cover both.',
    lesson: 'ip-addressing',
  },
  // Switching and routing
  {
    term: 'Unicast',
    kid: 'Passing a note to one friend.',
    grownup: 'Traffic sent from one device to one specific device.',
    lesson: 'switches',
  },
  {
    term: 'Broadcast',
    aliases: ['broadcasts'],
    kid: 'Shouting in the dining hall so everyone hears.',
    grownup: 'Traffic sent to every device on the local network. Stopped at routers. IPv6 uses multicast instead.',
    lesson: 'switches',
  },
  {
    term: 'Multicast',
    kid: 'Talking to everyone who joined the chess club, and nobody else.',
    grownup: 'Traffic sent to a group of devices that have opted in to receive it.',
    lesson: 'switches',
  },
  {
    term: 'Switch',
    aliases: ['switches'],
    kid: 'The hallway monitor who walks each note to the right classroom.',
    grownup: 'A device that connects devices on a local network and forwards frames to the right port using a MAC address table.',
    lesson: 'switches',
  },
  {
    term: 'MAC address',
    aliases: ['MAC addresses'],
    kid: 'A name badge stitched into every device.',
    grownup: 'Media Access Control address: a device’s hardware network identifier. Easy to spoof in software.',
    lesson: 'switches',
  },
  {
    term: 'Port security',
    kid: 'Checking name badges at each classroom door.',
    grownup: 'A switch feature that limits which and how many MAC addresses may use each port.',
    lesson: 'switches',
  },
  {
    term: 'MAC filtering',
    kid: 'A list of allowed badges, which a clever kid can copy.',
    grownup: 'Allowing only listed MAC addresses onto a network. Weak alone, because MAC addresses can be spoofed.',
    lesson: 'switches',
  },
  {
    term: '802.1X',
    kid: 'Showing a real ID card, not just a badge, before the door opens.',
    grownup: 'Port-based network access control: a device must authenticate before the switch port or Wi-Fi lets it on.',
    lesson: 'switches',
  },
  {
    term: 'Network access control',
    aliases: ['NAC'],
    kid: 'A receptionist who checks every visitor before they get a pass.',
    grownup: 'Checking the identity and health of every device before it is allowed onto the network.',
    lesson: 'switches',
  },
  {
    term: 'Broadcast storm',
    aliases: ['broadcast storms'],
    kid: 'Pupils running round a circular corridor, all shouting, until nobody can hear.',
    grownup: 'Broadcast frames multiplying around a switching loop until they swamp the network.',
    lesson: 'network-loops',
  },
  {
    term: 'STP',
    aliases: ['Spanning Tree Protocol', 'spanning tree'],
    kid: 'The caretaker who locks one door so corridors never form a circle.',
    grownup: 'Spanning Tree Protocol: blocks redundant switch ports to prevent loops while keeping backup paths ready.',
    lesson: 'network-loops',
  },
  {
    term: 'BPDU',
    aliases: ['BPDUs'],
    kid: 'The notes caretakers pass each other to map the corridors.',
    grownup: 'Bridge Protocol Data Unit: the messages switches exchange to build the spanning tree.',
    lesson: 'network-loops',
  },
  {
    term: 'BPDU guard',
    kid: 'Locking a classroom door the moment a fake caretaker’s note appears there.',
    grownup: 'Shuts down an edge port if it receives a BPDU, blocking rogue switches.',
    lesson: 'network-loops',
  },
  {
    term: 'Router',
    aliases: ['routers'],
    kid: 'The crossroads guard between neighbourhoods.',
    grownup: 'A device that forwards packets between different networks using a routing table.',
    lesson: 'routers-acls',
  },
  {
    term: 'ACL',
    aliases: ['ACLs', 'access control list', 'access control lists'],
    kid: 'The guard’s clipboard of who may cross, read from the top.',
    grownup: 'Access control list: ordered permit and deny rules, checked top to bottom, first match wins.',
    lesson: 'routers-acls',
  },
  {
    term: 'Implicit deny',
    kid: 'Not on the list? Not getting through.',
    grownup: 'The default rule at the end of an ACL or firewall policy that blocks anything not explicitly allowed.',
    lesson: 'routers-acls',
  },
  {
    term: 'BGP',
    kid: 'The road signs between whole countries’ road networks.',
    grownup: 'Border Gateway Protocol: how internet providers exchange routes. False announcements cause BGP hijacks.',
    lesson: 'routers-acls',
  },
  {
    term: 'SNMP',
    aliases: ['SNMPv3'],
    kid: 'Head office checking on every guard. Old versions shout the password; v3 whispers.',
    grownup: 'Simple Network Management Protocol: monitors network devices. UDP 161/162. Only v3 authenticates and encrypts.',
    lesson: 'routers-acls',
  },
  {
    term: 'Firewall',
    aliases: ['firewalls'],
    kid: 'A guard at the gate who checks every visitor against the rules.',
    grownup: 'A device or software that filters traffic between networks according to a security policy.',
    lesson: 'routers-acls',
  },
  {
    term: 'DHCP',
    kid: 'The car park attendant who gives every car its own numbered space.',
    grownup: 'Dynamic Host Configuration Protocol: automatically assigns IP addresses and network settings to devices for a lease period. UDP 67/68.',
    lesson: 'dhcp-ntp',
  },
  {
    term: 'DHCP snooping',
    kid: 'A rule that only the real car park attendant may hand out tickets.',
    grownup: 'A switch feature that only trusts DHCP replies from approved ports, blocking rogue DHCP servers.',
    lesson: 'dhcp-ntp',
  },
  {
    term: 'NTP',
    kid: 'The school bell that keeps every clock showing the same time.',
    grownup: 'Network Time Protocol: synchronises device clocks to a reference time source. UDP 123.',
    lesson: 'dhcp-ntp',
  },
  {
    term: 'DDI',
    kid: 'One control room for the address book, the car park attendant and the house numbers.',
    grownup: 'DNS, DHCP and IP address management combined into one platform.',
    lesson: 'dhcp-ntp',
  },
  // DNS
  {
    term: 'DNS',
    kid: 'The internet’s address book. You ask for a name, it tells you the house number.',
    grownup: 'Domain Name System: translates names such as eli10cyber.com into IP addresses. Port 53.',
    lesson: 'dns',
  },
  {
    term: 'Resolver',
    aliases: ['resolvers', 'recursive resolver'],
    kid: 'The librarian who looks up addresses for you and remembers them for next time.',
    grownup: 'A DNS server that answers queries for clients by asking other DNS servers and caching the results.',
    lesson: 'dns',
  },
  {
    term: 'Protective DNS',
    kid: 'A librarian who refuses to give out the addresses of known baddies.',
    grownup: 'A DNS resolver that blocks lookups for known malicious domains.',
    lesson: 'dns',
  },
  {
    term: 'DNS over HTTPS',
    aliases: ['DoH'],
    kid: 'Asking the librarian your question in a sealed envelope.',
    grownup: 'Encrypts DNS lookups inside HTTPS on port 443, hiding them from the network.',
    lesson: 'dns',
  },
  {
    term: 'DNSSEC',
    kid: 'A wax seal on the address book’s answer, so you know nobody swapped it.',
    grownup: 'DNS Security Extensions: adds digital signatures to DNS records so resolvers can verify they are authentic and unaltered.',
    lesson: 'dnssec',
  },
  {
    term: 'RRSIG',
    kid: 'The wax seal itself, stamped on each answer.',
    grownup: 'Resource Record Signature: the DNSSEC record holding the digital signature over a set of DNS records.',
    lesson: 'dnssec',
  },
  {
    term: 'DNSKEY',
    kid: 'The stamp pattern everyone can compare a seal against.',
    grownup: 'The DNSSEC record that publishes a zone’s public keys, used to verify RRSIG signatures.',
    lesson: 'dnssec',
  },
  {
    term: 'DS record',
    aliases: ['DS records'],
    kid: 'A note in the parent’s book saying “this is my child’s real seal”.',
    grownup: 'Delegation Signer record: a hash of a child zone’s key, stored in the parent zone, linking the chain of trust.',
    lesson: 'dnssec',
  },
  {
    term: 'Validating resolver',
    aliases: ['validating resolvers'],
    kid: 'The librarian who checks every seal before trusting an answer.',
    grownup: 'A DNS resolver that verifies DNSSEC signatures up the chain of trust and rejects answers that fail.',
    lesson: 'dnssec',
  },
  {
    term: 'Cache poisoning',
    kid: 'Slipping a fake page into the address book so people go to the wrong house.',
    grownup: 'An attack that inserts forged DNS responses into a resolver’s cache, redirecting users to attacker-controlled addresses.',
    lesson: 'dnssec',
  },
  // Email
  {
    term: 'SPF',
    kid: 'The guest list of post offices allowed to send a company’s letters.',
    grownup: 'Sender Policy Framework: a DNS TXT record listing the servers authorised to send email for a domain.',
    lesson: 'email-auth',
  },
  {
    term: 'DKIM',
    kid: 'A wax seal on each email that only the real sender can make.',
    grownup: 'DomainKeys Identified Mail: signs outgoing email so receivers can verify it with the public key in the sender’s DNS.',
    lesson: 'email-auth',
  },
  {
    term: 'DMARC',
    kid: 'The rulebook telling the postman what to do with fake letters.',
    grownup: 'Domain-based Message Authentication, Reporting and Conformance: passes email if SPF or DKIM passes and aligns with the From domain, sets a policy (none, quarantine, reject) and enables reporting.',
    lesson: 'email-auth',
  },
  {
    term: 'Business email compromise',
    aliases: ['BEC'],
    kid: 'A trickster pretending to be the head teacher so the office sends them the dinner money.',
    grownup: 'Fraud where attackers impersonate executives or suppliers by email to redirect payments or steal data.',
    lesson: 'email-auth',
  },
  // Identity
  {
    term: 'Active Directory',
    aliases: ['AD DS'],
    kid: 'The head teacher’s binder of everyone and which doors they can open.',
    grownup: 'Microsoft’s directory service for Windows networks, storing users, groups, computers and policies on domain controllers.',
    lesson: 'directory-services',
  },
  {
    term: 'Domain controller',
    aliases: ['domain controllers'],
    kid: 'The office where the head teacher’s binder is kept.',
    grownup: 'A server that runs Active Directory, authenticating users and applying policy for a Windows domain.',
    lesson: 'directory-services',
  },
  {
    term: 'LDAP',
    kid: 'The polite way to ask the binder a question.',
    grownup: 'Lightweight Directory Access Protocol: the standard protocol for querying and updating a directory. TCP 389.',
    lesson: 'directory-services',
  },
  {
    term: 'LDAPS',
    kid: 'Asking the binder your question through a scrambled walkie-talkie.',
    grownup: 'LDAP over TLS, encrypting directory traffic. TCP 636.',
    lesson: 'directory-services',
  },
  {
    term: 'Kerberos',
    kid: 'A ticket booth: show your pass once, then get tickets for each ride.',
    grownup: 'The ticket-based authentication protocol used by Active Directory. Needs synchronised clocks.',
    lesson: 'directory-services',
  },
  // Remote access
  {
    term: 'SSH',
    aliases: ['OpenSSH'],
    kid: 'A secret walkie-talkie tunnel for typing commands on a faraway computer.',
    grownup: 'Secure Shell: encrypted remote command-line access, file transfer and tunnelling. TCP 22.',
    lesson: 'remote-access',
  },
  {
    term: 'RDP',
    kid: 'A magic TV remote that shows and controls another computer’s whole screen.',
    grownup: 'Remote Desktop Protocol: Microsoft’s protocol for graphical remote control of a computer. TCP 3389.',
    lesson: 'remote-access',
  },
  {
    term: 'Privileged access management',
    aliases: ['PAM'],
    kid: 'A guard who hands out the master keys only when needed, and watches what you do with them.',
    grownup: 'Tools and processes that control, monitor and record the use of administrator accounts.',
    lesson: 'remote-access',
  },
  {
    term: 'Supply chain attack',
    aliases: ['supply chain attacks'],
    kid: 'Poisoning the sweets at the factory, so the shop sells them without knowing.',
    grownup: 'Compromising a trusted supplier, software or update so its customers install the attack themselves.',
  },
  // Calls
  {
    term: 'VoIP',
    kid: 'A tin-can telephone where the string is the internet.',
    grownup: 'Voice over IP: carrying phone calls over IP networks instead of traditional phone lines.',
    lesson: 'voip',
  },
  {
    term: 'SIP',
    kid: 'The doorbell that starts and ends a call.',
    grownup: 'Session Initiation Protocol: sets up, manages and ends VoIP calls. 5060, or 5061 over TLS.',
    lesson: 'voip',
  },
  {
    term: 'RTP',
    kid: 'The conveyor belt carrying numbered pieces of your voice.',
    grownup: 'Real-time Transport Protocol: carries audio and video, with sequence numbers and timestamps, usually over UDP.',
    lesson: 'voip',
  },
  {
    term: 'SRTP',
    kid: 'The voice conveyor belt inside a locked glass tunnel.',
    grownup: 'Secure Real-time Transport Protocol: RTP with encryption, authentication and replay protection.',
    lesson: 'voip',
  },
  {
    term: 'Toll fraud',
    kid: 'Sneaking into the school phone to make expensive calls on the school’s bill.',
    grownup: 'Abusing a compromised phone system to make costly international or premium-rate calls.',
    lesson: 'voip',
  },
  // General
  {
    term: 'Digital signature',
    aliases: ['digital signatures'],
    kid: 'A seal only you can make, but anyone can check.',
    grownup: 'Cryptographic proof, made with a private key and verified with the matching public key, that data came from the signer and was not changed.',
  },
  {
    term: 'Integrity',
    kid: 'Nobody changed it on the way.',
    grownup: 'Assurance that data has not been altered by unauthorised parties. One of the CIA triad.',
  },
  {
    term: 'Confidentiality',
    kid: 'Only the right people can read it.',
    grownup: 'Assurance that data is accessible only to authorised parties, usually through encryption and access control.',
  },
  {
    term: 'DDoS',
    kid: 'Thousands of people shouting at a shop door at once so real customers can’t get in.',
    grownup: 'Distributed Denial of Service: flooding a service with traffic from many sources to make it unavailable.',
  },
  {
    term: 'MFA',
    kid: 'A password plus something you hold, like a code on your phone.',
    grownup: 'Multi-factor authentication: requiring two or more different kinds of proof to sign in.',
  },
  // Browsers and ad fraud (from "In the news")
  {
    term: 'Browser extension',
    aliases: ['browser extensions', 'Chrome extension', 'Chrome extensions'],
    kid: 'A sticker you add to your browser that gives it a new trick, and can see what you do.',
    grownup: 'A small add-on program that changes or extends what a web browser does. It can read or change pages and settings, depending on what it is allowed.',
  },
  {
    term: 'Browser hijacker',
    aliases: ['browser hijackers', 'browser hijacking'],
    kid: 'Someone secretly changing where your browser takes you.',
    grownup: 'Unwanted software that changes browser settings, such as the home page or default search engine, to redirect the user, usually for profit.',
  },
  {
    term: 'PUP',
    aliases: ['PUPs', 'potentially unwanted program', 'potentially unwanted programs'],
    kid: 'A ‘free gift’ that does things you never asked for.',
    grownup: 'Potentially unwanted program: software the user agreed to install, often without understanding it, that behaves in unwanted ways such as showing ads or tracking.',
  },
  {
    term: 'Search syndication',
    kid: 'A shop paying a coin to whoever brings it customers.',
    grownup: 'Programmes where search engines serve results and ads through partners, and share the ad revenue with the partner whose code is on the search.',
  },
  {
    term: 'Proxy server',
    aliases: ['proxy servers'],
    kid: 'A messenger who carries your note for you, and can read it on the way.',
    grownup: 'A server that sits between a user and the destination, passing requests on. It can see, log, change or redirect the traffic.',
  },
  {
    term: 'Watering hole attack',
    aliases: ['watering hole', 'watering hole attacks'],
    kid: 'Waiting at the pond where all the animals drink, instead of chasing them.',
    grownup: 'Compromising a site or service the targets already use, then attacking the people who come to it.',
  },
  {
    term: 'Ad fraud',
    kid: 'Getting paid for customers who never really chose to come.',
    grownup: 'Generating fake or misattributed ad impressions, clicks or traffic so that advertisers pay for audiences that aren’t real or didn’t choose the route.',
  },
  {
    term: 'Malvertising',
    kid: 'A poster on the wall that leads you into a trap.',
    grownup: 'Using online adverts to spread malware or lead people to malicious or unwanted software.',
  },
  {
    term: 'Allow list',
    aliases: ['allow lists', 'allowlist', 'allowlists', 'allowlisting'],
    kid: 'Only people on the list get in. Everyone else waits outside.',
    grownup: 'A control that permits only approved items, such as apps, extensions or addresses, and blocks everything else by default.',
  },
  {
    term: 'Phishing',
    kid: 'A fake letter pretending to be someone you trust, to trick you.',
    grownup: 'Tricking people into revealing credentials or installing malware, usually with fake emails, messages or websites.',
  },
];
