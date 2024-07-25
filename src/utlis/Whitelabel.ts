const DEFAULT_ORG_ID: string = "XD1JnLAaKlObbYS6xnuY";

const ORGANIZATIONS: Record<string, string> = {
  "localhost:3000": DEFAULT_ORG_ID,
  "next-services.vercel.app": DEFAULT_ORG_ID,
  "services.timerise.io": DEFAULT_ORG_ID,
  "services.doc-knock.com": "4lXg18S1BRavFG3B85KH",
  "events.byobstl.com": "pGwmFfqIOaEausw14jzh",
  "bookings.bloomyhealth.pl": "XFV6dCD8YZM3IeOiOz3z",
};

export function getOrganizationId(domain: string): string {
  return ORGANIZATIONS[domain] || DEFAULT_ORG_ID;
}
