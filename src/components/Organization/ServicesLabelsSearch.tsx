import ServiceBox from "../ServiceBox";
import Loading from "../Loading";
import EmptyList from "../EmptyList";
import { ServiceInterface } from "@/utlis/Types";
import { useOrganizationServicesLabelQuery } from "@/hooks/SWR/useOrganizationServicesLabelQuery";

function ServicesLabelsSearch(props: {
  organizationId: string;
  label: string;
  query: string;
}) {
  const { organizationId, label, query } = props;

  const { services, isLoadingServices } = useOrganizationServicesLabelQuery(
    organizationId,
    label,
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

export default ServicesLabelsSearch;
