import {
  EducationItem,
  ExperienceItem,
  Language,
  ProjectItem,
  Reference,
  SkillGroup,
} from "./types";

/**
 * Perfil profesional (nuevo). Redactado únicamente con datos ya presentes
 * en el CV: título, fechas de experiencia, tecnologías y metodologías.
 */
export const summary: string =
  "Ingeniero en Computación por la Universidad Autónoma de Tlaxcala con experiencia profesional en desarrollo full stack desde septiembre de 2022. He participado en proyectos de una empresa de software, del sector educativo público y en un producto SaaS propio, desde el análisis de requerimientos hasta las pruebas y el despliegue. Trabajo principalmente con Java y Spring Boot, React y Next.js, PHP, y bases de datos MySQL y Oracle, bajo Scrum y con despliegues en AWS.";

/**
 * NOTA: las fuentes no coincidían en la fecha de inicio en Bisim
 * (Junio 2025 vs Junio 2026). Aquí está Junio 2026; confirma que sea correcta.
 * Ojo: el comentario anterior decía 2025 pero el código tenía 2026.
 *
 * `highlights` es un campo nuevo (string[]): viñetas escaneables que
 * reorganizan lo que ya decía cada `description`, sin añadir datos nuevos.
 */
export const experience: ExperienceItem[] = [
  {
    id: "bisim",
    company: "Bisim",
    role: "Ingeniero de Software Full Stack",
    period: "Junio 2026 — Actualidad",
    startDate: "2026-06",
    endDate: null,
    description:
      "Desarrollo de un backend de consulta masiva que integra simultáneamente 5 endpoints de Qualitas y expone la información al frontend para su visualización por parte del usuario. Próxima incorporación a los equipos de backend encargados de un portal web y una aplicación móvil.",
    highlights: [
      "Desarrollo de un backend de consulta masiva con integración simultánea de 5 endpoints de Qualitas.",
      "Exposición de la información consolidada al frontend para su visualización por el usuario.",
      "Próxima incorporación a los equipos de backend de un portal web y una aplicación móvil.",
    ],
    tech: [
      { label: "Java 8", color: "blue" },
      { label: "Spring Boot", color: "green" },
      { label: "Oracle", color: "orange" },
    ],
  },
  {
    id: "nextpapersoft",
    company: "Freelance · NextPaperSoft (NPS)",
    role: "Ingeniero de Software Full Stack",
    period: "Agosto 2025 — Actualidad",
    startDate: "2025-08",
    endDate: null,
    description:
      "Diseño y desarrollo de NextPaperSoft, un SaaS de punto de venta y gestión de inventarios en la nube: ventas, compras, almacenes, proveedores, cortes de caja y reportes operativos. API REST con Java 21, Spring Data JPA y autenticación JWT; base de datos MySQL; frontend SPA con Next.js, React y Tailwind CSS; Clean Architecture; CI con GitHub Actions y despliegue en AWS EC2.",
    highlights: [
      "Diseño y desarrollo de un SaaS de punto de venta e inventarios en la nube: ventas, compras, almacenes, proveedores, cortes de caja y reportes operativos.",
      "API REST con Java 21, Spring Data JPA y autenticación JWT, sobre base de datos MySQL.",
      "Frontend SPA con Next.js, React y Tailwind CSS.",
      "Aplicación de Clean Architecture, integración continua con GitHub Actions y despliegue en AWS EC2 y Vercel.",
    ],
    tech: [
      { label: "Java 21", color: "blue" },
      { label: "Spring Boot", color: "green" },
      { label: "Next.js", color: "purple" },
      { label: "MySQL", color: "orange" },
      { label: "AWS", color: "pink" },
    ],
  },
  {
    id: "sepe-uset",
    company: "SEPE · Unidad de Servicios Educativos de Tlaxcala (USET)",
    role: "Ingeniero de Software Full Stack",
    period: "Mayo 2024 — Junio 2025",
    startDate: "2024-05",
    endDate: "2025-06",
    description:
      "Desarrollo y mantenimiento de los módulos Apoyos, Educación Ambiental, Educación Básica, Recursos Financieros y Olimpiadas STEM del sistema SI-EXACTAA: nuevas funcionalidades, optimización de procesos existentes y resolución de incidencias, desde el análisis de requerimientos hasta las pruebas funcionales.",
    highlights: [
      "Desarrollo y mantenimiento de 5 módulos del sistema SI-EXACTAA: Apoyos, Educación Ambiental, Educación Básica, Recursos Financieros y Olimpiadas STEM.",
      "Implementación de nuevas funcionalidades y optimización de procesos existentes.",
      "Resolución de incidencias.",
      "Participación en el ciclo completo: del análisis de requerimientos a las pruebas funcionales.",
    ],
    tech: [
      { label: "HTML5", color: "blue" },
      { label: "CSS3", color: "orange" },
      { label: "JavaScript", color: "purple" },
      { label: "PHP", color: "green" },
      { label: "MySQL", color: "pink" },
    ],
  },
  {
    id: "softitlan",
    company: "Softitlan MX",
    role: "Ingeniero de Software Full Stack",
    period: "Septiembre 2022 — Abril 2024",
    startDate: "2022-09",
    endDate: "2024-04",
    description:
      "Planeación y desarrollo del sitio Softi-Shop, desde requerimientos hasta UI/UX y construcción, en sprints Scrum de 2 semanas. También desarrollo y testing de Tortuga Ninja, con integración continua, revisiones por Pull Request y despliegues en AWS (Sandbox y producción).",
    highlights: [
      "Planeación y desarrollo del sitio Softi-Shop: requerimientos, UI/UX y construcción.",
      "Trabajo en sprints Scrum de 2 semanas.",
      "Desarrollo y testing de Tortuga Ninja con integración continua y revisiones por Pull Request.",
      "Despliegues en AWS en entornos Sandbox y producción.",
    ],
    tech: [
      { label: "React", color: "purple" },
      { label: "Spring Boot", color: "green" },
      { label: "MySQL", color: "blue" },
      { label: "AWS", color: "orange" },
      { label: "Git", color: "pink" },
    ],
  },
];

