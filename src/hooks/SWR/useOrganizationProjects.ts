import useSWR, { mutate } from 'swr';

import { fetchProjectsByOrganization } from '@/models/organizations';

export function useOrganizationProjects(organizationId: string) {
  const { data, error } = useSWR([`projects-${organizationId}`], () => fetchProjectsByOrganization(organizationId));
  return {
    projects: data,
    isLoadingProjects: !error && !data,
    isError: error,
  };
}

export function useOrganizationProjectsReload(organizationId: string) {
  const reloadProjects = async () => {
      await mutate([`projects-${organizationId}`], fetchProjectsByOrganization(organizationId), false);
  };
  return {
    reloadProjects,
  };
}
