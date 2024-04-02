import { SubMenuType } from "@/types/types";

export const menusES: SubMenuType[] = [
  {
    menu: "COEE",
    id: "home",
    subItens: [
      { label: "Sobre Colegiado", link: "/sobre" },
      { label: "Sobre NDE", link: "/sobre/nde" },
      { label: "Miembros NDE", link: "/sobre/membros-nde" },
      { label: "COEE en Números", link: "/sobre/coe-em-numeros" },
    ],
  },
  {
    menu: "Becas",
    id: "scholarships",
    subItens: [
      { label: "Investigaciones de Iniciación Científica", link: "/bolsas/ic" },
      { label: "Extensión", link: "/bolsas/extensao" },
      { label: "Institucional", link: "/bolsas/institucional" },
      { label: "Proactiva", link: "/bolsas/pro-ativa" },
      { label: "Tutoría", link: "/bolsas/monitoria" },
      { label: "PRACE", link: "/bolsas/prace" },
    ],
  },

  {
    menu: "Cursos",
    id: "course",
    subItens: [
      { label: "Pregrado", link: "/ensino/graduacao" },
      { label: "Matriz Curricular", link: "/ensino/matriz-curricular" },
      { label: "Profesores", link: "/ensino/docentes" },
      { label: "Sílabas", link: "/ensino/ementas" },
      { label: "Proyecto Pedagógico", link: "/ensino/projeto-pedagogico" },
      { label: "Evaluación", link: "/ensino/avaliacao" },
    ],
  },

  {
    menu: "Infraestructura",
    id: "infra",
    subItens: [
      { label: "Laboratorios", link: "/labs" },
      // { label: "Manu-2", link: "" },
      // { label: "Manu-3", link: "" },
      // { label: "Manu-4", link: "" },
    ],
  },

  {
    menu: "Investigación",
    id: "search",
    subItens: [
      { label: "Proyectos de Investigación", link: "/projetos-pesquisa" },
      { label: "Grupos de Investigación", link: "/grupos-pesquisa" },
      { label: "Proyectos de Extensión", link: "/projeto-extensao" },
    ],
  },

  {
    menu: "Contactos",
    id: "contacts",
    subItens: [
      { label: "Secretaría", link: "/contato" },
      { label: "Colegiado", link: "/contato" },
      { label: "Sección de Enseñanza", link: "/contato" },
    ],
  },
];
