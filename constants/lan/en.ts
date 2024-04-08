import { SubMenuType } from "@/types/types";

export const menusEN: SubMenuType[] = [
  {
    menu: "COEE",
    id: "home",
    subItens: [
      { label: "About the Department", link: "/sobre" },
      { label: "About the NDE", link: "/sobre/nde" },
      { label: "NDE Members", link: "/sobre/membros-nde" },
      { label: "COEE in Numbers", link: "/sobre/coe-em-numeros" },
    ],
  },
  {
    menu: "Scholarships",
    id: "scholarships",
    subItens: [
      { label: "Scientific Initiation", link: "/bolsas" },
      { label: "Extension", link: "/bolsas#extensao" },
      { label: "Institutional", link: "/bolsas#institutional" },
      { label: "Pro-Active", link: "/bolsas#pro-ativa" },
      { label: "Monitoring", link: "/bolsas#monitoria" },
      { label: "PRACE", link: "/bolsas#alimentacao" },
    ],
  },

  {
    menu: "Teaching",
    id: "course",
    subItens: [
      { label: "Undergraduate", link: "/ensino" },
      { label: "Curriculum", link: "/ensino/matriz-curricular" },
      { label: "Faculty", link: "/ensino/docentes" },
      { label: "Syllabi", link: "/ensino/ementas" },
      { label: "Pedagogical Project", link: "/ensino/projeto-pedagogico" },
      { label: "Assessment", link: "/ensino/avaliacao" },
    ],
  },

  {
    menu: "Infrastructure",
    id: "infra",
    subItens: [{ label: "Laboratories", link: "/labs" }],
  },

  {
    menu: "Research and Extension",
    id: "search",
    subItens: [
      { label: "Research Projects", link: "/pesquisa" },
      { label: "Research Groups", link: "/pesquisa/grupos" },
      { label: "Extension Projects", link: "/pesquisa/extensao" },
    ],
  },

  {
    menu: "Contacts",
    id: "contacts",
    subItens: [
      { label: "Secretariat", link: "/contato" },
      { label: "Department", link: "/contato#coordenation" },
      { label: "Teaching Section", link: "/contato#section" },
    ],
  },
];

