import { CSSProperties } from "react";
import ServiceBox from "../ServiceBox";
import Loading from "../Loading";
import EmptyList from "../EmptyList";
import { ServiceInterface } from "@/utlis/Types";
import { useOrganizationServicesQuery } from "@/hooks/SWR/useOrganizationServicesQuery";

function ServicesSearch(props: { organizationId: string; query: string }) {
  const { organizationId, query } = props;
  const { services, isLoadingServices } = useOrganizationServicesQuery(
    organizationId,
    query
  );

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

export default ServicesSearch;
