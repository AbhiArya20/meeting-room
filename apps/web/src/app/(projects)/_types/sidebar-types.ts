import { APPS } from "../_constants/apps";

export type AppMenuType = {
  title: string;
  name: string;
  logo: React.ReactNode;
  className: string;
  href: string;
  highlight: string;
  app: APPS;
};

export type SupportMenuType = {
  title: string;
  href: string;
  icon: React.ReactNode;
};
