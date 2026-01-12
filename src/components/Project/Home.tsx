"use client";

import {
  defaultWhitelabelContextValue,
  WhitelabelContext,
} from "@/context/Whitelabel";
import Header from "../Header";
import Footer from "../Footer";
import ServicesList from "./ServicesList";
import ServicesSearch from "./ServicesSearch";
import { useOrganizationProjects } from "@/hooks/SWR/useOrganizationProjects";
import { useProject } from "@/hooks/SWR/useProject";
import { I18nextProvider, useTranslation } from "react-i18next";
import i18n, { prepareLocale } from "@/utlis/i18n";
import { useEffect, useState, useMemo } from "react";
import { WhitelabelContextType } from "@/utlis/Types";
import { pickBy } from "lodash";
import { useOrganization } from "@/hooks/SWR/useOrganization";
export default function ProjectHome(props: {
  organizationId: string | undefined;
  projectId: string;
  query: string;
  label: string;
}) {
  const { organizationId, projectId, query, label } = props;

  const [whitelabel, setWhitelabel] = useState<WhitelabelContextType>(
    defaultWhitelabelContextValue
  );

  const { t } = useTranslation();

  const { organization } = useOrganization(organizationId);
  const { project } = useProject(projectId);
  const { projects } = useOrganizationProjects(organizationId);

  const extraOrganizationConfig = useMemo<{ [key: string]: any }>(() => ({}), [t]);

  const extraProjectConfig = useMemo<{ [key: string]: any }>(() => ({}), []);

  useEffect(() => {
    if (project) {
      const mergedWhitelabel = {
        ...defaultWhitelabelContextValue,
        ...pickBy({
          projectId,
          title: project.title,
          labels: organization?.labels || project.labels,
          locale: prepareLocale(i18n.language, project.defaultLocale),
          logoUrl: project.logoUrl || organization?.logoUrl,
          iconUrl: project.iconUrl || project.logoUrl || organization?.iconUrl,
        }),
        searchBoxLabel: t("search"),
        searchBoxPlaceholder: t("search_placeholder"),
        projectsBoxLabel: t("project"),
        labelsBoxLabel: t("label"),
        bookingAppButtonLabel: t("book_now"),
        ...(organizationId ? extraOrganizationConfig[organizationId] : {}),
        organizationId: organizationId || undefined,
        ...(projectId ? extraProjectConfig[projectId] : {}),
      } as WhitelabelContextType;
      setWhitelabel(mergedWhitelabel);
    }
  }, [
    project, 
    extraOrganizationConfig, 
    extraProjectConfig, 
    organization?.iconUrl, 
    organization?.labels, 
    organization?.logoUrl, 
    organizationId, 
    projectId, 
    t
  ]);

  return (
    <I18nextProvider i18n={i18n}>
      <WhitelabelContext.Provider value={whitelabel}>
        {project && (
          <>
            <Header query={query} label={label} projects={projects} />
            {(!query || query.length < 3) && (
              <ServicesList projectId={projectId} />
            )}
            {query?.length > 2 && (
              <ServicesSearch projectId={projectId} query={query} />
            )}
          </>
        )}
        <Footer />
      </WhitelabelContext.Provider>
    </I18nextProvider>
  );
}
