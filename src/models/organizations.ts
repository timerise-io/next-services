import { Env } from "@/utlis/Env";
import { OrganizationInterface, ProjectInterface } from "@/utlis/Types";

export const fetchOrganization = async (
  organizationId: string
): Promise<OrganizationInterface> => {
  const response = await fetch("/api/organizations/" + organizationId, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
  if (response.ok) {
    const data = await response.json();
    return data as OrganizationInterface;
  }
  return {} as OrganizationInterface;
};

export const fetchProjectsByOrganization = async (
  organizationId: string | null
): Promise<ProjectInterface[]> => {
  if (!organizationId) {
    return [] as ProjectInterface[];
  }
  const response = await fetch(
    "/api/organizations/" + organizationId + "/projects",
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
  if (response.ok) {
    const data = await response.json();
    return data as ProjectInterface[];
  }
  return [] as ProjectInterface[];
};
