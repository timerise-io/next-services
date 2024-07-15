import { CSSProperties } from "react";
import type { Metadata } from "next";
import { fetchOrganization } from "@/models/organizations";
import { headers } from "next/headers";
import OrganizationHome from "@/components/Organization/Home";
import { OrganizationInterface } from "@/utlis/Types";
import { Env } from "@/utlis/Env";

type Props = {
  searchParams: { query?: string; label?: string };
};

const DEV_ORG_ID = "XD1JnLAaKlObbYS6xnuY";

const ORGANIZATIONS: Record<string, string> = {
  "localhost:3000": DEV_ORG_ID,
  "next-services.vercel.app": DEV_ORG_ID,
  "services.timerise.io": DEV_ORG_ID,
  "services.doc-knock.com": "4lXg18S1BRavFG3B85KH",
  "events.byobstl.com": "pGwmFfqIOaEausw14jzh",
  "services.bloomyhealth.pl": "XFV6dCD8YZM3IeOiOz3z",
};

function getOrganizationId(domain: string): string {
  return ORGANIZATIONS[domain] || DEV_ORG_ID;
}

export async function generateMetadata(): Promise<Metadata> {
  const domain = headers().get("host") || "localhost:3000";
  const organizationId = getOrganizationId(domain);
  const query = JSON.stringify({
    query: `{ organization(organizationId:"${organizationId}") { title iconUrl logoUrl coverUrl og { title description image locale } } }`,
  });
  const response = await fetch(Env.NEXT_PUBLIC_TIMERISE_API_ENDPOINT, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: query,
  });
  if (response.ok) {
    const data = await response.json();
    return { title: data?.data?.organization?.title || "No title" };
  } else {
    return { title: "No title" };
  }
}

const componentStyle: CSSProperties = {
  display: "flex",
  alignItems: "left",
  flexDirection: "column",
  maxWidth: "1200px",
  margin: "auto",
  padding: "12px",
};

export default function Home({ searchParams }: Props) {
  const { query, label } = searchParams;
  const domain = headers().get("host") || "localhost:3000";
  const organizationId = getOrganizationId(domain);
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div style={componentStyle}>
        <OrganizationHome
          organizationId={organizationId}
          query={query as string}
          label={label as string}
        />
      </div>
    </main>
  );
}
