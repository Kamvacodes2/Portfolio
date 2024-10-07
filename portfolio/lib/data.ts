import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import corpcommentImg from "@/public/corpcomment.png";
import rmtdevImg from "@/public/weatherApp.png";
import carplaceImg from "@/public/carplace.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Code College Java Bootcamp",
    location: "Johannesburg, Gauteng",
    description:
      "I'm currently a student at Code College. Through this 7 month journey. I have been able to learn about the cycle of building up software application ",
    icon: React.createElement(LuGraduationCap),
    date: "2024 Feb - Present",
  },
  {
    title: "Junior Accountant",
    location: "Johannesburg, Guateng",
    description:
      "Analyzed and processed financial transactions. Helped prepare financial management reports and communicated financial data with clients. Worked within a team to collaborate on large scale accounts with thousands of transactions on a monthly basis. ng as a freelancer.Actively liased with taxation officers to implement sound tax strategies for entities that secured tax refunds worth millions.",
    date: "2021 - October 2022",
  },
  {
    title: "Freelance Teacher",
    location: "Johannesburg, Guateng",
    description:
      "Primarily providing virtual lessons to students across the globe preparing lesson plans providing detailed feedback to further understanding and to foster progession.",
    date: "2023 - Present",
  }
] as const;

export const projectsData = [
  {
    title: "Car Market Place",
    description:
      "Online market place targeted at individual deals to sell their second hand cars to interested buyers.",
    tags: ["React", "MongoDB", "Tailwind", "Firebase"],
    imageUrl: carplaceImg,
    link: "https://carmarketplace-vr34.vercel.app/"  // <-- Add the link here
  },
  {
    title: "Weather Forecast",
    description:
      "Simple Weather Forecasting application",
    tags: ["Javascript", "HTML", "CSS"],
    imageUrl: rmtdevImg,
    link: "https://kamvacodes2.github.io/WeatherForecast/"
  },
] as const;


export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "MongoDB",
  "Redux",
  "GraphQL",
  "Express",
  "PostgreSQL",
  "Python",
  "Framer Motion",
] as const;