// Glossary entries. `kid` is the explain-like-I'm-10 version, `grownup` the proper definition.
export type Term = { term: string; kid: string; grownup: string; lesson?: string };

export const glossary: Term[] = [
  {
    term: 'DNS',
    kid: 'The internet’s address book. You ask for a name, it tells you the house number.',
    grownup: 'Domain Name System: translates human-readable names (eli10cyber.com) into IP addresses computers use to connect.',
    lesson: 'dnssec',
  },
  {
    term: 'DNSSEC',
    kid: 'A wax seal on the address book’s answer, so you know nobody swapped it.',
    grownup: 'DNS Security Extensions: adds digital signatures to DNS records so resolvers can verify they are authentic and unaltered.',
    lesson: 'dnssec',
  },
  {
    term: 'DS record',
    kid: 'A note in the parent’s book saying “this is my child’s real seal”.',
    grownup: 'Delegation Signer record: a hash of a child zone’s key, stored in the parent zone, linking the chain of trust.',
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
    kid: 'A seal only you can make, but anyone can check.',
    grownup: 'Cryptographic proof, made with a private key and verified with the matching public key, that data came from the signer and was not changed.',
    lesson: 'dnssec',
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
];
