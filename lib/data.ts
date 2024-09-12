import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import corpcommentImg from "@/public/corpcomment.png";
import projOneImg from "@/public/projOne.png"
import rmtdevImg from "@/public/rmtdev.png";
import projTwoImg from "@/public/projTwo.png"
import projThreeImg from "@/public/projThree.png"
import projFourImg from "@/public/projFour.png"
import wordanalyticsImg from "@/public/wordanalytics.png";
import { link } from "fs";

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
    title: "B.E.",
    location: "Chandigarh University",
    description:
      "I graduated in computer science and engineering from Chandigarh University Mohali, Punjab",
    icon: React.createElement(LuGraduationCap),
    date: "2024",
  },
  {
    title: "Full-Stack Developer Intern",
    location: "Remote, India",
    description:
      "I'm now a full-stack developer intern working in YahWeh Innovation Pvt Ltd. My stack includes React, Node.js, JavaScript, Tailwind, Material Ui, Express.js and MongoDB.",
    icon: React.createElement(FaReact),
    date: "2024 - present",
  },
] as const;

export const projectsData = [
  {
    title: "TaskMe",
    description:
      "TaskMe is a sleek, responsive task management app featuring a customizable Kanban board. Effortlessly organize, prioritize, and track tasks with intuitive drag-and-drop functionality for individuals and teams.",
    tags: ["React", "JavaScript", "Tailwind",],
    imageUrl: projFourImg,
    link: "https://taskmeapp.vercel.app/",
  },
  {
    title: "E-COM",
    description:
      "I worked as a full-stack developer on this project which help Users to buy products online also there is admin page on which admin can upload products.",
    tags: ["React", "Node.js", "MongoDB", "Tailwind", "Express.js"],
    imageUrl: projOneImg,
    link: "https://e-com-chi-six.vercel.app/",
  },
  {
    title: "Restaurant Website",
    description:
      "Developed and deployed a responsive table booking system using HTML, CSS, and JavaScript, optimizing user interaction and functionality",
    tags: ["HTML", "JavaScrip", "CSS"],
    imageUrl: projTwoImg,
    link: "https://akshitrawat21.github.io/Restaurant-website/",
  },
  {
    title: "Snake Game",
    description:
      "A public web app for play a classic snake Game. It shows high score count, current score count and buttons to move snake and random checkpoint.",
    tags: ["HTML", "CSS", "JavaScript", "Tailwind"],
    imageUrl: projThreeImg,
    link: "https://akshitrawat21.github.io/Adv-snakegame/",
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
  "GithUb",
  "MongoDB",
  "Redux",
  "FireBase",
  "Express",
  "C++",
  "Python",
  "DSA",
  "VsCode",
] as const;
