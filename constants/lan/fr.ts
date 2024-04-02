import { SubMenuType } from "@/types/types";

export const menusFR: SubMenuType[] = [
  {
    menu: "COEE",
    id: "home",
    subItens: [
      { label: "À propos du Collège", link: "/sobre" },
      { label: "À propos du NDE", link: "/sobre/nde" },
      { label: "Membres du NDE", link: "/sobre/membros-nde" },
      { label: "COEE en Chiffres", link: "/sobre/coe-em-numeros" },
    ],
  },
  {
    menu: "Bourse",
    id: "scholarships",
    subItens: [
      { label: "Recherches en Initiation Scientifique", link: "/bolsas/ic" },
      { label: "Extension", link: "/bolsas/extensao" },
      { label: "Institutionnel", link: "/bolsas/institucional" },
      { label: "Pro-active", link: "/bolsas/pro-ativa" },
      { label: "Tutorat", link: "/bolsas/monitoria" },
      { label: "PRACE", link: "/bolsas/prace" },
    ],
  },

  {
    menu: "Cours",
    id: "course",
    subItens: [
      { label: "Graduation", link: "/ensino/graduacao" },
      { label: "Matrice Curriculaire", link: "/ensino/matriz-curricular" },
      { label: "Enseignants", link: "/ensino/docentes" },
      { label: "Programmes", link: "/ensino/ementas" },
      { label: "Projet Pédagogique", link: "/ensino/projeto-pedagogico" },
      { label: "Évaluation", link: "/ensino/avaliacao" },
    ],
  },

  {
    menu: "Infrastructure",
    id: "infra",
    subItens: [
      { label: "Laboratoires", link: "/labs" },
      // { label: "Manu-2", link: "" },
      // { label: "Manu-3", link: "" },
      // { label: "Manu-4", link: "" },
    ],
  },

  {
    menu: "Recherche et Extension",
    id: "search",
    subItens: [
      { label: "Projets de Recherche", link: "/projetos-pesquisa" },
      { label: "Groupes de Recherche", link: "/grupos-pesquisa" },
      { label: "Projets d'Extension", link: "/projeto-extensao" },
    ],
  },

  {
    menu: "Contacts",
    id: "contacts",
    subItens: [
      { label: "Secrétariat", link: "/contato" },
      { label: "Collège", link: "/contato" },
      { label: "Section Enseignement", link: "/contato" },
    ],
  },
];
