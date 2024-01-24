import { paths } from "@constants";

interface helpCenterTypes {
  title: string;
  description: string;
  anchor?: {
    name: string;
    link: string;
  };
}

export const helpCenterData: helpCenterTypes[] = [
  {
    title: "What is the pricing of Personnel Library?",
    description:
      "The cost at Personnel Library varies depending on the features you choose and the number of employees at your company. To learn more, Call xxxxx-xxxxxx or refer to our Pricing section on our website. ",
    anchor: {
      name: "Pricing",
      link: "/help-center",
    },
  },
  {
    title: "Does Personnel Library provide time-tracking?",
    description:
      "Yes, Personnel Library does have a Time-Tracking integration with Clocklog. Once integrated, employees may readily access this through their homepage, where they can enter hours or clock in and out. The timesheets are also easily accessible for approval and updating. ",
    anchor: {
      name: "Click here to learn more",
      link: "/clocklog",
    },
  },
  {
    title: "How to create a Personnel Library account?",
    description: "Get in touch with our team for assistance. ",
    anchor: {
      name: "Contact us",
      link: "/contact-us",
    },
  },
  {
    title: "How long does the Personnel Library setup process take?",
    description:
      "The setup process for Personnel Library is designed to be swift and seamless. Typically, it takes just a few hours to get your organization up and running. Our user-friendly interface and guided setup ensure you're ready to harness the power of HR excellence in no time.",
  },
  {
    title: "Can I customise Personnel Library to my requirements?",
    description:
      "Absolutely! Personnel Library is all about tailoring solutions to fit your unique needs. Our platform is highly customizable, allowing you to create policies, workflows, and features that align perfectly with your organisation's requirements.​",
  },
  {
    title: "How can I edit the information on my employee profile?",
    description:
      "Editing your employee profile is a breeze with Personnel Library. Simply log in to your account, navigate to your profile, and make the necessary updates. Our intuitive interface ensures that keeping your information accurate and up-to-date is a hassle-free process.",
  },
  {
    title: "Is my data protected?",
    description:
      "We take data security seriously. Your sensitive information is safeguarded with advanced security measures, including encryption and secure cloud storage. Rest assured, your data is protected against unauthorized access and potential breaches.​",
  },
  {
    title: "How do I login to Personnel Library?",
    description:
      "Logging in is easy. Visit our website and click on the 'Login' button. Enter your credentials, and you'll be granted access to your personalized HR management platform. Experience the power of Personnel Library's seamless interface and comprehensive features.​",
  },
];

export const HELP_CENTER_CONTENT: { title: string; subTitle: string } = {
  title: "Need assistance with something? Search away",
  subTitle: "",
};
