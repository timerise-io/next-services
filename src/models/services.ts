import { Env } from "@/utlis/Env";
import { ServiceInterface } from "@/utlis/Types";

export const fetchServicesByProject = async (
  projectId: string
): Promise<ServiceInterface[]> => {
  const response = await fetch("/api/projects/" + projectId + "/services", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
  if (response.ok) {
    const data = await response.json();
    return data as ServiceInterface[];
  }
  return [] as ServiceInterface[];
};

export const fetchServicesByOrganization = async (
  organizationId: string
): Promise<ServiceInterface[]> => {
  const response = await fetch(
    "/api/organizations/" + organizationId + "/services",
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
  if (response.ok) {
    const data = await response.json();
    return data as ServiceInterface[];
  }
  return [] as ServiceInterface[];
};
