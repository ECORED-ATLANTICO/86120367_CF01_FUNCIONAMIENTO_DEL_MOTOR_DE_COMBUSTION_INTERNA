<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 1
      h1 El bloque de los cilindros
    
    figure
      img(src='@/assets/curso/temas/tema1/1.png', alt='Ilustración decorativa')

    Separador

    #t_1_1(data-aos='zoom-in-right').titulo-segundo.color-acento-contenido
      h3 1.1	Definición y función del bloque de cilindros

    .row.justify-content-center.align-items-center.mb-4.mb-lg-5
      .col-10.col-lg-5.col-xl-4.d-none.d-lg-block
        figure
          img(src='@/assets/curso/temas/tema1/2.png', alt='Imagen decorativa')(data-aos="fade-up")
      .col-lg-7.col-xl-8.mb-3.mb-lg-0
        p El bloque de cilindros, también llamado monoblock, es la pieza central de un motor de combustión interna. Su función principal es alojar los cilindros, pistones, cigüeñal y otros componentes críticos. Además, distribuye las fuerzas generadas durante la combustión, integra conductos para lubricación y refrigeración, y sirve de soporte para elementos auxiliares como la bomba de agua o el alternador (Castro, 2009). Sin esta estructura, el motor no podría mantener su integridad mecánica ni operar eficientemente.
        .cajon.color-acento-contenido-ac10.p-4
          p.mb-0 El bloque de cilindros también cumple la función de distribuir las intensas fuerzas generadas durante la combustión, actuando como un elemento de rigidez que preserva la integridad mecánica del motor. Internamente, incorpora conductos diseñados para la circulación del aceite lubricante, crucial para la reducción de la fricción entre las partes móviles, y para el flujo del refrigerante, esencial para la regulación de la temperatura de funcionamiento del motor y la prevención del sobrecalentamiento. Asimismo, la superficie externa del bloque sirve como punto de anclaje para diversos componentes auxiliares de importancia vital, tales como la bomba de agua, la bomba de aceite, el alternador y los soportes del motor (SENA, 2012). En esencia, la solidez y la precisión del bloque de cilindros son indispensables para la operación eficiente del motor y su capacidad para resistir las exigencias de su funcionamiento.

    .fullwith-bg.fullwith-bg--1.d-none.d-xl-block
    .row.justify-content-center.align-items-center.z-10
      .col-10.col-lg-8
        .titulo-sexto.color-acento-contenido.mb-4
          h5 Figura 1.
          span Definición y función del bloque de cilindros
        img(data-aos="fade-up")(src="@/assets/curso/temas/tema1/3.png", alt="Motor")
        figcaption Fuente SENA 2025

    Separador

    #t_1_2(data-aos='zoom-in-right').titulo-segundo.color-acento-contenido
      h3 1.2	Materiales y construcción del bloque de cilindros
    
    .row.justify-content-center.mb-4.mb-lg-5.z-10
      .col-lg-8
        p.mb-4.mb-lg-0 La selección del material y el método de construcción del bloque de cilindros influyen de manera significativa en el rendimiento, el peso y la durabilidad del motor. Tradicionalmente, el material predominante para la fabricación de bloques ha sido la fundición de hierro, particularmente la fundición gris con designaciones como GG-20 o GG-25 (Castro, 2009; SENA, 2012). Este material se caracteriza por una notable resistencia al desgaste y una capacidad para absorber vibraciones, lo que contribuye a un funcionamiento más silencioso. 
      .col-md-8.col-lg-4
        figure
          img(src='@/assets/curso/temas/tema1/4.png', alt='Imagen decorativa')(data-aos="fade-up")

    p El bloque de cilindros es la estructura principal de un motor de combustión interna, fabricada generalmente de hierro fundido o aluminio. Su función es albergar los cilindros donde se desplazan los pistones, además de proporcionar soporte para otros componentes como el cigüeñal, el árbol de levas y el sistema de refrigeración.
    p.mb-4.mb-lg-5 Está diseñado con conductos internos para la circulación del refrigerante y el aceite, evitando el sobrecalentamiento y reduciendo la fricción. Puede tener distintas configuraciones según la disposición de los cilindros, como en línea, en V, lo que influye en el rendimiento y la compactación del motor.

    .row.justify-content-center.align-items-center.z-10.mb-4.mb-lg-5
      .col-10.col-lg-8
        ImagenInfografica.color-terciario.time-line-info
          template(v-slot:imagen)
            figure
              img(src='@/assets/curso/temas/tema1/5.png', alt='Motor de combustión interna')

          .tarjeta.color-primario-p10.p-4(x="80%" y="20%" numero="01")
            .time-line-info__number
              span 01
            .h5.mb-4 Bloque de hierro fundido
            .row.justify-content-center.align-items-center
              .col-5
                figure
                  img(src='@/assets/curso/temas/tema1/6.png', alt='Imagen decorativa')
              .col-7
                p El bloque de hierro fundido es una estructura resistente y duradera del motor, diseñada para alojar los cilindros y otros componentes. Ofrece alta rigidez y excelente capacidad de disipación térmica, pero es más pesado que el aluminio.

          .tarjeta.color-primario-p10.p-4(x="85%" y="60%" numero="02")
            .time-line-info__number
              span 02
            .h5.mb-4 Bloques del motor de aleación de metal ligero
            .row.justify-content-center.align-items-center
              .col-5
                figure
                  img(src='@/assets/curso/temas/tema1/7.png', alt='Imagen decorativa')
              .col-7
                p El bloque de motor en aleación de metal ligero, generalmente de aluminio, es más liviano que el de hierro fundido, mejorando la eficiencia y el rendimiento. Ofrece buena disipación térmica y resistencia a la corrosión, aunque requiere refuerzos para igualar la durabilidad.

          .tarjeta.color-primario-p10.p-4(x="40%" y="10%" numero="03")
            .time-line-info__number
              span 03
            .h5.mb-4 Composición <em>del bloque de cilindros</em>
            .row.justify-content-center.align-items-center
              .col-5
                figure
                  img(src='@/assets/curso/temas/tema1/8.png', alt='Imagen decorativa')
              .col-7
                p Las partes principales de un bloque de motor incluyen: cilindros, donde se mueven los pistones; camisa de agua, para disipar el calor; galería de aceite, que lubrican las piezas móviles; rodamiento del cigüeñal, que convierte el movimiento lineal en rotativo; bielas, que conectan los pistones con el cigüeñal; y tapa del bloque, que sella y protege los componentes internos.

          .tarjeta.color-primario-p10.p-4(x="30%" y="30%" numero="04")
            .time-line-info__number
              span 04
            .h5.mb-4 Cilindros en el mismo bloque
            .row.justify-content-center.align-items-center
              .col-5
                figure
                  img(src='@/assets/curso/temas/tema1/9.png', alt='Imagen decorativa')
              .col-7
                p Los cilindros son elementos fundamentales del bloque de motor, donde ocurre la combustión del aire y el combustible para generar energía. Están mecanizados directamente en el bloque y alojan los pistones, que se mueven en su interior. Su número y disposición determinan la configuración del motor, como en línea, en V o bóxer. Además, cuentan con recubrimientos especiales o camisas para reducir el desgaste y mejorar la refrigeración y lubricación

    .bloque-texto-g.color-acento-botones.p-3.p-sm-4.p-md-5.mb-4.mb-xl-5
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/tema1/10.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        h4.d-block Materiales predominantes
        p.d-block En la búsqueda de motores con menor peso y mayor eficiencia térmica, los fabricantes contemporáneos han incrementado el uso de aleaciones de aluminio (SENA, 2012). Aleaciones como la G-Al Si 12 ofrecen una reducción considerable en el peso del motor, lo que se traduce en un menor consumo de combustible y una respuesta mejorada del vehículo.

    .row.justify-content-center.align-items-center.z-10.mb-4.mb-lg-5
      .col-10.col-lg-8
        .titulo-sexto.color-acento-contenido.mb-4
          h5 Figura 2.
          span Bloque de cilindros y sus materiales
        img(data-aos="fade-up")(src="@/assets/curso/temas/tema1/11.png", alt="Motor")
        figcaption Fuente SENA 2025

    .fullwith-bg.fullwith-bg--2.d-none.d-xl-block
    .d-block.my-3
      <br>
    .row.justify-content-center.align-items-center.z-10.mb-4.mb-lg-5
      .col-lg-7
        p En cuanto a la construcción, si bien algunos diseños antiguos o de alto rendimiento pueden emplear bloques de cilindros construidos en secciones unidas mediante pernos, la práctica actual predominante es la fabricación del bloque como una única pieza fundida (monoblock) que integra los cilindros y, en muchos casos, la carcasa del cigüeñal (SENA, 2012). Esta construcción unitaria proporciona una mayor rigidez estructural y reduce el número de juntas, disminuyendo el riesgo de fugas.
      .col-lg-5
        figure
          img(src='@/assets/curso/temas/tema1/12.png', alt='Imagen decorativa')(data-aos="fade-up")

    .titulo-sexto.color-acento-contenido.mb-4.z-10
      h5 Tabla 1.
      span Definición y función del bloque de cilindros

    .tabla-a.color-acento-contenido.z-10
      table
        caption <strong>Fuente.</strong> Sena, 2025
        thead
          tr(style="background-color: #F2D6D3;")
            th Material
            th Ventajas
            th Desventajas
        tbody
          tr(style="background-color: #FFFFFF;")
            td Fundición de Hierro
            td Alta resistencia al desgaste, buena absorción de vibraciones y menor costo.
            td Mayor peso, menor conductividad térmica y susceptibilidad a la oxidación.
          tr(style="background-color: #FFFFFF;")
            td Aleaciones de aluminio
            td Menor peso, mayor conductividad térmica y buena resistencia a la oxidación.
            td Tiene menor resistencia al desgaste, por lo que requiere camisas. Su costo puede ser potencialmente mayor.

    Separador

    .fullwith-bg.fullwith-bg--3.d-none.d-xl-block
    #t_1_3(data-aos='zoom-in-right').titulo-segundo.color-acento-contenido
      h3 1.3	Fallas comunes en el bloque de cilindros y su diagnóstico

    p A pesar de su diseño robusto, el bloque de cilindros puede experimentar diversas fallas a lo largo de la vida útil del motor. La identificación y el diagnóstico temprano de estas fallas son cruciales para prevenir daños mayores y reparaciones costosas.
    p Algunas de las fallas y métodos de detección incluyen:

    .fullwith-bg.fullwith-bg--4.d-none.d-xl-block
    .row.justify-content-center.align-items-center.z-10.mb-4.mb-lg-5
      .col-10.col-lg-8
        .titulo-sexto.color-acento-contenido.mb-4
          h5 Figura 3.
          span Termografía de puntos críticos en el bloque
        img(data-aos="fade-up")(src="@/assets/curso/temas/tema1/15.jpg", alt="Termografía en un motor")
        figcaption Fuente SENA 2025




</template>

<script>
export default {
  name: 'Tema1',
  data: () => ({
    mostrarIndicadorTarjetaAudio: true,
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
