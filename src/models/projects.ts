import { Env } from "@/utlis/Env";
import { ProjectInterface } from "@/utlis/Types";

export const fetchProject = async (
  projectId: string,
): Promise<ProjectInterface> => {
  const response = await fetch(Env.NEXT_PUBLIC_LOCAL_API_ENDPOINT + '/api/projects/' + projectId, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  });
  if (response.ok) {
    const data = await response.json();
    return data as ProjectInterface;
  }
  return {} as ProjectInterface;
};
