import { CSSProperties } from 'react';
import ServiceBox from '../ServiceBox';
import Loading from '../Loading';
import EmptyList from '../EmptyList';
import { useProjectServices } from '@/hooks/SWR/useServices';
import { ServiceInterface } from '@/utlis/Types';
import { useOrganizationServicesQuery } from '@/hooks/SWR/useOrganizationServicesQuery';

function ServicesSearch(props: { organizationId: string, query: string, locale: string, userLocale?: string|null|undefined }) {

  const { organizationId, query, locale, userLocale } = props;
  const { services, isLoadingServices } = useOrganizationServicesQuery(organizationId, query);
  
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

export default ServicesSearch;
