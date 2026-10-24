// The learning map. Each topic id can be linked to a lesson via the lesson's `topic` frontmatter.
// Domains follow the five areas of the Security+ SY0-701 exam outline.

export type Topic = { id: string; name: string; kid: string };
export type Domain = { id: string; name: string; weight: string; topics: Topic[] };

export const domains: Domain[] = [
  {
    id: 'concepts',
    name: 'General security concepts',
    weight: '12%',
    topics: [
      { id: 'cia', name: 'Confidentiality, integrity, availability', kid: 'Keep secrets, stop tampering, stay switched on' },
      { id: 'aaa', name: 'Authentication, authorisation, accounting', kid: 'Who are you, what can you do, what did you do' },
      { id: 'zero-trust', name: 'Zero Trust', kid: 'Check everyone, every time, even inside the house' },
      { id: 'crypto-basics', name: 'Encryption and hashing', kid: 'Secret codes and fingerprints for data' },
      { id: 'pki', name: 'Certificates and PKI', kid: 'ID cards for websites' },
    ],
  },
  {
    id: 'threats',
    name: 'Threats, vulnerabilities and mitigations',
    weight: '22%',
    topics: [
      { id: 'threat-actors', name: 'Threat actors', kid: 'Who the baddies are and what they want' },
      { id: 'phishing', name: 'Phishing and social engineering', kid: 'Tricking people instead of computers' },
      { id: 'malware', name: 'Malware and ransomware', kid: 'Bad programs that sneak in' },
      { id: 'network-attacks', name: 'Network attacks (spoofing, DDoS)', kid: 'Pretending to be someone, or shouting so loud no one hears' },
      { id: 'app-attacks', name: 'Application attacks', kid: 'Feeding an app the wrong kind of food' },
    ],
  },
  {
    id: 'architecture',
    name: 'Security architecture',
    weight: '18%',
    topics: [
      { id: 'ip-addressing', name: 'IPv4 and IPv6', kid: 'House numbers for computers, and why we ran out' },
      { id: 'dhcp-ntp', name: 'DHCP and NTP', kid: 'A car park attendant and a school bell' },
      { id: 'dns', name: 'DNS', kid: 'The internet’s address book' },
      { id: 'dnssec', name: 'DNSSEC', kid: 'A wax seal on the internet’s address book' },
      { id: 'email-auth', name: 'Email authentication: SPF, DKIM, DMARC', kid: 'A guest list, a wax seal and a rulebook for email' },
      { id: 'remote-access', name: 'Remote access: SSH and RDP', kid: 'Controlling a computer from far away, safely' },
      { id: 'voip', name: 'Internet calls: SIP, RTP, SRTP', kid: 'A doorbell, a conveyor belt and a locked tunnel' },
      { id: 'segmentation', name: 'Network segmentation', kid: 'Locked rooms inside the house' },
      { id: 'cloud', name: 'Cloud security', kid: 'Keeping your stuff safe in someone else’s house' },
      { id: 'resilience', name: 'Backups and resilience', kid: 'A spare key and a spare house' },
    ],
  },
  {
    id: 'operations',
    name: 'Security operations',
    weight: '28%',
    topics: [
      { id: 'directory-services', name: 'Directory services: AD DS, LDAP, LDAPS', kid: 'The head teacher’s binder of who can open which door' },
      { id: 'iam', name: 'Identity and access management', kid: 'Giving out the right keys' },
      { id: 'mfa', name: 'Multi-factor authentication', kid: 'Password plus something you hold' },
      { id: 'monitoring', name: 'Logging, SIEM and monitoring', kid: 'Security cameras for computers' },
      { id: 'incident-response', name: 'Incident response', kid: 'What to do when the alarm goes off' },
      { id: 'vuln-management', name: 'Vulnerability management', kid: 'Finding the holes before the baddies do' },
    ],
  },
  {
    id: 'governance',
    name: 'Security programme management and oversight',
    weight: '20%',
    topics: [
      { id: 'risk', name: 'Risk management', kid: 'Deciding which worries matter most' },
      { id: 'policies', name: 'Policies and governance', kid: 'The house rules' },
      { id: 'compliance', name: 'Compliance and audits', kid: 'Proving you follow the rules' },
      { id: 'third-party', name: 'Third-party risk', kid: 'Are your friends’ houses safe too?' },
      { id: 'awareness', name: 'Security awareness training', kid: 'Teaching everyone the rules' },
    ],
  },
];
