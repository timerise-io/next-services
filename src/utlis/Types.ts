export type WhitelabelContextType = {
  organizationId: string | undefined;
  projectId: string | undefined;
  locale: string;
  title: string;
  iconUrl: string;
  logoUrl: string;
  logoHref: string;
  searchBox: boolean;
  searchBoxLabel: string;
  searchBoxPlaceholder: string;
  labelsBox: boolean;
  labelsBoxLabel: string;
  labels: string[];
  projectsBox: boolean;
  projectsBoxLabel: string;
  bookingAppButtonLabel: string;
  bookingAppUrl: string;
  termsUrl: string;
  privacyUrl: string;
  poweredByLogoUrl: string;
  featuredLabel: boolean;
  primaryColor: string;
  secondaryColor: string;
};

export enum TimeFormat {
  AM_PM = 'AM_PM',
  HOUR_24 = 'HOUR_24',
};
export interface OgMeta {
  url?: string;
  type?: string;
  title?: string;
  description?: string;
  image?: string;
  locale?: string;
};
export enum Theme {
  LIGHT = 'LIGHT',
  DARK = 'DARK',
};
export interface OrganizationInterface {
  organizationId: string;
  title: string;
  bookingsLimit: number;
  defaultLocale: string;
  localTimeZone: string;
  iconUrl?: string;
  logoUrl?: string;
  coverUrl?: string;
  labels?: string[];
}
export interface ProjectInterface {
  projectId: string;
  shortId: string;
  defaultLocale: string;
  localTimeZone: string;
  timeFormat: TimeFormat;
  currency: string;
  title: string;
  organizationId?: string;
  description?: string;
  theme?: Theme;
  iconUrl?: string;
  logoUrl?: string;
  coverUrl?: string;
  textColor?: string;
  linkColor?: string;
  buttonTextColor?: string;
  buttonBackgroundColor?: string;
  labels?: string[];
  og?: OgMeta;
};

export interface ServiceInterface {
  organizationId?: string;
  projectId: string;
  serviceId: string;
  shortId: string;
  shortUrl: string;
  title: string; 
  shortDescription?: string; 
  description?: string;
  project?: {
    title: string;
  };
  locations?: { 
    title: string; 
    address: string; 
  }[]; 
  hosts?: { 
    fullName: string; 
  }[]; 
  durationInfo?: string; 
  price?: number; 
  currency?: string; 
  media?: { 
    url: string; 
  }[];
  draft?: boolean;
  featured?: boolean;
}