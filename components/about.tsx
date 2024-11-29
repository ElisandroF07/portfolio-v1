"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("Sobre");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="sobre"
    >
      <SectionHeading>Sobre mim</SectionHeading>
      <p className="mb-3">
        Meu nome é Elisandro Franco, e minha jornada começou no Instituto Médio de Economia de Luanda (IMEL), 
        onde estudei Informática de Gestão. Com o desejo de expandir meus conhecimentos e me aprofundar no mundo da tecnologia, 
        entrei na <span className="font-medium">42 Luanda</span>, uma escola inovadora de programação, onde continuo a desenvolver minhas habilidades em <span className="font-medium">desenvolvimento de software</span>.{" "}
        <span className="italic">Minha maior paixão na programação</span> é a capacidade de resolver problemas complexos e transformar ideias em soluções práticas. 
        Com experiência em tecnologias como React, Next.js, Node.js e PostgreSQL, estou constantemente me desafiando a aprender e implementar novas ferramentas e práticas, incluindo TypeScript, Prisma, e arquitetura de software limpa.
      </p>
  
      <p>
        <span className="italic">Quando não estou programando</span>, gosto de passar meu tempo explorando novos conhecimentos, seja lendo, estudando sobre 
        <span className="font-medium"> neurociência</span> ou <span className="font-medium">práticas de Clean Code</span>. 
        Também gosto de me dedicar a hobbies como leitura, assistir filmes e passar tempo com minha família. 
        Estou sempre motivado a crescer, aprender e colaborar em projetos que tenham um impacto positivo.
      </p>
    </motion.section>
  );
  
}
