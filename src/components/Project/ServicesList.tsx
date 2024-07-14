import { CSSProperties } from 'react';
import ServiceBox from '../ServiceBox';
import Loading from '../Loading';
import EmptyList from '../EmptyList';
import { useProjectServices } from '@/hooks/SWR/useServices';
import { useWhitelabel } from '@/context/Whitelabel';
import { ServiceInterface } from '@/utlis/Types';

function ServicesList(props: { projectId: string, locale: string, userLocale?: string|null|undefined }) {

  const { projectId, locale, userLocale } = props;
  const { services, isLoadingServices } = useProjectServices(projectId);

  // const GET_SERVICES = gql`
  //   query GetServices {
  //     services(projectId: "${projectId}" draft: false) {
  //       serviceId
  //       project { title } 
  //       locations { title address } 
  //       hosts { fullName } 
  //       serviceId 
  //       featured 
  //       title 
  //       shortDescription 
  //       durationInfo 
  //       price 
  //       currency 
  //       shortUrl 
  //       media { url } 
  //       draft
  //     }
  //   }
  // `;
  // const { loading, data } = useQuery(GET_SERVICES);

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
