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
      title: 'Planificación y Desarrollo',
      shortText: 'Diseñamos estrategias integrales para el desarrollo turístico, orientadas a potenciar la competitividad de los destinos y mejorar la calidad de vida de las comunidades.',
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
      title: 'Marketing y Comunicación',
      shortText: 'Creamos estrategias de posicionamiento y promoción que ponen en valor la identidad de cada destino y conectan con sus mercados clave.',
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
      title: 'Análisis y Evaluación Económica',
      shortText: 'Generamos información estratégica para la toma de decisiones, evaluando el impacto económico y la viabilidad de proyectos turísticos.',
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
      title: 'Inteligencia de Mercado',
      shortText: 'Desarrollamos sistemas avanzados de inteligencia turística para anticipar tendencias, monitorear el desempeño y optimizar la gestión del destino.',
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
      title: 'Fusiones y Adquisiciones',
      shortText: 'Asesoramos procesos de inversión, compra, venta y expansión empresarial, facilitando oportunidades estratégicas de crecimiento en el sector.',
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
      title: 'Sostenibilidad y Gestión Ambiental',
      shortText: 'Diseñamos e implementamos estrategias de gestión ambiental, mitigación y adaptación al cambio climático, y valorización del patrimonio natural y cultural.',
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
    {slug:'fortalecimiento-de-los-comites-de-desarrollo-turistico-del-oriente-de-el-salvador', title:'Fortalecimiento de los Comités de Desarrollo Turístico del Oriente de El Salvador', category:'Planificación y Desarrollo', country:'El Salvador'},
    {slug:'ampliacion-del-circuito-de-colonias-judias-de-la-provincia-de-entre-rios', title:'Ampliación del Circuito de Colonias Judías de la Provincia de Entre Ríos', category:'Planificación y Desarrollo', country:'Argentina'},
    {slug:'analisis-de-la-competitividad-de-la-cadena-de-valor-turistica-de-la-provincia-de-neuquen', title:'Análisis de la competitividad de la cadena de valor turística de la Provincia de Neuquén', category:'Análisis y Evaluación Económica', country:'Argentina'},
    {slug:'estudio-de-expectativas-de-consumo-y-turismo-post-pandemia-en-centroamerica', title:'Estudio de Expectativas de Consumo y Turismo Post Pandemia en Centroamérica', category:'Inteligencia de Mercado', country:'Centroamérica'},
    {slug:'puesta-en-valor-de-las-producciones-de-las-artesania-y-otros-elementos-atractivos-de-la-cultura-indigena', title:'Puesta en Valor de las Producciones de las Artesanía y otros Elementos Atractivos de la Cultura Indígena', category:'Planificación y Desarrollo', country:'Paraguay'},
    {slug:'estrategia-para-el-desarrollo-de-la-oferta-turistica-boliviana', title:'Estrategia para el Desarrollo de la Oferta Turística Boliviana', category:'Planificación y Desarrollo', country:'Bolivia'},
    {slug:'observatorios-economicos-y-sistemas-de-inteligencia-turistica', title:'Observatorios económicos y sistemas de inteligencia turística', category:'Inteligencia de Mercado', country:'Latinoamérica'},
    {slug:'evaluacion-economica-de-proyectos-turisticos-estrategicos', title:'Evaluación económica de proyectos turísticos estratégicos', category:'Análisis y Evaluación Económica', country:'Argentina'}
  ]};
