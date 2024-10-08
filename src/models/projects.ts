import { Env } from "@/utlis/Env";
import { ProjectInterface } from "@/utlis/Types";

export const fetchProject = async (
  projectId: string
): Promise<ProjectInterface> => {
  const response = await fetch("/api/projects/" + projectId, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
  if (response.ok) {
    const data = await response.json();
    return data as ProjectInterface;
  }
  return {} as ProjectInterface;
};

export const searcProject = async (
  projectId: string
): Promise<ProjectInterface> => {
  const response = await fetch("/api/projects/" + projectId, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
  if (response.ok) {
    const data = await response.json();
    return data as ProjectInterface;
  }
  return {} as ProjectInterface;
};
