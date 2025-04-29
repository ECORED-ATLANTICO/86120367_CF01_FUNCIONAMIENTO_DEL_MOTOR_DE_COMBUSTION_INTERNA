<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 4
      h1 Armado de pistones dentro del cilindro

    img(data-aos="fade-up")(src="@/assets/curso/temas/tema4/1.png", alt="Imagen decorativa")

    .row.justify-content-center.align-items-center.z-10
      .col-lg-10
        p.banner-text Una vez que los cilindros han sido rectificados y bruñidos o en motores nuevos, se procede al ensamblaje de los pistones.

    Separador
    .fullwith-bg.fullwith-bg--15.d-none.d-lg-block
    #t_4_1(data-aos='zoom-in-right').titulo-segundo.color-acento-contenido.z-10
      h3 4.1.	Componentes del pistón y su función

    .row.justify-content-center.align-items-center.mb-4.mb-lg-5.factores-slider.z-10
      .d-none.d-xl-block.col-xl-3
        figure
          img(src='@/assets/curso/temas/tema4/2.png', alt='Imagen de un mecánico')(data-aos="fade-up")
      .col-xl-9.mb-3.mb-lg-0
        SlyderF(columnas="col-lg-6")
          .tarjeta.tarjeta--blanca.py-5.px-4.factores-slider__tarjeta
            .row.justify-content-center.mb-3
              .col-4
                img.factores-slider__icon.mt-5.mb-4(src='@/assets/curso/temas/tema4/3.svg' alt='Ilustacion de acompañamiento')
            .factores-slider__title-wrapper  
              h4.factores-slider__title.mb-4 Cabeza del pistón
            p.mb-4.mb-5.text-center Recibe la presión de la combustión y transfiere la fuerza a la biela.

          .tarjeta.tarjeta--blanca.py-5.px-4.factores-slider__tarjeta
            .row.justify-content-center.mb-3
              .col-4
                img.factores-slider__icon.mt-5.mb-4(src='@/assets/curso/temas/tema4/4.svg' alt='Ilustacion de acompañamiento')
            .factores-slider__title-wrapper  
              h4.factores-slider__title.mb-4 Cuerpo o falda
            p.mb-4.text-center Se desliza dentro del cilindro; su diseño influye en la suavidad del movimiento y la reducción de desgaste.

          .tarjeta.tarjeta--blanca.py-5.px-4.factores-slider__tarjeta
            .row.justify-content-center.mb-3
              .col-4
                img.factores-slider__icon.mt-5.mb-4(src='@/assets/curso/temas/tema4/5.svg' alt='Ilustacion de acompañamiento')
            .factores-slider__title-wrapper  
              h4.factores-slider__title.mb-4 Ranuras para anillos
            p.mb-4.text-center Alojan los anillos de compresión (para sellar la cámara de combustión) y el anillo de control de aceite (para regular la lubricación).

          .tarjeta.tarjeta--blanca.py-5.px-4.factores-slider__tarjeta
            .row.justify-content-center.mb-3
              .col-4
                img.factores-slider__icon.mt-5.mb-4(src='@/assets/curso/temas/tema4/6.svg' alt='Ilustacion de acompañamiento')
            .factores-slider__title-wrapper  
              h4.factores-slider__title.mb-4 Bulón o pasador
            p.mb-4.mb-0.text-center Conecta el pistón a la biela, permitiendo el movimiento articulado.

          .tarjeta.tarjeta--blanca.py-5.px-4.factores-slider__tarjeta
            .row.justify-content-center.mb-3
              .col-4
                img.factores-slider__icon.mt-5.mb-4(src='@/assets/curso/temas/tema4/7.svg' alt='Ilustacion de acompañamiento')
            .factores-slider__title-wrapper  
              h4.factores-slider__title.mb-4 Biela
            p.mb-4.text-center Transforma el movimiento lineal del pistón en rotación del cigüeñal (Redondo, 2021).

    .tarjeta.tarjeta--blanca.p-4.pt-5.z-10.mt-5.slider-bg.mb-5
      SlyderA(tipo="b")
        .row.z-10.justify-content-evenly.align-items-center
          .col-md-6
            h4.mb-4 Pistones Planos
            p El pistón plano tiene una corona sin elevaciones ni depresiones, lo que proporciona una combustión eficiente. Se usa en motores de alto rendimiento y bajo consumo. Su diseño reduce puntos calientes y mejora la relación de compresión sin interferencias
          .col-md-4
            figure
              img(src='@/assets/curso/temas/tema4/16.png', alt='Pistones Planos')
        .row.z-10.justify-content-evenly.align-items-center
          .col-md-6
            h4.mb-4 Pistones abombados
            p El pistón abombado tiene una corona elevada que aumenta la relación de compresión, mejorando la eficiencia térmica y la potencia del motor. Se usa en motores de alto rendimiento y combustión optimizada, ayudando a dirigir la mezcla aire-combustible.
          .col-md-4
            figure
              img(src='@/assets/curso/temas/tema4/17.png', alt='Pistones abombados')
        .row.z-10.justify-content-evenly.align-items-center
          .col-md-6
            h4.mb-4 Pistón cóncavo
            p El pistón cóncavo tiene una corona hundida que mejora la mezcla y combustión del aire-combustible. Se usa en motores diésel y de alto torque, reduciendo la detonación y mejorando la eficiencia térmica. Su diseño favorece la turbulencia y optimiza la combustión.
          .col-md-4
            figure
              img(src='@/assets/curso/temas/tema4/18.png', alt='Pistón cóncavo')
        .row.z-10.justify-content-evenly.align-items-center
          .col-md-6
            h4.mb-4 Pistón de cabeza tronco-cónica.
            p Los pistones de cabeza tronco-cónica tienen una corona con forma de cono truncado, mejorando la mezcla aire-combustible y la eficiencia de combustión. Se utilizan en motores de alto rendimiento, optimizando el flujo de gases y reduciendo el riesgo de detonación
          .col-md-4
            figure
              img(src='@/assets/curso/temas/tema4/19.png', alt='Pistón de cabeza tronco-cónica.')
        .row.z-10.justify-content-evenly.align-items-center
          .col-md-6
            h4.mb-4 Pistón asimétrico
            p El pistón asimétrico reduce la fricción y mejora la eficiencia al minimizar el contacto con la pared del cilindro. Su diseño optimiza el rendimiento y disminuye el desgaste, siendo ideal para motores de alto desempeño.
          .col-md-4
            figure
              img(src='@/assets/curso/temas/tema4/20.png', alt='Pistón asimétrico')
        .row.z-10.justify-content-evenly.align-items-center
          .col-md-6
            h4.mb-4 Pistones Refrigerados
            p Los pistones refrigerados tienen canales internos para la circulación de aceite, disipando el calor y evitando sobrecalentamiento. Mejoran la eficiencia térmica, reducen el desgaste y aumentan la durabilidad en motores de alto rendimiento y alta exigencia térmica.
          .col-md-4
            figure
              img(src='@/assets/curso/temas/tema4/21.png', alt='Pistones Refrigerados')

    .row.justify-content-center.align-items-center.z-10.mb-4.mb-lg-5
      .col-10.col-lg-8
        .titulo-sexto.color-acento-contenido.mb-4
          h5 Figura 10.
          span Esquema del pistón y sus componentes principales.
        img(data-aos="fade-up")(src="@/assets/curso/temas/tema4/22.png", alt="Esquema del pistón y sus componentes principales.")
        figcaption <strong>Fuente.</strong> SENA 2025

    Separador

    #t_4_2(data-aos='zoom-in-right').titulo-segundo.color-acento-contenido.z-10
      h3 4.2.	Proceso de ensamblaje de pistones y bielas

    p.mb-5 El ensamblaje se realiza con precisión para evitar daños:

    .row.justify-content-center.align-items-stretch.z-10.custom-cards
      .col-md-6.col-lg-4.col-xl-3.mb-5
        .custom-cards__cards.bg-acento-botones-20.custom-cards__cards--4
          h5.text-center.my-5 Orientación: 
          p.mb-0.text-center.mb-4 Se debe alinear correctamente el pistón y la biela, utilizando las marcas de referencia indicadas por el fabricante.
      .col-md-6.col-lg-4.col-xl-3.mb-5
        .custom-cards__cards.bg-primario-20.custom-cards__cards--5
          h5.text-center.my-5 Instalación del bulón:  
          p.mb-0.text-center.mb-4 Se inserta el bulón de acuerdo con el diseño (ajuste a presión o mediante circlips) utilizando herramientas específicas para evitar golpes.
      .col-md-6.col-lg-4.col-xl-3.mb-5
        .custom-cards__cards.bg-acento-botones-20.custom-cards__cards--6
          h5.text-center.my-5 Colocación de los anillos: 
          p.mb-0.text-center.mb-4 Con ayuda de alicates especiales, se instalan los anillos en sus ranuras, cuidando que las aberturas (gaps) queden desfasadas conforme a lo especificado.


    .titulo-sexto.color-acento-contenido.mb-4
      h5 Figura 11.
      span Orientación correcta del pistón, la biela y uso de alicates para anillos

    .row.justify-content-center.align-items-stretch.mb-3
      .col-lg-3
        .recuadro.recuadro--1
          .recuadro__title
            h5.m-0 Ensambaje de pistones y bielas
      .col-lg-3
        .recuadro.recuadro--2
          .recuadro__title
            h5.m-0 Bulones flotantes
      .col-lg-3
        .recuadro.recuadro--3
          .recuadro__title
            h5.m-0 Ligero giro de los anillos
      .col-lg-3
        .recuadro.recuadro--4
          .recuadro__title
            h5.m-0 Montaje de la biela de sujeción
    figcaption <strong>Fuente.</strong> SENA 2025

    Separador
    #t_4_3(data-aos='zoom-in-right').titulo-segundo.color-acento-contenido.z-10
      h3 4.3.	Métodos de instalación y ajuste de pistones

    .fullwith-bg.fullwith-bg--16.d-none.d-lg-block
    p El montaje de los pistones en el cilindro sigue estos pasos:

    .row.justify-content-center.align-items-center.mt-4.mb-4.mb-lg-5.motor-timeline.z-10
      .col-lg-6
        LineaTiempoD.color-secundario.mb-4.mb-lg-0
          .row(numero="1" titulo="Lubricación")
            .mb-4.mb-lg-0
              p Se aplica aceite de motor en las paredes del cilindro, en los pistones y anillos para facilitar el deslizamiento.

          .row(numero="2" titulo="Compresión de los anillos")
            .mb-4.mb-lg-0
              p Utilizando un compresor de anillos, se reduce el diámetro exterior de los anillos para su fácil inserción.
              
          .row(numero="3" titulo="Inserción del pistón")
            .mb-4.mb-lg-0
              p Se introduce cuidadosamente el pistón en el cilindro, asegurando la correcta orientación de la biela.

          .row(numero="4" titulo="Conexión con el cigüeñal")
            .mb-4.mb-lg-0
              p Se conecta la biela al muñón del cigüeñal, instalando cojinetes y apretando pernos o tuercas según el torque especificado.

          .row(numero="5" titulo="Verificación del movimiento")
            .mb-4.mb-lg-0
              p Se comprueba que el pistón se desplace sin obstáculos.

      .col-6.col-lg-6.align-content-center
        figure
          img(data-aos="fade-up")(src='@/assets/curso/temas/tema4/30.png', alt='Mecánico con una herramienta')

    .row.justify-content-center.align-items-center.z-10.mb-4.mb-lg-5
      .col-10.col-lg-8
        .titulo-sexto.color-acento-contenido.mb-4
          h5 Figura 12.
          span  Diagrama del uso del compresor de anillos e inserción del pistón
        img(data-aos="fade-up")(src="@/assets/curso/temas/tema4/31.png", alt=" Diagrama del uso del compresor de anillos e inserción del pistón")
        figcaption <strong>Fuente.</strong> SENA 2025

    Separador

    #t_4_4(data-aos='zoom-in-right').titulo-segundo.color-acento-contenido.z-10
      h3 4.4.	Pruebas de verificación del ensamblaje

    p.mb-5 Tras el ensamblaje se realizan pruebas para confirmar la correcta instalación:
      
    .fullwith-bg.fullwith-bg--17.d-none.d-lg-block
    .row.justify-content-center.align-items-stretch.z-10.custom-cards
      .col-md-6.col-lg-4.mb-5
        .custom-cards__cards.bg-acento-botones-20.custom-cards__cards--p-20
          img.custom-cards__img(src="@/assets/curso/temas/tema4/32.svg")
          h5.text-center.my-3 Prueba de compresión
          p.mb-0.text-center.mb-4 Con la culata ensamblada, se mide la presión en cada cilindro para confirmar que se encuentra dentro de los rangos especificados.
      .col-md-6.col-lg-4.mb-5
        .custom-cards__cards.bg-primario-20.custom-cards__cards--p-20
          img.custom-cards__img(src="@/assets/curso/temas/tema4/33.svg")
          h5.text-center.my-3 Inspección visual
          p.mb-0.text-center.mb-4 Se utiliza un endoscopio para verificar que no existan daños en las paredes del cilindro ni en la cabeza del pistón.
      .col-md-6.col-lg-4.mb-5
        .custom-cards__cards.bg-acento-botones-20.custom-cards__cards--p-20
          img.custom-cards__img(src="@/assets/curso/temas/tema4/34.svg")
          h5.text-center.my-3 Prueba de fugas (<em>Cylinder Leak-Down Test</em>)
          p.mb-0.text-center.mb-4 Se introduce aire comprimido en el cilindro para identificar posibles fugas que indiquen un sellado deficiente.


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
