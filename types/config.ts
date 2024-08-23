export interface ConfigProps {
  appName: string;
  appDescription: string;
  domainName: string;
  twitter?: string;
  links: {
    href: string;
    label: string;
  }[];
  googleAnalyticsId: string;
}
