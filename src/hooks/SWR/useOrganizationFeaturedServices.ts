import useSWR, { mutate } from "swr";

import { fetchFeaturedServicesByOrganization } from "@/models/services";

export function useOrganizationFeaturedServices(organizationId: string) {
  const { data, error } = useSWR([`services-${organizationId}`], () =>
    fetchFeaturedServicesByOrganization(organizationId)
  );
  return {
    services: data,
    isLoadingServices: !error && !data,
    isError: error,
  };
}

export function useOrganizationFeaturedServicesReload(organizationId: string) {
  const reloadServices = async () => {
    await mutate(
      [`services-${organizationId}`],
      fetchFeaturedServicesByOrganization(organizationId),
      false
    );
  };
  return {
    reloadServices,
  };
}
