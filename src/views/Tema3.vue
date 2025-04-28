<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 3
      h1 Procesos de rectificación en motores

    figure
      img(src='@/assets/curso/temas/tema3/1.png', alt='Ilustración decorativa')

    Separador


    .fullwith-bg.fullwith-bg--7.d-none.d-xl-block
    #t_3_1(data-aos='zoom-in-right').titulo-segundo.color-acento-contenido.z-10
      h3 3.1.	Concepto y objetivos de la rectificación

    .row.justify-content-center.align-items-center.z-10.mb-4.mb-lg-5
      .col-lg-10
        p La rectificación consiste en un proceso de mecanizado de precisión que restaura la geometría original de los cilindros, afectados por desgaste, deformación o daños durante el funcionamiento del motor (SENA, 2012). El objetivo es devolver los cilindros a sus dimensiones y forma cilíndrica, dentro de las tolerancias de fabricación establecidas, con el fin de:
      .col-8.col-lg-2
        figure
          img(src='@/assets/curso/temas/tema3/2.png', alt='Ilustración decorativa')

    .row.justify-content-center.align-items-stretch.z-10.mb-4.mb-lg-5
      .col-sm-6.col-xl-4.mb-4
        .bicolor-card
          .bicolor-card__header
            .bicolor-card__title
              h5.mb-0 Restaurar la compresión 
          .bicolor-card__content
            .bicolor-card__img
              figure
                img(src='@/assets/curso/temas/tema3/3.svg', alt='Ilustración decorativa')
            .bicolor-card__text
              p.mb-0 Una superficie de cilindro uniforme permite que los anillos del pistón sellen correctamente, evitando pérdidas de compresión que afecten la potencia y eficiencia.
      .col-sm-6.col-xl-4.mb-4
        .bicolor-card
          .bicolor-card__header
            .bicolor-card__title
              h5.mb-0 Asegurar un sellado óptimo
          .bicolor-card__content
            .bicolor-card__img
              figure
                img(src='@/assets/curso/temas/tema3/4.svg', alt='Ilustración decorativa')
            .bicolor-card__text
              p.mb-0 Una superficie lisa facilita el correcto asentamiento de los anillos, previniendo fugas de gases y el ingreso de aceite.
      .col-sm-6.col-xl-4.mb-4
        .bicolor-card
          .bicolor-card__header
            .bicolor-card__title
              h5.mb-0 Optimizar la lubricación
          .bicolor-card__content
            .bicolor-card__img
              figure
                img(src='@/assets/curso/temas/tema3/5.svg', alt='Ilustración decorativa')
            .bicolor-card__text
              p.mb-0 el proceso de bruñido posterior genera microsurcos que retienen una fina capa de aceite, reduciendo la fricción y prolongando la vida de los componentes.
      .col-sm-6.col-xl-4.mb-4
        .bicolor-card
          .bicolor-card__header
            .bicolor-card__title
              h5.mb-0 Eliminar imperfecciones 
          .bicolor-card__content
            .bicolor-card__img
              figure
                img(src='@/assets/curso/temas/tema3/6.svg', alt='Ilustración decorativa')
            .bicolor-card__text
              p.mb-0 Se suprimen rayaduras, ovalamientos y conicidades, garantizando la uniformidad del cilindro.
      .col-sm-6.col-xl-4.mb-4
        .bicolor-card
          .bicolor-card__header
            .bicolor-card__title
              h5.mb-0 Preparar para pistones sobredimensionados
          .bicolor-card__content
            .bicolor-card__img
              figure
                img(src='@/assets/curso/temas/tema3/7.svg', alt='Ilustración decorativa')
            .bicolor-card__text
              p.mb-0 en casos de rectificación con sobremedida, se utilizan pistones adaptados para mantener el ajuste correcto.
            
    .row.justify-content-center.align-items-center.z-10.mb-4.mb-lg-5
      .col-10
        .titulo-sexto.color-acento-contenido.mb-4
          h5 Figura 6.
          span Corte transversal de bloque con camisa seca
        img.d-md-none(data-aos="fade-up")(src="@/assets/curso/temas/tema3/8-mobile.png", alt="Análisis de desgaste y deformaciones en cilindros: parámetros críticos para rectificación")
        img.d-none.d-md-block(data-aos="fade-up")(src="@/assets/curso/temas/tema3/8.png", alt="Análisis de desgaste y deformaciones en cilindros: parámetros críticos para rectificación")
        figcaption <strong>Fuente.</strong> SENA 2025

    Separador
    
    #t_3_2(data-aos='zoom-in-right').titulo-segundo.color-acento-contenido.z-10
      h3 3.2.	Herramientas y equipos utilizados en la rectificación


    p.mb-4.z-10 El éxito del proceso depende del uso de equipos de alta precisión, tales como:

    .fullwith-bg.fullwith-bg--8.d-none.d-xl-block
    .row.justify-content-center.align-items-stretch.z-10.mb-4.mb-lg-5
      .col-sm-6.col-xl-4.mb-4
        .bicolor-card
          .bicolor-card__header
            .bicolor-card__title
              h5.mb-0 Rectificadora de cilindros
          .bicolor-card__content
            .bicolor-card__img
              figure
                img(src='@/assets/curso/temas/tema3/9.svg', alt='Ilustración decorativa')
            .bicolor-card__text
              p.mb-0 Máquina principal que, mediante una herramienta de corte rotativa, remueve material de la pared interna hasta alcanzar la dimensión deseada. Existen modelos manuales y de Control Numérico Computarizado (CNC) (SENA, 2012).
      .col-sm-6.col-xl-4.mb-4
        .bicolor-card
          .bicolor-card__header
            .bicolor-card__title
              h5.mb-0 Micrómetro y comparador de interiores
          .bicolor-card__content
            .bicolor-card__img
              figure
                img(src='@/assets/curso/temas/tema3/10.svg', alt='Ilustración decorativa')
            .bicolor-card__text
              p.mb-0 Instrumentos esenciales para medir el diámetro interior del cilindro antes, durante y después del mecanizado, asegurando que se cumplan las tolerancias de fabricación.
      .col-sm-6.col-xl-4.mb-4
        .bicolor-card
          .bicolor-card__header
            .bicolor-card__title
              h5.mb-0 Bruñidora
          .bicolor-card__content
            .bicolor-card__img
              figure
                img(src='@/assets/curso/temas/tema3/11.svg', alt='Ilustración decorativa')
            .bicolor-card__text
              p.mb-0 Equipo utilizado para realizar el bruñido, generando microsurcos en la superficie que mejoran la retención del aceite lubricante.

      Separador

    #t_3_3(data-aos='zoom-in-right').titulo-segundo.color-acento-contenido.z-10
      h3 3.3.	Etapas del proceso de rectificación

    p.mb-4 El procedimiento se desarrolla en tres etapas secuenciales:

    .row.justify-content-center.align-items-center.z-10.mb-4.mb-lg-5
      .col-lg-3.d-none.d-lg-block
        figure
          img(src='@/assets/curso/temas/tema3/12.png', alt='Ilustración decorativa')
      .col-lg-9
        h3(data-aos='zoom-in-right').mb-4.z-10
          span.motor-title.motor-title--small Desmontaje y evaluación inicial:
        p Antes de cualquier intervención, se debe desmontar cuidadosamente el bloque del motor y realizar una limpieza exhaustiva de la zona de los cilindros. Esta etapa inicial es fundamental para una correcta evaluación del estado de los cilindros (Procedimiento de rectificación, sf).

    .row.justify-content-center.align-items-stretch.z-10.mb-4.mb-lg-5
      .col-sm-6.col-md-5.col-xl-4.mb-4
        .bicolor-card
          .bicolor-card__header
            .bicolor-card__title
              h5.mb-0 Desmontaje
          .bicolor-card__content
            .bicolor-card__img
              figure
                img(src='@/assets/curso/temas/tema3/13.svg', alt='Ilustración decorativa')
            .bicolor-card__text
              p.mb-0 Se retiran cuidadosamente los componentes que impiden la inspección y el mecanizado, como pistones, bielas y pernos de bancada.
      .col-sm-6.col-md-5.col-xl-4.mb-4
        .bicolor-card
          .bicolor-card__header
            .bicolor-card__title
              h5.mb-0 Limpieza
          .bicolor-card__content
            .bicolor-card__img
              figure
                img(src='@/assets/curso/temas/tema3/14.svg', alt='Ilustración decorativa')
            .bicolor-card__text
              p.mb-0 La superficie del cilindro se limpia con solventes y cepillos no abrasivos para eliminar residuos de aceite, carbón o refrigerante.
      .col-sm-6.col-md-5.col-xl-4.mb-4
        .bicolor-card
          .bicolor-card__header
            .bicolor-card__title
              h5.mb-0 Inspección visual
          .bicolor-card__content
            .bicolor-card__img
              figure
                img(src='@/assets/curso/temas/tema3/15.svg', alt='Ilustración decorativa')
            .bicolor-card__text
              p.mb-0 Se evalúa el estado del cilindro, identificando rayaduras profundas, picaduras u otras anomalías en la zona crítica de los anillos.

    .row.justify-content-center.align-items-center.z-10.mb-4.mb-lg-5
      .col-10.col-lg-8
        .titulo-sexto.color-acento-contenido.mb-4
          h5 Figura 7.
          span Bloque motor en etapa de inspección previa.
        img(data-aos="fade-up")(src="@/assets/curso/temas/tema3/16.png", alt="Bloque motor en etapa de inspección previa")
        figcaption <strong>Fuente.</strong> SENA 2025

    h3(data-aos='zoom-in-right').mb-4.z-10
      span.motor-title.motor-title--small Medición y análisis de desgaste

    .fullwith-bg.fullwith-bg--9.d-none.d-xl-block
    .row.justify-content-center.align-items-center.z-10.mb-4.mb-lg-5
      .col-xl-3.d-none.d-xl-block
        figure
          img(src='@/assets/curso/temas/tema3/17.png', alt='Ilustración decorativa')

      .col-xl-9
        p Una vez que el bloque ha sido desmontado y limpiado, es momento de realizar una medición exhaustiva de los cilindros para determinar la magnitud y la forma del desgaste (SENA, 2012). El procedimiento estándar incluye:

        .row.justify-content-center
          .col-10.col-md-6.col-lg-4.mb-4.mb-xl-0
            .crd_hover_txt(data-aos="flip-left")
              .crd_hover_txt--img
                figure
                  img(src="@/assets/curso/temas/tema3/18.jpg", alt="Medición del diámetro del cilindro")
              .crd_hover_txt--body.text-center
                h5.mb-3 Medición del diámetro del cilindro
                p.mb-0 Se utilizan micrómetro y comparador en puntos estratégicos (superior, medio e inferior) y en orientaciones perpendiculares para determinar la uniformidad.
          .col-10.col-md-6.col-lg-4.mb-4.mb-xl-0
            .crd_hover_txt(data-aos="flip-left")
              .crd_hover_txt--img
                figure
                  img(src="@/assets/curso/temas/tema3/19.jpg", alt="Análisis del desgaste")
              .crd_hover_txt--body.text-center
                h5.mb-3 Análisis del desgaste
                p.mb-0 Se compara la medición obtenida con las especificaciones del fabricante, identificando conicidad y ovalamiento. Se determina la cantidad de material a remover.
          .col-10.col-md-6.col-lg-4.mb-4.mb-xl-0
            .crd_hover_txt(data-aos="flip-left")
              .crd_hover_txt--img
                figure
                  img(src="@/assets/curso/temas/tema3/20.jpg", alt="Selección de la sobremedida")
              .crd_hover_txt--body.text-center
                h5.mb-3 Selección de la sobremedida
                p.mb-0 según el análisis, se define la sobremedida (incrementos comunes de 0,25 mm, 0,50 mm, 0,75 mm o 1,00 mm) que permita eliminar imperfecciones sin comprometer la integridad de la pared.

    .row.justify-content-center.align-items-center.z-10.mb-4.mb-lg-5
      .col-10.col-lg-8
        .titulo-sexto.color-acento-contenido.mb-4
          h5 Figura 8.
          span Puntos de medición de diámetro interior en cilindro
        img(data-aos="fade-up")(src="@/assets/curso/temas/tema3/21.png", alt="Puntos de medición de diámetro interior en cilindro")
        figcaption <strong>Fuente.</strong> SENA 2025

    h3(data-aos='zoom-in-right').mb-4.z-10
      span.motor-title.motor-title--1 Técnicas de rectificación y reacondicionamiento

    .row.justify-content-center.align-items-stretch.z-10.mb-4.mb-lg-5
      .col-sm-6.col-md-5.col-xl-4.mb-4
        .bicolor-card
          .bicolor-card__header
            .bicolor-card__title
              h5.mb-0 Rectificado <em>(Boring)</em>
          .bicolor-card__content
            .bicolor-card__img.pt-4
              figure
                img(src='@/assets/curso/temas/tema3/22.svg', alt='Ilustración decorativa')
            .bicolor-card__text
              p.mb-0 La rectificadora remueve capas de material en pasadas sucesivas para alcanzar la sobremedida seleccionada. Es fundamental garantizar la alineación correcta del bloque para mantener la perpendicularidad del cilindro.
      .col-sm-6.col-md-5.col-xl-4.mb-4
        .bicolor-card
          .bicolor-card__header
            .bicolor-card__title
              h5.mb-0 Bruñido <em>(Honing)</em>
          .bicolor-card__content
            .bicolor-card__img.pt-4
              figure
                img(src='@/assets/curso/temas/tema3/23.svg', alt='Ilustración decorativa')
            .bicolor-card__text
              p.mb-0 Posterior al rectificado, se emplea la bruñidora para generar microsurcos cruzados en la superficie. Estos surcos mejoran la retención de aceite, disminuyendo la fricción y optimizando el sellado.

    .row.justify-content-center.align-items-center.z-10.mb-4.mb-lg-5
      .col-lg-7
        p.mb-lg-0 La rectificación es un proceso mecánico que consiste en restaurar las superficies de las piezas del motor que han sufrido desgaste o deformación debido al uso. Se realiza en componentes clave como los cilindros, el cigüeñal, la culata y las válvulas. Este proceso sirve para recupera la geometría original de las piezas del motor; elimina deformaciones y desgastes, permitiendo un mejor sellado y ajuste; mejora la eficiencia y el rendimiento del motor, reduciendo el consumo de aceite y combustible; y por último prolonga la vida útil del motor al devolverle sus especificaciones originales.
      .col-lg-5.d-none.d-lg-block
        figure
          img(src='@/assets/curso/temas/tema3/24.png', alt='Ilustración decorativa')

    .row.justify-content-center.align-items-center.z-10.mb-4.mb-lg-5
      .col-10.col-lg-8
        ImagenInfografica.color-terciario.time-line-info
          template(v-slot:imagen)
            figure
              img(src='@/assets/curso/temas/tema3/25.png', alt='Motor de combustión interna')

          .tarjeta.color-acento-contenido-a10.p-4(x="25%" y="25%" numero="01")
            .time-line-info__number
              span 01
            .h5.mb-4 Inspección del motor.
            p Se desmonta y evalúa el desgaste de sus componentes.

          .tarjeta.color-acento-contenido-a10.p-4(x="40%" y="45%" numero="02")
            .time-line-info__number
              span 02
            .h5.mb-4 Rectificación de Cilindros
            p.mb-3 El proceso es el siguiente:
            ul.ps-3
              li <strong>Alesado:</strong> Se agranda el diámetro de los cilindros con una máquina rectificadora.
              li <strong>Bruñido:</strong> Se realiza un acabado con piedra abrasiva para mejorar la adherencia del aceite.
              li <strong>Medición final:</strong> Se verifica que el diámetro sea uniforme y dentro de tolerancias.s.

          .tarjeta.color-acento-contenido-a10.p-4(x="55%" y="65%" numero="03")
            .time-line-info__number
              span 03
            .h5.mb-4 Rectificación del cigüeñal
            p Mecanizado de los apoyos del cigüeñal para restaurar su alineación.

          .tarjeta.color-acento-contenido-a10.p-4(x="45%" y="25%" numero="04")
            .time-line-info__number
              span 04
            .h5.mb-4 Rectificación de la culata
            p Planifica la culata y se rectifican las válvulas para asegurar un buen sellado.

          .tarjeta.color-acento-contenido-a10.p-4(x="65%" y="45%" numero="05")
            .time-line-info__number
              span 05
            .h5.mb-4 Montaje y ajuste
            p Ensamble las piezas rectificadas con nuevos componentes, como anillos y cojinetes.

          .tarjeta.color-acento-contenido-a10.p-4(x="85%" y="65%" numero="06")
            .time-line-info__number
              span 06
            .h5.mb-4 Prueba final
            p Verificación del sellado y la eficiencia del motor antes de su instalación.


         


    .row.justify-content-center.align-items-center.z-10.mb-4.mb-lg-5
      .col-10.col-lg-8
        .titulo-sexto.color-acento-contenido.mb-4
          h5 Figura 9.
          span Proceso de acabado superficial por bruñido en cilindro
        img(data-aos="fade-up")(src="@/assets/curso/temas/tema3/26.jpg", alt="Puntos de medición de diámetro interior en cilindro")
        figcaption <strong>Fuente.</strong> SENA 2025



    

</template>

<script>
export default {
  name: 'Tema3',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
