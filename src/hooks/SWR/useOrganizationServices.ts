import useSWR, { mutate } from 'swr';

import { fetchServicesByOrganization } from '@/models/services';

export function useOrganizationServices(organizationId: string) {
  const { data, error } = useSWR([`services-${organizationId}`], () => fetchServicesByOrganization(organizationId));
  return {
    services: data,
    isLoadingServices: !error && !data,
    isError: error,
  };
}

export function useOrganizationServicesReload(organizationId: string) {
  const reloadServices = async () => {
      await mutate([`services-${organizationId}`], fetchServicesByOrganization(organizationId), false);
  };
  return {
    reloadServices,
  };
}
