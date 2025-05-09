<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción

    .bloque-texto-g.color-acento-botones.p-3.p-sm-4.p-md-5.mb-4.mb-xl-5
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/intro.jpg')})`}"
      )
      .bloque-texto-g__texto.p-4
        p El componente formativo “Funcionamiento del bloque motor: cilindros y alojamientos de pistones” explora los principios fundamentales del motor de combustión interna, centrándose en la estructura y función del bloque de cilindros, las camisas y el proceso de rectificación. Comprender estos elementos es clave para diagnosticar y corregir fallas en motores de gasolina y gas, garantizando su desempeño óptimo. Un mantenimiento adecuado no solo prolonga la vida útil del motor, sino que también asegura su eficiencia y confiabilidad, aspectos esenciales en el ámbito automotriz y en la industria del transporte. A lo largo de este material, el aprendiz conocerá las características de los cilindros y sus alojamientos, los tipos de camisas y su impacto en el rendimiento del motor, así como los procedimientos de rectificación y armado de pistones, todo desde una perspectiva práctica basada en los estándares del fabricante y en criterios de calidad y seguridad.

    .row.justify-content-center.align-items-center           
      .col-lg-12
        figure
          .video
            iframe(width="560" height="315" src="https://www.youtube.com/embed/5vcw5hDDq9c" title="Funcionamiento del bloque motor, cilindros y alojamiento de pistones" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen)
</template>

<script>
export default {
  name: 'Introduccion',
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
