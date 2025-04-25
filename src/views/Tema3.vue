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

    .row.justify-content-center.align-items-center.z-10.mb-4.mb-lg-5
      .col-10.col-lg-8
        .titulo-sexto.color-acento-contenido.mb-4
          h5 Figura 6.
          span Corte transversal de bloque con camisa seca
        img.d-md-none(data-aos="fade-up")(src="@/assets/curso/temas/tema3/8-mobile.png", alt="Análisis de desgaste y deformaciones en cilindros: parámetros críticos para rectificación")
        img.d-none.d-md-block(data-aos="fade-up")(src="@/assets/curso/temas/tema3/8.png", alt="Análisis de desgaste y deformaciones en cilindros: parámetros críticos para rectificación")
        figcaption <strong>Fuente.</strong> SENA 2025

    Separador
    
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
