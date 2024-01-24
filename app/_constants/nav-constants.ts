import { paths } from "@constants";
import { ReactNode } from "react";

export interface navPopoverTypes {
  popoverEnabled?: boolean;
  popoverLinks?: navLinkTypes[]
}

interface navLinkTypes {
  disabled?: boolean;
  external?: boolean;
  path?: string;
  title: string;
  popover?: navPopoverTypes;
}

export const navLinks: navLinkTypes[] = [
  {
    title: "Home",
    external: false,
    path: paths.pages.home,
  },
  {
    title: "About Us",
    external: false,
    path: paths.pages.aboutUs,
  },
  {
    title: "Why Us",
    external: false,
    path: paths.pages.whyUs,
  },
  {
    title: "Solutions",
    external: false,
    path: paths.pages.solution,
    popover: {
      popoverEnabled: true,
      popoverLinks: [
        {
          title: "Comprehensive HRIS",
          external: false,
          path: paths.pages.comprehensiveHris,
        },
        {
          title: "ATS/Onboarding/Performance Management",
          external: false,
          path: paths.pages.performanceManagement,
        },
        {
          title: "Time Management Integration",
          external: false,
          path: paths.pages.timeManagement,
        },
      ]
    }
  },
  {
    title: "Resources",
    external: false,
    path: paths.pages.resources,
  },
  {
    title: "Pricing",
    external: false,
    path: paths.pages.pricing,
  },
  {
    title: "Help Center",
    external: false,
    path: paths.pages.helpCenter,
  },
  {
    title: "Careers",
    external: false,
    path: paths.pages.careers,
  },
  {
    title: "Contact Us",
    external: false,
    path: paths.pages.contactUs,
  },
];
