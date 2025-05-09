export default {
  global: {
    Name:
      'Funcionamiento del bloque motor: cilindros y alojamientos de pistones',
    Description:
      'Este componente formativo aborda fundamentos teóricos y prácticos del funcionamiento del bloque motor, cilindros y alojamientos de pistones. Explora su estructura, materiales, métodos de rectificación y ajuste de holguras, destacando el impacto en rendimiento y durabilidad. Además, analiza camisas secas y húmedas, así como técnicas de mantenimiento',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-principal.svg'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.svg'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.svg'),
      },
      {
        clases: ['banner-principal-decorativo-3'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-3.svg'),
      },
      {
        clases: ['banner-principal-decorativo-4'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-4.svg'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo: 'El bloque de cilindros',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'Definición y función del bloque de cilindros',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo: 'Materiales y construcción del bloque de cilindros',
            hash: 't_1_2',
          },
          {
            numero: '1.3',
            titulo: 'Fallas comunes en el bloque de cilindros y su diagnóstico',
            hash: 't_1_3',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Camisas de cilindros',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo: 'Tipos de camisas de cilindro',
            hash: 't_2_1',
          },
          {
            numero: '2.2',
            titulo:
              'Métodos de inspección y mantenimiento de camisas de cilindro',
            hash: 't_2_2',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Procesos de rectificación en motores',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '3.1',
            titulo: 'Concepto y objetivos de la rectificación',
            hash: 't_3_1',
          },
          {
            numero: '3.2',
            titulo: 'Herramientas y equipos utilizados en la rectificación',
            hash: 't_3_2',
          },
          {
            numero: '3.3',
            titulo: 'Etapas del proceso de rectificación',
            hash: 't_3_3',
          },
        ],
      },
      {
        nombreRuta: 'tema4',
        numero: '4',
        titulo: 'Armado de pistones dentro del cilindro',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '4.1',
            titulo: 'Componentes del pistón y su función',
            hash: 't_4_1',
          },
          {
            numero: '4.2',
            titulo: 'Proceso de ensamblaje de pistones y bielas',
            hash: 't_4_2',
          },
          {
            numero: '4.3',
            titulo: 'Métodos de instalación y ajuste de pistones',
            hash: 't_4_3',
          },
          {
            numero: '4.4',
            titulo: 'Pruebas de verificación del ensamblaje',
            hash: 't_4_4',
          },
        ],
      },
      {
        nombreRuta: 'tema5',
        numero: '5',
        titulo: 'Alojamiento del eje de levas',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '5.1',
            titulo: 'Función y tipos de ejes de levas',
            hash: 't_5_1',
          },
          {
            numero: '5.2',
            titulo: 'Procedimiento para el montaje del eje de levas',
            hash: 't_5_2',
          },
          {
            numero: '5.3',
            titulo: 'Ajuste y calibración del eje de levas',
            hash: 't_5_3',
          },
          {
            numero: '5.4',
            titulo: 'Diagnóstico y corrección de fallas en el eje de levas',
            hash: 't_5_4',
          },
        ],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/dist.pdf',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [
    {
      tema:
        'Descripción y funcionamiento del motor de combustión interna a gasolina bloques y pistones',
      referencia:
        'SENA. (2012). Proceso de rectificación y reacondicionamiento de motores. SENA.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=23ccsGRPfVQ',
    },
    {
      tema: 'El bloque de cilindros',
      referencia: 'Sonco, A. (2000). Bloque de cilindros [Video]. YouTube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=Rz0W8e4YaHk',
    },
    {
      tema: 'El pistón',
      referencia:
        'Tenango-Pirin, O. (2020). Análisis termoestructural de un pistón de motor de combustión interna con recubrimiento térmico. Instituto de Ingeniería y Tecnología.',
      tipo: 'Capítulo / Artículo',
      descarga: '/downloads/Analisis-termoestructural-de-un-piston.pdf',
    },
  ],
  glosario: [
    {
      termino: 'Anillo de compresión',
      significado:
        'anillo de metal en el pistón que sella la cámara de combustión, evitando fugas.',
    },
    {
      termino: 'Anillo de control de aceite',
      significado:
        'anillo en el pistón que regula la cantidad de aceite en la pared del cilindro.',
    },
    {
      termino: 'Biela',
      significado:
        'elemento que conecta el pistón con el cigüeñal, transformando movimiento lineal en rotación.',
    },
    {
      termino: 'Bloque de cilindros',
      significado:
        'estructura principal que alberga cilindros, pistones y otros componentes del motor.',
    },
    {
      termino: 'Bruñido',
      significado:
        'proceso que genera microsurcos en la superficie del cilindro para retener aceite lubricante.',
    },
    {
      termino: 'Camisa de cilindro',
      significado:
        'tubos insertados en el bloque para formar la superficie de deslizamiento del pistón',
    },
    {
      termino: 'Cilindro',
      significado:
        'cavidad en el bloque donde se mueve el pistón y ocurre la combustión.',
    },
    {
      termino: 'Compresión',
      significado:
        'proceso de aumento de presión en la cámara de combustión producido por el pistón.',
    },
    {
      termino: 'Culata',
      significado:
        'parte superior del bloque del motor que sella los cilindros y aloja las válvulas y, en algunos motores, las bujías; esencial para el cierre de la cámara de combustión.',
    },
    {
      termino: 'Eje de levas',
      significado:
        'componente que regula la apertura y cierre de válvulas en sincronía con el motor.',
    },
    {
      termino: 'Micrómetro',
      significado:
        'instrumento de medición de alta precisión para determinar dimensiones interiores en motores.',
    },
    {
      termino: 'Pistón',
      significado:
        'elemento móvil que transforma la combustión en movimiento mecánico dentro del cilindro.',
    },
    {
      termino: 'Rectificación',
      significado:
        'elemento móvil que transforma la combustión en movimiento mecánico dentro del cilindro.',
    },
    {
      termino: 'Sobremedida',
      significado:
        'incremento del diámetro del cilindro para eliminar desgaste excesivo y mejorar sellado.',
    },
    {
      termino: 'Válvulas',
      significado:
        'dispositivos ubicados en la culata que regulan la entrada de mezcla aire-combustible y la salida de gases de escape en cada ciclo del motor.',
    },
  ],
  referencias: [
    {
      referencia:
        '<strong>Castro, G.</strong> (2009). Ciencia de materiales para ingeniería: Fundiciones. Departamento de Ingeniería Mecánica, FIUBA.',
      link: '',
    },
    {
      referencia:
        '<strong>Nguyen, T., Smith, J., & García, R.</strong> (2019). Thermal performance analysis of wet cylinder liners in internal combustion engines. SAE Technical Paper, 2019-01-2356.',
      link: 'https://doi.org/10.4271/2019-01-2356',
    },
    {
      referencia:
        '<strong>SAE International.</strong> (2018). J1227: Standard for cylinder bore wear measurement in gasoline engines. SAE.',
      link: '',
    },
    {
      referencia:
        '<strong>ISO.</strong> (2020). ISO 12179: Geometrical product specifications (GPS)—Surface texture: Profile method—Calibration of contact (stylus) instruments.',
      link: 'https://www.iso.org/standard/72758.html ISO',
    },
    {
      referencia:
        '<strong>SENA.</strong> (2012). Procesos de rectificación en motores de combustión interna. Servicio Nacional de Aprendizaje.',
      link: '',
    },
    {
      referencia:
        '<strong>Redondo, L. (2021). Diseño y análisis de componentes críticos en motores: Pistones y bielas. Ingeniería Mecánica Aplicada, 15(3), 45-62.',
      link: 'https://doi.org/10.1016/j.ima.2021.03.004',
    },
    {
      referencia:
        '<strong>ASTM International</strong>. (2019). ASTM B94-19: Standard specification for copper-alloy die castings. ASTM.',
      link: '',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Milady Tatiana Villamil Castellanos',
          cargo:
            'Responsable del Ecosistema de Recursos Educativos Digitales (RED)',
          centro: 'Dirección General',
        },
        {
          nombre: 'Miguel de Jesús Paredes Maestre',
          cargo: 'Responsable de línea de producción',
          centro: 'Centro de Comercio y Servicios – Regional Atlántico',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Carlos Edwin Abello Rubiano',
          cargo: 'Experto temático',
          centro: '',
        },
        {
          nombre: 'Heydy Cristina Gonzalez Garcia',
          cargo: 'Evaluadora instruccional',
          centro: 'Centro de Comercio y Servicios – Regional Atlántico',
        },
        {
          nombre: 'Jair Coll',
          cargo: 'Evaluador instruccional',
          centro: 'Centro de Comercio y Servicios – Regional Atlántico',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Andrés Felipe Herrera',
          cargo: 'Diseñador web',
          centro: 'Centro de Comercio y Servicios – Regional Atlántico',
        },
        {
          nombre: 'Fabio Fonseca Arguelles',
          cargo: 'Desarrollador <i>full stack junior</i>',
          centro: 'Centro de Comercio y Servicios – Regional Atlántico',
        },
        {
          nombre: 'Nelson Ivan Vera Briceño',
          cargo: 'Animador y productor audiovisual',
          centro: 'Centro de Comercio y Servicios – Regional Atlántico',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Maria Fernanda Morales Angulo',
          cargo: 'Evaluador de contenidos inclusivos y accesibles',
          centro: 'Centro de Comercio y Servicios – Regional Atlántico',
        },
        {
          nombre: 'Luz Karime Amaya Cabra',
          cargo: 'Evaluador de contenidos inclusivos y accesibles',
          centro: 'Centro de Comercio y Servicios – Regional Atlántico',
        },
        {
          nombre: 'Jonathan Adie Villafañe',
          cargo: 'Validador y vinculador de recursos digitales',
          centro: 'Centro de Comercio y Servicios – Regional Atlántico',
        },
        {
          nombre: 'Jairo Luis Valencia Ebratt',
          cargo: 'Validador y vinculador de recursos digitales',
          centro: 'Centro de Comercio y Servicios – Regional Atlántico',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
}
