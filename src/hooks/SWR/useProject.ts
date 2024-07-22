import { fetchProject } from "@/models/projects";
import useSWR, { mutate } from "swr";

export function useProject(projectId: string) {
  const { data, error } = useSWR([`project-${projectId}`], () =>
    fetchProject(projectId)
  );
  return {
    project: data,
    isLoadingProject: !error && !data,
    isError: error,
  };
}

export function useProjectReload(projectId: string) {
  const reloadProject = async () => {
    await mutate([`project-${projectId}`], fetchProject(projectId), false);
  };
  return {
    reloadProject,
  };
}
