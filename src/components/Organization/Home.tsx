/* eslint-disable react-hooks/exhaustive-deps */
"use client";

import {
  defaultWhitelabelContextValue,
  WhitelabelContext,
} from "@/context/Whitelabel";
import Header from "../Header";
import Footer from "../Footer";
import { useOrganization } from "@/hooks/SWR/useOrganization";
import ServicesList from "./ServicesList";
import ServicesSearch from "./ServicesSearch";
import { useOrganizationProjects } from "@/hooks/SWR/useOrganizationProjects";
import { I18nextProvider, useTranslation } from "react-i18next";
import i18n, { prepareLocale } from "@/utlis/i18n";
import { useEffect, useState } from "react";
import ServicesLabels from "./ServicesLabels";
import { WhitelabelContextType } from "@/utlis/Types";
import { pickBy } from "lodash";

export default function OrganizationHome(props: {
  organizationId: string;
  query: string;
  label: string;
}) {
  const { organizationId, query, label } = props;
  const [whitelabel, setWhitelabel] = useState<WhitelabelContextType>(
    defaultWhitelabelContextValue
  );
  const { t } = useTranslation();
  const { organization } = useOrganization(organizationId);
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

  useEffect(() => {
    if (organization) {
      const mergedWhitelabel = {
        ...whitelabel,
        ...pickBy({
          organizationId,
          title: organization.title,
          labels: organization.labels,
          locale: prepareLocale(i18n.language, organization.defaultLocale),
          logoUrl: organization.logoUrl,
          iconUrl: organization.iconUrl || organization.logoUrl,
        }),
        searchBoxLabel: t("search"),
        projectsBoxLabel: t("project"),
        labelsBoxLabel: t("label"),
        bookingAppButtonLabel: t("book_now"),
        ...extraOrganizationConfig[organizationId],
      } as WhitelabelContextType;
      setWhitelabel(mergedWhitelabel);
      console.log("mergedWhitelabel", mergedWhitelabel);
    }
  }, [organization]);

  return (
    <I18nextProvider i18n={i18n}>
      <WhitelabelContext.Provider value={whitelabel}>
        {organization && (
          <>
            <Header query={query} label={label} projects={projects || []} />
            {(!query || query.length < 3) && (!label || label.length < 3) && (
              <ServicesList organizationId={organizationId} />
            )}
            {label && label.length > 2 && (
              <ServicesLabels organizationId={organizationId} label={label} />
            )}
            {query && query.length > 2 && (
              <ServicesSearch organizationId={organizationId} query={query} />
            )}
          </>
        )}
        <Footer />
      </WhitelabelContext.Provider>
    </I18nextProvider>
  );
}
