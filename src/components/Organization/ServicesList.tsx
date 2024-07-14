import { CSSProperties } from 'react';
import ServiceBox from '../ServiceBox';
import Loading from '../Loading';
import EmptyList from '../EmptyList';
import { ServiceInterface } from '@/utlis/Types';
import { useOrganizationServices } from '@/hooks/SWR/useOrganizationServices';

function ServicesList(props: { organizationId: string, locale: string, userLocale?: string|null|undefined }) {

  const { organizationId, locale, userLocale } = props;
  const { services, isLoadingServices } = useOrganizationServices(organizationId);

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
        <ServiceBox key={service.serviceId} locale={locale} service={service} userLocale={userLocale} />
      ))}
    </div>
  );

}

export default ServicesList;
