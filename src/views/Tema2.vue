<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 Camisas de cilindros

    img(data-aos="fade-up")(src="@/assets/curso/temas/tema2/1.png", alt="Imagen decorativa")

    .row.justify-content-center.align-items-center.z-10
      .col-lg-10
        p.banner-text En los bloques de cilindros fabricados con aleaciones se emplean camisas de cilindro. Estas son piezas cilíndricas de material con mayor resistencia al desgaste que se insertan dentro del bloque para constituir la superficie de deslizamiento del pistón (SENA, 2012).

    Separador

    #t_2_1(data-aos='zoom-in-right').titulo-segundo.color-acento-contenido.z-10
      h3 2.1.	Tipos de camisas de cilindro

    p.mb-4.mb-lg-5 Existen principalmente dos tipos de camisas de cilindro, cada una con atributos y aplicaciones particulares:

    h3(data-aos='zoom-in-right').mb-4
      span.motor-title.motor-title--1 Camisas secas: características y aplicaciones 

    .row.justify-content-center.z-10.mb-4.mb-lg-5
      .col-xl-8
        p.mb-4 Las camisas secas, también conocidas como <em>"sleeves"</em> o <em>"liners"</em>, son tubos delgados de material resistente que se insertan a presión en el bloque de cilindros. Su característica principal radica en que no establece contacto directo con el refrigerante del motor (SENA, 2012). La transferencia de calor desde la camisa hacia el refrigerante se efectúa a través del material del bloque.
        .row.justify-content-center.align-items-center.z-10
          .col-lg-6.p-2
            .pills
              img.pills__img(data-aos="zoom-in-left")(src="@/assets/curso/temas/tema2/2.svg", alt="Icono decorativo")
              p.mb-0 <strong>Material:</strong> acero centrifugado GGG-60.

          .col-lg-6.p-2
            .pills
              img.pills__img(data-aos="zoom-in-left")(src="@/assets/curso/temas/tema2/2.svg", alt="Icono decorativo")
              p.mb-0 <strong>Instalación:</strong> ajuste por interferencia de 0.05-0.08 mm (requiere precalentamiento a 200 ºC).

      .col-xl-4.d-none.d-xl-block
        figure
          img(data-aos="fade-up")(src="@/assets/curso/temas/tema2/3.png", alt="Imagen decorativa")
    .fullwith-bg.fullwith-bg--4.d-none.d-xl-block
    figure.z-10.mb-4
      img(data-aos="fade-up")(src="@/assets/curso/temas/tema2/4.png", alt="Imagen decorativa")

    p.mb-4.mb-lg-5.z-10 La camisa seca es un revestimiento desmontable dentro del cilindro, sin contacto directo con el refrigerante. Protege contra el desgaste, facilita reparaciones y mejora la disipación del calor, asegurando mayor durabilidad y eficiencia en el motor

    .row.justify-content-center.align-items-center.z-10.mb-4.mb-lg-5
      .col-lg-10
        img.d-sm-none(data-aos="fade-up")(src="@/assets/curso/temas/tema2/5-mobile.png", alt="Corte transversal de bloque con camisa seca")
        img.d-none.d-md-block(data-aos="fade-up")(src="@/assets/curso/temas/tema2/5.png", alt="Corte transversal de bloque con camisa seca")

    .row.justify-content-center.align-items-center.z-10.mb-4.mb-lg-5
      .col-10.col-lg-8
        .titulo-sexto.color-acento-contenido.mb-4
          h5 Figura 4.
          span Corte transversal de bloque con camisa seca
        img(data-aos="fade-up")(src="@/assets/curso/temas/tema2/6.png", alt="Corte transversal de bloque con camisa seca")
        figcaption <strong>Fuente.</strong> SENA 2025
    .fullwith-bg.fullwith-bg--5.d-none.d-xl-block
    h3(data-aos='zoom-in-right').mb-4.z-10
      span.motor-title.motor-title--1 Camisas húmedas: ventajas y desventajas

    .row.justify-content-center.z-10.mb-4.mb-lg-5
      .col-xl-8
        p.mb-4 Las camisas húmedas están diseñadas para establecer contacto directo con el refrigerante del motor en su superficie exterior (SENA, 2012). Esta característica permite una transferencia de calor más eficiente desde el cilindro hacia el refrigerante, lo que contribuye a una mejor refrigeración del motor.
        .pills
          img.pills__img(data-aos="zoom-in-left")(src="@/assets/curso/temas/tema2/7.svg", alt="Icono decorativo")
          .pills__text
            p.mb-0 <strong>Sellado:</strong> anillos de nitrilo (NBR) con resistencia a 150 °C.
            p.mb-0 <strong>Ventaja:</strong> reducción de temperatura en zona de combustión hasta 15 % (Nguyen et al., 2019).
      .col-xl-4.d-none.d-xl-block
        figure
          img(data-aos="fade-up")(src="@/assets/curso/temas/tema2/8.png", alt="Imagen decorativa")

    .row.justify-content-center.z-10.mb-4
      .col-lg-10
        p.mb-0 La camisa húmeda es un revestimiento cilíndrico en contacto directo con el refrigerante, mejorando la disipación de calor. Se instala en el bloque del motor con sellos para evitar fugas y facilitar el mantenimiento.

    .row.justify-content-center.align-items-center.z-10.mb-4.mb-lg-5
      .col-lg-10
        img.d-md-none(data-aos="fade-up")(src="@/assets/curso/temas/tema2/9-mobile.png", alt="Corte de bloque con camisa húmeda y circulación de refrigerante")
        img.d-none.d-md-block(data-aos="fade-up")(src="@/assets/curso/temas/tema2/9.png", alt="Corte de bloque con camisa húmeda y circulación de refrigerante")

    .row.justify-content-center.align-items-center.z-10.mb-4.mb-lg-5
      .col-lg-8
        .titulo-sexto.color-acento-contenido.mb-4
          h5 Figura 5.
          span Corte de bloque con camisa húmeda y circulación de refrigerante
        img(data-aos="fade-up")(src="@/assets/curso/temas/tema2/10.png", alt="Corte de bloque con camisa húmeda y circulación de refrigerante")
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

    #t_2_2(data-aos='zoom-in-right').titulo-segundo.color-acento-contenido.z-10
      h3 2.2.	Métodos de inspección y mantenimiento de camisas de cilindro
    
    p La inspección y el mantenimiento de las camisas de cilindro son críticos para garantizar la eficiencia del motor y prevenir fallas prematuras.

    .tarjeta.tarjeta--blanca.p-4.pt-5.z-10.mt-5.slider-bg
      SlyderA(tipo="b")
        .row.z-10.justify-content-center.align-items-center
          .col-md-6
            h4.mb-4 Inspección visual
            p Es el primer paso para evaluar el estado de las camisas de cilindro. 
            p Durante este proceso, se examina minuciosamente la superficie interior en busca de desgaste excesivo, rayaduras profundas (superiores a 0.1 mm), grietas o corrosión, utilizando herramientas como lupas de aumento 10X (según ISO 14993:2018) y endoscopios de 5 mm para áreas de difícil acceso. 
            p.mb-4.mb-sm-0 En camisas húmedas, se inspeccionan adicionalmente los sellos de goma para detectar agrietamientos o deformaciones, empleando luz UV para identificar microfisuras no visibles a simple vista. 
          .col-md-6.col-xl-4
            figure
              img(src='@/assets/curso/temas/tema2/11.png', alt='Texto que describa la imagen')
        .row.z-10.justify-content-center.align-items-center
          .col-md-6
            h4.mb-4 Medición dimensional: 
            p Es clave para cuantificar el desgaste. 
            p Con instrumentos como micrómetros triflautados y comparadores de interiores, se miden parámetros como el ovalamiento (tolerancia máxima de 0.03 mm en motores gasolina, según SAE J1227) y la conicidad (límite de 0.05 mm por ISO 12179:2020). 
            p.mb-4.mb-sm-0 Las mediciones se realizan en tres alturas (superior, media e inferior) y dos ejes (X/Y), comparando los resultados con las especificaciones del fabricante.
          .col-md-6.col-xl-4
            figure
              img(src='@/assets/curso/temas/tema2/12.png', alt='Texto que describa la imagen')
        .row.z-10.justify-content-center.align-items-center
          .col-md-6
            h4.mb-4 Pruebas de fuga para camisas húmedas.
            p Se aplican 3 bar de presión al sistema de refrigeración durante 15 minutos (norma ISO 11486:2017) o se usan kits de detección de hidrocarburos en el refrigerante (límite: <40 ppm). 
            p.mb-4.mb-sm-0 Indicadores como emulsión de aceite-refrigerante o pérdida de presión superior al 10% en 5 minutos señalan fallas en los sellos, requiriendo acción inmediata.  

          .col-md-6.col-xl-4
            figure
              img(src='@/assets/curso/temas/tema2/13.png', alt='Texto que describa la imagen')
        .row.z-10.justify-content-center.align-items-center
          .col-md-6
            h4.mb-4 Reemplazo de camisas: varía según el tipo.  
            p <strong>Las camisas secas</strong> se extraen con herramientas hidráulicas (como el extractor OTC 1122) tras calentar el bloque a 150°C para facilitar la operación, y se instalan con un ajuste por interferencia de 0.05-0.08 mm (ASTM B94).  
            p <strong>En camisas húmedas</strong>, se usan juntas tóricas de EPDM resistentes a 140°C y se aplica un torque de 25-30 Nm en pernos, seguido de una prueba de presión de 2.5 bar para verificar estanqueidad. 
            p.mb-4.mb-sm-0 Es crítico evitar reutilizar sellos o forzar ajustes, ya que esto reduce hasta un 30% la vida útil del motor (Nguyen et al., 2021). Estos procedimientos, respaldados por normas internacionales, garantizan precisión y confiabilidad en el mantenimiento. 
          .col-md-6.col-xl-4
            figure
              img(src='@/assets/curso/temas/tema2/14.png', alt='Texto que describa la imagen')

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
