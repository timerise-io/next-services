import ProjectHome from "@/components/Project/Home";
import { fetchProject } from "@/models/projects";
import { Metadata } from "next";
import { CSSProperties } from "react";
import { headers } from "next/headers";
import { Env } from "@/utlis/Env";

const componentStyle: CSSProperties = {
  display: "flex",
  alignItems: "left",
  flexDirection: "column",
  maxWidth: "1200px",
  margin: "auto",
  padding: "12px",
};

type Props = {
  params: {
    projectId: string;
  };
  searchParams: { [key: string]: string | string[] | undefined };
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

function getOrganizationId(domain: string): string | null {
  return ORGANIZATIONS[domain] || null;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const query = JSON.stringify({
    query: `{ project(projectId:"${params.projectId}") { projectId title logoUrl } }`,
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
    return { title: data?.data?.project?.title || "No title" };
  } else {
    return { title: "No title" };
  }
}

export default function Project({ params, searchParams }: Props) {
  const { projectId } = params;
  const { query, label } = searchParams;
  const domain = headers().get("host") || "localhost:3000";
  const organizationId = getOrganizationId(domain);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div style={componentStyle}>
        <ProjectHome
          organizationId={organizationId}
          projectId={projectId}
          query={query as string}
          label={label as string}
        />
      </div>
    </main>
  );
}
