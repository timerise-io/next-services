import useSWR, { mutate } from 'swr';

import { fetchServicesByOrganizationAndQuery } from '@/models/services';

export function useOrganizationServicesQuery(organizationId: string, query: string) {
  const { data, error } = useSWR([`services-${organizationId}`, query], () => fetchServicesByOrganizationAndQuery(organizationId, query));
  return {
    services: data,
    isLoadingServices: !error && !data,
    isError: error,
  };
}

export function useOrganizationServicesQueryReload(organizationId: string, query: string) {
  const reloadServices = async () => {
      await mutate([`services-${organizationId}`, query], fetchServicesByOrganizationAndQuery(organizationId, query), false);
  };
  return {
    reloadServices,
  };
}
