const ORGANIZATIONS: Record<string, string> = {
  // "localhost:3000": "XFV6dCD8YZM3IeOiOz3z", - bloomy health
  "services.doc-knock.com": "4lXg18S1BRavFG3B85KH",
  "events.byobstl.com": "pGwmFfqIOaEausw14jzh",
  "bookings.bloomyhealth.pl": "XFV6dCD8YZM3IeOiOz3z",
};

export function getOrganizationId(domain: string): string | undefined {
  return ORGANIZATIONS[domain] || undefined;
}
