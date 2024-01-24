import { paths } from "@constants";

interface resourcesBlogsTypes {
  title: string;
  description: string;
  img: string;
  link: string;
}

export const resourcesBlogs: resourcesBlogsTypes[] = [
  {
    title: "Navigating the World of HR",
    description:
      "Welcome to our HR-centric platform, where we delve into the dynamic world of Human Resources and its transformative impact on organizations and employees alike. Whether you are an HR professional seeking insights, a manager aiming to enhance team performance, or an employee interested in personal growth, this blog is your compass for navigating the intricate landscape of HR.",
    img: "/images/resources/blogpost.png",
    link: "https://personnellibrary.co.uk/resources",
  },
  {
    title: "The Delicate Art of Employee Relations",
    description:
      "Conflict resolution, effective communication, and maintaining a harmonious workplace are essential skills for HR professionals. We'll share strategies to handle difficult conversations, manage conflicts, and create an environment where employees can thrive.",

    img: "/images/resources/blogpost-1.png",
    link: "https://personnellibrary.co.uk/resources",
  },
  {
    title: "Health and Well-being Initiatives that Work",
    description:
      "Employee well-being goes beyond physical health. Mental, emotional, and social well-being are equally important. Explore strategies for implementing effective well-being programs that enhance employee satisfaction and performance.",

    img: "/images/resources/blogpost-2.png",
    link: "https://personnellibrary.co.uk/resources",
  },
];

export const RESOURCES_CONTENT: { title: string; subTitle: string } = {
  title: "Stay Informed, Stay Ahead",
  subTitle:
    "Explore our resources for insights, tips, trends in HR management. Keep up with ever-evolving landscape of human resources and gain a competitive edge.",
};
