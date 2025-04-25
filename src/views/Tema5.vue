<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 5
      h1 Alojamiento del eje de levas

    .bloque-texto-g.color-acento-botones.p-3.p-sm-4.p-md-5.mb-4.mb-xl-5
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/tema5/1.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.d-block El eje de levas regula la apertura y cierre de las válvulas, coordinando su acción con el movimiento de los pistones. Su correcto montaje y ajuste son esenciales para el desempeño del motor.
        p.mb-0.d-block Es un eje mecanizado que controla la apertura y cierre de las válvulas de admisión y escape en un motor de combustión interna. Su diseño incluye una serie de levas (protuberancias o lóbulos) distribuidas a lo largo del eje, que empujan los taqués, balancines o directamente las válvulas para permitir el ingreso de la mezcla de aire y combustible y la expulsión de los gases quemados.


    .row.justify-content-center.align-items-center.z-10.mb-4.mb-lg-5
      .col-10.col-lg-8
        .titulo-sexto.color-acento-contenido.mb-4
          h5 Figura 13.
          span Esquema comparativo de configuraciones OHV y OHC
        img(data-aos="fade-up")(src="@/assets/curso/temas/tema5/7.png", alt="Esquema comparativo de configuraciones OHV y OHC")
        figcaption <strong>Fuente.</strong> SENA 2025

    Separador

    .row.justify-content-center.align-items-center.z-10.mb-4.mb-lg-5
      .col-10.col-lg-8
        .titulo-sexto.color-acento-contenido.mb-4
          h5 Figura 14.
          span Alineación de marcas de distribución e instalación del eje de levas
        img(data-aos="fade-up")(src="@/assets/curso/temas/tema5/13.jpg", alt="Alineación de marcas de distribución e instalación del eje de levas")
        figcaption <strong>Fuente.</strong> SENA 2025

    Separador
</template>

<script>
export default {
  name: 'Tema5',
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
