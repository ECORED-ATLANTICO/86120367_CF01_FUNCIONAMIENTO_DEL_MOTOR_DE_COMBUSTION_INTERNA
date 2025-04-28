<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 4
      h1 Tema 4
      
    .fullwith-bg.fullwith-bg--6.d-none.d-xl-block
    .tarjeta.tarjeta--blanca.p-4.pt-5.z-10.mt-5
      SlyderA(tipo="b")
        .row.z-10.justify-content-center.align-items-center
          .col-md-6
            h4.mb-4 Inspección visual
            p Es el primer paso para evaluar el estado de las camisas de cilindro. 
            p Durante este proceso, se examina minuciosamente la superficie interior en busca de desgaste excesivo, rayaduras profundas (superiores a 0.1 mm), grietas o corrosión, utilizando herramientas como lupas de aumento 10X (según ISO 14993:2018) y endoscopios de 5 mm para áreas de difícil acceso. 
            p En camisas húmedas, se inspeccionan adicionalmente los sellos de goma para detectar agrietamientos o deformaciones, empleando luz UV para identificar microfisuras no visibles a simple vista. 
          .col-md-4
            figure
              img(src='@/assets/curso/temas/tema2/11.png', alt='Texto que describa la imagen')
        .row.z-10.justify-content-center.align-items-center
          .col-md-6
            h4.mb-4 Medición dimensional: 
            p Es clave para cuantificar el desgaste. 
            p Con instrumentos como micrómetros triflautados y comparadores de interiores, se miden parámetros como el ovalamiento (tolerancia máxima de 0.03 mm en motores gasolina, según SAE J1227) y la conicidad (límite de 0.05 mm por ISO 12179:2020). 
            p Las mediciones se realizan en tres alturas (superior, media e inferior) y dos ejes (X/Y), comparando los resultados con las especificaciones del fabricante.
          .col-md-4
            figure
              img(src='@/assets/curso/temas/tema2/12.png', alt='Texto que describa la imagen')
        .row.z-10.justify-content-center.align-items-center
          .col-md-6
            h4.mb-4 Pruebas de fuga para camisas húmedas.
            p Se aplican 3 bar de presión al sistema de refrigeración durante 15 minutos (norma ISO 11486:2017) o se usan kits de detección de hidrocarburos en el refrigerante (límite: <40 ppm). 
            p Indicadores como emulsión de aceite-refrigerante o pérdida de presión superior al 10% en 5 minutos señalan fallas en los sellos, requiriendo acción inmediata.  

          .col-md-4
            figure
              img(src='@/assets/curso/temas/tema2/13.png', alt='Texto que describa la imagen')
        .row.z-10.justify-content-center.align-items-center
          .col-md-6
            h4.mb-4 Reemplazo de camisas: varía según el tipo.  
            p <strong>Las camisas secas</strong> se extraen con herramientas hidráulicas (como el extractor OTC 1122) tras calentar el bloque a 150°C para facilitar la operación, y se instalan con un ajuste por interferencia de 0.05-0.08 mm (ASTM B94).  
            p <strong>En camisas húmedas</strong>, se usan juntas tóricas de EPDM resistentes a 140°C y se aplica un torque de 25-30 Nm en pernos, seguido de una prueba de presión de 2.5 bar para verificar estanqueidad. 
            p Es crítico evitar reutilizar sellos o forzar ajustes, ya que esto reduce hasta un 30% la vida útil del motor (Nguyen et al., 2021). Estos procedimientos, respaldados por normas internacionales, garantizan precisión y confiabilidad en el mantenimiento. 
          .col-md-4
            figure
              img(src='@/assets/curso/temas/tema2/14.png', alt='Texto que describa la imagen')

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
