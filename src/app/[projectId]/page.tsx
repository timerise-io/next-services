import ProjectHome from "@/components/Project/Home";
import { fetchProject } from "@/models/projects";
import { Metadata } from "next";
import { CSSProperties } from "react";

type Props = {
  params: {
    projectId: string;
  };
  searchParams: { [key: string]: string | string[] | undefined }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const project = await fetchProject(params.projectId);
  return {
    title: project.title || 'No title',
  }
}

export default function Project({ params, searchParams }: Props) {
  const { projectId } = params;
  const { query, label } = searchParams;
  
  const componentStyle: CSSProperties = { 
    display: 'flex',
    alignItems: 'left',
    flexDirection: 'column',
    maxWidth: '1200px', 
    margin: 'auto', 
    padding: '12px', 
  };
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div style={componentStyle}>
        <ProjectHome projectId={projectId} query={query as string} label={label as string} />
      </div>
    </main>
  );
}
