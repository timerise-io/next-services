"use client";

import ServiceBox from "../ServiceBox";
import Loading from "../Loading";
import EmptyList from "../EmptyList";
import { ServiceInterface } from "@/utlis/Types";
import { useOrganizationFeaturedServices } from "@/hooks/SWR/useOrganizationFeaturedServices";

function ServicesList(props: { organizationId: string }) {
  const { organizationId } = props;
  const { services, isLoadingServices } =
    useOrganizationFeaturedServices(organizationId);

  return (
    <div className="flex flex-row flex-wrap justify-start">
      {isLoadingServices && <Loading />}
      {services && services.length === 0 && <EmptyList />}
      {services &&
        services.length > 0 &&
        services.map((service: ServiceInterface) => (
          <ServiceBox key={service.serviceId} service={service} />
        ))}
    </div>
  );
}

export default ServicesList;
