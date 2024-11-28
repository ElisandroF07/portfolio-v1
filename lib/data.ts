import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import bfa from "@/public/bfa.png";
import bereshit from "@/public/bereshit.png";
import kimanga from "@/public/iPhone 15 Pink.png"
import justwatch from "@/public/justwatch.png";
import justnjilawatch from "@/public/njila.jpg";


export const links = [
  {
    name: "Início",
    hash: "#home",
  },
  {
    name: "Sobre",
    hash: "#about",
  },
  {
    name: "Projetos",
    hash: "#projects",
  },
  {
    name: "Habilidades",
    hash: "#skills",
  },
  {
    name: "Experiência",
    hash: "#experience",
  },
  {
    name: "Contacto",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Estudante no IMEL",
    location: "Luanda, Angola",
    description:
      "Iniciei minha jornada acadêmica no Instituto Médio de Economia de Luanda, onde estudei Informática de Gestão, construindo a base para minha carreira em tecnologia.",
    icon: React.createElement(LuGraduationCap),
    date: "2020 - 2024",
  },
  {
    title: "42 Luanda",
    location: "Luanda, Angola",
    description:
      "Estudei em uma das escolas de programação mais inovadoras do mundo, focada em aprendizado baseado em projetos e colaboração. Aqui, aprofundei meu conhecimento em desenvolvimento de software.",
    icon: React.createElement(LuGraduationCap),
    date: "2024 - Presente",
  },
  {
    title: "Desenvolvedor Front-End Estagiário",
    location: "Mirantes Technologies",
    description:
      "Durante 1 ano e meio, atuei como desenvolvedor Front-End estagiário na Mirantes Technologies, onde aprendi bastante sobre fluxo de trabalho organizacional, e tecnologias baseadas em Js.",
    icon: React.createElement(CgWorkAlt),
    date: "2022 - 2024",
  },
  {
    title: "Desenvolvedor Full-Stack",
    location: "PETROHOST",
    description:
      "Trabalhei durante mêses na PETROHOST como desenvolvedor full-stack. Colaborei para a migração de toda plataforma legada para tecnologias baseadas em JavaScript.",
    icon: React.createElement(CgWorkAlt),
    date: "2024 - 2024",
  },
  {
    title: "Desenvolvedor Front-End",
    location: "OCASO Group",
    description:
      "Atualmente atuo como desenvolvedor Front-End na OCASO Group, onde colaboro com o desenvolvimento de interfaces intuitivas e emocionantes.",
    icon: React.createElement(CgWorkAlt),
    date: "2024 - Presente",
  },
] as const;

export const projectsData = [
  {
    title: "BFA NET",
    description:
      "Plataforma de internet banking desenvolvida para fins de aprendizado. ",
    tags: ["Next.js", "Node.js", "PostgreSQL", "Prisma", "Tailwind"],
    imageUrl: bfa,
  },
  {
    title: "Kimanga",
    description:
      "Desenvolvi o MVP de um aplicativo de carteira digital com arquitetura MVVM, permitindo transações financeiras de forma segura e eficiente.",
    tags: ["React Native", "Expo", "TypeScript", "MVVM", "Prisma"],
    imageUrl: kimanga,
  },

  {
    title: "Bereshit Angola",
    description:
      "Desenvolvi a landing page do site institucional da Bereshit Angola.",
    tags: ["React.js", "TailwindCSS", "TypeScript"],
    imageUrl: bereshit,
  },
  {
    title: "Just Watch Clone",
    description:
      "Clonei parte da plataforma de streaming Just Watch",
    tags: ["Next.js", "TailwindCSS", "Zustand", "CSS"],
    imageUrl: justwatch,
  },
  {
    title: "NJILA Imobiliária",
    description:
      "Estou colaborando para o desenvolvimento de uma plataforma para a comercialização de imóveis",
    tags: ["Next.js", "TailwindCSS", "TypeScript"],
    imageUrl: justnjilawatch,
  },
] as const;


export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React.js",
  "Vue.js",
  "Nuxt.js",
  "Next.js",
  "Nest.js",
  "Express.js",
  "Git",
  "Tailwind",
  "PrismaORM",
  "MongoDB",
  "Zustand",
  "PostgreSQL",
  "C/C++",
  "C#",
] as const;
