const ORGANIZATIONS: Record<string, string> = {
  // "localhost:3000": "XFV6dCD8YZM3IeOiOz3z", //- bloomy health
  "bookings.bloomyhealth.pl": "XFV6dCD8YZM3IeOiOz3z",
};

export function getOrganizationId(domain: string): string | undefined {
  return ORGANIZATIONS[domain] || undefined;
}
