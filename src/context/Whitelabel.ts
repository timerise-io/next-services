'use client'

import { createContext, useContext } from 'react';

export type WhitelabelContextType = {
  organizationId: string | null;
  projectId: string | null;
  title: string;
  iconSrc: string;
  bookingPageDomain: string;
  logoUrl: string;
  logoHeight: number;
  logoHref: string;
  searchShow: boolean;
  searchInputLabel: string;
  searchInputPlaceholder: string;
  labelsSelectLabel: string;
  labels: string[];
  projectsSelectLabel: string;
  bookButtonLabel: string;
  termsUrl: string;
  privacyUrl: string;
  poweredByLogoUrl: string;
  poweredByLogoHref: string;
  poweredByLogoHeight: number;
};

const defaultValue: WhitelabelContextType = {
  organizationId: null,
  projectId: null,
  title: 'Timerise',
  iconSrc: "https://cdn.timerise.io/landing-page/favicon.png",
  bookingPageDomain: 'dev-booking.timerise.io',
  logoUrl: 'https://cdn.timerise.io/landing-page/favicon.png',
  logoHeight: 60,
  logoHref: '/' + 1,
  searchShow: true,
  searchInputLabel: 'null',
  searchInputPlaceholder: 'null',
  labelsSelectLabel: "label",
  labels: [],
  projectsSelectLabel: 'Projects',
  bookButtonLabel: 'book now',
  termsUrl: 'https://timerise.io/legal-tac-en.html',
  privacyUrl: 'https://timerise.io/legal-pp-en.html',
  poweredByLogoUrl: 'https://cdn.timerise.io/app/powered.png',
  poweredByLogoHref: 'https://timerise.io',
  poweredByLogoHeight: 14,
};

export const WhitelabelContext = createContext<WhitelabelContextType>(defaultValue);

export const useWhitelabel = () => {
  return useContext(WhitelabelContext);
};
