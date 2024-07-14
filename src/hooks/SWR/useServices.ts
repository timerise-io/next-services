import useSWR, { mutate } from 'swr';

import { fetchServicesByProject } from '@/models/services';

export function useProjectServices(projectId: string) {
  const { data, error } = useSWR([`services-${projectId}`], () => fetchServicesByProject(projectId));
  return {
    services: data,
    isLoadingServices: !error && !data,
    isError: error,
  };
}

export function useProjectServicesReload(projectId: string) {
  const reloadServices = async () => {
      await mutate([`services-${projectId}`], fetchServicesByProject(projectId), false);
  };
  return {
    reloadServices,
  };
}
