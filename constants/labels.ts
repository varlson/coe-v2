import { LanLabelType, SubMenuType } from "@/types/types";

export const labelLanguage: {
  pt: LanLabelType;
  es: LanLabelType;
  en: LanLabelType;
} = {
  pt: {
    pt: "Português",
    es: "Espanhol",
    en: "Inglês",
  },

  es: {
    pt: "Portugués",
    es: "Español",
    en: "Inglés",
  },

  en: {
    pt: "Portuguese",
    es: "Spanish",
    en: "English",
  },
};

export const menus: SubMenuType[] = [
  {
    menu: "COEE",
    id: "home",
    subItens: [
      { label: "Sobre Colegiado", link: "/sobre" },
      { label: "Sobre NDE", link: "/nde" },
      { label: "Membros NDE", link: "/membros-nde" },
      { label: "COEE em Números", link: "/coe-em-numeros" },
    ],
  },
  {
    menu: "Bolsa",
    id: "scholarships",
    subItens: [
      { label: "Pesquisas de Iniciação Científica", link: "/bolsas/ic" },
      { label: "Extensão", link: "/bolsas/extensao" },
      { label: "Institucional", link: "/bolsas/institucional" },
      { label: "Pro-Ativa", link: "/bolsas/pro-ativa" },
      { label: "Monitoria", link: "/bolsas/monitoria" },
      { label: "PRACE", link: "/bolsas/prace" },
    ],
  },

  {
    menu: "Ensino",
    id: "course",
    subItens: [
      { label: "Graduação", link: "/ensino/graduacao" },
      { label: "Matriz Curricular", link: "/ensino/matriz-curricular" },
      { label: "Docentes", link: "/ensino/docentes" },
      { label: "Ementas", link: "/ensino/ementas" },
      { label: "Projeto Pedagógico", link: "/ensino/projeto-pedagogico" },
      { label: "Avaliação", link: "/ensino/avaliacao" },
    ],
  },

  {
    menu: "Infraestrutura",
    id: "infra",
    subItens: [
      { label: "Laboratórios", link: "/labs" },
      // { label: "Manu-2", link: "" },
      // { label: "Manu-3", link: "" },
      // { label: "Manu-4", link: "" },
    ],
  },

  {
    menu: "Pesquisa e Extensão",
    id: "search",
    subItens: [
      { label: "Projetos de Pesquisa", link: "/projetos-pesquisa" },
      { label: "Grupos de Pesquisa", link: "/grupos-pesquisa" },
      { label: "Projetos de Extensão", link: "/projeto-extensao" },
    ],
  },

  {
    menu: "Contatos",
    id: "contacts",
    subItens: [
      { label: "Secretaria", link: "/contato" },
      { label: "Colegiado", link: "/contato" },
      { label: "Seção do Ensino", link: "/contato" },
    ],
  },
];
