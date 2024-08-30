import { fetchServicesByOrganizationAndLabel } from "@/models/services";
import useSWR, { mutate } from "swr";

export function useOrganizationServicesLabel(
  organizationId: string,
  label: string
) {
  const { data, error } = useSWR([`services-${organizationId}`, label], () =>
    fetchServicesByOrganizationAndLabel(organizationId, label)
  );
  return {
    services: data,
    isLoadingServices: !error && !data,
    isError: error,
  };
}

export function useOrganizationServicesLabelReload(
  organizationId: string,
  label: string
) {
  const reloadServices = async () => {
    await mutate(
      [`services-${organizationId}`, label],
      fetchServicesByOrganizationAndLabel(organizationId, label),
      false
    );
  };
  return {
    reloadServices,
  };
}
