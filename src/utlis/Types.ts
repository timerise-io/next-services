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
  logoUrl?: URL;
  coverUrl?: URL;
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
}