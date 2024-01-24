import { paths } from "@constants";

interface homePerkTypes {
  title: string;
  description: string;
}

interface homeTestimonialTypes {
  author: string;
  description: string;
}

export const homePerks: homePerkTypes[] = [
  {
    title: "Performance",
    description: "Drive performance when you need it most."
  },
  {
    title: "OKRs & Goals",
    description: "Activate every employee with transparent goals and OKRs."
  },
  {
    title: "Engagement",
    description: "Listen to the voice of your employees."
  },
  {
    title: "Career",
    description: "Make career advancement opportunities crystal clear."
  },
  {
    title: "Analytics",
    description: "Turn people insights into action."
  },
  {
    title: "Compensation",
    description: "Manage compensation with access to powerful benchmark data."
  },
];

export const HOMEPAGE_CONTENT: { title: string; subTitle: string } = {
  title: "Welcome to the contemporary HR Management Solution",
  subTitle:
    "Are you tired of juggling piles of paperwork, struggling to keep up with employee records, and feeling overwhelmed by the complexities of HR management? Say Hello to personnel Library - your all-in-one solution for streamlining HR operations and revolutionising the way you manage your workforce.",
};
export const homeTestimonials: homeTestimonialTypes[] = [
  {
    author: "Caroline May",
    description: "I am thrilled to share my outstanding experience with Personnel Library. As an HR professional, I have found this platform to be an indispensable tool in streamlining and enhancing our human resources processes. From seamless applicant tracking and efficient employee onboarding to insightful data analytics that empower informed decision-making, They have truly revolutionized the way we manage our workforce. Its user-friendly interface, coupled with customizable features, has effortlessly adapted to our company's unique needs. The exceptional support team has consistently exceeded our expectations, ensuring a smooth and enjoyable journey."
  },
  {
    author: "Hamad Minhas",
    description: "I am thrilled to share my outstanding experience with Personnel Library. As an HR professional, I have found this platform to be an indispensable tool in streamlining and enhancing our human resources processes. From seamless applicant tracking and efficient employee onboarding to insightful data analytics that empower informed decision-making, They have truly revolutionized the way we manage our workforce. Its user-friendly interface, coupled with customizable features, has effortlessly adapted to our company's unique needs. The exceptional support team has consistently exceeded our expectations, ensuring a smooth and enjoyable journey."
  },
  {
    author: "Ayaz Khan",
    description:  "I am thrilled to share my outstanding experience with Personnel Library. As an HR professional, I have found this platform to be an indispensable tool in streamlining and enhancing our human resources processes. From seamless applicant tracking and efficient employee onboarding to insightful data analytics that empower informed decision-making, They have truly revolutionized the way we manage our workforce. Its user-friendly interface, coupled with customizable features, has effortlessly adapted to our company's unique needs. The exceptional support team has consistently exceeded our expectations, ensuring a smooth and enjoyable journey."
  },
];

