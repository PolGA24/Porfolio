/* Portfolio — traducciones (ES / CA / EN)
   El HTML lleva el texto en español por defecto; aquí están los tres idiomas.
   Atributos usados en el HTML:
     data-i18n             → texto del elemento
     data-i18n-alt         → atributo alt de imágenes
     data-i18n-placeholder → placeholder de campos
     data-i18n-aria        → aria-label
     data-i18n-content     → atributo content (meta) */
(function () {
  'use strict';

  var translations = {
    es: {
      'meta.title': 'Pol González Arribas — Desarrollador web y multiplataforma',
      'meta.description': 'Portfolio y CV de Pol González Arribas, desarrollador web y multiplataforma junior en Barcelona.',
      'a11y.skip': 'Saltar al contenido',
      'a11y.mainNav': 'Principal',
      'a11y.footerNav': 'Pie de página',
      'a11y.sectionsNav': 'Secciones',
      'a11y.language': 'Idioma',
      'a11y.close': 'Cerrar',
      'a11y.enlarge': 'Ampliar imagen',
      'theme.toDark': 'Cambiar a modo oscuro',
      'theme.toLight': 'Cambiar a modo claro',

      'nav.about': 'Sobre mí',
      'nav.aboutShort': 'Perfil',
      'nav.experience': 'Experiencia',
      'nav.experienceShort': 'Trabajo',
      'nav.skillsShort': 'Stack',
      'nav.projects': 'Proyectos',
      'nav.skills': 'Habilidades',
      'nav.contact': 'Contacto',

      'hero.edition': 'Monografía / Ed. 2026',
      'hero.place': 'Barcelona, Cataluña',
      'hero.available': 'Disponible para trabajar · Barcelona',
      'hero.role': 'Desarrollador Web y Multiplataforma Junior · Barcelona',
      'hero.quote': '“Construyo y mantengo webs de las que dependen clientes reales, y estoy creciendo hacia el desarrollo full-stack y móvil.”',
      'hero.cv': 'Descargar CV',
      'hero.portraitAlt': 'Retrato de Pol González Arribas',
      'hero.fig': 'Fig. 01 / Retrato del autor',

      'about.label': '№ 01 / Prólogo y sobre mí',
      'about.meta': 'Perfil base',
      'about.p1': 'Titulado en DAM con una base sólida en arquitecturas multiplataforma y sistemas orientados a objetos. Durante el último año en una agencia de marketing digital de Barcelona he lanzado y mantenido más de 25 instalaciones de WordPress y WooCommerce para clientes, con tráfico real, preservación del SEO y pasarelas de pago críticas para el negocio.',
      'about.p2': 'Soy un desarrollador pragmático en transición hacia soluciones full-stack y móviles. Más allá de los gestores de contenido, diseño backends robustos e interfaces reactivas con Flutter, React y Python/Flask. Uso a diario flujos de trabajo con IA, revisando, probando y entendiendo cada línea antes de desplegarla.',
      'stats.head': 'Datos y registros',
      'stat1.k': 'Producción',
      'stat1.t': 'Webs de clientes',
      'stat1.d': 'Mantenidas y lanzadas sin caídas',
      'stat2.k': 'Plataforma activa',
      'stat2.t': 'SaaS en producción',
      'stat2.d': 'LitCount: operaciones y analítica para el ocio nocturno',
      'stat3.k': 'Arquitectura',
      'stat3.t': 'Idiomas con WPML',
      'stat3.d': 'Configuraciones multilingües y taxonomías sincronizadas',

      'exp.label': '№ 02 / Experiencia',
      'exp.meta': 'Currículum y práctica profesional',
      'exp.date': 'Sept. 2025 – Oct. 2026',
      'exp.role': 'Desarrollador Web WordPress',
      'exp.companyType': 'Agencia de marketing digital',
      'exp.summary': 'Gestión continua para clientes de la agencia: e-commerce de alta disponibilidad, endpoints de seguimiento a medida y defensa del posicionamiento orgánico en mercados europeos.',
      'exp.i1.t': 'Webs nuevas y migraciones sin perder SEO',
      'exp.i1.d': 'Migraciones completas de dominio, mapas de redirecciones 301 y despliegues de staging a producción sin pérdida de tráfico orgánico.',
      'exp.i2.t': 'Catálogos y pagos con WooCommerce',
      'exp.i2.d': 'Flujos de pago seguros, variaciones de producto, sincronización de inventario e integraciones con Redsys y Stripe mediante webhooks.',
      'exp.i3.t': 'Integración de formularios con CRM y seguimiento de leads',
      'exp.i3.d': 'Endpoints webhook a medida que envían los formularios validados a Zoho CRM conservando los parámetros UTM de atribución.',
      'exp.i4.t': 'Webs multilingües con WPML',
      'exp.i4.d': 'Configuración multidivisa, URLs localizadas y traducciones sincronizadas entre taxonomías para clientes comerciales europeos.',
      'exp.i5.t': 'SEO técnico y rendimiento',
      'exp.i5.d': 'Datos estructurados JSON-LD automatizados, Core Web Vitals optimizadas, menor TTFB del servidor y PageSpeed móvil por encima de 90.',

      'proj.label': '№ 03 / Proyectos destacados',
      'proj.meta': 'Láminas y sistemas en producción',
      'proj.github': 'Ver en GitHub',
      'proj.live': 'Ver la web',
      'p1.plate': 'Lámina 01 / Registro de sistema',
      'p1.badge': 'SaaS en producción',
      'p1.alt': 'Página de inicio de LitCount: «Controla la Noche», plataforma de gestión y analítica para salas y eventos',
      'p1.sub': 'TPV y analítica SaaS para locales de ocio nocturno.',
      'p1.desc': 'Interfaz multiplataforma de pedidos en barra con conciliación de ventas en tiempo real. App de barra para tablet en Flutter, panel para propietarios en React, API REST en Python/Flask y más de 180 tests unitarios y de integración automatizados.',
      'p2.plate': 'Lámina 02 / Aplicación experimental',
      'p2.badge': 'Concepto móvil',
      'p2.alt1': 'Captura de la app: gráfico radar de visión general con los atributos Físico, Mente, Social, Vida y Estilo',
      'p2.alt2': 'Captura de la app: desglose de nivel con barras de progreso de Fuerza, Vitalidad, Nutrición, Zen, Intelecto y Carisma',
      'p2.fig1': 'Fig. 02a / Visión general',
      'p2.fig2': 'Fig. 02b / Desglose de nivel',
      'p2.title': 'RPG de hábitos por voz',
      'p2.sub': 'App móvil offline que convierte lo que cuentas de tu día en XP repartida en 14 atributos.',
      'p2.desc': 'Diario por voz que transforma lo que dices en registros diarios de XP mediante clasificación de lenguaje natural en el propio dispositivo. Guarda el estado en local, sin depender de la nube, en una base de datos Isar ultrarrápida.',

      'cases.head': 'Resolución de incidencias en producción · Casos de agencia',
      'cases.index': 'Índice 01–03',
      'caseA.tag': 'Caso A // Webhooks',
      'caseA.t': 'Recuperar leads perdidos del CRM',
      'caseA.d': 'Diagnostiqué webhooks hacia Zoho CRM que se perdían en silencio por los límites de tiempo del hosting con mucho tráfico de campañas. Implementé reintentos en cola local y conservé las cadenas de atribución UTM.',
      'caseB.tag': 'Caso B // Migración BD',
      'caseB.t': 'Restaurar 692 fichas técnicas de producto',
      'caseB.d': 'Script CLI a medida que remapeó entradas postmeta serializadas y corruptas de WooCommerce a taxonomías de producto válidas tras una actualización defectuosa de un plugin.',
      'caseC.tag': 'Caso C // Maquetación CSS',
      'caseC.t': 'Un bug responsive solo en iPhone',
      'caseC.d': 'Resolví un fallo de altura dinámica del viewport en WebKit de iOS (dvh ocultaba los botones de compra fijos en iOS 16+) con un flujo flex robusto y márgenes de safe-area.',

      'skills.label': '№ 04 / Habilidades',
      'skills.meta': 'Inventario técnico',
      'g1.t': 'Uso profesional',
      'g1.d': 'Uso diario en producción de agencia, mantenimiento de clientes y despliegues.',
      'g2.t': 'En proyectos',
      'g2.d': 'Aplicado en apps multiplataforma, arquitectura SaaS y proyectos académicos.',
      'g3.t': 'Herramientas',
      'g3.d': 'Operaciones, auditorías técnicas de rastreo, servidores y analítica.',
      'g4.t': 'Ingeniería con IA',
      'g4.d': 'Para prototipado rápido, generación de tests y depuración, siempre con revisión completa del código.',

      'edu.label': 'Formación',
      'edu.title': 'DAM — Desarrollo de Aplicaciones Multiplataforma',
      'edu.desc': 'Formación en arquitecturas nativas Android y de escritorio, normalización de bases de datos relacionales, concurrencia y patrones de diseño orientados a objetos.',
      'edu.foot': 'Título obtenido · Proyecto final SaaS',
      'edu.official': 'Oficial',
      'lang.label': 'Idiomas',
      'lang.meta': 'Comunicación',
      'lang.title': 'Competencia lingüística',
      'lang.native.name': 'Catalán y castellano',
      'lang.native.badge': 'Nativo',
      'lang.native.d': 'Bilingüe en conversaciones técnicas y en el día a día de la agencia.',
      'lang.en.name': 'Inglés',
      'lang.en.badge': 'Nivel B1',
      'lang.en.d': 'Lectura técnica diaria, documentación de software y revisiones de código.',
      'lang.foot': 'Preparado para entornos multilingües',

      'contact.label': '№ 05 / Contacto',
      'contact.meta': 'Correspondencia y consultas',
      'contact.title': 'Trabajemos juntos',
      'contact.intro': 'Si buscas un desarrollador fiable para reforzar las webs de tus clientes o un perfil junior comprometido para productos full-stack, escríbeme.',
      'ch.mail': 'Correo electrónico',
      'ch.li': 'Red profesional',
      'ch.gh': 'Archivo de código',
      'contact.note': 'Con base en Barcelona · Abierto a puestos a jornada completa híbridos o en remoto.',
      'form.head': 'Transmisión directa',
      'form.resp': 'Respuesta en 24 h',
      'form.name': 'Tu nombre',
      'form.email': 'Correo electrónico',
      'form.emailPh': 'elena@empresa.com',
      'form.msg': 'Mensaje',
      'form.msgPh': 'Hola Pol, tenemos una vacante para un desarrollador multiplataforma…',
      'form.send': 'Enviar mensaje',
      'form.note': 'Confidencial',
      'form.ok': 'Se ha abierto tu aplicación de correo con el mensaje listo para enviar. ¡Gracias por escribir!',
      'form.subject': 'Contacto desde el portfolio',

      'footer.tagline': 'Desarrollo y arquitectura de software multiplataforma · Barcelona'
    },

    ca: {
      'meta.title': 'Pol González Arribas — Desenvolupador web i multiplataforma',
      'meta.description': 'Portfoli i CV de Pol González Arribas, desenvolupador web i multiplataforma júnior a Barcelona.',
      'a11y.skip': 'Saltar al contingut',
      'a11y.mainNav': 'Principal',
      'a11y.footerNav': 'Peu de pàgina',
      'a11y.sectionsNav': 'Seccions',
      'a11y.language': 'Idioma',
      'a11y.close': 'Tancar',
      'a11y.enlarge': 'Ampliar imatge',
      'theme.toDark': 'Canviar a mode fosc',
      'theme.toLight': 'Canviar a mode clar',

      'nav.about': 'Sobre mi',
      'nav.aboutShort': 'Perfil',
      'nav.experience': 'Experiència',
      'nav.experienceShort': 'Feina',
      'nav.skillsShort': 'Stack',
      'nav.projects': 'Projectes',
      'nav.skills': 'Habilitats',
      'nav.contact': 'Contacte',

      'hero.edition': 'Monografia / Ed. 2026',
      'hero.place': 'Barcelona, Catalunya',
      'hero.available': 'Disponible per treballar · Barcelona',
      'hero.role': 'Desenvolupador Web i Multiplataforma Júnior · Barcelona',
      'hero.quote': '“Construeixo i mantinc webs de les quals depenen clients reals, i estic creixent cap al desenvolupament full-stack i mòbil.”',
      'hero.cv': 'Descarregar CV',
      'hero.portraitAlt': 'Retrat de Pol González Arribas',
      'hero.fig': 'Fig. 01 / Retrat de l’autor',

      'about.label': '№ 01 / Pròleg i sobre mi',
      'about.meta': 'Perfil base',
      'about.p1': 'Titulat en DAM amb una base sòlida en arquitectures multiplataforma i sistemes orientats a objectes. Durant l’últim any en una agència de màrqueting digital de Barcelona he llançat i mantingut més de 25 instal·lacions de WordPress i WooCommerce per a clients, amb trànsit real, preservació del SEO i passarel·les de pagament crítiques per al negoci.',
      'about.p2': 'Sóc un desenvolupador pragmàtic en transició cap a solucions full-stack i mòbils. Més enllà dels gestors de continguts, dissenyo backends robustos i interfícies reactives amb Flutter, React i Python/Flask. Faig servir cada dia fluxos de treball amb IA, revisant, provant i entenent cada línia abans de desplegar-la.',
      'stats.head': 'Dades i registres',
      'stat1.k': 'Producció',
      'stat1.t': 'Webs de clients',
      'stat1.d': 'Mantingudes i llançades sense caigudes',
      'stat2.k': 'Plataforma activa',
      'stat2.t': 'SaaS en producció',
      'stat2.d': 'LitCount: operacions i analítica per a l’oci nocturn',
      'stat3.k': 'Arquitectura',
      'stat3.t': 'Idiomes amb WPML',
      'stat3.d': 'Configuracions multilingües i taxonomies sincronitzades',

      'exp.label': '№ 02 / Experiència',
      'exp.meta': 'Currículum i pràctica professional',
      'exp.date': 'Set. 2025 – Oct. 2026',
      'exp.role': 'Desenvolupador Web WordPress',
      'exp.companyType': 'Agència de màrqueting digital',
      'exp.summary': 'Gestió contínua per a clients de l’agència: e-commerce d’alta disponibilitat, endpoints de seguiment a mida i defensa del posicionament orgànic en mercats europeus.',
      'exp.i1.t': 'Webs noves i migracions sense perdre SEO',
      'exp.i1.d': 'Migracions completes de domini, mapes de redireccions 301 i desplegaments de staging a producció sense pèrdua de trànsit orgànic.',
      'exp.i2.t': 'Catàlegs i pagaments amb WooCommerce',
      'exp.i2.d': 'Fluxos de pagament segurs, variacions de producte, sincronització d’inventari i integracions amb Redsys i Stripe mitjançant webhooks.',
      'exp.i3.t': 'Integració de formularis amb CRM i seguiment de leads',
      'exp.i3.d': 'Endpoints webhook a mida que envien els formularis validats a Zoho CRM conservant els paràmetres UTM d’atribució.',
      'exp.i4.t': 'Webs multilingües amb WPML',
      'exp.i4.d': 'Configuració multidivisa, URLs localitzades i traduccions sincronitzades entre taxonomies per a clients comercials europeus.',
      'exp.i5.t': 'SEO tècnic i rendiment',
      'exp.i5.d': 'Dades estructurades JSON-LD automatitzades, Core Web Vitals optimitzades, menor TTFB del servidor i PageSpeed mòbil per sobre de 90.',

      'proj.label': '№ 03 / Projectes destacats',
      'proj.meta': 'Làmines i sistemes en producció',
      'proj.github': 'Veure a GitHub',
      'proj.live': 'Veure la web',
      'p1.plate': 'Làmina 01 / Registre de sistema',
      'p1.badge': 'SaaS en producció',
      'p1.alt': 'Pàgina d’inici de LitCount: «Controla la Noche», plataforma de gestió i analítica per a sales i esdeveniments',
      'p1.sub': 'TPV i analítica SaaS per a locals d’oci nocturn.',
      'p1.desc': 'Interfície multiplataforma de comandes a la barra amb conciliació de vendes en temps real. App de barra per a tauleta en Flutter, panell per a propietaris en React, API REST en Python/Flask i més de 180 tests unitaris i d’integració automatitzats.',
      'p2.plate': 'Làmina 02 / Aplicació experimental',
      'p2.badge': 'Concepte mòbil',
      'p2.alt1': 'Captura de l’app: gràfic radar de visió general amb els atributs Físic, Ment, Social, Vida i Estil',
      'p2.alt2': 'Captura de l’app: desglossament de nivell amb barres de progrés de Força, Vitalitat, Nutrició, Zen, Intel·lecte i Carisma',
      'p2.fig1': 'Fig. 02a / Visió general',
      'p2.fig2': 'Fig. 02b / Desglossament de nivell',
      'p2.title': 'RPG d’hàbits per veu',
      'p2.sub': 'App mòbil offline que converteix el que expliques del teu dia en XP repartida en 14 atributs.',
      'p2.desc': 'Diari per veu que transforma el que dius en registres diaris d’XP mitjançant classificació de llenguatge natural al mateix dispositiu. Desa l’estat en local, sense dependre del núvol, en una base de dades Isar ultraràpida.',

      'cases.head': 'Resolució d’incidències en producció · Casos d’agència',
      'cases.index': 'Índex 01–03',
      'caseA.tag': 'Cas A // Webhooks',
      'caseA.t': 'Recuperar leads perduts del CRM',
      'caseA.d': 'Vaig diagnosticar webhooks cap a Zoho CRM que es perdien en silenci pels límits de temps del hosting amb molt trànsit de campanyes. Vaig implementar reintents en cua local i vaig conservar les cadenes d’atribució UTM.',
      'caseB.tag': 'Cas B // Migració BD',
      'caseB.t': 'Restaurar 692 fitxes tècniques de producte',
      'caseB.d': 'Script CLI a mida que va remapejar entrades postmeta serialitzades i corruptes de WooCommerce a taxonomies de producte vàlides després d’una actualització defectuosa d’un plugin.',
      'caseC.tag': 'Cas C // Maquetació CSS',
      'caseC.t': 'Un bug responsive només a iPhone',
      'caseC.d': 'Vaig resoldre un error d’alçada dinàmica del viewport a WebKit d’iOS (dvh amagava els botons de compra fixos a iOS 16+) amb un flux flex robust i marges de safe-area.',

      'skills.label': '№ 04 / Habilitats',
      'skills.meta': 'Inventari tècnic',
      'g1.t': 'Ús professional',
      'g1.d': 'Ús diari en producció d’agència, manteniment de clients i desplegaments.',
      'g2.t': 'En projectes',
      'g2.d': 'Aplicat en apps multiplataforma, arquitectura SaaS i projectes acadèmics.',
      'g3.t': 'Eines',
      'g3.d': 'Operacions, auditories tècniques de rastreig, servidors i analítica.',
      'g4.t': 'Enginyeria amb IA',
      'g4.d': 'Per a prototipatge ràpid, generació de tests i depuració, sempre amb revisió completa del codi.',

      'edu.label': 'Formació',
      'edu.title': 'DAM — Desenvolupament d’Aplicacions Multiplataforma',
      'edu.desc': 'Formació en arquitectures natives Android i d’escriptori, normalització de bases de dades relacionals, concurrència i patrons de disseny orientats a objectes.',
      'edu.foot': 'Títol obtingut · Projecte final SaaS',
      'edu.official': 'Oficial',
      'lang.label': 'Idiomes',
      'lang.meta': 'Comunicació',
      'lang.title': 'Competència lingüística',
      'lang.native.name': 'Català i castellà',
      'lang.native.badge': 'Natiu',
      'lang.native.d': 'Bilingüe en converses tècniques i en el dia a dia de l’agència.',
      'lang.en.name': 'Anglès',
      'lang.en.badge': 'Nivell B1',
      'lang.en.d': 'Lectura tècnica diària, documentació de programari i revisions de codi.',
      'lang.foot': 'Preparat per a entorns multilingües',

      'contact.label': '№ 05 / Contacte',
      'contact.meta': 'Correspondència i consultes',
      'contact.title': 'Treballem junts',
      'contact.intro': 'Si busques un desenvolupador fiable per reforçar les webs dels teus clients o un perfil júnior compromès per a productes full-stack, escriu-me.',
      'ch.mail': 'Correu electrònic',
      'ch.li': 'Xarxa professional',
      'ch.gh': 'Arxiu de codi',
      'contact.note': 'Amb base a Barcelona · Obert a llocs a jornada completa híbrids o en remot.',
      'form.head': 'Transmissió directa',
      'form.resp': 'Resposta en 24 h',
      'form.name': 'El teu nom',
      'form.email': 'Correu electrònic',
      'form.emailPh': 'elena@empresa.cat',
      'form.msg': 'Missatge',
      'form.msgPh': 'Hola Pol, tenim una vacant per a un desenvolupador multiplataforma…',
      'form.send': 'Enviar missatge',
      'form.note': 'Confidencial',
      'form.ok': 'S’ha obert la teva aplicació de correu amb el missatge a punt per enviar. Gràcies per escriure!',
      'form.subject': 'Contacte des del portfoli',

      'footer.tagline': 'Desenvolupament i arquitectura de programari multiplataforma · Barcelona'
    },

    en: {
      'meta.title': 'Pol González Arribas — Web & Multiplatform Developer',
      'meta.description': 'Portfolio and CV of Pol González Arribas, junior web and multiplatform developer based in Barcelona.',
      'a11y.skip': 'Skip to content',
      'a11y.mainNav': 'Main',
      'a11y.footerNav': 'Footer',
      'a11y.sectionsNav': 'Sections',
      'a11y.language': 'Language',
      'a11y.close': 'Close',
      'a11y.enlarge': 'Enlarge image',
      'theme.toDark': 'Switch to dark mode',
      'theme.toLight': 'Switch to light mode',

      'nav.about': 'About',
      'nav.aboutShort': 'About',
      'nav.experience': 'Experience',
      'nav.experienceShort': 'Work',
      'nav.skillsShort': 'Stack',
      'nav.projects': 'Projects',
      'nav.skills': 'Skills',
      'nav.contact': 'Contact',

      'hero.edition': 'Monograph / Ed. 2026',
      'hero.place': 'Barcelona, Catalonia',
      'hero.available': 'Available for work · Barcelona',
      'hero.role': 'Junior Web & Multiplatform Developer · Barcelona',
      'hero.quote': '“I build and maintain websites that real clients depend on — and I’m growing into full-stack and mobile development.”',
      'hero.cv': 'Download CV',
      'hero.portraitAlt': 'Portrait of Pol González Arribas',
      'hero.fig': 'Fig. 01 / Author portrait',

      'about.label': '№ 01 / Prologue & About',
      'about.meta': 'Foundational profile',
      'about.p1': 'DAM graduate with a solid foundation in multiplatform architectures and object-oriented systems. Over the past year at a Barcelona digital marketing agency, I have shipped and maintained 25+ client WordPress and WooCommerce installations, handling real traffic, SEO preservation, and revenue-critical payment gateways.',
      'about.p2': 'I am a pragmatic software builder transitioning into full-stack and mobile solutions. Beyond content management systems, I design robust backends and reactive client interfaces with Flutter, React, and Python/Flask. I use modern AI engineering workflows daily, reviewing, testing, and understanding every line before deployment.',
      'stats.head': 'Field data & records',
      'stat1.k': 'Production',
      'stat1.t': 'Client websites',
      'stat1.d': 'Maintained & launched with zero downtime',
      'stat2.k': 'Live platform',
      'stat2.t': 'SaaS in production',
      'stat2.d': 'LitCount nightlife operations & analytics',
      'stat3.k': 'Architecture',
      'stat3.t': 'Languages via WPML',
      'stat3.d': 'Multilingual setups & synchronized taxonomy',

      'exp.label': '№ 02 / Experience',
      'exp.meta': 'Curriculum vitae & field practice',
      'exp.date': 'Sep 2025 – Oct 2026',
      'exp.role': 'WordPress Web Developer',
      'exp.companyType': 'Digital Marketing Agency',
      'exp.summary': 'Agency retainer handling high-availability e-commerce, custom tracking endpoints, and organic rankings defense across European markets.',
      'exp.i1.t': 'New sites & migrations without losing SEO',
      'exp.i1.d': 'Complete domain relocations, 301 redirect mapping, and staging-to-live deployments preventing organic traffic leakage.',
      'exp.i2.t': 'WooCommerce catalogues & payments',
      'exp.i2.d': 'Secure checkout flows, product variations, inventory synchronization, and Redsys / Stripe integrations with webhooks.',
      'exp.i3.t': 'CRM form integrations & lead tracking',
      'exp.i3.d': 'Custom webhook endpoints sending validated form submissions into Zoho CRM while keeping UTM attribution parameters.',
      'exp.i4.t': 'Multilingual sites with WPML',
      'exp.i4.d': 'Multi-currency setups, localized URL patterns, and synchronized translations across taxonomies for European commercial accounts.',
      'exp.i5.t': 'Technical SEO & performance',
      'exp.i5.d': 'Automated JSON-LD structured data, optimized Core Web Vitals, reduced server TTFB, and mobile PageSpeed scores above 90.',

      'proj.label': '№ 03 / Featured projects',
      'proj.meta': 'Plates & production systems',
      'proj.github': 'View on GitHub',
      'proj.live': 'Visit website',
      'p1.plate': 'Plate 01 / System record',
      'p1.badge': 'Production SaaS',
      'p1.alt': 'LitCount home page: “Controla la Noche”, a management and analytics platform for venues and events',
      'p1.sub': 'POS & analytics SaaS for nightlife venues.',
      'p1.desc': 'Cross-platform bar ordering interface with real-time sales reconciliation. Built with a Flutter bar tablet app, a React owner dashboard, a Python/Flask REST API backend, and over 180 automated unit & integration tests.',
      'p2.plate': 'Plate 02 / Experimental application',
      'p2.badge': 'Mobile concept',
      'p2.alt1': 'App screenshot: overview radar chart with the Physical, Mind, Social, Life and Style attributes',
      'p2.alt2': 'App screenshot: level breakdown with progress bars for Strength, Vitality, Nutrition, Zen, Intellect and Charisma',
      'p2.fig1': 'Fig. 02a / Overview',
      'p2.fig2': 'Fig. 02b / Level breakdown',
      'p2.title': 'Voice-driven habit RPG',
      'p2.sub': 'Offline mobile app that turns what you say about your day into XP across 14 attributes.',
      'p2.desc': 'Voice journal that turns speech into daily habit XP logs using on-device natural language classification. Stores state locally, with no cloud dependency, in an ultra-fast Isar database.',

      'cases.head': 'Production troubleshooting · Agency case studies',
      'cases.index': 'Index 01–03',
      'caseA.tag': 'Case A // Webhooks',
      'caseA.t': 'Fixing lost CRM leads',
      'caseA.d': 'Diagnosed silent webhook drops to Zoho CRM caused by hosting timeout limits under heavy campaign traffic. Implemented local queued retries and preserved UTM attribution strings.',
      'caseB.tag': 'Case B // DB migration',
      'caseB.t': 'Restoring 692 product spec sheets',
      'caseB.d': 'Wrote a custom CLI script that mapped corrupted serialized WooCommerce postmeta entries back into valid product taxonomies after a faulty plugin update.',
      'caseC.tag': 'Case C // CSS layout',
      'caseC.t': 'An iPhone-only responsive bug',
      'caseC.d': 'Resolved an iOS WebKit dynamic viewport height issue (dvh hiding sticky purchase buttons on iOS 16+) using a resilient flex flow and safe-area padding.',

      'skills.label': '№ 04 / Skills',
      'skills.meta': 'Technical inventory',
      'g1.t': 'Professional use',
      'g1.d': 'Used daily in agency production, client maintenance, and deployment cycles.',
      'g2.t': 'In projects',
      'g2.d': 'Applied in multiplatform apps, SaaS architecture, and academic systems.',
      'g3.t': 'Tools',
      'g3.d': 'Operations, technical crawl audits, servers, and analytics.',
      'g4.t': 'AI engineering',
      'g4.d': 'Used for rapid prototyping, test generation, and debugging, always with full code-level review.',

      'edu.label': 'Education',
      'edu.title': 'DAM — Multiplatform App Development',
      'edu.desc': 'Coursework spanning native Android and desktop architectures, relational database normalization, concurrency, and object-oriented design patterns.',
      'edu.foot': 'Degree completed · Final SaaS project',
      'edu.official': 'Official',
      'lang.label': 'Languages',
      'lang.meta': 'Communication',
      'lang.title': 'Working proficiency',
      'lang.native.name': 'Catalan & Spanish',
      'lang.native.badge': 'Native',
      'lang.native.d': 'Bilingual fluency in technical discussions and daily agency operations.',
      'lang.en.name': 'English',
      'lang.en.badge': 'B1 level',
      'lang.en.d': 'Daily technical reading, software documentation, and code reviews.',
      'lang.foot': 'Multilingual environment ready',

      'contact.label': '№ 05 / Contact',
      'contact.meta': 'Correspondence & inquiries',
      'contact.title': 'Let’s work together',
      'contact.intro': 'Whether you are looking for a reliable developer to strengthen client web platforms or a committed junior contributor on full-stack products, my inbox is open.',
      'ch.mail': 'Electronic mail',
      'ch.li': 'Professional network',
      'ch.gh': 'Source archive',
      'contact.note': 'Based in Barcelona · Open to hybrid & remote full-time positions.',
      'form.head': 'Direct transmission',
      'form.resp': 'Response within 24h',
      'form.name': 'Your name',
      'form.email': 'Email address',
      'form.emailPh': 'elena@company.com',
      'form.msg': 'Message',
      'form.msgPh': 'Hi Pol, we have an open role for a multiplatform developer…',
      'form.send': 'Send message',
      'form.note': 'Confidential',
      'form.ok': 'Your email app has opened with the message ready to send. Thanks for reaching out!',
      'form.subject': 'Portfolio inquiry',

      'footer.tagline': 'Multiplatform software architecture & engineering · Barcelona'
    }
  };

  var SUPPORTED = ['es', 'ca', 'en'];
  var current = 'es';

  function detectLanguage() {
    var saved = null;
    try { saved = localStorage.getItem('lang'); } catch (e) {}
    if (SUPPORTED.indexOf(saved) !== -1) return saved;

    var browserLangs = navigator.languages || [navigator.language || 'es'];
    for (var i = 0; i < browserLangs.length; i++) {
      var code = String(browserLangs[i]).slice(0, 2).toLowerCase();
      if (SUPPORTED.indexOf(code) !== -1) return code;
    }
    return 'es';
  }

  function t(key) {
    return translations[current][key] || translations.es[key] || '';
  }

  function eachWith(attr, fn) {
    document.querySelectorAll('[' + attr + ']').forEach(function (el) {
      var value = t(el.getAttribute(attr));
      if (value) fn(el, value);
    });
  }

  function setLanguage(lang, persist) {
    if (SUPPORTED.indexOf(lang) === -1) lang = 'es';
    current = lang;
    document.documentElement.lang = lang;

    eachWith('data-i18n', function (el, v) { el.textContent = v; });
    eachWith('data-i18n-alt', function (el, v) { el.alt = v; });
    eachWith('data-i18n-placeholder', function (el, v) { el.placeholder = v; });
    eachWith('data-i18n-aria', function (el, v) { el.setAttribute('aria-label', v); });
    eachWith('data-i18n-content', function (el, v) { el.setAttribute('content', v); });

    document.querySelectorAll('[data-lang]').forEach(function (btn) {
      btn.setAttribute('aria-pressed', String(btn.getAttribute('data-lang') === lang));
    });

    if (persist) {
      try { localStorage.setItem('lang', lang); } catch (e) {}
    }
    document.dispatchEvent(new CustomEvent('languagechange', { detail: { lang: lang } }));
  }

  window.i18n = {
    t: t,
    setLanguage: setLanguage,
    get current() { return current; }
  };

  document.querySelectorAll('[data-lang]').forEach(function (btn) {
    btn.addEventListener('click', function () { setLanguage(btn.getAttribute('data-lang'), true); });
  });

  setLanguage(detectLanguage(), false);
})();
