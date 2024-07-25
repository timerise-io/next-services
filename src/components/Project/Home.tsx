/* eslint-disable react-hooks/exhaustive-deps */
"use client";

import {
  defaultWhitelabelContextValue,
  WhitelabelContext,
} from "@/context/Whitelabel";
import Header from "../Header";
import Footer from "../Footer";
import ServicesList from "./ServicesList";
import ServicesSearch from "./ServicesSearch";
import ServicesLabels from "./ServicesLabels";
import { useOrganizationProjects } from "@/hooks/SWR/useOrganizationProjects";
import { useProject } from "@/hooks/SWR/useProject";
import { I18nextProvider, useTranslation } from "react-i18next";
import i18n, { prepareLocale } from "@/utlis/i18n";
import { useEffect, useState } from "react";
import { WhitelabelContextType } from "@/utlis/Types";
import { pickBy } from "lodash";
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

  const { project } = useProject(projectId);
  const { projects } = useOrganizationProjects(organizationId);

  const extraOrganizationConfig: { [organizationId: string]: any } = {
    // services.bloomyhealth.pl
    XFV6dCD8YZM3IeOiOz3z: {
      bookingAppUrl: "https://booking.bloomyhealth.pl",
      termsUrl: "https://bloomyhealth.pl/terms",
      privacyUrl: "https://bloomyhealth.pl/privacy",
      labelsBox: false,
      projectsBoxLabel: t("clinic"),
      featuredLabel: true,
      primaryColor: "#4255c5",
      secondaryColor: "#d1008a",
    },
  };

  const extraProjectConfig: { [organizationId: string]: any } = {};

  useEffect(() => {
    if (project) {
      const mergedWhitelabel = {
        ...whitelabel,
        ...pickBy({
          organizationId,
          projectId,
          title: project.title,
          labels: project.labels,
          locale: prepareLocale(i18n.language, project.defaultLocale),
          logoUrl: project.logoUrl,
          iconUrl: project.iconUrl || project.logoUrl,
        }),
        searchBoxLabel: t("search"),
        projectsBoxLabel: t("project"),
        labelsBoxLabel: t("label"),
        bookingAppButtonLabel: t("book_now"),
        ...(organizationId ? extraOrganizationConfig[organizationId] : {}),
        ...(projectId ? extraProjectConfig[projectId] : {}),
      } as WhitelabelContextType;
      setWhitelabel(mergedWhitelabel);
      console.log("mergedWhitelabel", mergedWhitelabel);
    }
  }, [project]);

  return (
    <I18nextProvider i18n={i18n}>
      <WhitelabelContext.Provider value={whitelabel}>
        {project && (
          <>
            <Header query={query} label={label} projects={projects} />
            {(!query || query.length < 3) && (!label || label.length < 2) && (
              <ServicesList projectId={projectId} />
            )}
            {query?.length > 2 && (
              <ServicesSearch projectId={projectId} query={query} />
            )}
            {label?.length > 1 && (
              <ServicesLabels projectId={projectId} label={label} />
            )}
          </>
        )}
        <Footer />
      </WhitelabelContext.Provider>
    </I18nextProvider>
  );
}
