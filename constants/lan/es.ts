import { SubMenuType } from "@/types/types";

export const menusES: SubMenuType[] = [
  {
    menu: "COEE",
    id: "home",
    subItens: [
      { label: "Sobre el Colegio", link: "/sobre" },
      { label: "Sobre el NDE", link: "/sobre/nde" },
      { label: "Miembros del NDE", link: "/sobre/membros-nde" },
      { label: "COEE en Números", link: "/sobre/coe-em-numeros" },
    ],
  },
  {
    menu: "Becas",
    id: "scholarships",
    subItens: [
      { label: "Iniciación Científica", link: "/bolsas" },
      { label: "Extensión", link: "/bolsas#extensao" },
      { label: "Institucional", link: "/bolsas#institutional" },
      { label: "Pro-Activa", link: "/bolsas#pro-ativa" },
      { label: "Monitoría", link: "/bolsas#monitoria" },
      { label: "PRACE", link: "/bolsas#alimentacao" },
    ],
  },

  {
    menu: "Enseñanza",
    id: "course",
    subItens: [
      { label: "Pregrado", link: "/ensino" },
      { label: "Matriz Curricular", link: "/ensino/matriz-curricular" },
      { label: "Docentes", link: "/ensino/docentes" },
      { label: "Planes de Estudio", link: "/ensino/ementas" },
      { label: "Proyecto Pedagógico", link: "/ensino/projeto-pedagogico" },
      { label: "Evaluación", link: "/ensino/avaliacao" },
    ],
  },

  {
    menu: "Infraestructura",
    id: "infra",
    subItens: [{ label: "Laboratorios", link: "/labs" }],
  },

  {
    menu: "Investigación y Extensión",
    id: "search",
    subItens: [
      { label: "Proyectos de Investigación", link: "/pesquisa" },
      { label: "Grupos de Investigación", link: "/pesquisa/grupos" },
      { label: "Proyectos de Extensión", link: "/pesquisa/extensao" },
    ],
  },

  {
    menu: "Contactos",
    id: "contacts",
    subItens: [
      { label: "Secretaría", link: "/contato" },
      { label: "Colegiado", link: "/contato#coordenation" },
      { label: "Sección de Enseñanza", link: "/contato#section" },
    ],
  },
];

