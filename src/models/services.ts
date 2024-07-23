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

export const fetchFeaturedServicesByProject = async (
  projectId: string
): Promise<ServiceInterface[]> => {
  const response = await fetch(
    "/api/projects/" + projectId + "/services/featured",
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

export const fetchServicesByProjectAndQuery = async (
  projectId: string,
  query: string
): Promise<ServiceInterface[]> => {
  const response = await fetch(
    "/api/projects/" + projectId + "/services?query=" + query,
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

export const fetchServicesByProjectAndLabel = async (
  projectId: string,
  label: string
): Promise<ServiceInterface[]> => {
  const response = await fetch(
    "/api/projects/" + projectId + "/services?label=" + label,
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

export const fetchFeaturedServicesByOrganization = async (
  organizationId: string
): Promise<ServiceInterface[]> => {
  const response = await fetch(
    "/api/organizations/" + organizationId + "/services/featured",
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

export const fetchServicesByOrganizationAndQuery = async (
  organizationId: string,
  query: string
): Promise<ServiceInterface[]> => {
  const response = await fetch(
    "/api/organizations/" + organizationId + "/services?query=" + query,
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

export const fetchServicesByOrganizationAndLabel = async (
  organizationId: string,
  label: string
): Promise<ServiceInterface[]> => {
  const response = await fetch(
    "/api/organizations/" + organizationId + "/services?label=" + label,
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
