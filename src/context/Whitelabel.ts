"use client";

import { WhitelabelContextType } from "@/utlis/Types";
import { createContext, useContext } from "react";
import { useTranslation } from "react-i18next";

export const defaultWhitelabelContextValue: WhitelabelContextType = {
  organizationId: undefined,
  projectId: undefined,
  locale: "en-PL",
  title: "Marketplace App - Timerise.io",
  iconUrl: "https://cdn.timerise.io/landing-page/favicon.png",
  logoUrl: "https://cdn.timerise.io/landing-page/favicon.png",
  searchBox: true,
  searchBoxLabel: "Search",
  searchBoxPlaceholder: "Service, location...",
  labelsBox: true,
  labelsBoxLabel: "Label",
  labels: [],
  projectsBox: true,
  projectsBoxLabel: "Projects",
  bookingAppButtonLabel: "Book now",
  bookingAppUrl: "https://booking.timerise.io",
  termsUrl: "https://timerise.io/legal-tac-en.html",
  privacyUrl: "https://timerise.io/legal-pp-en.html",
  poweredByLogoUrl: "https://cdn.timerise.io/app/powered.png",
};

export const WhitelabelContext = createContext<WhitelabelContextType>(
  defaultWhitelabelContextValue
);

export const useWhitelabel = () => {
  return useContext(WhitelabelContext);
};
