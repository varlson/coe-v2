import { SubMenuType } from "@/types/types";

export const menusPT: SubMenuType[] = [
  {
    menu: "COEE",
    id: "home",
    subItens: [
      { label: "Sobre Colegiado", link: "/sobre" },
      { label: "Sobre NDE", link: "/sobre/nde" },
      { label: "Membros NDE", link: "/sobre/membros-nde" },
      { label: "COEE em Números", link: "/sobre/coe-em-numeros" },
    ],
  },
  {
    menu: "Bolsa",
    id: "scholarships",
    subItens: [
      { label: "Iniciação Científica", link: "/bolsas" },
      { label: "Extensão", link: "/bolsas#extensao" },
      { label: "Institucional", link: "/bolsas#institutional" },
      { label: "Pro-Ativa", link: "/bolsas#pro-ativa" },
      { label: "Monitoria", link: "/bolsas#monitoria" },
      { label: "PRACE", link: "/bolsas#alimentacao" },
    ],
  },

  {
    menu: "Ensino",
    id: "course",
    subItens: [
      { label: "Graduação", link: "/ensino" },
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
    subItens: [{ label: "Laboratórios", link: "/labs" }],
  },

  {
    menu: "Pesquisa e Extensão",
    id: "search",
    subItens: [
      { label: "Projetos de Pesquisa", link: "/pesquisa" },
      { label: "Grupos de Pesquisa", link: "/pesquisa/grupos" },
      { label: "Projetos de Extensão", link: "/pesquisa/extensao" },
    ],
  },

  {
    menu: "Contatos",
    id: "contacts",
    subItens: [
      { label: "Secretaria", link: "/contato" },
      { label: "Colegiado", link: "/contato#coordenation" },
      { label: "Seção do Ensino", link: "/contato#section" },
    ],
  },
];

export const HomePT = {
  about_colegiate: {
    menu: "Sobre Colegiado",
    text: "O Estatuto da Universidade Federal de Ouro Preto – UFOP, dispõe sobre a finalidade, composição e competências dos Colegiados de Curso, expressos nos artigos 23, 24 e 25, Capítulo I, Título VI.&Já o regimento regulamenta o funcionamento dos Órgãos Colegiados, expressos nos artigo 2º até o 14, Capítulo I, Título II, aplicando-se aos colegiados de curso o que couber, uma vez que os órgãos colegiados desta universidade tem finalidade, composição e competências distintas.",
    url: "https://drive.google.com/file/d/1NzTAIWj8MHv746RAoBUGAW_Nyc3jcuWB/preview",
    legend: "Vídeo em libras falando sobre o curso.",
  },
  about_nde: {
    menu: "Sobre NDE",
    text: "O Núcleo Docente Estruturante - NDE foi instituído na Universidade Federal de Ouro Preto pela Resolução CEPE nº 4450 de 29/04/2011, em atendimento à Resolução CONAES nº 01/2010 com a finalidade de contribuir para a qualidade dos Cursos de Graduação.&O NDE não possui caráter deliberativo, devendo suas decisões serem encaminhadas ao Colegiado.&No âmbito do curso de Engenharia de Produção/ICEA, o NDE/EP foi reconstituído a partir da indicação do COEP, sendo seu marco inicial a Portaria ICEA nº 05 de 09 de junho de 2019.&Segundo a Resolução CEPE nº 4450/2011, são atribuições do NDE:&Art. 2º Nos termos da Resolução CONAES nº 01/2010, cada Núcleo Docente Estruturante terá competência acadêmica de acompanhamento e de atuação nos processos de concepção, consolidação e contínua atualização do projeto pedagógico do curso e, sem prejuízo de outras atribuições complementares, deverá:&",
    items:
      "Contribuir para a consolidação do perfil profissional do egresso do curso;&Zelar pela integração curricular interdisciplinar entre as diferentes atividades de ensino constantes no currículo;&Indicar formas de incentivo ao desenvolvimento de linhas de pesquisa e extensão, oriundas de necessidades da graduação, de exigências do mercado de trabalho e afinadas com as políticas públicas relativas à área de conhecimento do curso;&zelar pelo cumprimento das Diretrizes Curriculares Nacionais para os Cursos de Graduação.",
  },
  members: {
    menu: "Menbros de NDE",
    title: "Núcle Docente Estruturante da Engenharia Elétrica (NDEE)",
    text: "Acesse link para conhecer os membros do Núcleo Docente Estruturante da Engenharia Elétrica",
    link: "https://docs.google.com/spreadsheets/d/1rYkWVPnZk7eQMFOf9SNnnHe0yBOSE8m8/edit#gid=372138676",
  },
  coe_statistics: {
    menu: "COEE em Números",
    icon: "stats",
    title: "COEE em Números",
    stats: [
      {
        img: "barGraph.png",
        title: "Quantitavos de Mátricula entre 2009-2021",
      },
      {
        img: "2graph.png",
        title: "Quantitavos de Diplomados entre 2014-2021",
      },
      {
        img: "pizza_graph.png",
        title: "Média por Diferentes Modos de Admissão entre 2000-2021",
      },
      {
        img: "2graph.png",
        title: "Quantitavos de Diplomados entre 2014-2021",
      },
      {
        img: "pizza_graph.png",
        title: "Média por Diferentes Modos de Admissão entre 2000-2021",
      },
    ],
  },
};

export const EducationPT = {
  menu: "Ensino",
  text: "Com início no segundo semestre de 2009, o curso com modalidade de bacharelado fica localizado no Instituto de Ciências Exatas e Aplicadas (ICEA). O curso tem cinco anos de duração, nos turnos vespertino e noturno. Visa à formação de profissionais com estudos teóricos baseados na eletricidade, no cálculo, na informática e na eletrônica.&O bacharel em Engenharia Elétrica estará apto a atuar em áreas industriais, desenvolvendo projetos, gerenciando sistemas elétricos e sistemas de automação. Há também a possibilidade de trabalhar em vertentes mais criativas e críticas, aliando questões sociais ligadas à área, como contexto social, político e ambiental, questionados na graduação.&Proporcionando mais liberdade de escolha de interesses do aluno, o curso oferece três opções de ênfase: Sistemas Elétricos, Sistemas de Controle e Telecomunicações. A formação sólida em tecnologia e ciência não é o único objetivo do curso. Graduar profissionais empreendedores, dinâmicos e criativos também é sua meta. O curso capacita o aluno a ser um profissional capaz de atuar em um mercado inconstante, que precisa de dinamismo e rápida adaptação.&*Áreas de atuação:*A aplicação de toda a teoria e prática adquiridas ao longo da graduação capacita o graduado a desenvolver dispositivos eletroeletrônicos que solucionam problemas em diversas áreas. O engenheiro elétricista está apto a projetar, desenvolver e gerenciar sistemas elétricos, de automação e telecomunicação. Poderá também aplicar conceitos do curso em outras áreas de conhecimento, como continuação de estudos em cursos de pós-graduação para exercer carreira na área de ensino e pesquisa.",
  table: {
    head: ["Modalidade", "Duração", "Vagas", "Turnos", "Campus"],
    body: [
      "Bacharelado",
      "10 semestres",
      "40",
      "Vespertino e noturno",
      "João Monlevade/MG",
    ],
  },
  course_curriculum: {
    menu: "Matriz Curricular",
    content: [
      {
        label:
          "Acesse a matriz curricular vigente e os programas das disciplinas do curso aqui.",
        link: "https://drive.google.com/drive/u/1/folders/1LuVBmyiDNib__B-bV4F6dTpi_JRhNQJ7",
      },
      {
        label: "Disciplinas do curso antes de 2023/2",
        link: "",
      },
      {
        label: "Fluxograma das Disciplinas do Curso",
        link: "",
      },
    ],
  },
  teachers: {
    menu: "Docentes",
    departments: [
      {
        logo: "decea_logo.jpg",
        link: "https://decsi.ufop.br/docentes",
      },
      {
        logo: "decsi.png",
        link: "https://deelt.ufop.br/docentes",
      },
      {
        logo: "deelt.png",
        link: "https://icea.ufop.br/decea/professores",
      },
    ],
  },
  course_menu: {
    menu: "Ementas",
    text: "Acesse o link do projeto pedagógico do curso de Engenharia Elétrica",
    link: "https://drive.google.com/file/d/0B2du5p-U6wZIa1pzaWphcEV6MEU/view?usp=sharing",
  },
  course_evaluation: {
    menu: "Avaliação do Curso",
    text: "Mais informações",
    link: "https://ufop.br/noticias/graduacao/divulgada-classificacao-dos-cursos-estrelados-pelo-guia-do-estudante",
  },
};

export const InfraPT = {
  menu: "Infraestrutura",
  labs: [
    {
      name: "Laboratório de circuitos elétricos",
      src: "",
      text: "Os alunos aprendem a manusear equipamentos e ferramentas de corrente contínua (CC), primeiramente, e de corrente alternada (CA), na sequência, no Laboratório de Circuitos Elétricos. No que se refere aos circuitos de corrente contínua, são aplicadas as leis gerais, que também são similarmente em termos de circuitos de corrente alternada; tais como transformação estrela triângulo e vice-versa, teorema da transposição e leis de Kirchhoff, dentre outras.&Ao final, dever-se-á ser capaz de analisar os circuitos em CC e CA de acordo com os seguintes tópicos: excitação senoidal e fasores; análise em regime permanente; potência em regime permanente; circuitos trifásicos; frequência complexa e funções de rede; resposta em frequência; circuitos acoplados magneticamente e filtros Passivos.",
    },

    {
      name: "Laboratório de eletrônica analógica",
      src: "",
      text: "O laboratório de eletrônica analógica atende diversas disciplinas práticas do curso de engenharia elétrica e engenharia de computação. A sua principal missão é que os alunos destes cursos possam realizar ensaios e práticas das disciplinas que tenham em sua ementa unidades relacionadas a eletrônica e eletrotécnica. Para isso, o laboratório conta com diferentes recursos e equipamentos como fontes de alimentação ajustável, osciloscópios, protoboard, multímetros, computadores, diversos componentes eletrônicos, etc. O laboratório possui um técnico que auxilia na execução das aulas práticas e é responsável pela organização do espaço e equipamentos.&Além de auxiliar e acompanhar os alunos que necessitem usar o laboratório fora dos horários das aulas. Além do técnico, o laboratório possui um coordenador responsável.",
    },
    {
      name: " Laboratório de controle e automação",
      src: "",
      text: "O Laboratório de Controle e Automação foi projetado para lecionar o conteúdo prático das disciplinas do curso de Engenharia Elétrica relacionadas à área de Sistemas de Controle. O Laboratório de Controle e Automação é dividido em três salas, H204, H205 e H206. A sala H204 pode ser utilizada para montagens de experimentos, de kits móveis e para a realização de experimentos utilizando o braço robótico (Arm Robot Trainner ARM-7220-4).&Na sala H205 podem ser realizados experimentos utilizando plataformas de simulação de uma linha de produção (Planta Automation trainner ED-4031). Na sala H206 podem ser realizados experimentos utilizando plataformas de simulações de automatização de um ambiente industrial (PLC Exsto XC 103 e Exsto XC 201), assim como também a Planta Didática da Smar com Tecnologia Foundation Fieldbus.",
    },
    {
      name: "Laboratório de sistemas elétricos industriais",
      src: "",
      text: "Laboratório destinado às práticas das máquinas elétricas estacionárias ( transformadores ) e as máquinas elétricas girantes ( motores e geradores ). Também se destina a este laboratório as práticas associadas às interfaces eletrônicas de potências aplicadas aos sistemas elétricos de potência ( SEP ) como retificadores, inversores e compensadores estáticos. As medidas elétricas em corrente alternada, trifásicas bem como medidas de potência e correção do fator de potência e práticas para a Qualidade de Energia  ( QEE) também são  experimentadas neste espaço.",
    },
    {
      name: "Laboratório de radiofrequência",
      src: "",
      text: "O Laboratório de Telecomunicações - Radiofrequências é destinado ao desenvolvimento de atividades práticas das seguintes disciplinas da área de Telecomunicações lecionadas para os cursos de Engenharia Elétrica e Engenharia de Computação: Fundamentos de Comunicações, Propagação de Ondas de Rádio e Antenas.&O laboratório é equipado com geradores de sinais AM/FM, analisadores de espectro, multímetros de alta precisão, kit didático de antenas e conta ainda com um gateway para comunicação LoRa. O laboratório também é utilizado para o desenvolvimento de projetos de final de curso (TCC), atividades de extensão relacionadas à área de Telecomunicações e Projeto Integrador.",
    },
    {
      name: "Laboratório de processamento de sinais",
      src: "",
      text: "O Laboratório de Telecomunicações – Processamento Digital de Sinais é direcionado principalmente ao desenvolvimento de atividades de ensino dos alunos de graduação dos cursos de Engenharia Elétrica e Engenharia de Computação durante a realização das aulas práticas das disciplinas de Sinais e Sistemas, Fundamentos de Comunicação, Processamento Digital de Sinais e das eletivas da ênfase de telecomunicações do curso. Também é utilizado para desenvolvimento de trabalho final de curso, iniciação científica, pesquisas e atividades de extensão nas áreas de telecomunicações, processamento de sinais e aprendizado de máquina.&Trata-se de um espaço equipado com computadores, osciloscópios, geradores de função, placas de aquisição de dados da National Instruments, um ambiente de câmara acústica e kits para aquisição de sinais de fala, vídeo, biométricos, entre outros.",
    },
    {
      name: "Laboratório de eletrônica digital",
      src: "",
      text: "Neste laboratório são desenvolvidas as aulas práticas das disciplinasda área de eletrônica digital, que fazem parte da grade curricular dos alunos de engenharia elétrica e de computação.O laboratório também é utilizado para o desenvolvimento de projetos de iniciação científica, extensão e trabalhos de conclusão de curso.&Atualmente, são ministradas neste laboratório as seguintes disciplinas obrigatórias:< - CEA341 – Princípios de Eletrônica Digital; - CEA580 - Microprocessadores e Microcontroladores; - CEA147 - Eletrônica Embarcada.&Além disso, também podem ser ministradas as seguintes disciplinas eletivas:< - Sistemas embarcados aplicados a sistemas de controle; - Automação em tempo real; - Interfaceamento de sistemas; - Automação residencial.& Durante as aulas práticas, os estudantes têm à disposição os seguintes equipamentos:< - Computadores com acesso à internet; - Fontes de alimentação ajustáveis; - Geradores de Sinais; - Multímetros; - Osciloscópios Digitais; - Kits de desenvolvimento com circuitos lógicos, microcontroladores e FPGA’s; - Protoboards e componentes eletrônicos diversos.&O laboratório também conta com o suporte de um técnico que juntamente com os professores responsáveis pelas disciplinas, acompanha os estudantes durante as aulas práticas e os auxilia no desenvolvimento de projetos de pesquisa e extensão.",
    },
  ],
};

export const SearchPT = {
  menu: "Pesquisa e Extensão",
  groups: {
    menu: "Grupos",
    title: "Grupos de Pesquisa",
    text: "*Aplicações de Smart Grids nos Sistemas Elétricos de Potência (GASGSEP)*&Este grupo desenvolve trabalhos na área de análise e otimização de sistemas elétricos de potência (SEP) em regimes permanente e transitório, considerando o contexto das Smart Grids e energias renováveis. Além de visar as cidades inteligentes. Dentro destes cenarios estuda-se os fenômenos de qualidade da energia e a proteção dos sistemas elétricos.&*Modelagem, Identificação, Instrumentação e Controle (MI2C)*&Este grupo desenvolve trabalhos nas seguintes áreas: análise e projeto de sistemas de controle avançado; análise, modelagem e identificação de sistemas; e filtragem estocástica de sistemas dinâmicos.&*Processamento de Sinais, Inteligência Computacional e Telecomunicações (GPSICT*&Este grupo de pesquisa está inseridos na linha de pesquisa de Controle e Processamento de Sinais. Os projetos desenvolvidos consideram bases de dados reais para propor soluções de desenvolvimento de sistemas e aprimoramento das taxas de acerto, com simulações de sistemas em tempo real e estratégias avançadas de processamento de dados e inteligência computacional, por exemplo, em processos de mineração e problemas biomédicos.",
  },
  searchProjects: {
    menu: "Projetos de Pesquisa",
  },
  ext_search: {
    menu: "Projeto de Extensão",
    project: [
      {
        name: " Auxílio ao Hospital Margarida para reduzir gastos com energia elétrica – Etapa 4",
        coord: "Prof. Juan Carlos Galvis Manso",
        mail: "juancgalvis@ufop.edu.br",
      },
      {
        name: "Elaboração de um banco de dados de casos de Dengue na cidade de João Monlevade e Ouro Preto.",
        coord: "Prof. Edgard G. Torres Saravia",
        mail: "edgard@ufop.edu.br",
      },
      {
        name: "Robótica sustentável no ensino médio: o robô como mecanismo interdisciplinar de transmissão do conhecimento.",
        coord: "Prof. Rodrigo Augusto Ricco ",
        mail: "ricco@ufop.edu.br",
      },
      {
        name: "RUtilização da Tecnologia LoRaWAN com instrumentação eletrônica embarcada para mensurar variações climáticas sazonais correlacionadas à ovitramps, e Georreferenciamento de ações da Vigilancia Sanitária no combate ao Aedes aegypti nas cidades de João Monlevade e Ouro Preto.",
        coord: "PProf. Edgard G. Torres Saravia",
        mail: "edgard@ufop.edu.br",
      },
    ],
  },
};

export const ScholarshipPT = {
  menu: "Bolsas",
  text: "Os alunos podem acessar a diferentes tipos de bolsas detalhados a seguir:",
  types: [
    {
      id: "ic",
      name: "BOLSAS DE PESQUISA / INICIAÇÃO CIENTÍFICA",
      desc: "Estas se oferecem através de Editais coordenado pela Pró-Reitoria de Pós-Graduação (PROOP) duas vezes por ano. Tem por finalidade proporcionar ao aluno dos cursos de graduação incentivo à pesquisa, colocando-o sob a orientação de professores.",
      instruc:
        "Contate-se com um professor da área de seu interesse, o qual deverá submeter um projeto nas datas indicadas pelo Edital. Mais informações, Pró-Reitoria de Pós-Graduação",
      link: "https://propp.ufop.br/pt-br/pesquisa/iniciacao-cientifica",
    },
    {
      id: "extensao",
      name: "BOLSAS DE EXTENSÃO",
      desc: "Estas se oferecem através de Editais coordenado pela Pró-Reitoria de Extensão (PROEX) uma vez por ano. Tem por finalidade promover uma aproximação mais imediata entre a Universidade e a sociedade.",
      instruc:
        "Contate-se com um professor, o quascholarshipl deverá submeter um projeto nas datas indicadas pelo Edital. Mais informações... Pró-Reitoria de Extensão",
      link: "https://proex.ufop.br/",
    },
    {
      id: "institutional",
      name: "BOLSAS INSTITUCIONAIS",
      desc: "Estas bolsas estão associadas em algumas áreas da universidade, as quais focam em aspectos indicados no Plano de Desenvolvimento Institucional (PDI) da UFOP.",
      instruc:
        "Fique atento no site principal da UFOP (notícias) na qual se publica as vagas quando houver. Mais informações... Site da UFOP",
      link: "https://proplad.ufop.br/bolsas-de-desenvolvimento-institucional",
    },
    {
      id: "pro-ativa",
      name: "BOLSAS PRO-ATIVA",
      desc: "Estas se oferecem através de Editais coordenado pela Pró-Reitoria de Graduação (PROGRAD) uma vez por ano. Tem por finalidade de contribuir para a melhoria do ensino de graduação, intensificando a cooperação acadêmica entre o corpo discente e o docente por meio de novas práticas e experiências pedagógicas e profissionais, que atendam a interesses individuais e sociais",
      instruc:
        "Contate-se com um professor, o qual deverá submeter um projeto nas datas indicadas pelo Edital. Mais informações... Pró-Reitoria de Graduação",
      link: "https://prograd.ufop.br/%3Cnolink%3E/pro-ativa",
    },
    {
      id: "monitoria",
      name: "BOLSAS DE MONITORIA",
      desc: "Estas se oferecem através de Editais coordenado pela Pró-Reitoria de Graduação (PROGRAD) duas vezes por ano. Tem por finalidade realizar atividades de caráter pedagógico desenvolvido pelo monitor com estudantes de uma determinada disciplina, visando a esclarecimentos quanto ao conteúdo da disciplina e à superação de dificuldades de aprendizado.",
      instruc:
        "Contate-se com um professor, o qual deverá submeter um projeto nas datas indicadas pelo Edital. Mais informações... Pró-Reitoria de Graduação",
      link: "https://prograd.ufop.br/%3Cnolink%3E/monitoria",
    },
    {
      id: "alimentacao",
      name: "BOLSAS DE ALIMENTAÇÃO - BOLSA PERMANÊNCIA - BOLSA TRANSPORTE",
      desc: "Redução ou isenção do preço das refeições fornecidas nos Restaurantes Universitários. Em épocas previamente divulgadas, podem ser preenchidos os formulários de avaliação juntamente com os documentos que comprovem a situação socioeconômica do aluno, são encaminhados à Pró-Reitoria de Assuntos Comunitários (PRACE) para análise",
      instruc:
        "Mais informações... Pró-Reitoria de Assuntos Comunitários (PRACE)",
      link: "https://www.prace.ufop.br/assistencia-estudantil/bolsas-0",
    },
  ],
};

export const ContactsPT = {
  menu: "Contatos",
  contacts: [
    {
      link: "secretary",
      depts: "Secretaria do Colegiado da Engenharia Elétrica",
      addr: "Endereço: Rua 36, 115 - Loanda, João Monlevade - MG, 35931-008 - Sala A109",
      chief: " Naira Mota Araújo",
      remote: {
        days: "Segunda a sexta-feira, das 8h às 12h e 13h às 17h",
        mail: " coee@ufop.edu.br",
        tel: "31 3808-0833",
      },
      presential: {
        mail: "coee@ufop.edu.br",
        tel: "31 3808-0833",
        days: "Terça a quinta-feira, das 13h às 17h",
      },
    },

    {
      link: "coordenation",
      depts: "Coordenação do COEE",
      addr: null,
      chief: "Prof. Renan Fernandes Bastos",
      remote: {
        days: null,
        mail: "renan.bastos@ufop.edu.br",
        tel: null,
      },
      presential: null,
    },

    {
      link: "section",
      depts: "Embreve",
      addr: null,
      chief: "",
      remote: {
        days: null,
        mail: "",
        tel: null,
      },
      presential: null,
    },
  ],
};

// export export const colegiate_infoPT = {
//   about_colegiate: {
//     text: "O Estatuto da Universidade Federal de Ouro Preto – UFOP, dispõe sobre a finalidade, composição e competências dos Colegiados de Curso, expressos nos artigos 23, 24 e 25, Capítulo I, Título VI.&Já o regimento regulamenta o funcionamento dos Órgãos Colegiados, expressos nos artigo 2º até o 14, Capítulo I, Título II, aplicando-se aos colegiados de curso o que couber, uma vez que os órgãos colegiados desta universidade tem finalidade, composição e competências distintas.",
//     url: "https://drive.google.com/file/d/1NzTAIWj8MHv746RAoBUGAW_Nyc3jcuWB/preview",
//     legend: "Vídeo em libras falando sobre o curso.",
//   },
//   about_nde: {
//     text: "O Núcleo Docente Estruturante - NDE foi instituído na Universidade Federal de Ouro Preto pela Resolução CEPE nº 4450 de 29/04/2011, em atendimento à Resolução CONAES nº 01/2010 com a finalidade de contribuir para a qualidade dos Cursos de Graduação.&O NDE não possui caráter deliberativo, devendo suas decisões serem encaminhadas ao Colegiado.&No âmbito do curso de Engenharia de Produção/ICEA, o NDE/EP foi reconstituído a partir da indicação do COEP, sendo seu marco inicial a Portaria ICEA nº 05 de 09 de junho de 2019.&Segundo a Resolução CEPE nº 4450/2011, são atribuições do NDE:&Art. 2º Nos termos da Resolução CONAES nº 01/2010, cada Núcleo Docente Estruturante terá competência acadêmica de acompanhamento e de atuação nos processos de concepção, consolidação e contínua atualização do projeto pedagógico do curso e, sem prejuízo de outras atribuições complementares, deverá:&",
//     items:
//       "Contribuir para a consolidação do perfil profissional do egresso do curso;&Zelar pela integração curricular interdisciplinar entre as diferentes atividades de ensino constantes no currículo;&Indicar formas de incentivo ao desenvolvimento de linhas de pesquisa e extensão, oriundas de necessidades da graduação, de exigências do mercado de trabalho e afinadas com as políticas públicas relativas à área de conhecimento do curso;&zelar pelo cumprimento das Diretrizes Curriculares Nacionais para os Cursos de Graduação.",
//   },
//   members: {
//     title: "Núcle Docente Estruturante da Engenharia Elétrica (NDEE)",
//     text: "Acesse link para conhecer os membros do Núcleo Docente Estruturante da Engenharia Elétrica",
//     link: "https://docs.google.com/spreadsheets/d/1rYkWVPnZk7eQMFOf9SNnnHe0yBOSE8m8/edit#gid=372138676",
//   },
//   coe_statistics: {
//     icon: "stats",
//     title: "COEE em Números",
//     stats: [
//       {
//         img: "barGraph.png",
//         title: "Quantitavos de Mátricula entre 2009-2021",
//       },
//       {
//         img: "2graph.png",
//         title: "Quantitavos de Diplomados entre 2014-2021",
//       },
//       {
//         img: "pizza_graph.png",
//         title: "Média por Diferentes Modos de Admissão entre 2000-2021",
//       },
//       {
//         img: "2graph.png",
//         title: "Quantitavos de Diplomados entre 2014-2021",
//       },
//       {
//         img: "pizza_graph.png",
//         title: "Média por Diferentes Modos de Admissão entre 2000-2021",
//       },
//     ],
//   },
//   graduation: {
//     text: "Com início no segundo semestre de 2009, o curso com modalidade de bacharelado fica localizado no Instituto de Ciências Exatas e Aplicadas (ICEA). O curso tem cinco anos de duração, nos turnos vespertino e noturno. Visa à formação de profissionais com estudos teóricos baseados na eletricidade, no cálculo, na informática e na eletrônica.&O bacharel em Engenharia Elétrica estará apto a atuar em áreas industriais, desenvolvendo projetos, gerenciando sistemas elétricos e sistemas de automação. Há também a possibilidade de trabalhar em vertentes mais criativas e críticas, aliando questões sociais ligadas à área, como contexto social, político e ambiental, questionados na graduação.&Proporcionando mais liberdade de escolha de interesses do aluno, o curso oferece três opções de ênfase: Sistemas Elétricos, Sistemas de Controle e Telecomunicações. A formação sólida em tecnologia e ciência não é o único objetivo do curso. Graduar profissionais empreendedores, dinâmicos e criativos também é sua meta. O curso capacita o aluno a ser um profissional capaz de atuar em um mercado inconstante, que precisa de dinamismo e rápida adaptação.&*Áreas de atuação:*A aplicação de toda a teoria e prática adquiridas ao longo da graduação capacita o graduado a desenvolver dispositivos eletroeletrônicos que solucionam problemas em diversas áreas. O engenheiro elétricista está apto a projetar, desenvolver e gerenciar sistemas elétricos, de automação e telecomunicação. Poderá também aplicar conceitos do curso em outras áreas de conhecimento, como continuação de estudos em cursos de pós-graduação para exercer carreira na área de ensino e pesquisa.",
//   },
//   table: {
//     head: ["Modalidade", "Duração", "Vagas", "Turnos", "Campus"],
//     body: [
//       "Bacharelado",
//       "10 semestres",
//       "40",
//       "Vespertino e noturno",
//       "João Monlevade/MG",
//     ],
//   },
//   course_curriculum: {
//     content: [
//       {
//         label:
//           "Acesse a matriz curricular vigente e os programas das disciplinas do curso aqui.",
//         link: "https://drive.google.com/drive/u/1/folders/1LuVBmyiDNib__B-bV4F6dTpi_JRhNQJ7",
//       },
//       {
//         label: "Disciplinas do curso antes de 2023/2",
//         link: "",
//       },
//       {
//         label: "Fluxograma das Disciplinas do Curso",
//         link: "",
//       },
//     ],
//   },
//   teachers: {
//     departments: [
//       {
//         logo: "decea_logo.jpg",
//         link: "https://decsi.ufop.br/docentes",
//       },
//       {
//         logo: "decsi.png",
//         link: "https://deelt.ufop.br/docentes",
//       },
//       {
//         logo: "deelt.png",
//         link: "https://icea.ufop.br/decea/professores",
//       },
//     ],
//   },

//   course_menu: {
//     text: "Acesse o link do projeto pedagógico do curso de Engenharia Elétrica",
//     link: "https://drive.google.com/file/d/0B2du5p-U6wZIa1pzaWphcEV6MEU/view?usp=sharing",
//   },

//   course_evaluation: {
//     text: "Mais informações",
//     link: "https://ufop.br/noticias/graduacao/divulgada-classificacao-dos-cursos-estrelados-pelo-guia-do-estudante",
//   },

//   infra: {
//     labs: [
//       {
//         name: "Laboratório de circuitos elétricos",
//         src: "",
//         text: "Os alunos aprendem a manusear equipamentos e ferramentas de corrente contínua (CC), primeiramente, e de corrente alternada (CA), na sequência, no Laboratório de Circuitos Elétricos. No que se refere aos circuitos de corrente contínua, são aplicadas as leis gerais, que também são similarmente em termos de circuitos de corrente alternada; tais como transformação estrela triângulo e vice-versa, teorema da transposição e leis de Kirchhoff, dentre outras.&Ao final, dever-se-á ser capaz de analisar os circuitos em CC e CA de acordo com os seguintes tópicos: excitação senoidal e fasores; análise em regime permanente; potência em regime permanente; circuitos trifásicos; frequência complexa e funções de rede; resposta em frequência; circuitos acoplados magneticamente e filtros Passivos.",
//       },

//       {
//         name: "Laboratório de eletrônica analógica",
//         src: "",
//         text: "O laboratório de eletrônica analógica atende diversas disciplinas práticas do curso de engenharia elétrica e engenharia de computação. A sua principal missão é que os alunos destes cursos possam realizar ensaios e práticas das disciplinas que tenham em sua ementa unidades relacionadas a eletrônica e eletrotécnica. Para isso, o laboratório conta com diferentes recursos e equipamentos como fontes de alimentação ajustável, osciloscópios, protoboard, multímetros, computadores, diversos componentes eletrônicos, etc. O laboratório possui um técnico que auxilia na execução das aulas práticas e é responsável pela organização do espaço e equipamentos.&Além de auxiliar e acompanhar os alunos que necessitem usar o laboratório fora dos horários das aulas. Além do técnico, o laboratório possui um coordenador responsável.",
//       },
//       {
//         name: " Laboratório de controle e automação",
//         src: "",
//         text: "O Laboratório de Controle e Automação foi projetado para lecionar o conteúdo prático das disciplinas do curso de Engenharia Elétrica relacionadas à área de Sistemas de Controle. O Laboratório de Controle e Automação é dividido em três salas, H204, H205 e H206. A sala H204 pode ser utilizada para montagens de experimentos, de kits móveis e para a realização de experimentos utilizando o braço robótico (Arm Robot Trainner ARM-7220-4).&Na sala H205 podem ser realizados experimentos utilizando plataformas de simulação de uma linha de produção (Planta Automation trainner ED-4031). Na sala H206 podem ser realizados experimentos utilizando plataformas de simulações de automatização de um ambiente industrial (PLC Exsto XC 103 e Exsto XC 201), assim como também a Planta Didática da Smar com Tecnologia Foundation Fieldbus.",
//       },
//       {
//         name: "Laboratório de sistemas elétricos industriais",
//         src: "",
//         text: "Laboratório destinado às práticas das máquinas elétricas estacionárias ( transformadores ) e as máquinas elétricas girantes ( motores e geradores ). Também se destina a este laboratório as práticas associadas às interfaces eletrônicas de potências aplicadas aos sistemas elétricos de potência ( SEP ) como retificadores, inversores e compensadores estáticos. As medidas elétricas em corrente alternada, trifásicas bem como medidas de potência e correção do fator de potência e práticas para a Qualidade de Energia  ( QEE) também são  experimentadas neste espaço.",
//       },
//       {
//         name: "Laboratório de radiofrequência",
//         src: "",
//         text: "O Laboratório de Telecomunicações - Radiofrequências é destinado ao desenvolvimento de atividades práticas das seguintes disciplinas da área de Telecomunicações lecionadas para os cursos de Engenharia Elétrica e Engenharia de Computação: Fundamentos de Comunicações, Propagação de Ondas de Rádio e Antenas.&O laboratório é equipado com geradores de sinais AM/FM, analisadores de espectro, multímetros de alta precisão, kit didático de antenas e conta ainda com um gateway para comunicação LoRa. O laboratório também é utilizado para o desenvolvimento de projetos de final de curso (TCC), atividades de extensão relacionadas à área de Telecomunicações e Projeto Integrador.",
//       },
//       {
//         name: "Laboratório de processamento de sinais",
//         src: "",
//         text: "O Laboratório de Telecomunicações – Processamento Digital de Sinais é direcionado principalmente ao desenvolvimento de atividades de ensino dos alunos de graduação dos cursos de Engenharia Elétrica e Engenharia de Computação durante a realização das aulas práticas das disciplinas de Sinais e Sistemas, Fundamentos de Comunicação, Processamento Digital de Sinais e das eletivas da ênfase de telecomunicações do curso. Também é utilizado para desenvolvimento de trabalho final de curso, iniciação científica, pesquisas e atividades de extensão nas áreas de telecomunicações, processamento de sinais e aprendizado de máquina.&Trata-se de um espaço equipado com computadores, osciloscópios, geradores de função, placas de aquisição de dados da National Instruments, um ambiente de câmara acústica e kits para aquisição de sinais de fala, vídeo, biométricos, entre outros.",
//       },
//       {
//         name: "Laboratório de eletrônica digital",
//         src: "",
//         text: "Neste laboratório são desenvolvidas as aulas práticas das disciplinasda área de eletrônica digital, que fazem parte da grade curricular dos alunos de engenharia elétrica e de computação.O laboratório também é utilizado para o desenvolvimento de projetos de iniciação científica, extensão e trabalhos de conclusão de curso.&Atualmente, são ministradas neste laboratório as seguintes disciplinas obrigatórias:< - CEA341 – Princípios de Eletrônica Digital; - CEA580 - Microprocessadores e Microcontroladores; - CEA147 - Eletrônica Embarcada.&Além disso, também podem ser ministradas as seguintes disciplinas eletivas:< - Sistemas embarcados aplicados a sistemas de controle; - Automação em tempo real; - Interfaceamento de sistemas; - Automação residencial.& Durante as aulas práticas, os estudantes têm à disposição os seguintes equipamentos:< - Computadores com acesso à internet; - Fontes de alimentação ajustáveis; - Geradores de Sinais; - Multímetros; - Osciloscópios Digitais; - Kits de desenvolvimento com circuitos lógicos, microcontroladores e FPGA’s; - Protoboards e componentes eletrônicos diversos.&O laboratório também conta com o suporte de um técnico que juntamente com os professores responsáveis pelas disciplinas, acompanha os estudantes durante as aulas práticas e os auxilia no desenvolvimento de projetos de pesquisa e extensão.",
//       },
//     ],
//   },
//   search: {
//     groups: {
//       title: "Grupos de Pesquisa",
//       text: "*Aplicações de Smart Grids nos Sistemas Elétricos de Potência (GASGSEP)*&Este grupo desenvolve trabalhos na área de análise e otimização de sistemas elétricos de potência (SEP) em regimes permanente e transitório, considerando o contexto das Smart Grids e energias renováveis. Além de visar as cidades inteligentes. Dentro destes cenarios estuda-se os fenômenos de qualidade da energia e a proteção dos sistemas elétricos.&*Modelagem, Identificação, Instrumentação e Controle (MI2C)*&Este grupo desenvolve trabalhos nas seguintes áreas: análise e projeto de sistemas de controle avançado; análise, modelagem e identificação de sistemas; e filtragem estocástica de sistemas dinâmicos.&*Processamento de Sinais, Inteligência Computacional e Telecomunicações (GPSICT*&Este grupo de pesquisa está inseridos na linha de pesquisa de Controle e Processamento de Sinais. Os projetos desenvolvidos consideram bases de dados reais para propor soluções de desenvolvimento de sistemas e aprimoramento das taxas de acerto, com simulações de sistemas em tempo real e estratégias avançadas de processamento de dados e inteligência computacional, por exemplo, em processos de mineração e problemas biomédicos.",
//     },
//     searchProjects: {},
//     ext_search: {
//       title: "Projeto de Extensão",
//       project: [
//         {
//           name: " Auxílio ao Hospital Margarida para reduzir gastos com energia elétrica – Etapa 4",
//           coord: "Prof. Juan Carlos Galvis Manso",
//           mail: "juancgalvis@ufop.edu.br",
//         },
//         {
//           name: "Elaboração de um banco de dados de casos de Dengue na cidade de João Monlevade e Ouro Preto.",
//           coord: "Prof. Edgard G. Torres Saravia",
//           mail: "edgard@ufop.edu.br",
//         },
//         {
//           name: "Robótica sustentável no ensino médio: o robô como mecanismo interdisciplinar de transmissão do conhecimento.",
//           coord: "Prof. Rodrigo Augusto Ricco ",
//           mail: "ricco@ufop.edu.br",
//         },
//         {
//           name: "RUtilização da Tecnologia LoRaWAN com instrumentação eletrônica embarcada para mensurar variações climáticas sazonais correlacionadas à ovitramps, e Georreferenciamento de ações da Vigilancia Sanitária no combate ao Aedes aegypti nas cidades de João Monlevade e Ouro Preto.",
//           coord: "PProf. Edgard G. Torres Saravia",
//           mail: "edgard@ufop.edu.br",
//         },
//       ],
//     },
//   },
//   scholarship: {
//     text: "Os alunos podem acessar a diferentes tipos de bolsas detalhados a seguir:",
//     types: [
//       {
//         id: "ic",
//         name: "BOLSAS DE PESQUISA / INICIAÇÃO CIENTÍFICA",
//         desc: "Estas se oferecem através de Editais coordenado pela Pró-Reitoria de Pós-Graduação (PROOP) duas vezes por ano. Tem por finalidade proporcionar ao aluno dos cursos de graduação incentivo à pesquisa, colocando-o sob a orientação de professores.",
//         instruc:
//           "Contate-se com um professor da área de seu interesse, o qual deverá submeter um projeto nas datas indicadas pelo Edital. Mais informações, Pró-Reitoria de Pós-Graduação",
//         link: "https://propp.ufop.br/pt-br/pesquisa/iniciacao-cientifica",
//       },
//       {
//         id: "extensao",
//         name: "BOLSAS DE EXTENSÃO",
//         desc: "Estas se oferecem através de Editais coordenado pela Pró-Reitoria de Extensão (PROEX) uma vez por ano. Tem por finalidade promover uma aproximação mais imediata entre a Universidade e a sociedade.",
//         instruc:
//           "Contate-se com um professor, o quascholarshipl deverá submeter um projeto nas datas indicadas pelo Edital. Mais informações... Pró-Reitoria de Extensão",
//         link: "https://proex.ufop.br/",
//       },
//       {
//         id: "institutional",
//         name: "BOLSAS INSTITUCIONAIS",
//         desc: "Estas bolsas estão associadas em algumas áreas da universidade, as quais focam em aspectos indicados no Plano de Desenvolvimento Institucional (PDI) da UFOP.",
//         instruc:
//           "Fique atento no site principal da UFOP (notícias) na qual se publica as vagas quando houver. Mais informações... Site da UFOP",
//         link: "https://proplad.ufop.br/bolsas-de-desenvolvimento-institucional",
//       },
//       {
//         id: "pro-ativa",
//         name: "BOLSAS PRO-ATIVA",
//         desc: "Estas se oferecem através de Editais coordenado pela Pró-Reitoria de Graduação (PROGRAD) uma vez por ano. Tem por finalidade de contribuir para a melhoria do ensino de graduação, intensificando a cooperação acadêmica entre o corpo discente e o docente por meio de novas práticas e experiências pedagógicas e profissionais, que atendam a interesses individuais e sociais",
//         instruc:
//           "Contate-se com um professor, o qual deverá submeter um projeto nas datas indicadas pelo Edital. Mais informações... Pró-Reitoria de Graduação",
//         link: "https://prograd.ufop.br/%3Cnolink%3E/pro-ativa",
//       },
//       {
//         id: "monitoria",
//         name: "BOLSAS DE MONITORIA",
//         desc: "Estas se oferecem através de Editais coordenado pela Pró-Reitoria de Graduação (PROGRAD) duas vezes por ano. Tem por finalidade realizar atividades de caráter pedagógico desenvolvido pelo monitor com estudantes de uma determinada disciplina, visando a esclarecimentos quanto ao conteúdo da disciplina e à superação de dificuldades de aprendizado.",
//         instruc:
//           "Contate-se com um professor, o qual deverá submeter um projeto nas datas indicadas pelo Edital. Mais informações... Pró-Reitoria de Graduação",
//         link: "https://prograd.ufop.br/%3Cnolink%3E/monitoria",
//       },
//       {
//         id: "alimentacao",
//         name: "BOLSAS DE ALIMENTAÇÃO - BOLSA PERMANÊNCIA - BOLSA TRANSPORTE",
//         desc: "Redução ou isenção do preço das refeições fornecidas nos Restaurantes Universitários. Em épocas previamente divulgadas, podem ser preenchidos os formulários de avaliação juntamente com os documentos que comprovem a situação socioeconômica do aluno, são encaminhados à Pró-Reitoria de Assuntos Comunitários (PRACE) para análise",
//         instruc:
//           "Mais informações... Pró-Reitoria de Assuntos Comunitários (PRACE)",
//         link: "https://www.prace.ufop.br/assistencia-estudantil/bolsas-0",
//       },
//     ],
//   },
//   contacts: [
//     {
//       link: "secretary",
//       depts: "Secretaria do Colegiado da Engenharia Elétrica",
//       addr: "Endereço: Rua 36, 115 - Loanda, João Monlevade - MG, 35931-008 - Sala A109",
//       chief: " Naira Mota Araújo",
//       remote: {
//         days: "Segunda a sexta-feira, das 8h às 12h e 13h às 17h",
//         mail: " coee@ufop.edu.br",
//         tel: "31 3808-0833",
//       },
//       presential: {
//         mail: "coee@ufop.edu.br",
//         tel: "31 3808-0833",
//         days: "Terça a quinta-feira, das 13h às 17h",
//       },
//     },

//     {
//       link: "coordenation",
//       depts: "Coordenação do COEE",
//       addr: null,
//       chief: "Prof. Renan Fernandes Bastos",
//       remote: {
//         days: null,
//         mail: "renan.bastos@ufop.edu.br",
//         tel: null,
//       },
//       presential: null,
//     },

//     {
//       link: "section",
//       depts: "Embreve",
//       addr: null,
//       chief: "",
//       remote: {
//         days: null,
//         mail: "",
//         tel: null,
//       },
//       presential: null,
//     },
//   ],
// };
