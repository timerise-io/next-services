import ProjectHome from "@/components/Project/Home";
import { fetchProject } from "@/models/projects";
import { Metadata } from "next";
import { CSSProperties } from "react";
import { headers } from "next/headers";
import { Env } from "@/utlis/Env";
import { getOrganizationId } from "@/utlis/Whitelabel";
import ClientOnly from "@/components/ClientOnly";

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

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const query = JSON.stringify({
    query: `{ project(projectId:"${params.projectId}") { projectId title iconUrl logoUrl } }`,
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
      title: data?.data?.project?.title,
      icons: data?.data?.project?.iconUrl,
    };
  } else {
    return {};
  }
}

export default function Project({ params, searchParams }: Props) {
  const { projectId } = params;
  const { query, label } = searchParams;
  const domain = headers().get("host") || "localhost:3000";
  const organizationId = getOrganizationId(domain);

  return (
    <main
      className="flex min-h-screen flex-col items-between justify-between"
      style={componentStyle}
    >
      <ClientOnly>
        <ProjectHome
          organizationId={organizationId}
          projectId={projectId}
          query={query as string}
          label={label as string}
        />
      </ClientOnly>
    </main>
  );
}
