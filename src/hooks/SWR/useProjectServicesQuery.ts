import { fetchServicesByProjectAndQuery } from "@/models/services";
import useSWR, { mutate } from "swr";

export function useProjectServicesQuery(organizationId: string, query: string) {
  const { data, error } = useSWR([`services-${organizationId}`, query], () =>
    fetchServicesByProjectAndQuery(organizationId, query)
  );
  return {
    services: data,
    isLoadingServices: !error && !data,
    isError: error,
  };
}

export function useProjectServicesQueryReload(
  organizationId: string,
  query: string
) {
  const reloadServices = async () => {
    await mutate(
      [`services-${organizationId}`, query],
      fetchServicesByProjectAndQuery(organizationId, query),
      false
    );
  };
  return {
    reloadServices,
  };
}
