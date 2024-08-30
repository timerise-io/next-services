"use client";

import { WhitelabelContextType } from "@/utlis/Types";
import { createContext, useContext } from "react";

export const defaultWhitelabelContextValue: WhitelabelContextType = {
  organizationId: undefined,
  projectId: undefined,
  locale: "en-PL",
  title: "Marketplace App - Timerise",
  iconUrl: "",
  logoUrl: "",
  logoHref: "/",
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
  featuredLabel: false,
  primaryColor: "#000000",
  secondaryColor: "#000000",
};

export const WhitelabelContext = createContext<WhitelabelContextType>(
  defaultWhitelabelContextValue
);

export const useWhitelabel = () => {
  return useContext(WhitelabelContext);
};
