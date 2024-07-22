"use client";

import { WhitelabelContext, WhitelabelContextType } from "@/context/Whitelabel";
import Header from "../Header";
import Footer from "../Footer";
import { useOrganization } from "@/hooks/SWR/useOrganization";
import ServicesList from "./ServicesList";
import ServicesSearch from "./ServicesSearch";
import { useOrganizationProjects } from "@/hooks/SWR/useOrganizationProjects";
import { I18nextProvider } from "react-i18next";
import i18n from "@/utlis/i18n";

export default function OrganizationHome(props: {
  organizationId: string;
  query: string;
  label: string;
}) {
  const { organizationId, query, label } = props;

  const whitelabelContextValue: WhitelabelContextType = {
    organizationId,
    projectId: null,
    title: "Timerise",
    iconSrc: "https://cdn.timerise.io/landing-page/favicon.png",
    bookingPageDomain: "dev-booking.timerise.io",
    logoUrl: "https://cdn.timerise.io/landing-page/favicon.png",
    logoHeight: 60,
    logoHref: "/" + 1,
    searchShow: true,
    searchInputLabel: "Search",
    searchInputPlaceholder: "Service or location...",
    labelsSelectLabel: "Labels",
    labels: [],
    bookButtonLabel: "Book now",
    termsUrl: "https://timerise.io/legal-tac-en.html",
    privacyUrl: "https://timerise.io/legal-pp-en.html",
    poweredByLogoUrl: "https://cdn.timerise.io/app/powered.png",
    poweredByLogoHref: "https://timerise.io",
    poweredByLogoHeight: 14,
    projectsSelectLabel: "Projects",
  };

  const { organization } = useOrganization(organizationId);
  const { projects } = useOrganizationProjects(organizationId);

  return (
    <I18nextProvider i18n={i18n}>
      <WhitelabelContext.Provider value={whitelabelContextValue}>
        {organization && (
          <>
            <Header
              query={query}
              label={label}
              projects={projects || []}
              labels={organization.labels || []}
            />
            {(!query || query.length < 3) && (!label || label.length < 3) && (
              <ServicesList
                organizationId={organizationId}
                locale={organization.defaultLocale}
              />
            )}
            {((query && query.length > 2) || (label && label.length > 2)) && (
              <ServicesSearch
                organizationId={organizationId}
                query={query}
                label={label}
                locale={organization.defaultLocale}
              />
            )}
          </>
        )}
        <Footer />
      </WhitelabelContext.Provider>
    </I18nextProvider>
  );
}
