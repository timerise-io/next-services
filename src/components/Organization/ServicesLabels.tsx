import { CSSProperties } from "react";
import ServiceBox from "../ServiceBox";
import Loading from "../Loading";
import EmptyList from "../EmptyList";
import { ServiceInterface } from "@/utlis/Types";
import { useOrganizationServicesLabel } from "@/hooks/SWR/useOrganizationServicesLabel";

function ServicesLabels(props: { organizationId: string; label: string }) {
  const { organizationId, label } = props;

  const { services, isLoadingServices } = useOrganizationServicesLabel(
    organizationId,
    label
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

export default ServicesLabels;
