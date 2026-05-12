// Datos editoriales para idioma: en
window.SITE_DATA = {
  /*
    IMÁGENES
    -------
    Por ahora las imágenes apuntan al WordPress publicado para que el sitio funcione completo.
    Cuando quieras independizarlo 100%, guardá cada imagen en /assets/img/ y reemplazá estas URLs.

    Ejemplo para servicios:
    image: '../assets/img/servicios/planificacion.jpg'
  */
  services: [
    {
      slug: 'planificacion',
      title: 'Planning and Development',
      shortText: 'We design comprehensive tourism development strategies aimed at strengthening destination competitiveness and improving quality of life for communities.',
      text: 'Impulsamos el desarrollo turístico a través de estrategias integrales que fortalecen la competitividad de los destinos y promueven una gestión eficiente, sostenible y articulada entre actores públicos, privados y comunitarios.',
      image: 'img/servicios/planificacion.png',
      products: [
        'Planes Maestros de Turismo Sostenible',
        'Planes de Ordenamiento Territorial Turístico',
        'Creación y fortalecimiento de Organizaciones de Gestión de Destinos (OGD)',
        'Programas de fortalecimiento institucional y gobernanza turística',
        'Asesoramiento en normativa, regulación y calidad turística',
        'Estrategias de fortalecimiento de la cadena de valor turístico de destinos',
        'Planes de negocio y diseño integral de proyectos turísticos',
        'Estudios de prefactibilidad y factibilidad de proyectos',
        'Asistencia en estructuración financiera y acceso a financiamiento'
      ]
    },
    {
      slug: 'marketing',
      title: 'Marketing and Communications',
      shortText: 'We create positioning and promotion strategies that enhance each destination’s identity and connect it with key markets.',
      text: 'Diseñamos estrategias de posicionamiento y promoción que potencian la identidad de los destinos y conectan de manera efectiva con sus mercados prioritarios.',
      image: '../assets/img/servicios/marketing.png',
      products: [
        'Planes de marketing y posicionamiento turístico',
        'Diseño e implementación de estrategias de promoción',
        'Desarrollo y gestión de marcas turísticas',
        'Diseño de sistemas de comunicación (identidad visual, señalética, contenidos)',
        'Producción de materiales audiovisuales y digitales',
        'Estudios de mercado y segmentación de demanda',
        'Estrategias de atracción de inversiones turísticas'
      ]
    },
    {
      slug: 'analisis',
      title: 'Economic Analysis and Evaluation',
      shortText: 'We generate strategic information for decision-making, assessing economic impact and the feasibility of tourism projects.',
      text: 'Generamos información estratégica para la toma de decisiones, evaluando el desempeño del sector y el impacto económico y social del turismo.',
      image: '../assets/img/servicios/analisis.png',
      products: [
        'Evaluación de proyectos de inversión',
        'Estudios de impacto económico y social del turismo',
        'Informes de coyuntura macroeconómica y sectorial',
        'Análisis de la estructura y dinámica del sector turístico',
        'Modelización económica y proyecciones sectoriales',
        'Asesoramiento técnico-económico continuo',
        'Programas de sensibilización económica del turismo en destinos'
      ]
    },
    {
      slug: 'inteligencia',
      title: 'Market Intelligence',
      shortText: 'We develop advanced tourism intelligence systems to anticipate trends, monitor performance and optimize destination management.',
      text: 'Desarrollamos sistemas de información turística que permiten anticipar tendencias, monitorear el desempeño y optimizar la gestión de destinos mediante el uso de analítica avanzada y tecnologías emergentes.',
      image: '../assets/img/servicios/inteligencia.png',
      products: [
        'Diseño e implementación de observatorios de turismo sostenible',
        'Plataformas de información turística',
        'Desarrollo de soluciones de Business Intelligence (BI) y Business Analytics (BA)',
        'Diseño de tableros de control e indicadores clave (dashboards)',
        'Análisis descriptivos, predictivos y prospectivos del comportamiento turístico',
        'Integración de inteligencia artificial para el análisis y la toma de decisiones',
        'Social listening, analítica web y monitoreo de desempeño digital',
        'Diseño metodológico de encuestas y estudios de demanda',
        'Elaboración de informes estratégicos y reportes periódicos',
        'Capacitación en gestión, análisis y uso de información'
      ]
    },
    {
      slug: 'fusiones',
      title: 'Mergers and Acquisitions',
      shortText: 'We advise on investment, acquisition, sale and business expansion processes, enabling strategic growth opportunities in the sector.',
      text: 'Asesoramos procesos de inversión y reestructuración empresarial, facilitando oportunidades estratégicas de crecimiento en el sector turístico.',
      image: '../assets/img/servicios/fusiones.png',
      products: [
        'Asesoramiento en compra y venta de empresas',
        'Búsqueda y evaluación de oportunidades de inversión',
        'Valuación de compañías y activos turísticos',
        'Estructuración de operaciones y estrategias de negociación',
        'Identificación de inversores y socios estratégicos',
        'Optimización de estructuras de capital y financiamiento',
        'Due diligence y análisis de riesgos'
      ]
    },
    {
      slug: 'sostenibilidad',
      title: 'Sustainability and Environmental Management',
      shortText: 'We design and implement environmental management, climate mitigation and adaptation strategies, and initiatives that value natural and cultural heritage.',
      text: 'Promovemos un desarrollo turístico responsable mediante la integración de criterios ambientales, sociales y culturales en la planificación, gestión y operación de destinos y proyectos.',
      image: '../assets/img/servicios/sostenibilidad.png',
      products: [
        'Planes de gestión ambiental para destinos y proyectos',
        'Implementación de certificación internacional Biosphere de destinos sostenibles',
        'Evaluaciones de impacto ambiental y social',
        'Estrategias de mitigación y adaptación al cambio climático',
        'Programas de gestión de residuos y economía circular',
        'Certificaciones y sistemas de calidad y sostenibilidad',
        'Puesta en valor del patrimonio natural y cultural',
        'Programas de sensibilización y educación ambiental'
      ]
    }
  ],
  projects: [
    {slug:'fortalecimiento-de-los-comites-de-desarrollo-turistico-del-oriente-de-el-salvador', title:'Strengthening Tourism Development Committees in Eastern El Salvador', category:'Planning and Development', country:'El Salvador'},
    {slug:'ampliacion-del-circuito-de-colonias-judias-de-la-provincia-de-entre-rios', title:'Expansion of the Jewish Colonies Circuit in Entre Ríos Province', category:'Planning and Development', country:'Argentina'},
    {slug:'analisis-de-la-competitividad-de-la-cadena-de-valor-turistica-de-la-provincia-de-neuquen', title:'Competitiveness Analysis of the Tourism Value Chain in Neuquén Province', category:'Economic Analysis and Evaluation', country:'Argentina'},
    {slug:'estudio-de-expectativas-de-consumo-y-turismo-post-pandemia-en-centroamerica', title:'Post-Pandemic Consumer and Tourism Expectations Study in Central America', category:'Market Intelligence', country:'Central America'},
    {slug:'puesta-en-valor-de-las-producciones-de-las-artesania-y-otros-elementos-atractivos-de-la-cultura-indigena', title:'Enhancement of Handicraft Production and Other Attractions of Indigenous Culture', category:'Planning and Development', country:'Paraguay'},
    {slug:'estrategia-para-el-desarrollo-de-la-oferta-turistica-boliviana', title:'Strategy for the Development of Bolivia’s Tourism Offer', category:'Planning and Development', country:'Bolivia'},
    {slug:'diseno-estrategia-promocion-circuitos-turisticos-binacionales-region-salto-rande', title:'Design and Promotion Strategy for Binational Tourism Circuits in the Salto Grande Region', category:'Planning and Development', country:'Argentina'},
    {slug:'plan-estrategico-turismo-sustentable-la-rioja', title:'Strategic Sustainable Tourism Plan for La Rioja Province', category:'Planning and Development', country:'Argentina'}
  ]};
