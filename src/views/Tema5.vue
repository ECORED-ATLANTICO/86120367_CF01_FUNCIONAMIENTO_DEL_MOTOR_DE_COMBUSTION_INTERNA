<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 5
      h1 Alojamiento del eje de levas

    .fullwith-bg.fullwith-bg--12.d-none.d-xl-block
    .bloque-texto-g.color-acento-botones.p-3.p-sm-4.p-md-5.mb-4.mb-xl-5
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/tema5/1.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.d-block El eje de levas regula la apertura y cierre de las válvulas, coordinando su acción con el movimiento de los pistones. Su correcto montaje y ajuste son esenciales para el desempeño del motor.
        p.mb-0.d-block Es un eje mecanizado que controla la apertura y cierre de las válvulas de admisión y escape en un motor de combustión interna. Su diseño incluye una serie de levas (protuberancias o lóbulos) distribuidas a lo largo del eje, que empujan los taqués, balancines o directamente las válvulas para permitir el ingreso de la mezcla de aire y combustible y la expulsión de los gases quemados.

    .tarjeta.tarjeta--blanca.p-4.pt-5.z-10.slider-bg.mb-5
      SlyderA(tipo="b")
        .row.z-10.justify-content-center.align-items-center
          .col-lg-6
            h4.mb-4 Componentes
            p <strong>Muñones de apoyo:</strong> los árboles de levas suelen tener entre dos y cuatro de estos muñones de hierro macizo.
            p <strong>Tronco:</strong> es la barra que conecta a los extremos del árbol de levas mediante engranajes.
            p <strong>Levas:</strong> abren o cierran el árbol de levas en función de las necesidades de la combustión. Dependen de rampa, cresta y calado que vista.
            p <strong>Piñón de accionamiento del distribuidor:</strong> sirve para conectar el distribuidor y poder mantener el ritmo del árbol de levas.
          .col-10.col-lg-4
            figure
              img(src='@/assets/curso/temas/tema5/2.png', alt='Medición dimensional')
        .row.z-10.justify-content-center.align-items-center
          .col-lg-6
            h4.mb-4 Alojamiento del eje de levas
            p El eje de levas se ubica en diferentes partes del motor según su diseño. En motores OHV (Overhead Valve-Valvuas en culata), está dentro del bloque, cerca del cigüeñal. En motores OHC (<em>Overhead Camshaft</em>-árbol de levas en cabeza) y DOHC (<em>Double Overhead Camshaft</em>- doble árbol de levas en cabeza), se encuentra en la culata, sobre las válvulas. Su posición permite controlar la apertura y cierre de las válvulas mediante levas, coordinando el flujo de aire y combustible para la combustión eficiente del motor.
          .col-10.col-lg-4
            figure
              img(src='@/assets/curso/temas/tema5/3.png', alt='Texto que describa la imagen')
        .row.z-10.justify-content-center.align-items-center
          .col-lg-6
            h4.mb-4 Alojamiento para los ejes balanceadores
            p El alojamiento de los ejes balanceadores es la estructura dentro del bloque del motor donde se montan estos ejes para reducir vibraciones. Generalmente, están ubicados en la parte inferior del bloque, paralelos al cigüeñal, y giran en sentido opuesto para equilibrar las fuerzas inerciales del motor. Su correcto alineamiento y lubricación son esenciales para el rendimiento y durabilidad del motor, evitando desgaste prematuro y vibraciones excesivas.
          .col-10.col-lg-4
            figure
              img(src='@/assets/curso/temas/tema5/4.png', alt='Texto que describa la imagen')
        .row.z-10.justify-content-center.align-items-center
          .col-lg-6
            h4.mb-4 Pernos y espárragos para la culata 
            p Los pernos y espárragos de culata aseguran la unión firme entre la culata y el bloque del motor, soportando altas temperaturas y presiones de combustión. Los pernos se enroscan directamente en el bloque, mientras que los espárragos se fijan primero al bloque y luego se ajusta la culata con tuercas. Ambos evitan fugas de gases y líquidos, manteniendo la estanqueidad. Su correcta instalación y torque son fundamentales para evitar deformaciones y garantizar el rendimiento del motor.
          .col-10.col-lg-4
            figure
              img(src='@/assets/curso/temas/tema5/5.png', alt='Texto que describa la imagen')

    Separador

    #t_5_1(data-aos='zoom-in-right').titulo-segundo.color-acento-contenido.z-10.mb-5
      h3 5.1.	Función y tipos de ejes de levas

    .row.justify-content-center.align-items-center.z-10.mb-4.mb-lg-5
      .col-lg-8
        p.mb-4 El eje de levas controla el tiempo y la duración de la apertura de las válvulas mediante lóbulos con perfiles específicos. Se presentan dos configuraciones principales (SENA, 2012):
        .row.justify-content-center.align-items-stretch.gap-3.gap-sm-0
          .col-md-6
            .tarjetas-rosadas__contenido
              h6.tarjetas-rosadas__title OHV (<em>Overhead Valve</em>): 
              p Ubicado en el bloque del motor, transmite el movimiento a las válvulas mediante varillas y balancines.
          .col-md-6
            .tarjetas-rosadas__contenido
              h6.tarjetas-rosadas__title OHC (<em>Overhead Camshaft</em>): 
              p Situado en la culata, actúa directamente sobre las válvulas o mediante balancines cortos. En motores modernos, la configuración DOHC <em>(Double Overhead Camshaft)</em> utiliza dos ejes para una mayor precisión

      .col-lg-4.d-none.d-lg-block
        figure
          img(src='@/assets/curso/temas/tema5/6.png', alt='Ilustración de personas trabajando en un motor')


    .fullwith-bg.fullwith-bg--13.d-none.d-lg-block
    .row.justify-content-center.align-items-center.z-10.mb-4.mb-lg-5
      .col-10.col-lg-8
        .titulo-sexto.color-acento-contenido.mb-4
          h5 Figura 13.
          span Esquema comparativo de configuraciones OHV y OHC
        img(data-aos="fade-up")(src="@/assets/curso/temas/tema5/7.png", alt="Esquema comparativo de configuraciones OHV y OHC")
        figcaption <strong>Fuente.</strong> SENA 2025
    
    Separador

    #t_5_2(data-aos='zoom-in-right').titulo-segundo.color-acento-contenido.z-10
      h3 5.2.	Procedimiento para el montaje del eje de levas

    p.mb-4 El montaje del eje de levas requiere seguir pasos específicos, independientemente del diseño:
    
    .fullwith-bg.fullwith-bg--13.d-none.d-md-block
    .row.justify-content-center.align-items-center.mb-4.mb-lg-5.factores-slider.z-2
      .d-none.d-xl-block.col-xl-3
        figure
          img(src='@/assets/curso/temas/tema4/2.png', alt='Imagen de un mecánico')(data-aos="fade-up")
      .col-xl-9.mb-3.mb-lg-0
        SlyderF(columnas="col-md-6")
          .tarjeta.tarjeta--blanca.p-4.factores-slider__tarjeta.py-lg-5
            .row.justify-content-center.mb-5
              .col-4
                img.factores-slider__icon(src='@/assets/curso/temas/tema5/8.svg' alt='Ilustacion de acompañamiento')
            .factores-slider__title-wrapper.mb-3
              h3.factores-slider__title Inspección de componentes: 
            p.mb-5.mb-0.text-center Se revisan visualmente el eje, los cojinetes y los seguidores de válvula en busca de desgaste o daños.

          .tarjeta.tarjeta--blanca.p-4.factores-slider__tarjeta.py-lg-5
            .row.justify-content-center.mb-5
              .col-4
                img.factores-slider__icon(src='@/assets/curso/temas/tema5/9.svg' alt='Ilustacion de acompañamiento')
            .factores-slider__title-wrapper.mb-3
              h3.factores-slider__title Lubricación: 
            p.mb-5.text-center Se aplica aceite o grasa específica en los cojinetes y lóbulos para asegurar un montaje sin fricción.

          .tarjeta.tarjeta--blanca.p-4.factores-slider__tarjeta.py-lg-5
            .row.justify-content-center.mb-5
              .col-4
                img.factores-slider__icon(src='@/assets/curso/temas/tema5/10.svg' alt='Ilustacion de acompañamiento')
            .factores-slider__title-wrapper.mb-3
              h3.factores-slider__title Alineación de marcas de distribución: 
            p.mb-5.text-center Se alinean las marcas en el eje de levas y en el cigüeñal para garantizar la sincronización de la apertura de válvulas.

          .tarjeta.tarjeta--blanca.p-4.factores-slider__tarjeta.py-lg-5
            .row.justify-content-center.mb-5
              .col-4
                img.factores-slider__icon(src='@/assets/curso/temas/tema5/11.svg' alt='Ilustacion de acompañamiento')
            .factores-slider__title-wrapper.mb-3
              h3.factores-slider__title Instalación del Eje: 
            p.mb-5.mb-0.text-center Se coloca el eje en sus alojamientos, verificando el asentamiento correcto de los cojinetes.

          .tarjeta.tarjeta--blanca.p-4.factores-slider__tarjeta.py-lg-5
            .row.justify-content-center.mb-5
              .col-4
                img.factores-slider__icon(src='@/assets/curso/temas/tema5/12.svg' alt='Ilustacion de acompañamiento')
            .factores-slider__title-wrapper.mb-3
              h3.factores-slider__title Fijación de soportes y sistema de accionamiento: 
            p.mb-5.text-center En motores OHC, se instalan las tapas de cojinete y se conecta la correa, cadena o engranajes que sincronizan el movimiento.


    .row.justify-content-center.align-items-center.z-10.mb-4.mb-lg-5
      .col-10.col-lg-8
        .titulo-sexto.color-acento-contenido.mb-4
          h5 Figura 14.
          span Alineación de marcas de distribución e instalación del eje de levas
        img(data-aos="fade-up")(src="@/assets/curso/temas/tema5/13.jpg", alt="Alineación de marcas de distribución e instalación del eje de levas")
        figcaption <strong>Fuente.</strong> SENA 2025

    Separador
    
    #t_5_3(data-aos='zoom-in-right').titulo-segundo.color-acento-contenido.z-10
      h3 5.3.	Ajuste y calibración del eje de levas

    p.mb-5 Posterior al montaje se realizan ajustes para asegurar un funcionamiento óptimo:


    .row.justify-content-center.align-items-stretch.z-10.custom-cards
      .col-md-6.col-lg-4.col-xl-3.mb-5
        .custom-cards__cards.bg-acento-botones-20.custom-cards__cards--1
          h5.text-center.my-5 Verificación del juego axial:
          p.mb-0.text-center.mb-4 Con un reloj comparador se mide el movimiento longitudinal del eje, asegurando que se encuentre dentro de las tolerancias.
      .col-md-6.col-lg-4.col-xl-3.mb-5
        .custom-cards__cards.bg-primario-20.custom-cards__cards--2
          h5.text-center.my-5 Ajuste del juego de válvulas: 
          p.mb-0.text-center.mb-4 Se regula el espacio entre los seguidores y las válvulas utilizando tornillos de ajuste, calzas o taqués hidráulicos.
      .col-md-6.col-lg-4.col-xl-3.mb-5
        .custom-cards__cards.bg-acento-botones-20.custom-cards__cards--3
          h5.text-center.my-5 Verificación de la sincronización: 
          p.mb-0.text-center.mb-4 Se comprueba el ángulo de apertura de las válvulas respecto al cigüeñal, utilizando herramientas de precisión o software especializado.

    Separador

    #t_5_4(data-aos='zoom-in-right').titulo-segundo.color-acento-contenido.z-10
      h3 5.4.	Diagnóstico y corrección de fallas en el eje de levas

    p Es fundamental identificar y corregir las fallas que puedan presentarse:
    .fullwith-bg.fullwith-bg--14.d-none.d-lg-block
    .row.justify-content-center
      .col-10.col-md-6.col-lg-3.mb-4.mb-xl-0
        .crd_hover_txt(data-aos="flip-left")
          .crd_hover_txt--img
            figure
              img(src="@/assets/curso/temas/tema5/17.png", alt="Desgaste de lóbulos")
          .crd_hover_txt--body.text-center
            h5.mb-3 Desgaste de lóbulos
            p.mb-0 Se detecta mediante inspección visual o medición; un desgaste excesivo puede requerir rectificación o reemplazo.
      .col-10.col-md-6.col-lg-3.mb-4.mb-xl-0
        .crd_hover_txt(data-aos="flip-left")
          .crd_hover_txt--img
            figure
              img(src="@/assets/curso/temas/tema5/18.png", alt="Desgaste de cojinetes")
          .crd_hover_txt--body.text-center
            h5.mb-3 Desgaste de cojinetes
            p.mb-0 un juego excesivo en los cojinetes se asocia a ruidos y a una lubricación deficiente, por lo que su reemplazo es necesario.
      .col-10.col-md-6.col-lg-3.mb-4.mb-xl-0
        .crd_hover_txt(data-aos="flip-left")
          .crd_hover_txt--img
            figure
              img(src="@/assets/curso/temas/tema5/19.png", alt="Ruidos anormales")
          .crd_hover_txt--body.text-center
            h5.mb-3 Ruidos anormales
            p.mb-0 Son indicativos de problemas en el sistema de distribución, como tensión incorrecta o desgaste en los componentes.
      .col-10.col-md-6.col-lg-3.mb-4.mb-xl-0
        .crd_hover_txt(data-aos="flip-left")
          .crd_hover_txt--img
            figure
              img(src="@/assets/curso/temas/tema5/20.png", alt="Rotura del eje")
          .crd_hover_txt--body.text-center
            h5.mb-3 Rotura del eje
            p.mb-0 Aunque poco frecuente, la ruptura se manifiesta con fallos súbitos en la sincronización y ruidos metálicos intensos, lo que obliga al reemplazo del componente.

          
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