export const ContactsEN = {
  menu: "Contacts",
  contacts: [
    {
      link: "secretary",
      depts: "Electrical Engineering Department Secretariat",
      addr: "Address: Rua 36, 115 - Loanda, João Monlevade - MG, 35931-008 - Room A109",
      chief: " Naira Mota Araújo",
      remote: {
        days: "Monday to Friday, from 8am to 12pm and 1pm to 5pm",
        mail: " coee@ufop.edu.br",
        tel: "31 3808-0833",
      },
      presential: {
        mail: "coee@ufop.edu.br",
        tel: "31 3808-0833",
        days: "Tuesday to Thursday, from 1pm to 5pm",
      },
    },

    {
      link: "coordenation",
      depts: "COEE Coordination",
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
      depts: "Coming soon",
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

export const ScholarshipEN = {
  menu: "Scholarships",
  text: "Students can access different types of scholarships detailed below:",
  types: [
    {
      id: "ic",
      name: "RESEARCH / SCIENTIFIC INITIATION SCHOLARSHIPS",
      desc: "These are offered through calls for proposals coordinated by the Graduate Studies Pro-Rectorate (PROOP) twice a year. They aim to provide undergraduate students with an incentive to research, placing them under the guidance of professors.",
      instruc:
        "Contact a professor in your area of interest, who will need to submit a project on the dates indicated in the call for proposals. For more information, please contact the Graduate Studies Pro-Rectorate.",
      link: "https://propp.ufop.br/en-us/research/scientific-initiation",
    },
    {
      id: "extensao",
      name: "EXTENSION SCHOLARSHIPS",
      desc: "These are offered through calls for proposals coordinated by the Extension Pro-Rectorate (PROEX) once a year. They aim to promote a closer relationship between the University and society.",
      instruc:
        "Contact a professor, who will need to submit a project on the dates indicated in the call for proposals. For more information, please contact the Extension Pro-Rectorate.",
      link: "https://proex.ufop.br/en/",
    },
    {
      id: "institutional",
      name: "INSTITUTIONAL SCHOLARSHIPS",
      desc: "These scholarships are associated with certain areas of the university, which focus on aspects indicated in the UFOP Institutional Development Plan (PDI).",
      instruc:
        "Stay tuned to the UFOP main website (news) where vacancies are published when available. For more information, please visit the UFOP website.",
      link: "https://proplad.ufop.br/bolsas-de-desenvolvimento-institucional",
    },
    {
      id: "pro-ativa",
      name: "PRO-ATIVA SCHOLARSHIPS",
      desc: "These are offered through calls for proposals coordinated by the Undergraduate Pro-Rectorate (PROGRAD) once a year. They aim to contribute to the improvement of undergraduate education, by intensifying academic cooperation between students and faculty through new pedagogical and professional practices and experiences that meet individual and social interests.",
      instruc:
        "Contact a professor, who will need to submit a project on the dates indicated in the call for proposals. For more information, please contact the Undergraduate Pro-Rectorate.",
      link: "https://prograd.ufop.br/%3Cnolink%3E/pro-ativa",
    },
    {
      id: "monitoria",
      name: "MONITORING SCHOLARSHIPS",
      desc: "These are offered through calls for proposals coordinated by the Undergraduate Pro-Rectorate (PROGRAD) twice a year. They aim to carry out pedagogical activities developed by the monitor with students of a given discipline, aiming at clarifying the content of the discipline and overcoming learning difficulties.",
      instruc:
        "Contact a professor, who will need to submit a project on the dates indicated in the call for proposals. For more information, please contact the Undergraduate Pro-Rectorate.",
      link: "https://prograd.ufop.br/%3Cnolink%3E/monitoria",
    },
    {
      id: "alimentacao",
      name: "FOOD SCHOLARSHIPS - PERMANENCE SCHOLARSHIPS - TRANSPORTATION SCHOLARSHIPS",
      desc: "Reduction or exemption from the price of meals provided at the University Restaurants. At previously announced times, students can fill out evaluation forms together with documents that prove their socioeconomic situation, which are sent to the Pro-Rectorate for Community Affairs (PRACE) for analysis.",
      instruc:
        "For more information, please contact the Pro-Rectorate for Community Affairs (PRACE).",
      link: "https://www.prace.ufop.br/assistencia-estudantil/bolsas-0",
    },
  ],
};

export const SearchEN = {
  menu: "Research and Extension",
  groups: {
    menu: "Groups",
    title: "Research Groups",
    text: "*Smart Grids Applications in Power Systems (GASGSEP)*&This group develops work in the area of analysis and optimization of power systems (SEP) in steady state and transient regimes, considering the context of Smart Grids and renewable energies. In addition to aiming at smart cities. Within these scenarios, the phenomena of power quality and protection of electrical systems are studied.&*Modeling, Identification, Instrumentation and Control (MI2C)*&This group develops work in the following areas: analysis and design of advanced control systems; analysis, modeling and identification of systems; and stochastic filtering of dynamic systems.&*Signal Processing, Computational Intelligence and Telecommunications (GPSICT*&This research group is inserted in the research line of Control and Signal Processing. The projects developed consider real databases to propose solutions for system development and improvement of accuracy rates, with real-time system simulations and advanced data processing and computational intelligence strategies, for example, in mining processes and biomedical problems.",
  },
  searchProjects: {
    menu: "Research Projects",
  },
  ext_search: {
    menu: "Extension Projects",
    project: [
      {
        name: "Helping Margarida Hospital to reduce electricity costs – Stage 4",
        coord: "Prof. Juan Carlos Galvis Manso",
        mail: "juancgalvis@ufop.edu.br",
      },
      {
        name: "Elaboration of a database of Dengue cases in the cities of João Monlevade and Ouro Preto.",
        coord: "Prof. Edgard G. Torres Saravia",
        mail: "edgard@ufop.edu.br",
      },
      {
        name: "Sustainable robotics in high school: the robot as an interdisciplinary mechanism for the transmission of knowledge.",
        coord: "Prof. Rodrigo Augusto Ricco ",
        mail: "ricco@ufop.edu.br",
      },
      {
        name: "Reuse of LoRaWAN Technology with embedded electronic instrumentation to measure seasonal climate variations correlated with oviposition traps, and Georeferencing of actions by the Health Surveillance in the fight against Aedes aegypti in the cities of João Monlevade and Ouro Preto.",
        coord: "PProf. Edgard G. Torres Saravia",
        mail: "edgard@ufop.edu.br",
      },
    ],
  },
};

export const InfraEN = {
  menu: "Infrastructure",
  labs: [
    {
      name: "Electrical Circuits Laboratory",
      src: "",
      text: "Students learn how to handle direct current (DC) and alternating current (AC) equipment and tools in the Electrical Circuits Laboratory. In terms of DC circuits, the general laws are applied, which are also similar in terms of AC circuits; such as star-delta and vice versa transformation, transposition theorem and Kirchhoff's laws, among others. At the end, students should be able to analyze DC and AC circuits according to the following topics: sinusoidal excitation and phasors; steady-state analysis; steady-state power; three-phase circuits; complex frequency and network functions; frequency response; magnetically coupled circuits and passive filters.",
    },

    {
      name: "Analog Electronics Laboratory",
      src: "",
      text: "The Analog Electronics Laboratory serves several practical disciplines of the Electrical Engineering and Computer Engineering courses. Its main mission is for students of these courses to be able to carry out tests and practices of the disciplines that have units related to electronics and electrical engineering in their syllabus. For this, the laboratory has different resources and equipment such as adjustable power supplies, oscilloscopes, protoboard, multimeters, computers, various electronic components, etc. The laboratory has a technician who assists in the execution of practical classes and is responsible for the organization of the space and equipment. In addition to assisting and monitoring students who need to use the laboratory outside of class hours. In addition to the technician, the laboratory has a responsible coordinator.",
    },

    {
      name: "Control and Automation Laboratory",
      src: "",
      text: "The Control and Automation Laboratory was designed to teach the practical content of the Electrical Engineering course disciplines related to the Control Systems area. The Control and Automation Laboratory is divided into three rooms, H204, H205 and H206. Room H204 can be used for assembling experiments, mobile kits and for conducting experiments using the robotic arm (Arm Robot Trainner ARM-7220-4). In room H205, experiments can be carried out using simulation platforms of a production line (Planta Automation trainner ED-4031). In room H206, experiments can be carried out using simulation platforms of industrial environment automation (PLC Exsto XC 103 and Exsto XC 201), as well as the Smar Didactic Plant with Foundation Fieldbus Technology.",
    },

    {
      name: "Industrial Electrical Systems Laboratory",
      src: "",
      text: "Laboratory for the practices of stationary electric machines (transformers) and rotating electric machines (motors and generators). This laboratory is also intended for the practices associated with electronic power interfaces applied to power electrical systems (SEP) such as rectifiers, inverters and static compensators. AC electrical measurements, three-phase as well as power measurements and power factor correction and practices for Power Quality (QEE) are also experienced in this space.",
    },

    {
      name: "Radio Frequency Laboratory",
      src: "",
      text: "The Telecommunications - Radio Frequency Laboratory is intended for the development of practical activities of the following Telecommunications area disciplines taught for the Electrical Engineering and Computer Engineering courses: Fundamentals of Communications, Radio Wave Propagation and Antennas. The laboratory is equipped with AM/FM signal generators, spectrum analyzers, high precision multimeters, antenna training kit and also has a LoRa communication gateway. The laboratory is also used for the development of end-of-course projects (TCC), extension activities related to the Telecommunications area and Integrative Project.",
    },

    {
      name: "Signal Processing Laboratory",
      src: "",
      text: "The Telecommunications Laboratory - Digital Signal Processing is mainly directed to the development of teaching activities for undergraduate students of the Electrical Engineering and Computer Engineering courses during the practical classes of the Signals and Systems, Fundamentals of Communication, Digital Signal Processing and elective subjects of the telecommunications emphasis of the course. It is also used for the development of final course work, scientific initiation, research and extension activities in the areas of telecommunications, signal processing and machine learning. It is a space equipped with computers, oscilloscopes, function generators, National Instruments data acquisition boards, an acoustic chamber environment and kits for acquiring speech, video, biometric signals, among others.",
    },

    {
      name: "Digital Electronics Laboratory",
      src: "",
      text: "In this laboratory, practical classes for subjects in the field of digital electronics are conducted, which are part of the curriculum for students of electrical engineering and computer science. The laboratory is also used for the development of scientific initiation projects, extension activities, and final projects. Currently, the following mandatory subjects are taught in this laboratory: - CEA341 – Principles of Digital Electronics; - CEA580 - Microprocessors and Microcontrollers; - CEA147 - Embedded Electronics. Additionally, the following elective subjects may also be taught: - Embedded systems applied to control systems; - Real-time automation; - System interfacing; - Home automation. During practical classes, students have access to the following equipment: - Computers with internet access; - Adjustable power supplies; - Signal generators; - Multimeters; - Digital Oscilloscopes; - Development kits with logic circuits, microcontrollers, and FPGAs; - Protoboards and various electronic components. The laboratory also has the support of a technician who, along with the responsible professors, accompanies the students during practical classes and assists them in the development of research and extension projects.",
    },
  ],
};

export const EducationEN = {
  menu: "Education",
  text: "Started in the second semester of 2009, the undergraduate course is located at the Institute of Exact and Applied Sciences (ICEA). The course lasts five years, in the afternoon and evening shifts. It aims to train professionals with theoretical studies based on electricity, calculus, computer science and electronics.&The Bachelor of Electrical Engineering will be able to work in industrial areas, developing projects, managing electrical systems and automation systems. There is also the possibility of working in more creative and critical areas, combining social issues related to the area, such as social, political and environmental context, questioned in the graduation.&Providing more freedom of choice of interests for the student, the course offers three emphasis options: Electrical Systems, Control Systems and Telecommunications. The solid training in technology and science is not the only objective of the course. Graduating entrepreneurial, dynamic and creative professionals is also its goal. The course trains the student to be a professional capable of working in an inconstant market, which needs dynamism and rapid adaptation.&Areas of atuação:*The application of all the theory and practice acquired throughout the graduation qualifies the graduate to develop electronic devices that solve problems in several areas. The electrical engineer is qualified to design, develop and manage electrical, automation and telecommunication systems. You will also be able to apply concepts from the course in other areas of knowledge, such as continuing studies in postgraduate courses to pursue a career in teaching and research.",
  table: {
    head: ["Modality", "Duration", "Vacancies", "Shifts", "Campus"],
    body: [
      "Bachelor's degree",
      "10 semesters",
      "40",
      "Afternoon and evening",
      "João Monlevade/MG",
    ],
  },
  course_curriculum: {
    content: [
      {
        label:
          "Access the current curricular matrix and the programs of the course subjects here.",
        link: "https://drive.google.com/drive/u/1/folders/1LuVBmyiDNib__B-bV4F6dTpi_JRhNQJ7",
      },
      {
        label: "Course subjects before 2023/2",
        link: "",
      },
      {
        label: "Course Subjects Flowchart",
        link: "",
      },
    ],
  },
  teachers: {
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
    text: "Access the link to the pedagogical project of the Electrical Engineering course",
    link: "https://drive.google.com/file/d/0B2du5p-U6wZIa1pzaWphcEV6MEU/view?usp=sharing",
  },
  course_evaluation: {
    text: "More information",
    link: "https://ufop.br/noticias/graduacao/divulgada-classificacao-dos-cursos-estrelados-pelo-guia-do-estudante",
  },
};

export const HomeEN = {
  about_colegiate: {
    menu: "About the Collegiate",
    text: "The Statute of the Federal University of Ouro Preto - UFOP, provides for the purpose, composition and competences of the Course Collegiates, expressed in articles 23, 24 and 25, Chapter I, Title VI.&The rules and regulations regulate the operation of the Collegiate Bodies, expressed in articles 2 to 14, Chapter I, Title II, applying to the course collegiates what is applicable, since the collegiate bodies of this university have different purposes, compositions and competences.",
    url: "https://drive.google.com/file/d/1NzTAIWj8MHv746RAoBUGAW_Nyc3jcuWB/preview",
    legend: "Video in sign language talking about the course.",
  },
  about_nde: {
    menu: "About NDE",
    text: "The Teaching Structure Nucleus - NDE was instituted at the Federal University of Ouro Preto by Resolution CEPE nº 4450 of 04/29/2011, in compliance with Resolution CONAES nº 01/2010 with the purpose of contributing to the quality of Undergraduate Courses.&The NDE does not have a deliberative character, and its decisions must be forwarded to the Collegiate.&Within the scope of the Production Engineering/ICEA course, the NDE/EP was reconstituted based on the indication of the COEP, and its starting point was Ordinance ICEA nº 05 of June 09, 2019.&According to Resolution CEPE nº 4450/2011, the NDE's attributions are:&Art. 2º According to Resolution CONAES nº 01/2010, each Teaching Structure Nucleus will have academic competence to monitor and act in the processes of conception, consolidation and continuous updating of the course's pedagogical project and, without prejudice to other complementary attributions, it shall:&",
    items:
      "Contribute to the consolidation of the professional profile of the course graduate;&Ensure interdisciplinary curricular integration between the different teaching activities included in the curriculum;&Indicate ways to encourage the development of research and extension lines, arising from the needs of undergraduate studies, demands of the job market and in line with public policies related to the course's knowledge area;&ensure compliance with the National Curriculum Guidelines for Undergraduate Courses.",
  },
  members: {
    menu: "NDE Members",
    title: "Teaching Structure Nucleus of Electrical Engineering (NDEE)",
    text: "Access the link to learn about the members of the Teaching Structure Nucleus of Electrical Engineering",
    link: "https://docs.google.com/spreadsheets/d/1rYkWVPnZk7eQMFOf9SNnnHe0yBOSE8m8/edit#gid=372138676",
  },
  coe_statistics: {
    menu: "COEE in Numbers",
    icon: "stats",
    title: "COEE in Numbers",
    stats: [
      {
        img: "barGraph.png",
        title: "Enrollment Numbers between 2009-2021",
      },
      {
        img: "2graph.png",
        title: "Number of Graduates between 2014-2021",
      },
      {
        img: "pizza_graph.png",
        title: "Average by Different Admission Modes between 2000-2021",
      },
      {
        img: "2graph.png",
        title: "Number of Graduates between 2014-2021",
      },
      {
        img: "pizza_graph.png",
        title: "Average by Different Admission Modes between 2000-2021",
      },
    ],
  },
};
