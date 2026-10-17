// Glossary entries.
//   kid      the explain-like-I'm-10 version (also shown when hovering a linked term)
//   grownup  the proper definition
//   lesson   the lesson that teaches this term. Leave empty until that lesson exists:
//            mentions then link to the glossary entry instead.
//   aliases  other spellings to auto-link (plurals, short forms)
//
// Every term below is auto-linked the first time it appears in any lesson.
export type Term = { term: string; kid: string; grownup: string; lesson?: string; aliases?: string[] };

export const glossary: Term[] = [
  {
    term: 'DNS',
    kid: 'The internet’s address book. You ask for a name, it tells you the house number.',
    grownup: 'Domain Name System: translates human-readable names (eli10cyber.com) into IP addresses computers use to connect.',
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
    kid: 'The helper that looks up addresses for you and checks every seal before trusting the answer.',
    grownup: 'A DNS resolver that verifies DNSSEC signatures up the chain of trust and rejects answers that fail.',
    lesson: 'dnssec',
  },
  {
    term: 'Cache poisoning',
    kid: 'Slipping a fake page into the address book so people go to the wrong house.',
    grownup: 'An attack that inserts forged DNS responses into a resolver’s cache, redirecting users to attacker-controlled addresses.',
    lesson: 'dnssec',
  },
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
    term: 'NTP',
    kid: 'The school bell that keeps every clock showing the same time.',
    grownup: 'Network Time Protocol: synchronises device clocks to a reference time source.',
    lesson: 'network-basics',
  },
  {
    term: 'DHCP',
    kid: 'The car park attendant who gives every car its own numbered space.',
    grownup: 'Dynamic Host Configuration Protocol: automatically assigns IP addresses and network settings to devices for a lease period.',
    lesson: 'network-basics',
  },
  {
    term: 'IPv4',
    kid: 'The old address book, with room for about four billion houses. It’s full.',
    grownup: 'Internet Protocol version 4: 32-bit addresses such as 192.168.1.5. The global pool of free addresses has run out.',
    lesson: 'network-basics',
  },
  {
    term: 'IPv6',
    kid: 'The new address book with practically endless pages.',
    grownup: 'Internet Protocol version 6: 128-bit addresses such as 2001:db8::5, designed to replace IPv4.',
    lesson: 'network-basics',
  },
];
