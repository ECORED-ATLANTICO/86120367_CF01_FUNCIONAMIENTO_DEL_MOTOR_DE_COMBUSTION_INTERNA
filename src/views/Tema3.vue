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
      .col-sm-6.col-lg-4.mb-4
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
      .col-sm-6.col-lg-4.mb-4
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
      .col-sm-6.col-lg-4.mb-4
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
      .col-sm-6.col-lg-4.mb-4
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
      .col-sm-6.col-lg-4.mb-4
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
      .col-sm-6.col-lg-4.mb-4
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
      .col-sm-6.col-lg-4.mb-4
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
      .col-sm-6.col-lg-4.mb-4
        .bicolor-card
          .bicolor-card__header
            .bicolor-card__title
              h5.mb-0 o	Bruñidora
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
      .col-sm-6.col-lg-4.mb-4
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
      .col-sm-6.col-lg-4.mb-4
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
      .col-sm-6.col-lg-4.mb-4
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

    .row.justify-content-center.align-items-center.z-10.mb-4.mb-lg-5
      .col-10.col-lg-8
        .titulo-sexto.color-acento-contenido.mb-4
          h5 Figura 8.
          span Puntos de medición de diámetro interior en cilindro
        img(data-aos="fade-up")(src="@/assets/curso/temas/tema3/21.png", alt="Puntos de medición de diámetro interior en cilindro")
        figcaption <strong>Fuente.</strong> SENA 2025

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
