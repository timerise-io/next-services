import { CSSProperties } from "react";
import type { Metadata } from 'next'
import { fetchOrganization } from "@/models/organizations";
import { headers } from 'next/headers'
import OrganizationHome from "@/components/Organization/Home";
import { useOrganizationProjects } from "@/hooks/SWR/useOrganizationProjects";

type Props = {
  searchParams: { query?: string, label?: string }
}

const ORGANIZATIONS: Record<string, string> = {
  'dev-services.timerise.io': 'XD1JnLAaKlObbYS6xnuY',
  'sandbox-services.timerise.io': 'HeHNVag5ClHuJcrbap2i',
  'services.timerise.io': 'XD1JnLAaKlObbYS6xnuY',
  'mentors.text.com': 'kWhhLMef4UtqtC49HTmN',
  'rezerwuj.weselej.pl': 'k6W4B9Q64ONAQHBAmXk4',
  'services.doc-knock.com': 'kLhr8MNLA3CaSGRFS2y1',
  'events.byobstl.com': 'al3aCQ6KxPTSu3bgkb2P',
};

const DEV_ORG_ID = 'XD1JnLAaKlObbYS6xnuY';

function getOrganizationId(domain: string): string {
  return ORGANIZATIONS[domain] || DEV_ORG_ID;
}

export async function generateMetadata(): Promise<Metadata> {
  const domain = headers().get('host') || 'dev-services.timerise.io';
  const organizationId = getOrganizationId(domain);
  const organization = await fetchOrganization(organizationId);
  return { title: organization.title || 'No title' };
}

const componentStyle: CSSProperties = { 
  display: 'flex',
  alignItems: 'left',
  flexDirection: 'column',
  maxWidth: '1200px', 
  margin: 'auto', 
  padding: '12px', 
};

export default function Home({ searchParams }: Props) {
  const { query, label } = searchParams;
  const domain = headers().get('host') || 'dev-services.timerise.io';
  const organizationId = getOrganizationId(domain);
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div style={componentStyle}>
        <OrganizationHome organizationId={organizationId} query={query as string} label={label as string} />
      </div>
    </main>
  );
}