import { fetchOrganization } from '@/models/organizations';
import useSWR, { mutate } from 'swr';


export function useOrganization(organizationId: string) {
  const { data, error } = useSWR([`organization-${organizationId}`], () => fetchOrganization(organizationId));
  return {
    organization: data,
    isLoadingOrganization: !error && !data,
    isError: error,
  };
}

export function useOrganizationReload(organizationId: string) {
  const reloadOrganization = async () => {
      await mutate([`organization-${organizationId}`], fetchOrganization(organizationId), false);
  };
  return {
    reloadOrganization,
  };
}
