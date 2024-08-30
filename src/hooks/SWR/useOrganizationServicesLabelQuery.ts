import { fetchServicesByOrganizationAndLabelAndQuery } from "@/models/services";
import useSWR, { mutate } from "swr";

export function useOrganizationServicesLabelQuery(
  organizationId: string,
  label: string,
  query: string
) {
  const { data, error } = useSWR(
    [`services-${organizationId}`, label, query],
    () =>
      fetchServicesByOrganizationAndLabelAndQuery(organizationId, label, query)
  );
  return {
    services: data,
    isLoadingServices: !error && !data,
    isError: error,
  };
}

export function useOrganizationServicesLabelQueryReload(
  organizationId: string,
  label: string,
  query: string
) {
  const reloadServices = async () => {
    await mutate(
      [`services-${organizationId}`, label, query],
      fetchServicesByOrganizationAndLabelAndQuery(organizationId, label, query),
      false
    );
  };
  return {
    reloadServices,
  };
}
