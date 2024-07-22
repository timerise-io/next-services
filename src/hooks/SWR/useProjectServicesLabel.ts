import { fetchServicesByProjectAndLabel } from "@/models/services";
import useSWR, { mutate } from "swr";

export function useProjectServicesLabel(organizationId: string, label: string) {
  const { data, error } = useSWR([`services-${organizationId}`, label], () =>
    fetchServicesByProjectAndLabel(organizationId, label)
  );
  return {
    services: data,
    isLoadingServices: !error && !data,
    isError: error,
  };
}

export function useProjectServicesLabelReload(
  organizationId: string,
  label: string
) {
  const reloadServices = async () => {
    await mutate(
      [`services-${organizationId}`, label],
      fetchServicesByProjectAndLabel(organizationId, label),
      false
    );
  };
  return {
    reloadServices,
  };
}
