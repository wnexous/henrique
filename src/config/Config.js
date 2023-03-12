import { FaInstagram, FaWhatsapp } from "react-icons/fa";
import { MdOutlineMedicalServices } from "react-icons/md";
import { MdBiotech } from "react-icons/md";
import { BiVideoPlus } from "react-icons/bi";
import { GiTeacher } from "react-icons/gi";
import { CiMedicalCross } from "react-icons/ci";

export const Config = {
  cardimgid: "img-2.jpg",
  profileimgid: "img-7.jpg",
  maps: "https://goo.gl/maps/4vGaVgzU5KAvwT9A9",
  address:
    "DOC Castelo Batel - Av. Visc. de Guarapuava, 4628 - Sala 908 - Batel, Curitiba - PR, 80240-010",

  socials: [
    {
      name: "Instagram",
      link: "https://www.instagram.com/dr.henrique.stachon/",
      icon: <FaInstagram />,
      bgimg: "linear-gradient(90deg, #e40fcc, #ffc200)",
    },
    {
      name: "WhatsApp",
      link: "https://api.whatsapp.com/send?phone=554191590603",
      icon: <FaWhatsapp />,
      bgimg: "linear-gradient(90deg, #00e576, #00a884)",
    },
  ],

  calls: {
    whatsapp: {
      text: "Whatsapp",
      link: "https://api.whatsapp.com/send?phone=554191590603",
      iconLink: "/icon/whatsapp.svg",
    },
    doctoralia: {
      text: "",
      link: "https://www.doctoralia.com.br/henrique-stachon/cirurgiao-geral/curitiba",
      iconLink: "/icon/doctoralia.svg",
    },
  },

  actuator: [
    {
      icon: <MdOutlineMedicalServices />,
      text: "Cirurgia geral",
    },
    {
      icon: <CiMedicalCross />,
      text: "Medicina integrativa",
    },
    {
      icon: <BiVideoPlus />,
      text: "Especialista em videolaparoscopia",
    },
    {
      icon: <MdBiotech />,
      text: "Mestre em biotecnologia",
    },

    {
      icon: <GiTeacher />,
      text: "Professor do curso de medicina",
    },
  ],

  name: "Dr. Henrique Stachon",
  description: "Cirurgia Geral e Cuidado Integral a Saúde e Bem Estar",

  biography: [
    "Olá, sou Dr. Henrique Stachon e sou um médico formado pela Universidade Federal do Paraná em 2009. Desde então, venho buscando aprimorar meus conhecimentos e especializações na área da saúde.",
    "Obtive o Título de Especialista em Cirurgia Geral pelo Hospital do Trabalhador (HT) em 2012 e, em 2017, fiz a Especialização em Preceptoria em SUS pelo Hospital Sírio Libanês. Em 2018, concluí o Mestrado em Biotecnologia Industrial pela Universidade Positivo.",
    "Desde fevereiro de 2018, tenho a honra de atuar como docente do Curso de Medicina das Faculdades Pequeno Príncipe em Curitiba-PR, sendo Preceptor do Internato de Cirurgia Geral e Professor de Habilidades Médicas e Simulação. Além disso, sou o Diretor Clínico e Responsável Técnico da SOS Unimed Curitiba (MEDILAR), reafirmando meu compromisso com a qualidade e excelência no cuidado aos pacientes. Também sou professor convidado da Pós-graduação em Simulações Clínicas da USP-Ribeirão desde 2021.",

    "Atualmente, estou me aperfeiçoando ainda mais na área da saúde, fazendo uma Pós-graduação em Bases da Saúde Integrativa e Bem-estar pelo Hospital Albert Einstein. Minhas áreas de interesse incluem Cirurgia Videolaparoscópica, Cirurgia Minimamente Invasiva, Cirurgia do Aparelho Digestivo, Medicina Integrativa, Reabilitação e Cuidados Pós-operatórios.",

    "Como médico, sempre busco oferecer o melhor tratamento e cuidado aos meus pacientes, utilizando todo o meu conhecimento técnico e prático para garantir o sucesso dos procedimentos e a recuperação plena dos meus pacientes.",
  ],
};