export const ContactsES = {
  menu: "Contatos",
  contacts: [
    {
      link: "secretary",
      depts: "Secretaría del Colegiado de Ingeniería Eléctrica",
      addr: "Dirección: Rua 36, 115 - Loanda, João Monlevade - MG, 35931-008 - Sala A109",
      chief: "Naira Mota Araújo",
      remote: {
        days: "Lunes a viernes, de 8:00 a.m. a 12:00 p.m. y de 1:00 p.m. a 5:00 p.m.",
        mail: "coee@ufop.edu.br",
        tel: "31 3808-0833",
      },
      presential: {
        mail: "coee@ufop.edu.br",
        tel: "31 3808-0833",
        days: "Martes a jueves, de 1:00 p.m. a 5:00 p.m.",
      },
    },
    {
      link: "coordenation",
      depts: "Coordinación del COEE",
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
      depts: "Próximamente",
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

export const ScholarshipES = {
  menu: "Bolsas",
  text: "Los estudiantes pueden acceder a diferentes tipos de becas detallados a continuación:",
  types: [
    {
      id: "ic",
      name: "BECAS DE INVESTIGACIÓN / INICIACIÓN CIENTÍFICA",
      desc: "Estas se ofrecen a través de Convocatorias coordinadas por la Pró-Reitoría de Posgrado (PROOP) dos veces al año. Tienen como finalidad proporcionar al estudiante de cursos de grado un incentivo para la investigación, colocándolo bajo la orientación de profesores.",
      instruc:
        "Póngase en contacto con un profesor del área de su interés, quien deberá presentar un proyecto en las fechas indicadas por la Convocatoria. Para más información, Pró-Reitoría de Posgrado",
      link: "https://propp.ufop.br/pt-br/pesquisa/iniciacao-cientifica",
    },
    {
      id: "extensao",
      name: "BECAS DE EXTENSIÓN",
      desc: "Estas se ofrecen a través de Convocatorias coordinadas por la Pró-Reitoría de Extensión (PROEX) una vez al año. Tienen como finalidad promover un acercamiento más inmediato entre la Universidad y la sociedad.",
      instruc:
        "Póngase en contacto con un profesor, quien deberá presentar un proyecto en las fechas indicadas por la Convocatoria. Para más información... Pró-Reitoría de Extensión",
      link: "https://proex.ufop.br/",
    },
    {
      id: "institutional",
      name: "BECAS INSTITUCIONALES",
      desc: "Estas becas están asociadas en algunas áreas de la universidad, las cuales se centran en aspectos indicados en el Plan de Desarrollo Institucional (PDI) de la UFOP.",
      instruc:
        "Esté atento al sitio principal de la UFOP (noticias) donde se publican las vacantes cuando las haya. Para más información... Sitio web de la UFOP",
      link: "https://proplad.ufop.br/bolsas-de-desenvolvimento-institucional",
    },
    {
      id: "pro-ativa",
      name: "BECAS PRO-ACTIVAS",
      desc: "Estas se ofrecen a través de Convocatorias coordinadas por la Pró-Reitoría de Grado (PROGRAD) una vez al año. Tienen como finalidad contribuir a la mejora de la enseñanza de grado, intensificando la cooperación académica entre el cuerpo estudiantil y el docente mediante nuevas prácticas y experiencias pedagógicas y profesionales que atiendan a intereses individuales y sociales.",
      instruc:
        "Póngase en contacto con un profesor, quien deberá presentar un proyecto en las fechas indicadas por la Convocatoria. Para más información... Pró-Reitoría de Grado",
      link: "https://prograd.ufop.br/%3Cnolink%3E/pro-ativa",
    },
    {
      id: "monitoria",
      name: "BECAS DE MONITORÍA",
      desc: "Estas se ofrecen a través de Convocatorias coordinadas por la Pró-Reitoría de Grado (PROGRAD) dos veces al año. Tienen como finalidad realizar actividades de carácter pedagógico desarrolladas por el monitor con estudiantes de una determinada disciplina, con el objetivo de aclarar el contenido de la disciplina y superar las dificultades de aprendizaje.",
      instruc:
        "Póngase en contacto con un profesor, quien deberá presentar un proyecto en las fechas indicadas por la Convocatoria. Para más información... Pró-Reitoría de Grado",
      link: "https://prograd.ufop.br/%3Cnolink%3E/monitoria",
    },
    {
      id: "alimentacao",
      name: "BECAS DE ALIMENTACIÓN - BECA PERMANENCIA - BECA TRANSPORTE",
      desc: "Reducción o exención del precio de las comidas proporcionadas en los Restaurantes Universitarios. En épocas previamente anunciadas, se pueden completar los formularios de evaluación junto con los documentos que demuestren la situación socioeconómica del estudiante, que se envían a la Pró-Reitoría de Asuntos Comunitarios (PRACE) para su análisis.",
      instruc:
        "Para más información... Pró-Reitoría de Asuntos Comunitarios (PRACE)",
      link: "https://www.prace.ufop.br/assistencia-estudantil/bolsas-0",
    },
  ],
};

export const SearchES = {
  menu: "Investigación y Extensión",
  groups: {
    menu: "Grupos",
    title: "Grupos de Investigación",
    text: "*Aplicaciones de Smart Grids en los Sistemas Eléctricos de Potencia (GASGSEP)*&Este grupo desarrolla trabajos en el área de análisis y optimización de sistemas eléctricos de potencia (SEP) en regímenes permanente y transitorio, considerando el contexto de las Smart Grids y energías renovables. Además, se enfoca en las ciudades inteligentes. Dentro de estos escenarios se estudian los fenómenos de calidad de energía y la protección de los sistemas eléctricos.&*Modelado, Identificación, Instrumentación y Control (MI2C)*&Este grupo desarrolla trabajos en las siguientes áreas: análisis y diseño de sistemas de control avanzado; análisis, modelado e identificación de sistemas; y filtrado estocástico de sistemas dinámicos.&*Procesamiento de Señales, Inteligencia Computacional y Telecomunicaciones (GPSICT*&Este grupo de investigación está inserto en la línea de investigación de Control y Procesamiento de Señales. Los proyectos desarrollados consideran bases de datos reales para proponer soluciones de desarrollo de sistemas y mejora de las tasas de acierto, con simulaciones de sistemas en tiempo real y estrategias avanzadas de procesamiento de datos e inteligencia computacional, por ejemplo, en procesos de minería y problemas biomédicos.",
  },
  searchProjects: {
    menu: "Proyectos de Investigación",
  },
  ext_search: {
    menu: "Proyecto de Extensión",
    project: [
      {
        name: "Auxilio al Hospital Margarida para reducir gastos con energía eléctrica – Etapa 4",
        coord: "Prof. Juan Carlos Galvis Manso",
        mail: "juancgalvis@ufop.edu.br",
      },
      {
        name: "Elaboración de una base de datos de casos de Dengue en la ciudad de João Monlevade y Ouro Preto.",
        coord: "Prof. Edgard G. Torres Saravia",
        mail: "edgard@ufop.edu.br",
      },
      {
        name: "Robótica sostenible en la enseñanza media: el robot como mecanismo interdisciplinario de transmisión del conocimiento.",
        coord: "Prof. Rodrigo Augusto Ricco ",
        mail: "ricco@ufop.edu.br",
      },
      {
        name: "Utilización de la Tecnología LoRaWAN con instrumentación electrónica embarcada para medir variaciones climáticas estacionales correlacionadas con ovitrampas, y Georreferenciación de acciones de Vigilancia Sanitaria en la lucha contra el Aedes aegypti en las ciudades de João Monlevade y Ouro Preto.",
        coord: "Prof. Edgard G. Torres Saravia",
        mail: "edgard@ufop.edu.br",
      },
    ],
  },
};

export const InfraES = {
  menu: "Infraestructura",
  labs: [
    {
      name: "Laboratorio de circuitos eléctricos",
      src: "",
      text: "Los estudiantes aprenden a manejar equipos y herramientas de corriente continua (CC), primero, y de corriente alterna (CA), luego, en el Laboratorio de Circuitos Eléctricos. En lo que respecta a los circuitos de corriente continua, se aplican las leyes generales, que también son similares en términos de circuitos de corriente alterna; tales como transformación estrella triángulo y viceversa, teorema de transposición y leyes de Kirchhoff, entre otras.&Al final, deberán ser capaces de analizar los circuitos en CC y CA de acuerdo con los siguientes temas: excitación sinusoidal y fasores; análisis en régimen permanente; potencia en régimen permanente; circuitos trifásicos; frecuencia compleja y funciones de red; respuesta en frecuencia; circuitos acoplados magnéticamente y filtros pasivos.",
    },
    {
      name: "Laboratorio de electrónica analógica",
      src: "",
      text: "El laboratorio de electrónica analógica atiende diversas asignaturas prácticas del curso de ingeniería eléctrica e ingeniería de computación. Su principal misión es que los estudiantes de estos cursos puedan realizar ensayos y prácticas de las asignaturas que tengan en su plan de estudios unidades relacionadas con la electrónica y la electrotécnica. Para ello, el laboratorio cuenta con diferentes recursos y equipos como fuentes de alimentación ajustables, osciloscopios, protoboards, multímetros, computadoras, diversos componentes electrónicos, etc. El laboratorio cuenta con un técnico que ayuda en la ejecución de las clases prácticas y es responsable de la organización del espacio y los equipos.&Además de ayudar y acompañar a los estudiantes que necesiten usar el laboratorio fuera del horario de clases. Además del técnico, el laboratorio cuenta con un coordinador responsable.",
    },
    {
      name: "Laboratorio de control y automatización",
      src: "",
      text: "El Laboratorio de Control y Automatización fue diseñado para enseñar el contenido práctico de las asignaturas del curso de Ingeniería Eléctrica relacionadas con el área de Sistemas de Control. El Laboratorio de Control y Automatización se divide en tres salas, H204, H205 y H206. La sala H204 se puede utilizar para montajes de experimentos, de kits móviles y para la realización de experimentos utilizando el brazo robótico (Arm Robot Trainner ARM-7220-4).&En la sala H205 se pueden realizar experimentos utilizando plataformas de simulación de una línea de producción (Planta Automation Trainner ED-4031). En la sala H206 se pueden realizar experimentos utilizando plataformas de simulaciones de automatización de un ambiente industrial (PLC Exsto XC 103 y Exsto XC 201), así como también la Planta Didáctica de Smar con Tecnología Foundation Fieldbus.",
    },
    {
      name: "Laboratorio de sistemas eléctricos industriales",
      src: "",
      text: "Laboratorio destinado a las prácticas de las máquinas eléctricas estacionarias (transformadores) y las máquinas eléctricas giratorias (motores y generadores). También se destina a este laboratorio las prácticas asociadas a las interfaces electrónicas de potencias aplicadas a los sistemas eléctricos de potencia (SEP) como rectificadores, inversores y compensadores estáticos. Las medidas eléctricas en corriente alterna, trifásicas, así como medidas de potencia y corrección del factor de potencia y prácticas para la Calidad de Energía (QEE) también se experimentan en este espacio.",
    },
    {
      name: "Laboratorio de radiofrecuencia",
      src: "",
      text: "El Laboratorio de Telecomunicaciones - Radiofrecuencias está destinado al desarrollo de actividades prácticas de las siguientes asignaturas del área de Telecomunicaciones impartidas para los cursos de Ingeniería Eléctrica e Ingeniería de Computación: Fundamentos de Comunicaciones, Propagación de Ondas de Radio y Antenas.&El laboratorio está equipado con generadores de señales AM/FM, analizadores de espectro, multímetros de alta precisión, kit didáctico de antenas y cuenta además con un gateway para comunicación LoRa. El laboratorio también se utiliza para el desarrollo de proyectos de fin de curso (TCC), actividades de extensión relacionadas con el área de Telecomunicaciones y Proyecto Integrador.",
    },
    {
      name: "Laboratorio de procesamiento de señales",
      src: "",
      text: "El Laboratorio de Telecomunicaciones - Procesamiento Digital de Señales está dirigido principalmente al desarrollo de actividades de enseñanza de los alumnos de pregrado de los cursos de Ingeniería Eléctrica e Ingeniería de Computación durante la realización de las clases prácticas de las asignaturas de Señales y Sistemas, Fundamentos de Comunicación, Procesamiento Digital de Señales y de las electivas de la especialidad de telecomunicaciones del curso. También se utiliza para desarrollo de trabajo final de curso, iniciación científica, investigaciones y actividades de extensión en las áreas de telecomunicaciones, procesamiento de señales y aprendizaje de máquina.&Se trata de un espacio equipado con computadoras, osciloscopios, generadores de función, placas de adquisición de datos de National Instruments, un ambiente de cámara acústica y kits para adquisición de señales de habla, vídeo, biométricas, entre otros.",
    },
    {
      name: "Laboratorio de electrónica digital",
      src: "",
      text: "En este laboratorio se desarrollan las clases prácticas de las asignaturas del área de electrónica digital, que forman parte del plan de estudios de los estudiantes de ingeniería eléctrica y de computación. El laboratorio también se utiliza para el desarrollo de proyectos de iniciación científica, extensión y trabajos de fin de curso.&Actualmente, se imparten en este laboratorio las siguientes asignaturas obligatorias:< - CEA341 - Principios de Electrónica Digital; - CEA580 - Microprocesadores y Microcontroladores; - CEA147 - Electrónica Embarcada.&Además, también se pueden impartir las siguientes asignaturas electivas:< - Sistemas embebidos aplicados a sistemas de control; - Automatización en tiempo real; - Interfaz de sistemas; - Automatización residencial.&Durante las clases prácticas, los estudiantes tienen a disposición los siguientes equipos:< - Computadoras con acceso a internet; - Fuentes de alimentación ajustables; - Generadores de señales; - Multímetros; - Osciloscopios digitales; - Kits de desarrollo con circuitos lógicos, microcontroladores y FPGA’s; - Protoboard y componentes electrónicos diversos.&El laboratorio también cuenta con el apoyo de un técnico que junto con los profesores responsables de las asignaturas, acompaña a los estudiantes durante las clases prácticas y los ayuda en el desarrollo de proyectos de investigación y extensión.",
    },
  ],
};

export const EducationES = {
  menu: "Enseñanza",
  text: "Con inicio en el segundo semestre de 2009, el curso con modalidad de licenciatura se encuentra ubicado en el Instituto de Ciencias Exactas y Aplicadas (ICEA). El curso tiene una duración de cinco años, en los turnos vespertino y nocturno. Su objetivo es la formación de profesionales con estudios teóricos basados en electricidad, cálculo, informática y electrónica.&El licenciado en Ingeniería Eléctrica estará capacitado para trabajar en áreas industriales, desarrollando proyectos, gestionando sistemas eléctricos y sistemas de automatización. También existe la posibilidad de trabajar en áreas más creativas y críticas, combinando cuestiones sociales relacionadas con el área, como contexto social, político y ambiental, cuestionadas durante la graduación.&Proporcionando más libertad de elección de intereses del estudiante, el curso ofrece tres opciones de énfasis: Sistemas Eléctricos, Sistemas de Control y Telecomunicaciones. La formación sólida en tecnología y ciencia no es el único objetivo del curso. Graduar profesionales emprendedores, dinámicos y creativos también es su meta. El curso capacita al estudiante para ser un profesional capaz de actuar en un mercado inconstante, que necesita dinamismo y rápida adaptación.&*Áreas de actuación:*La aplicación de toda la teoría y práctica adquiridas a lo largo de la graduación capacita al graduado para desarrollar dispositivos electroelectrónicos que resuelvan problemas en diversas áreas. El ingeniero eléctrico está capacitado para diseñar, desarrollar y gestionar sistemas eléctricos, de automatización y de telecomunicaciones. También podrá aplicar conceptos del curso en otras áreas del conocimiento, como continuación de estudios en cursos de posgrado para ejercer carrera en el área de enseñanza e investigación.",
  table: {
    head: ["Modalidad", "Duración", "Vacantes", "Turnos", "Campus"],
    body: [
      "Licenciatura",
      "10 semestres",
      "40",
      "Vespertino y nocturno",
      "João Monlevade/MG",
    ],
  },
  course_curriculum: {
    menu: "Matriz Curricular",
    content: [
      {
        label:
          "Acceda a la matriz curricular vigente y los programas de las asignaturas del curso aquí.",
        link: "https://drive.google.com/drive/u/1/folders/1LuVBmyiDNib__B-bV4F6dTpi_JRhNQJ7",
      },
      {
        label: "Asignaturas del curso antes de 2023/2",
        link: "",
      },
      {
        label: "Flujograma de las Asignaturas del Curso",
        link: "",
      },
    ],
  },
  teachers: {
    menu: "Profesores",
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
    menu: "Planes de estudio",
    text: "Accede al enlace del proyecto pedagógico del curso de Ingeniería Eléctrica",
    link: "https://drive.google.com/file/d/0B2du5p-U6wZIa1pzaWphcEV6MEU/view?usp=sharing",
  },
  course_evaluation: {
    menu: "Evaluación del Curso",
    text: "Más información",
    link: "https://ufop.br/noticias/graduacao/divulgada-classificacao-dos-cursos-estrelados-pelo-guia-do-estudante",
  },
};

export const HomeES = {
  about_colegiate: {
    menu: "Sobre Colegiado",
    text: "El Estatuto de la Universidad Federal de Ouro Preto – UFOP, dispone sobre la finalidad, composición y competencias de los Colegiados de Curso, expresados en los artículos 23, 24 y 25, Capítulo I, Título VI.&El reglamento regula el funcionamiento de los Órganos Colegiados, expresados en el artículo 2º hasta el 14, Capítulo I, Título II, aplicándose a los colegiados de curso lo que corresponda, una vez que los órganos colegiados de esta universidad tienen finalidad, composición y competencias distintas.",
    url: "https://drive.google.com/file/d/1NzTAIWj8MHv746RAoBUGAW_Nyc3jcuWB/preview",
    legend: "Vídeo en lenguaje de señas sobre el curso.",
  },
  about_nde: {
    menu: "Sobre NDE",
    text: "El Núcleo Docente Estruturante - NDE fue instituido en la Universidad Federal de Ouro Preto por la Resolución CEPE nº 4450 de 29/04/2011, en cumplimiento de la Resolución CONAES nº 01/2010 con el objetivo de contribuir a la calidad de los Cursos de Grado.&El NDE no tiene carácter deliberativo, debiendo sus decisiones ser remitidas al Colegiado.&En el ámbito del curso de Ingeniería de Producción/ICEA, el NDE/EP fue reconstituido a partir de la indicación del COEP, siendo su punto de partida la Orden ICEA nº 05 de 09 de junio de 2019.&Según la Resolución CEPE nº 4450/2011, son atribuciones del NDE:&Art. 2º En los términos de la Resolución CONAES nº 01/2010, cada Núcleo Docente Estruturante tendrá competencia académica de acompañamiento y actuación en los procesos de concepción, consolidación y continua actualización del proyecto pedagógico del curso y, sin perjuicio de otras atribuciones complementarias, deberá:&",
    items:
      "Contribuir a la consolidación del perfil profesional del egresado del curso;&Velar por la integración curricular interdisciplinaria entre las diferentes actividades de enseñanza constantes en el currículo;&Indicar formas de incentivo al desarrollo de líneas de investigación y extensión, provenientes de necesidades de la graduación, de exigencias del mercado laboral y afinadas con las políticas públicas relativas al área de conocimiento del curso;&velar por el cumplimiento de las Directrices Curriculares Nacionales para los Cursos de Grado.",
  },
  members: {
    menu: "Miembros de NDE",
    title: "Núcleo Docente Estruturante de Ingeniería Eléctrica (NDEE)",
    text: "Accede al enlace para conocer los miembros del Núcleo Docente Estruturante de Ingeniería Eléctrica",
    link: "https://docs.google.com/spreadsheets/d/1rYkWVPnZk7eQMFOf9SNnnHe0yBOSE8m8/edit#gid=372138676",
  },
  coe_statistics: {
    menu: "COEE en Números",
    icon: "estadísticas",
    title: "COEE en Números",
    stats: [
      {
        img: "barGraph.png",
        title: "Cantidad de Matriculados entre 2009-2021",
      },
      {
        img: "2graph.png",
        title: "Cantidad de Diplomados entre 2014-2021",
      },
      {
        img: "pizza_graph.png",
        title: "Promedio por Diferentes Modos de Admisión entre 2000-2021",
      },
      {
        img: "2graph.png",
        title: "Cantidad de Diplomados entre 2014-2021",
      },
      {
        img: "pizza_graph.png",
        title: "Promedio por Diferentes Modos de Admisión entre 2000-2021",
      },
    ],
  },
};
