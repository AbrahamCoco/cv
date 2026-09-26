export default function PortafolioPage() {
    return (
        <>
            {/* NAV */}
            <header className="fixed top-0 inset-x-0 z-40 border-b border-border bg-bg/90 backdrop-blur">
                <div className="max-w-4xl mx-auto px-5 h-14 flex items-center justify-between font-mono text-sm">
                    <a href="#inicio" className="text-ink flex items-center gap-2">
                        <span className="text-green">~</span>
                        <span className="text-mute">/</span>
                        <span>acocoletzi</span>
                    </a>
                    <nav className="hidden sm:flex items-center gap-6 text-mute">
                        <a href="#experiencia" className="hover:text-blue transition-colors">
                            experiencia.log
                        </a>
                        <a href="#proyectos" className="hover:text-purple transition-colors">
                            proyectos/
                        </a>
                        <a href="#habilidades" className="hover:text-orange transition-colors">
                            stack.json
                        </a>
                        <a href="#contacto" className="hover:text-green transition-colors">
                            contacto.sh
                        </a>
                    </nav>
                    <a
                        href="mailto:abraham.cocoletzi.z@gmail.com"
                        className="sm:hidden text-mute hover:text-green"
                    >
                        contacto.sh
                    </a>
                </div>
            </header>

            <main>
                {/* HERO */}
                <section id="inicio" className="pt-28 sm:pt-36 pb-16 px-5">
                    <div className="max-w-4xl mx-auto">
                        <div className="rounded-lg border border-border bg-panel shadow-2xl shadow-black/40 overflow-hidden">
                            <div className="flex items-center gap-1.5 px-4 h-9 border-b border-border bg-[#161b22]">
                                <span className="w-2.5 h-2.5 rounded-full bg-[#ff5f56]"></span>
                                <span className="w-2.5 h-2.5 rounded-full bg-[#ffbd2e]"></span>
                                <span className="w-2.5 h-2.5 rounded-full bg-[#27c93f]"></span>
                                <span className="ml-3 font-mono text-xs text-mute">zsh — whoami</span>
                            </div>
                            <div className="p-5 sm:p-8 font-mono text-sm leading-relaxed">
                                <p className="text-mute">
                                    abraham@tlaxcala <span className="text-blue">~</span> %{" "}
                                    <span className="text-ink">whoami</span>
                                </p>
                                <h1 className="mt-3 text-2xl sm:text-4xl font-bold text-ink tracking-tight">
                                    Abraham Cocoletzi Zempoalteca
                                </h1>
                                <p className="mt-1 text-base sm:text-lg text-green">
                                    Ingeniero de Software Full Stack
                                </p>
                                <p className="mt-4 text-mute">
                                    abraham@tlaxcala <span className="text-blue">~</span> %{" "}
                                    <span className="text-ink">cat bio.txt</span>
                                </p>
                                <p className="mt-2 text-ink/90 font-sans max-w-2xl text-[15px]">
                                    Full Stack Developer con experiencia en APIs REST, arquitectura
                                    de software y diseño UI/UX, participando en el desarrollo
                                    completo de aplicaciones web, de la capa de presentación a la
                                    persistencia de datos. Trabajo bajo Scrum y prácticas
                                    CMMI-DEV, con enfoque en soluciones escalables y centradas en
                                    el usuario.
                                </p>
                                <p className="mt-4 text-mute">
                                    abraham@tlaxcala <span className="text-blue">~</span> %{" "}
                                    <span className="caret"></span>
                                </p>
                            </div>
                        </div>

                        <div className="mt-5 flex flex-wrap gap-3 font-mono text-xs text-mute">
                            <span className="px-3 py-1.5 rounded border border-border bg-panel">
                                📍 Tlaxcala, México
                            </span>
                            <a
                                href="mailto:abraham.cocoletzi.z@gmail.com"
                                className="px-3 py-1.5 rounded border border-border bg-panel hover:border-blue hover:text-blue transition-colors"
                            >
                                ✉ abraham.cocoletzi.z@gmail.com
                            </a>
                            <a
                                href="tel:+525567633329"
                                className="px-3 py-1.5 rounded border border-border bg-panel hover:border-green hover:text-green transition-colors"
                            >
                                ☎ +52 556 763 3329
                            </a>
                            <a
                                href="https://github.com/abrahamcoco"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="px-3 py-1.5 rounded border border-border bg-panel hover:border-purple hover:text-purple transition-colors"
                            >
                                github.com/abrahamcoco
                            </a>
                        </div>
                    </div>
                </section>

                {/* EXPERIENCIA */}
                <section id="experiencia" className="py-14 px-5 border-t border-border">
                    <div className="max-w-4xl mx-auto">
                        <h2 className="font-mono text-sm text-mute mb-1">// experiencia.log</h2>
                        <p className="text-2xl font-bold text-ink mb-10">Historial profesional</p>

                        <div className="ml-1 pl-6 space-y-10">
                            {/* Bisim */}
                            <div className="commit-rail commit-line">
                                <p className="font-mono text-xs text-blue">Junio 2026 — Actualidad</p>
                                <h3 className="text-lg font-semibold text-ink mt-1">
                                    Desarrollador Full Stack
                                </h3>
                                <p className="text-sm text-mute">Bisim</p>
                                <p className="mt-3 text-[15px] text-ink/90 max-w-2xl">
                                    Desarrollo de un backend de consulta masiva que integra
                                    simultáneamente 5 endpoints de Qualitas y expone la información
                                    al frontend para su visualización por el usuario. Próxima
                                    incorporación a los equipos de backend de un portal web y una
                                    app móvil.
                                </p>
                                <div className="mt-3 flex flex-wrap gap-2">
                                    <span className="font-mono text-xs px-2 py-1 rounded bg-blue/10 text-blue">
                                        Java 8
                                    </span>
                                    <span className="font-mono text-xs px-2 py-1 rounded bg-green/10 text-green">
                                        Spring Boot
                                    </span>
                                    <span className="font-mono text-xs px-2 py-1 rounded bg-orange/10 text-orange">
                                        Oracle
                                    </span>
                                </div>
                            </div>

                            {/* Freelance — NextPaperSoft */}
                            <div className="commit-rail commit-line">
                                <p className="font-mono text-xs text-blue">Agosto 2025 — Actualidad</p>
                                <h3 className="text-lg font-semibold text-ink mt-1">
                                    Ingeniero de Software Full Stack (Freelance)
                                </h3>
                                <p className="text-sm text-mute">
                                    DevCraftersMx · NextPaperSoft (NPS)
                                </p>
                                <p className="mt-3 text-[15px] text-ink/90 max-w-2xl">
                                    Diseño y desarrollo de NextPaperSoft, un SaaS de punto de venta
                                    y gestión de inventarios en la nube: ventas, compras, almacenes,
                                    proveedores, cortes de caja y reportes. API REST con Java 21 y
                                    Spring Data JPA con autenticación JWT, frontend SPA con Next.js,
                                    React y Tailwind CSS, CI con GitHub Actions y despliegue en AWS
                                    EC2 y Vercel.
                                </p>
                                <div className="mt-3 flex flex-wrap gap-2">
                                    <span className="font-mono text-xs px-2 py-1 rounded bg-blue/10 text-blue">
                                        Java 21
                                    </span>
                                    <span className="font-mono text-xs px-2 py-1 rounded bg-green/10 text-green">
                                        Spring Boot
                                    </span>
                                    <span className="font-mono text-xs px-2 py-1 rounded bg-purple/10 text-purple">
                                        Next.js
                                    </span>
                                    <span className="font-mono text-xs px-2 py-1 rounded bg-orange/10 text-orange">
                                        MySQL
                                    </span>
                                    <span className="font-mono text-xs px-2 py-1 rounded bg-pink/10 text-pink">
                                        AWS
                                    </span>
                                </div>
                            </div>

                            {/* SEPE - USET */}
                            <div className="commit-rail commit-line">
                                <p className="font-mono text-xs text-blue">Mayo 2024 — Junio 2025</p>
                                <h3 className="text-lg font-semibold text-ink mt-1">
                                    Ingeniero de Software Full Stack
                                </h3>
                                <p className="text-sm text-mute">
                                    SEPE · Unidad de Servicios Educativos de Tlaxcala (USET)
                                </p>
                                <p className="mt-3 text-[15px] text-ink/90 max-w-2xl">
                                    Desarrollo y mantenimiento de los módulos Apoyos, Educación
                                    ambiental, Educación básica, Recursos financieros y Olimpiadas
                                    STEM del sistema SI-EXACTAA: nuevas funcionalidades,
                                    optimización de procesos y resolución de incidencias, desde el
                                    análisis de requerimientos hasta las pruebas funcionales.
                                </p>
                                <div className="mt-3 flex flex-wrap gap-2">
                                    <span className="font-mono text-xs px-2 py-1 rounded bg-blue/10 text-blue">
                                        HTML5
                                    </span>
                                    <span className="font-mono text-xs px-2 py-1 rounded bg-orange/10 text-orange">
                                        CSS
                                    </span>
                                    <span className="font-mono text-xs px-2 py-1 rounded bg-purple/10 text-purple">
                                        JavaScript
                                    </span>
                                    <span className="font-mono text-xs px-2 py-1 rounded bg-green/10 text-green">
                                        PHP
                                    </span>
                                </div>
                            </div>

                            {/* Softitlan */}
                            <div className="commit-rail commit-line">
                                <p className="font-mono text-xs text-blue">Septiembre 2022 — Abril 2024</p>
                                <h3 className="text-lg font-semibold text-ink mt-1">
                                    Ingeniero de Software Full Stack
                                </h3>
                                <p className="text-sm text-mute">Softitlan MX</p>
                                <p className="mt-3 text-[15px] text-ink/90 max-w-2xl">
                                    Planeación y desarrollo del sitio{" "}
                                    <strong className="text-ink">Softi-Shop</strong>, desde
                                    requerimientos hasta UI/UX y construcción, en sprints Scrum de 2
                                    semanas. También desarrollo y testing de{" "}
                                    <strong className="text-ink">Tortuga Ninja</strong>, con
                                    integración continua, revisiones por Pull Request y despliegues
                                    en AWS (Sandbox y producción).
                                </p>
                                <div className="mt-3 flex flex-wrap gap-2">
                                    <span className="font-mono text-xs px-2 py-1 rounded bg-purple/10 text-purple">
                                        React
                                    </span>
                                    <span className="font-mono text-xs px-2 py-1 rounded bg-green/10 text-green">
                                        Spring Boot
                                    </span>
                                    <span className="font-mono text-xs px-2 py-1 rounded bg-blue/10 text-blue">
                                        MySQL
                                    </span>
                                    <span className="font-mono text-xs px-2 py-1 rounded bg-orange/10 text-orange">
                                        AWS
                                    </span>
                                    <span className="font-mono text-xs px-2 py-1 rounded bg-pink/10 text-pink">
                                        Git
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* PROYECTOS */}
                <section id="proyectos" className="py-14 px-5 border-t border-border">
                    <div className="max-w-4xl mx-auto">
                        <h2 className="font-mono text-sm text-mute mb-1">// proyectos/</h2>
                        <p className="text-2xl font-bold text-ink mb-10">Proyectos personales</p>

                        <div className="grid sm:grid-cols-2 gap-4">
                            <div className="rounded-lg border border-border bg-panel p-5 flex flex-col">
                                <p className="font-mono text-xs text-mute">2023</p>
                                <h3 className="font-semibold text-ink mt-1">
                                    Sistema de Control y Monitoreo de Transporte
                                </h3>
                                <p className="text-sm text-ink/80 mt-2 flex-1">
                                    Control, monitoreo y rastreo de flotillas: rutas, incidencias,
                                    informes y asistencia por QR. Web y móvil Android sobre
                                    arquitectura cliente-servidor de 3 capas.
                                </p>
                                <div className="mt-3 flex flex-wrap gap-1.5">
                                    <span className="font-mono text-[11px] px-2 py-0.5 rounded bg-blue/10 text-blue">
                                        Java
                                    </span>
                                    <span className="font-mono text-[11px] px-2 py-0.5 rounded bg-green/10 text-green">
                                        Node/Express
                                    </span>
                                    <span className="font-mono text-[11px] px-2 py-0.5 rounded bg-orange/10 text-orange">
                                        MySQL
                                    </span>
                                </div>
                                <a
                                    href="https://github.com/TlahuicoleSystem/SCMT_Service"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="mt-4 font-mono text-xs text-mute hover:text-blue transition-colors"
                                >
                                    ver repositorio ↗
                                </a>
                            </div>

                            <div className="rounded-lg border border-border bg-panel p-5 flex flex-col">
                                <p className="font-mono text-xs text-mute">2023</p>
                                <h3 className="font-semibold text-ink mt-1">
                                    Sistema Organizador de Entrada y Salida
                                </h3>
                                <p className="text-sm text-ink/80 mt-2 flex-1">
                                    Registro y consulta de horas laborales para prestadores de
                                    servicios bajo Scrum, con reportes personalizados para
                                    administradores.
                                </p>
                                <div className="mt-3 flex flex-wrap gap-1.5">
                                    <span className="font-mono text-[11px] px-2 py-0.5 rounded bg-purple/10 text-purple">
                                        Laravel
                                    </span>
                                    <span className="font-mono text-[11px] px-2 py-0.5 rounded bg-blue/10 text-blue">
                                        Bootstrap
                                    </span>
                                    <span className="font-mono text-[11px] px-2 py-0.5 rounded bg-orange/10 text-orange">
                                        SQL
                                    </span>
                                </div>
                                <a
                                    href="https://github.com/AbrahamCoco/AsistenciaT10"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="mt-4 font-mono text-xs text-mute hover:text-blue transition-colors"
                                >
                                    ver repositorio ↗
                                </a>
                            </div>
                        </div>
                    </div>
                </section>

                {/* HABILIDADES */}
                <section id="habilidades" className="py-14 px-5 border-t border-border">
                    <div className="max-w-4xl mx-auto">
                        <h2 className="font-mono text-sm text-mute mb-1">// stack.json</h2>
                        <p className="text-2xl font-bold text-ink mb-10">Habilidades técnicas</p>

                        <div className="grid sm:grid-cols-2 gap-8">
                            <div>
                                <p className="font-mono text-xs text-blue mb-3">&quot;lenguajes&quot;</p>
                                <div className="flex flex-wrap gap-2">
                                    <span className="font-mono text-xs px-2.5 py-1 rounded border border-border text-ink/90">
                                        JavaScript
                                    </span>
                                    <span className="font-mono text-xs px-2.5 py-1 rounded border border-border text-ink/90">
                                        TypeScript
                                    </span>
                                    <span className="font-mono text-xs px-2.5 py-1 rounded border border-border text-ink/90">
                                        PHP
                                    </span>
                                    <span className="font-mono text-xs px-2.5 py-1 rounded border border-border text-ink/90">
                                        Java
                                    </span>
                                    <span className="font-mono text-xs px-2.5 py-1 rounded border border-border text-ink/90">
                                        Python
                                    </span>
                                    <span className="font-mono text-xs px-2.5 py-1 rounded border border-border text-ink/90">
                                        C#
                                    </span>
                                    <span className="font-mono text-xs px-2.5 py-1 rounded border border-border text-ink/90">
                                        C / C++
                                    </span>
                                </div>
                            </div>
                            <div>
                                <p className="font-mono text-xs text-purple mb-3">&quot;frameworks&quot;</p>
                                <div className="flex flex-wrap gap-2">
                                    <span className="font-mono text-xs px-2.5 py-1 rounded border border-border text-ink/90">
                                        React
                                    </span>
                                    <span className="font-mono text-xs px-2.5 py-1 rounded border border-border text-ink/90">
                                        Next.js
                                    </span>
                                    <span className="font-mono text-xs px-2.5 py-1 rounded border border-border text-ink/90">
                                        Spring Boot
                                    </span>
                                    <span className="font-mono text-xs px-2.5 py-1 rounded border border-border text-ink/90">
                                        Express
                                    </span>
                                    <span className="font-mono text-xs px-2.5 py-1 rounded border border-border text-ink/90">
                                        Laravel
                                    </span>
                                </div>
                            </div>
                            <div>
                                <p className="font-mono text-xs text-green mb-3">
                                    &quot;datos_y_control_de_versiones&quot;
                                </p>
                                <div className="flex flex-wrap gap-2">
                                    <span className="font-mono text-xs px-2.5 py-1 rounded border border-border text-ink/90">
                                        MySQL
                                    </span>
                                    <span className="font-mono text-xs px-2.5 py-1 rounded border border-border text-ink/90">
                                        Oracle
                                    </span>
                                    <span className="font-mono text-xs px-2.5 py-1 rounded border border-border text-ink/90">
                                        Git
                                    </span>
                                    <span className="font-mono text-xs px-2.5 py-1 rounded border border-border text-ink/90">
                                        GitHub
                                    </span>
                                </div>
                            </div>
                            <div>
                                <p className="font-mono text-xs text-orange mb-3">
                                    &quot;metodologías_y_herramientas&quot;
                                </p>
                                <div className="flex flex-wrap gap-2">
                                    <span className="font-mono text-xs px-2.5 py-1 rounded border border-border text-ink/90">
                                        Scrum
                                    </span>
                                    <span className="font-mono text-xs px-2.5 py-1 rounded border border-border text-ink/90">
                                        CMMI-DEV
                                    </span>
                                    <span className="font-mono text-xs px-2.5 py-1 rounded border border-border text-ink/90">
                                        VS Code
                                    </span>
                                    <span className="font-mono text-xs px-2.5 py-1 rounded border border-border text-ink/90">
                                        IntelliJ IDEA
                                    </span>
                                    <span className="font-mono text-xs px-2.5 py-1 rounded border border-border text-ink/90">
                                        AWS
                                    </span>
                                </div>
                            </div>
                        </div>

                        <div className="mt-10 pt-8 border-t border-border grid sm:grid-cols-2 gap-6 text-sm">
                            <div>
                                <p className="font-mono text-xs text-mute mb-2">// educación</p>
                                <p className="text-ink/90">Ingeniería en Computación</p>
                                <p className="text-mute">
                                    Universidad Autónoma de Tlaxcala · 2019–2023
                                </p>
                            </div>
                            <div>
                                <p className="font-mono text-xs text-mute mb-2">// idiomas</p>
                                <p className="text-ink/90">Español — nativo</p>
                                <p className="text-ink/90">Inglés — básico, en formación</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* CONTACTO */}
                <section id="contacto" className="py-16 px-5 border-t border-border">
                    <div className="max-w-4xl mx-auto text-center">
                        <p className="font-mono text-sm text-mute mb-2">// contacto.sh</p>
                        <h2 className="text-2xl sm:text-3xl font-bold text-ink">
                            ¿Construimos algo juntos?
                        </h2>
                        <p className="mt-3 text-ink/80 max-w-lg mx-auto">
                            Abierto a nuevas oportunidades como desarrollador full stack.
                        </p>
                        <div className="mt-8 flex flex-wrap justify-center gap-3 font-mono text-sm">
                            <a
                                href="mailto:abraham.cocoletzi.z@gmail.com"
                                className="px-4 py-2.5 rounded bg-green/10 text-green border border-green/30 hover:bg-green/20 transition-colors"
                            >
                                Enviar correo
                            </a>
                            <a
                                href="https://github.com/abrahamcoco"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="px-4 py-2.5 rounded border border-border text-ink/90 hover:border-purple hover:text-purple transition-colors"
                            >
                                GitHub
                            </a>
                            <a
                                href="tel:+525567633329"
                                className="px-4 py-2.5 rounded border border-border text-ink/90 hover:border-blue hover:text-blue transition-colors"
                            >
                                +52 556 763 3329
                            </a>
                        </div>
                        <p className="mt-12 font-mono text-xs text-mute">
                            © 2026 Abraham Cocoletzi Zempoalteca
                        </p>
                    </div>
                </section>
            </main>
        </>
    );
}