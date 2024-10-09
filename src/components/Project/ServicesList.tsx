import { CSSProperties } from "react";
import ServiceBox from "../ServiceBox";
import Loading from "../Loading";
import EmptyList from "../EmptyList";
import { useProjectServices } from "@/hooks/SWR/useServices";
import { ServiceInterface } from "@/utlis/Types";

function ServicesList(props: { projectId: string }) {
  const { projectId } = props;
  const { services, isLoadingServices } = useProjectServices(projectId);

  return (
    <div className="flex justify-start flex-row flex-wrap">
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
