import { fetchOrganization } from '@/models/organizations';
import useSWR, { mutate } from 'swr';


export function useOrganization(organizationId: string | undefined) {
  const { data, error } = useSWR(
    organizationId ? [`organization-${organizationId}`] : null,
    () => organizationId ? fetchOrganization(organizationId) : null
  );
  
  return {
    organization: data,
    isLoadingOrganization: organizationId ? (!error && !data) : false,
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
