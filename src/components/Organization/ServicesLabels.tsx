import { CSSProperties } from 'react';
import ServiceBox from '../ServiceBox';
import Loading from '../Loading';
import EmptyList from '../EmptyList';
import { useProjectServices } from '@/hooks/SWR/useServices';
import { ServiceInterface } from '@/utlis/Types';
import { useOrganizationServicesLabel } from '@/hooks/SWR/useOrganizationServicesLabel';

function ServicesLabels(props: { organizationId: string, label: string, locale: string }) {

  const { organizationId, label, locale } = props;

  const { services, isLoadingServices } = useOrganizationServicesLabel(organizationId, label);

  const componentStyle: CSSProperties = {
    display: 'flex', 
    justifyItems: 'start', 
    justifyContent: 'start',
    flexDirection: 'row', 
    flexWrap: 'wrap',
  };

  return (
    <div style={componentStyle}>
      {isLoadingServices && <Loading />}
      {services && services.length === 0 && <EmptyList />}
      {services && services.length > 0 && services.map((service: ServiceInterface) => (
        <ServiceBox key={service.serviceId} locale={locale} service={service} />
      ))}
    </div>
  );

}

export default ServicesLabels;
