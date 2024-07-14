import { Env } from "@/utlis/Env";
import { OrganizationInterface, ProjectInterface } from "@/utlis/Types";

export const fetchOrganization = async (
  organizationId: string,
): Promise<OrganizationInterface> => {
  const response = await fetch(Env.NEXT_PUBLIC_LOCAL_API_ENDPOINT + '/api/organizations/' + organizationId, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  });
  if (response.ok) {
    const data = await response.json();
    return data as OrganizationInterface;
  }
  return {} as OrganizationInterface;
};

export const fetchProjectsByOrganization = async (
  organizationId: string,
): Promise<ProjectInterface[]> => {
  const response = await fetch(Env.NEXT_PUBLIC_LOCAL_API_ENDPOINT + '/api/organizations/' + organizationId + '/projects', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  });
  if (response.ok) {
    const data = await response.json();
    return data as ProjectInterface[];
  }
  return [] as ProjectInterface[];
};
