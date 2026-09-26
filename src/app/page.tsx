import Link from "next/link";
import PrintButton from "../components/PrintButton";

export default function Home() {
  return (
    <div className="min-h-screen w-full bg-white text-neutral-900 print:bg-white">
      {/* Barra superior: solo pantalla */}
      <div className="print:hidden border-b border-neutral-200">
        <div className="max-w-3xl mx-auto px-6 h-14 flex items-center justify-between text-sm">
          <span className="font-mono text-neutral-400">cv.pdf</span>
          <div className="flex items-center gap-3">
            <Link
              href="/portafolio"
              className="text-neutral-700 hover:text-neutral-900 underline underline-offset-2"
            >
              Ver portafolio interactivo →
            </Link>
            <PrintButton />
          </div>
        </div>
      </div>

      <main className="max-w-3xl mx-auto px-6 py-10 print:max-w-none print:px-0 print:py-0">
        {/* ENCABEZADO */}
        <header className="pb-6 border-b border-neutral-300 print:border-neutral-900">
          <h1 className="text-3xl font-bold tracking-tight">
            Abraham Cocoletzi Zempoalteca
          </h1>
          <h2 className="mt-1 text-lg text-neutral-600 print:text-neutral-800">
            Ingeniero de Software Full Stack
          </h2>
          <p className="mt-4 text-[15px] leading-relaxed text-justify text-neutral-800">
            Full Stack Developer con experiencia en desarrollo de APIs REST, arquitectura de
            software y diseño UI/UX, participando en el desarrollo completo de aplicaciones web
            desde la capa de presentación hasta la persistencia de datos. Experiencia trabajando
            bajo metodologías ágiles Scrum y prácticas CMMI-DEV, contribuyendo en análisis,
            desarrollo, testing y mantenimiento de soluciones escalables y centradas en el
            usuario. Perfil autodidacta, orientado a resultados, optimización de procesos y
            aprendizaje continuo.
          </p>
          <div className="mt-4 flex flex-wrap gap-x-6 gap-y-1 text-sm text-neutral-600 print:text-neutral-800">
            <span>Tlaxcala, México</span>
            <a href="mailto:abraham.cocoletzi.z@gmail.com" className="hover:text-neutral-900">
              abraham.cocoletzi.z@gmail.com
            </a>
            <a href="tel:+525567633329" className="hover:text-neutral-900">
              +52 556 763 3329
            </a>
          </div>
        </header>

        {/* HABILIDADES */}
        <section className="mt-8 break-inside-avoid">
          <h2 className="text-xs font-semibold uppercase tracking-wide text-neutral-500 print:text-neutral-900">
            Habilidades
          </h2>
          <dl className="mt-3 space-y-1.5 text-[15px] text-neutral-800">
            <div><dt className="inline font-medium">Lenguajes de programación: </dt><dd className="inline">JavaScript, TypeScript, PHP, Java, Python, C#, C, C++.</dd></div>
            <div><dt className="inline font-medium">Frameworks: </dt><dd className="inline">Spring Boot, React, Next.js, Node.js-Express, Laravel.</dd></div>
            <div><dt className="inline font-medium">Bases de datos: </dt><dd className="inline">MySQL, Oracle.</dd></div>
            <div><dt className="inline font-medium">Control de versiones: </dt><dd className="inline">Git, GitHub.</dd></div>
            <div><dt className="inline font-medium">Arquitecturas: </dt><dd className="inline">Cliente-servidor, MVC.</dd></div>
            <div><dt className="inline font-medium">Software: </dt><dd className="inline">Visual Studio Code, IntelliJ IDEA, Android Studio, XAMPP, Workbench, NetBeans.</dd></div>
            <div><dt className="inline font-medium">Plataformas: </dt><dd className="inline">Windows 11, Linux Ubuntu, Android.</dd></div>
            <div><dt className="inline font-medium">Suite de Google Cloud: </dt><dd className="inline">Calendar, Chat, Docs, Mail, Meet, Drive, Groups.</dd></div>
            <div><dt className="inline font-medium">Idiomas: </dt><dd className="inline">Español (nativo), inglés básico (en formación).</dd></div>
          </dl>
        </section>

        {/* EXPERIENCIA */}
        <section className="mt-8 break-inside-avoid">
          <h2 className="text-xs font-semibold uppercase tracking-wide text-neutral-500 print:text-neutral-900">
            Experiencia
          </h2>

          {/* Bisim */}
          <div className="mt-6 break-inside-avoid">
            <div className="flex flex-wrap items-baseline justify-between gap-x-4">
              <h3 className="font-semibold">Ingeniero de Software Full Stack</h3>
              <span className="text-sm text-neutral-500">Junio 2025 — Actualidad</span>
            </div>
            <p className="text-sm text-neutral-600">Bisim</p>
            <p className="mt-2 text-[15px] leading-relaxed text-neutral-800">
              Desarrollo de un backend de consulta masiva que integra simultáneamente 5 endpoints
              de la empresa Qualitas, exponiendo esta información al frontend para su
              visualización por el usuario. Próxima incorporación a los equipos de backend de
              desarrollo de un portal web y una aplicación móvil.
            </p>
            <p className="mt-1 text-sm text-neutral-500">
              Stack tecnológico: Java 8, Spring Boot, Oracle (provisional).
            </p>
          </div>

          {/* Freelance — NextPaperSoft */}
          <div className="mt-3 break-inside-avoid">
            <div className="flex flex-wrap items-baseline justify-between gap-x-4">
              <h3 className="font-semibold">Ingeniero de Software Full Stack (Freelance)</h3>
              <span className="text-sm text-neutral-500">Agosto 2025 — Actualidad</span>
            </div>
            <p className="text-sm text-neutral-600">DevCraftersMx — NextPaperSoft (NPS)</p>
            <p className="mt-2 text-[15px] leading-relaxed text-neutral-800">
              Diseño y desarrollo de NextPaperSoft, una solución SaaS de punto de venta y gestión
              de inventarios en la nube, orientada a la automatización de procesos comerciales y
              administrativos: ventas, compras, almacenes, inventarios, proveedores, marcas,
              cortes de caja y reportes operativos.
            </p>
            <ul className="mt-2 list-disc pl-5 space-y-1 text-[15px] leading-relaxed text-neutral-800">
              <li>Desarrollo de API REST escalable y segura con Java 21, Spring Boot, Spring Data JPA y autenticación basada en JWT.</li>
              <li>Modelado y administración de base de datos relacional MySQL, optimizando integridad y rendimiento de consultas.</li>
              <li>Construcción de frontend SPA responsivo con Next.js, React y Tailwind CSS, enfocado en experiencia de usuario, accesibilidad y rendimiento.</li>
              <li>Aplicación de principios de Clean Architecture y buenas prácticas para mejorar escalabilidad y mantenibilidad.</li>
              <li>Integración continua con GitHub Actions y control de calidad estático mediante ESLint.</li>
              <li>Despliegue y administración de infraestructura cloud en AWS EC2 y Vercel.</li>
            </ul>
          </div>

          {/* SEPE - USET */}
          <div className="mt-6 break-inside-avoid">
            <div className="flex flex-wrap items-baseline justify-between gap-x-4">
              <h3 className="font-semibold">Ingeniero de Software Full Stack</h3>
              <span className="text-sm text-neutral-500">Mayo 2024 — Junio 2025</span>
            </div>
            <p className="text-sm text-neutral-600">
              Secretaría de Educación Pública del Estado — Unidad de Servicios Educativos de
              Tlaxcala (SEPE-USET)
            </p>
            <p className="mt-2 text-[15px] leading-relaxed text-neutral-800">
              Desarrollo y mantenimiento de módulos estratégicos del sistema SI-EXACTAA, incluyendo
              Apoyos, Educación Ambiental, Educación Básica, Recursos Financieros y Olimpiadas
              STEM, contribuyendo a la digitalización y optimización de procesos institucionales
              del sector educativo.
            </p>
            <ul className="mt-2 list-disc pl-5 space-y-1 text-[15px] leading-relaxed text-neutral-800">
              <li>Implementación de nuevas funcionalidades y mejoras evolutivas conforme a requerimientos funcionales y operativos.</li>
              <li>Análisis y optimización de procesos existentes para mejorar eficiencia, estabilidad y experiencia de usuario.</li>
              <li>Resolución de incidencias y mantenimiento correctivo para garantizar continuidad operativa del sistema.</li>
              <li>Participación en análisis de requerimientos, diseño técnico, desarrollo y ejecución de pruebas funcionales.</li>
            </ul>
            <p className="mt-1 text-sm text-neutral-500">
              Stack tecnológico: HTML5, CSS3, JavaScript, PHP, MySQL, FileZilla.
            </p>
          </div>

          {/* Softitlan */}
          <div className="mt-6 break-inside-avoid">
            <div className="flex flex-wrap items-baseline justify-between gap-x-4">
              <h3 className="font-semibold">Ingeniero de Software Full Stack</h3>
              <span className="text-sm text-neutral-500">Septiembre 2022 — Abril 2024</span>
            </div>
            <p className="text-sm text-neutral-600">Softitlan MX</p>
            <p className="mt-2 text-[15px] leading-relaxed text-neutral-800">
              Desarrollo de soluciones web full stack orientadas a comercio electrónico y
              plataformas empresariales, participando en análisis, diseño técnico, desarrollo,
              pruebas y despliegue bajo metodologías ágiles.
            </p>
            <p className="mt-2 text-[15px] leading-relaxed text-neutral-800">
              <strong>Softi-Shop:</strong> planeación y desarrollo de una plataforma de comercio
              electrónico — levantamiento de requerimientos, diseño UI/UX, frontend con React, API
              REST con Spring Boot, persistencia en MySQL, gestión ágil con Scrum en sprints
              quincenales.
            </p>
            <p className="mt-2 text-[15px] leading-relaxed text-neutral-800">
              <strong>Tortuga Ninja:</strong> pruebas funcionales y validación de rendimiento,
              optimización y refactorización de código, integración y entrega continua (CI/CD),
              despliegues en Sandbox y producción sobre AWS, revisiones de código por Pull
              Request.{" "}
              <a
                href="https://www.tortuganinja.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="underline underline-offset-2 hover:text-neutral-900"
              >
                Ver sitio
              </a>
              .
            </p>
            <p className="mt-1 text-sm text-neutral-500">
              Stack tecnológico: React, JavaScript, HTML5, CSS3, Spring Boot, API REST, MySQL,
              Git, GitHub, AWS.
            </p>
          </div>
        </section>

        {/* EDUCACION */}
        <section className="mt-8 break-inside-avoid">
          <h2 className="text-xs font-semibold uppercase tracking-wide text-neutral-500 print:text-neutral-900">
            Educación
          </h2>
          <ul className="mt-3 space-y-1.5 text-[15px] text-neutral-800">
            <li>Ingeniería en Computación — Universidad Autónoma de Tlaxcala (2019–2023)</li>
            <li>Taller: Servicios REST con PHP y MVC — UAT (2022)</li>
            <li>Taller: Desarrollo de aplicaciones para HarmonyOS — UAT (2021)</li>
            <li>
              Taller: Desarrollo Web Básico — Bootstrap, jQuery, Ajax, PHP, MySQL, Git — UAT (2020)
            </li>
          </ul>
        </section>

        {/* PROYECTOS PERSONALES */}
        <section className="mt-8">
          <h2 className="text-xs font-semibold uppercase tracking-wide text-neutral-500 print:text-neutral-900">
            Proyectos personales
          </h2>

          <div className="mt-3 break-inside-avoid">
            <div className="flex flex-wrap items-baseline justify-between gap-x-4">
              <h3 className="font-semibold">Sistema de Control y Monitoreo de Transporte</h3>
              <span className="text-sm text-neutral-500">Ene 2023 — Oct 2023</span>
            </div>
            <p className="mt-1 text-[15px] leading-relaxed text-neutral-800">
              Control, monitoreo y rastreo de flotillas de transporte de personal: rutas,
              incidencias, informes y registro de pasajeros y conductores, con asistencia por
              código QR. Versiones web y móvil (Android) sobre arquitectura cliente-servidor de
              tres capas. Java, JavaScript, HTML5, CSS3, Bootstrap 5, Node.js/Express, MySQL.
            </p>
            <p className="mt-1 text-sm">
              <a href="https://github.com/TlahuicoleSystem/SCMT_Service" target="_blank" rel="noopener noreferrer" className="underline underline-offset-2 hover:text-neutral-900">
                github.com/TlahuicoleSystem/SCMT_Service
              </a>
            </p>
          </div>

          <div className="mt-6 break-inside-avoid">
            <div className="flex flex-wrap items-baseline justify-between gap-x-4">
              <h3 className="font-semibold">Sistema Organizador de Entradas y Salidas</h3>
              <span className="text-sm text-neutral-500">Ene 2023 — May 2023</span>
            </div>
            <p className="mt-1 text-[15px] leading-relaxed text-neutral-800">
              Registro y consulta de horas laborales para prestadores de servicios, bajo Scrum,
              con módulo de reportes personalizados. HTML, CSS, Bootstrap, Laravel (PHP), SQL.
            </p>
            <p className="mt-1 text-sm">
              <a href="https://github.com/AbrahamCoco/AsistenciaT10" target="_blank" rel="noopener noreferrer" className="underline underline-offset-2 hover:text-neutral-900">
                github.com/AbrahamCoco/AsistenciaT10
              </a>
            </p>
          </div>
        </section>

        {/* REFERENCIAS */}
        <section className="mt-8 mb-4 break-inside-avoid">
          <h2 className="text-xs font-semibold uppercase tracking-wide text-neutral-500 print:text-neutral-900">
            Referencias
          </h2>
          <ul className="mt-3 space-y-3 text-[15px] text-neutral-800">
            <li>
              <p className="font-medium">Álvaro Jair Martínez Varela</p>
              <p className="text-neutral-600">Fundador y CEO, Softitlan · Senior Software Engineer L4</p>
              <p className="text-neutral-600">+52 551 588 9292 · jtezva@gmail.com</p>
            </li>
            <li>
              <p className="font-medium">MC Margarita Labastida Roldán</p>
              <p className="text-neutral-600">Jefa de prácticas profesionales, Universidad Autónoma de Tlaxcala</p>
              <p className="text-neutral-600">+52 241 126 5601 · magielr@gmail.com</p>
            </li>
          </ul>
        </section>

        <footer className="print:hidden pt-6 border-t border-neutral-200 text-sm">
          <Link href="/portafolio" className="text-neutral-600 hover:text-neutral-900 underline underline-offset-2">
            Ver portafolio interactivo →
          </Link>
        </footer>
      </main>
    </div>
  );
}