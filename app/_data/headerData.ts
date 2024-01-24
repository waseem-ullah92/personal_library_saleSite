interface HeaderSection {
  title: string;
  subTitle: string;
}

interface HeaderDataType {
  home: HeaderSection;
  aboutUs: HeaderSection;
  whyUs: HeaderSection;
  solutions: HeaderSection;
  resources: HeaderSection;
  pricing: HeaderSection;
  helpCenter: HeaderSection;
  contactUs: HeaderSection;
  comprehensiveHRIS: HeaderSection;
  timeManagement: HeaderSection;
  ATSManagement: HeaderSection;
}

export const headerData: HeaderDataType = {
  home: {
    title: "Welcome to the contemporary HR Management Solution",
    subTitle:
      "Are you tired of juggling piles of paperwork, struggling to keep up with employee records, and feeling overwhelmed by the complexities of HR management? Say Hello to personnel Library - your all-in-one solution for streamlining HR operations and revolutionising the way you manage your workforce.",
  },
  aboutUs: {
    title: "Unveiling the Future of HR Management",
    subTitle:
      "Welcome to Personnel Library, where HR innovation meets excellence. We're not just another software; we're your partner in transforming HR processes and enhancing employee experiences.",
  },
  whyUs: {
    title: "Empowering Businesses, Elevating Workforces",
    subTitle:
      "At Personnel Library, we believe that behind every successful organisation are motivated employees and streamlined HR processes. Our mission is to revolutionise the way businesses manage their human resources, making every step - from recruitment to performance management - efficient, engaging, and effective.",
  },
  solutions: {
    title: "Stay Informed, Stay Ahead",
    subTitle:
      "Explore our resources for insights, tips, trends in HR management. Keep up with ever-evolving landscape of human resources and gain a competitive edge.",
  },
  resources: {
    title: "Stay Informed, Stay Ahead",
    subTitle:
      "Explore our resources for insights, tips, trends in HR management. Keep up with ever-evolving landscape of human resources and gain a competitive edge.",
  },
  pricing: {
    title: "Invest in Excellence, Affordable Solutions",
    subTitle:
      "We have a Personnel Library package that is just right for you - We love to see you grow. You will find the tools you need to achieve your goals in our specially designed packages, whether thats eliminating spreadsheets or becoming a stretegic force in your company",
  },
  helpCenter: {
    title: "Need assistance with something? Search away",
    subTitle:
      "",
  },
  contactUs: {
    title: "Ready to Elavate Your HR Game?",
    subTitle:
      "Have questions or want to learn more? Reach our to us today. Our team is here to guide you on your journey to HR excellence.",
  },
  comprehensiveHRIS: {
    title: 'Comprehensive HRIS Your Organisational Backbone​',
    subTitle: "Welcome to the heart of your HR operations - our Comprehensive HRIS module. This isn't just software; it's the backbone that supports your organisational success. Dive into a world where managing employee information, streamlining administrative tasks, and ensuring compliance become a breeze.​"
  },
  ATSManagement: {
    title: 'ATS / Onboarding / Performance Management Transforming Workforce Dynamics​​',
    subTitle: "Revolutionise your workforce dynamics with our ATS, Onboarding, and Performance Management module. Welcome to a realm where attracting, nurturing, and empowering top talent is a reality. Say hello to seamless recruitment, engaging onboarding, and performance excellence.​​"
  },
  timeManagement: {
    title: 'Time Management System Master Productivity…..Integration with ClockLog​​',
    subTitle: "Welcome to a world where productivity thrives - our Time Management System module/ Clocklog Integration. This isn't just about tracking hours; it's about optimising workflows, enhancing accountability, and ensuring every minute counts."
  },
};
