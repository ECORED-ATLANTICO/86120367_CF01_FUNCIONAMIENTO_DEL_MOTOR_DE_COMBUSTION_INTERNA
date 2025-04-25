<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 4
      h1 Tema 4

    .row.justify-content-center.align-items-center.z-10.mb-4.mb-lg-5
      .col-10.col-lg-8
        .titulo-sexto.color-acento-contenido.mb-4
          h5 Figura 10.
          span Esquema del pistón y sus componentes principales.
        img(data-aos="fade-up")(src="@/assets/curso/temas/tema4/22.png", alt="Esquema del pistón y sus componentes principales.")
        figcaption <strong>Fuente.</strong> SENA 2025

    .row.justify-content-center.align-items-center.z-10.mb-4.mb-lg-5
      .col-10.col-lg-8
        .titulo-sexto.color-acento-contenido.mb-4
          h5 Figura 12.
          span  Diagrama del uso del compresor de anillos e inserción del pistón
        img(data-aos="fade-up")(src="@/assets/curso/temas/tema4/31.png", alt=" Diagrama del uso del compresor de anillos e inserción del pistón")
        figcaption <strong>Fuente.</strong> SENA 2025

    Separador

</template>

<script>
export default {
  name: 'Tema4',
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
