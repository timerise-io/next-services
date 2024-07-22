import { CSSProperties } from "react";
import type { Metadata } from "next";
import { headers } from "next/headers";
import OrganizationHome from "@/components/Organization/Home";
import { Env } from "@/utlis/Env";
import { getOrganizationId } from "@/utlis/Whitelabel";
import ClientOnly from "@/components/ClientOnly";

type Props = {
  searchParams: { query?: string; label?: string };
};

export async function generateMetadata(): Promise<Metadata> {
  const domain = headers().get("host") || "localhost:3000";
  const organizationId = getOrganizationId(domain);
  const query = JSON.stringify({
    query: `{ organization(organizationId:"${organizationId}") { title iconUrl logoUrl og { title description image locale } } }`,
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
    return {
      title: data?.data?.organization?.title,
      icons: data?.data?.organization?.iconUrl,
    };
  } else {
    return {};
  }
}

const componentStyle: CSSProperties = {
  maxWidth: "1200px",
  margin: "auto",
};

export default function Home({ searchParams }: Props) {
  const { query, label } = searchParams;
  const domain = headers().get("host") || "localhost:3000";
  const organizationId = getOrganizationId(domain);
  return (
    <main
      className="flex min-h-screen flex-col items-between justify-between"
      style={componentStyle}
    >
      <ClientOnly>
        <OrganizationHome
          organizationId={organizationId}
          query={query as string}
          label={label as string}
        />
      </ClientOnly>
    </main>
  );
}
