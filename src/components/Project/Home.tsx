"use client";

import { WhitelabelContext, WhitelabelContextType } from "@/context/Whitelabel";
import Header from "../Header";
import Footer from "../Footer";
import ServicesList from "./ServicesList";
import ServicesSearch from "./ServicesSearch";
import ServicesLabels from "./ServicesLabels";
import { useOrganizationProjects } from "@/hooks/SWR/useOrganizationProjects";
import { useProject } from "@/hooks/SWR/useProject";
import { I18nextProvider } from "react-i18next";
import i18n from "@/utlis/i18n";
export default function ProjectHome(props: {
  organizationId: string | null;
  projectId: string;
  query: string;
  label: string;
}) {
  const { organizationId, projectId, query, label } = props;

  const whitelabelContextValue: WhitelabelContextType = {
    organizationId,
    projectId,
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

  const { project } = useProject(projectId);
  const { projects } = useOrganizationProjects(organizationId);

  return (
    <I18nextProvider i18n={i18n}>
      <WhitelabelContext.Provider value={whitelabelContextValue}>
        {project && (
          <>
            <Header
              query={query}
              label={label}
              projects={projects || []}
              labels={project.labels || []}
            />
            {(!query || query.length < 3) && (!label || label.length < 2) && (
              <ServicesList
                projectId={projectId}
                locale={project.defaultLocale}
              />
            )}
            {query?.length > 2 && (
              <ServicesSearch
                projectId={projectId}
                query={query}
                locale={project.defaultLocale}
              />
            )}
            {label?.length > 1 && (
              <ServicesLabels
                projectId={projectId}
                label={label}
                locale={project.defaultLocale}
              />
            )}
          </>
        )}
        <Footer />
      </WhitelabelContext.Provider>
    </I18nextProvider>
  );
}
