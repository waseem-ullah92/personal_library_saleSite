import { paths } from "@constants";

interface footerLinkTypes {
  external?: boolean;
  title: string;
  path: string;
}

export const footerLinks: footerLinkTypes[] = [
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
    path: paths.pages.comprehensiveHris,
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
    title: "Contact Us",
    external: false,
    path: paths.pages.contactUs,
  },
];

export const footerSocialLinks: footerLinkTypes[] = [
  {
    title: 'facebook',
    path: 'https://facebook.com'
  },
  {
    title: 'twitter',
    path: 'https://twitter.com'
  },
  {
    title: 'linkedin',
    path: 'https://linkedin.com'
  },
  {
    title: 'youtube',
    path: 'https://youtube.com'
  },
  {
    title: 'instagram',
    path: 'https://instagram.com'
  },
];

export const websitePolicies : footerLinkTypes[] = [
  {
    title: "Cookies Policy",
    external: false,
    path: paths.pages.home,
  },
  {
    title: 'Privacy Policy',
    external: false,
    path: paths.pages.home,
  },
  {
    title: 'Terms & Conditions',
    external: false,
    path: paths.pages.home,
  },
];