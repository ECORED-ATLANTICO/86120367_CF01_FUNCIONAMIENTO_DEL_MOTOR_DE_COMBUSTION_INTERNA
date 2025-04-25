<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 Camisas de cilindros

    img.mb-4.mb-lg-5(data-aos="fade-up")(src="@/assets/curso/temas/tema2/4.png", alt="Imagen decorativa")

    p.mb-4.mb-lg-5 La camisa seca es un revestimiento desmontable dentro del cilindro, sin contacto directo con el refrigerante. Protege contra el desgaste, facilita reparaciones y mejora la disipación del calor, asegurando mayor durabilidad y eficiencia en el motor

    .row.justify-content-center.align-items-center.z-10.mb-4.mb-lg-5
      .col-lg-10
        img(data-aos="fade-up")(src="@/assets/curso/temas/tema2/5.png", alt="Corte transversal de bloque con camisa seca")

    .row.justify-content-center.align-items-center.z-10.mb-4.mb-lg-5
      .col-10.col-lg-8
        .titulo-sexto.color-acento-contenido.mb-4
          h5 Figura 4.
          span Corte transversal de bloque con camisa seca
        img(data-aos="fade-up")(src="@/assets/curso/temas/tema2/6.png", alt="Corte transversal de bloque con camisa seca")
        figcaption Fuente SENA 2025

    p.mb-4 La camisa húmeda es un revestimiento cilíndrico en contacto directo con el refrigerante, mejorando la disipación de calor. Se instala en el bloque del motor con sellos para evitar fugas y facilitar el mantenimiento.
    .row.justify-content-center.align-items-center.z-10.mb-4.mb-lg-5
      .col-lg-10
        img.d-md-none(data-aos="fade-up")(src="@/assets/curso/temas/tema2/9-mobile.png", alt="Corte de bloque con camisa húmeda y circulación de refrigerante")
        img.d-none.d-md-block(data-aos="fade-up")(src="@/assets/curso/temas/tema2/9.png", alt="Corte de bloque con camisa húmeda y circulación de refrigerante")

    .row.justify-content-center.align-items-center.z-10.mb-4.mb-lg-5
      .col-md-8
        .titulo-sexto.color-acento-contenido.mb-4
          h5 Figura 5.
          span Corte de bloque con camisa húmeda y circulación de refrigerante
        img.d-none.d-md-block(data-aos="fade-up")(src="@/assets/curso/temas/tema2/10.png", alt="Corte de bloque con camisa húmeda y circulación de refrigerante")
        figcaption Fuente SENA 2025

    .row.justify-content-center.align-items-center.z-10.mb-4.mb-lg-5
      .col-lg-8
        .titulo-sexto.color-acento-contenido.mb-4
          h5 Tabla 2.
          span Comparación entre Camisas Secas y Húmedas
        .tabla-a.color-acento-contenido.z-10
          table
            caption <strong>Fuente.</strong> Sena, 2025
            thead
              tr(style="background-color: #F2D6D3;")
                th Característica
                th Camisas secas
                th Camisas Húmedas
            tbody
              tr(style="background-color: #FFFFFF;")
                td Contacto con refrigerante
                td No
                td Si
              tr(style="background-color: #FFFFFF;")
                td Transferencia de calor
                td Indirecta (a través del bloque)
                td Directa
              tr(style="background-color: #FFFFFF;")
                td Sellado
                td Ajuste por interferencia en el bloque
                td Sellos en los extremos
              tr(style="background-color: #FFFFFF;")
                td Complejidad de instalación
                td Moderada
                td Mayor
              tr(style="background-color: #FFFFFF;")
                td Riesgo de fugas
                td Menor
                td Mayor
              tr(style="background-color: #FFFFFF;")
                td Aplicaciones comunes
                td Bloques de aluminio, rectificaciones
                td Motores de servicio pesados
</template>

<script>
export default {
  name: 'Tema2',
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
