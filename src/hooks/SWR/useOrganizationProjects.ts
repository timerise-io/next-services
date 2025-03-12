import useSWR, { mutate } from 'swr';

import { fetchProjectsByOrganization } from '@/models/organizations';

export function useOrganizationProjects(organizationId: string | undefined) {
  const { data, error } = useSWR(
    organizationId ? [`projects-${organizationId}`] : null,
    () => organizationId ? fetchProjectsByOrganization(organizationId) : null
  );
  
  return {
    projects: data || [],
    isLoadingProjects: organizationId ? (!error && !data) : false,
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
