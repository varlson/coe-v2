import { SubMenuType } from "@/types/types";

export const menusEN: SubMenuType[] = [
  {
    menu: "COEE",
    id: "home",
    subItens: [
      { label: "About Board", link: "/sobre" },
      { label: "About NDE", link: "/sobre/nde" },
      { label: "NDE Members", link: "/sobre/membros-nde" },
      { label: "COEE in Numbers", link: "/sobre/coe-em-numeros" },
    ],
  },
  {
    menu: "Scholarships",
    id: "scholarships",
    subItens: [
      { label: "Scientific Initiation Research", link: "/bolsas/ic" },
      { label: "Extension", link: "/bolsas/extensao" },
      { label: "Institutional", link: "/bolsas/institucional" },
      { label: "Pro-Active", link: "/bolsas/pro-ativa" },
      { label: "Tutoring", link: "/bolsas/monitoria" },
      { label: "PRACE", link: "/bolsas/prace" },
    ],
  },

  {
    menu: "Courses",
    id: "course",
    subItens: [
      { label: "Undergraduate", link: "/ensino/graduacao" },
      { label: "Curricular Matrix", link: "/ensino/matriz-curricular" },
      { label: "Faculty", link: "/ensino/docentes" },
      { label: "Syllabus", link: "/ensino/ementas" },
      { label: "Pedagogical Project", link: "/ensino/projeto-pedagogico" },
      { label: "Assessment", link: "/ensino/avaliacao" },
    ],
  },

  {
    menu: "Infrastructure",
    id: "infra",
    subItens: [
      { label: "Laboratories", link: "/labs" },
      // { label: "Manu-2", link: "" },
      // { label: "Manu-3", link: "" },
      // { label: "Manu-4", link: "" },
    ],
  },

  {
    menu: "Research",
    id: "search",
    subItens: [
      { label: "Research Projects", link: "/projetos-pesquisa" },
      { label: "Research Groups", link: "/grupos-pesquisa" },
      { label: "Extension Projects", link: "/projeto-extensao" },
    ],
  },

  {
    menu: "Contacts",
    id: "contacts",
    subItens: [
      { label: "Secretary", link: "/contato" },
      { label: "Board", link: "/contato" },
      { label: "Teaching Section", link: "/contato" },
    ],
  },
];