export const projects: ProjectItem[] = [
  {
    id: "scmt",
    title: "Sistema de Control y Monitoreo de Transporte",
    period: "Enero 2023 — Octubre 2023",
    description:
      "Control, monitoreo y rastreo de flotillas de transporte de personal: rutas, incidencias, informes y control de asistencia por código QR. Versiones web y móvil Android sobre arquitectura cliente-servidor de 3 capas.",
    tech: [
      { label: "Java", color: "blue" },
      { label: "Node/Express", color: "green" },
      { label: "MySQL", color: "orange" },
    ],
    links: [
      { label: "Front-end web", url: "https://github.com/TlahuicoleSystem/SCMT_UI_Web" },
      { label: "Front-end móvil", url: "https://github.com/TlahuicoleSystem/SCMT_UI_Movil" },
      { label: "Back-end", url: "https://github.com/TlahuicoleSystem/SCMT_Service" },
    ],
  },
  {
    id: "asistencia",
    title: "Sistema Organizador de Entrada y Salida",
    period: "Enero 2023 — Mayo 2023",
    description:
      "Registro y consulta de horas laborales para prestadores de servicios bajo Scrum, con módulo de reportes personalizados para administradores.",
    tech: [
      { label: "Laravel", color: "purple" },
      { label: "Bootstrap", color: "blue" },
      { label: "SQL", color: "orange" },
    ],
    links: [
      { label: "Repositorio", url: "https://github.com/AbrahamCoco/AsistenciaT10" },
    ],
  },
];

export const skills: SkillGroup[] = [
  {
    key: "lenguajes",
    title: "lenguajes",
    color: "blue",
    items: ["JavaScript", "TypeScript", "PHP", "Java", "Python", "C#", "C / C++"],
  },
  {
    key: "frameworks",
    title: "frameworks",
    color: "purple",
    items: ["React", "Next.js", "Spring Boot", "Express", "Laravel"],
  },
  {
    key: "datos_y_control_de_versiones",
    title: "datos_y_control_de_versiones",
    color: "green",
    items: ["MySQL", "Oracle", "Git", "GitHub"],
  },
  {
    key: "metodologias_y_herramientas",
    title: "metodologías_y_herramientas",
    color: "orange",
    items: ["Scrum", "CMMI-DEV", "VS Code", "IntelliJ IDEA", "AWS"],
  },
];

export const education: EducationItem[] = [
  {
    id: "uatx-ing",
    title: "Ingeniería en Computación",
    institution: "Universidad Autónoma de Tlaxcala",
    period: "Agosto 2019 — Diciembre 2023",
  },
  {
    id: "taller-rest",
    title: "Taller: Servicios REST con PHP y MVC",
    institution: "Universidad Autónoma de Tlaxcala",
    period: "2022",
  },
  {
    id: "taller-harmony",
    title: "Taller: Desarrollo de aplicaciones para HarmonyOS",
    institution: "Universidad Autónoma de Tlaxcala",
    period: "2021",
  },
  {
    id: "taller-web",
    title: "Taller: Desarrollo Web Básico (Bootstrap, jQuery, Ajax, PHP, MySQL, Git)",
    institution: "Universidad Autónoma de Tlaxcala",
    period: "2020",
  },
];

export const languages: Language[] = [
  { name: "Español", level: "Nativo" },
  { name: "Inglés", level: "Básico (en formación)" },
];

export const references: Reference[] = [
  {
    name: "Álvaro Jair Martinez Varela",
    role: "Senior Software Engineer L4 · Fundador y CEO",
    company: "Softitlan",
    phone: "+52 551 588 9292",
    email: "jtezva@gmail.com",
  },
  {
    name: "Margarita Labastida Roldán, MC",
    role: "Jefa de Prácticas Profesionales",
    company: "Universidad Autónoma de Tlaxcala",
    phone: "+52 241 126 5601",
    email: "magielr@gmail.com",
  },
];