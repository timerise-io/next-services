// const DEF_ORG_ID: string = "XD1JnLAaKlObbYS6xnuY";
const DEF_ORG_ID: string = "XFV6dCD8YZM3IeOiOz3z";

const ORGANIZATIONS: Record<string, string> = {
  "localhost:3000": DEF_ORG_ID,
  "next-services.vercel.app": DEF_ORG_ID,
  "services.timerise.io": DEF_ORG_ID,
  "services.doc-knock.com": "4lXg18S1BRavFG3B85KH",
  "events.byobstl.com": "pGwmFfqIOaEausw14jzh",
  "services.bloomyhealth.pl": "XFV6dCD8YZM3IeOiOz3z",
};

export function getOrganizationId(domain: string): string {
  return ORGANIZATIONS[domain] || DEF_ORG_ID;
}