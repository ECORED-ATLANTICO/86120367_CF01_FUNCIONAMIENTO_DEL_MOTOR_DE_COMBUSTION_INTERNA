<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    p A continuación, se presenta una visión general del componente formativo “Funcionamiento del bloque motor: cilindros y alojamientos de pistones". En este módulo se ofrece un análisis profundo de la estructura y funcionamiento del motor, abarcando desde la definición y función del bloque de cilindros y la selección de materiales, hasta el diagnóstico de fallas comunes. Se examinan detalladamente las camisas de cilindro, tanto secas como húmedas, destacando sus características, aplicaciones y métodos de mantenimiento. Además, se exploran los procesos de rectificación, que incluyen el desmontaje, la medición del desgaste y las técnicas de mecanizado y bruñido, fundamentales para restaurar la geometría original del cilindro y optimizar la lubricación. El componente también aborda el armado de pistones, describiendo la correcta instalación, ajuste y verificación del ensamblaje, así como el montaje y calibración del eje de levas, pieza clave en la sincronización de la apertura y cierre de las válvulas. Este análisis integral, que combina fundamentos teóricos y procedimientos prácticos, está orientado a garantizar el rendimiento, la durabilidad y la eficiencia del motor, promoviendo el mantenimiento preventivo y la corrección oportuna de fallas.
    .row.justify-content-center
      .mb-5.bgs.p-4.brad
        figure
          img(src="@/assets/curso/sintesis.svg", alt=`El componente formativo "Funcionamiento del bloque motor: cilindros y alojamientos de pistones" ofrece una aproximación integral a la comprensión de los elementos críticos que determinan el rendimiento del motor. A lo largo del curso se estudian desde la definición y función del bloque de cilindros, pasando por las características de las camisas secas y húmedas, hasta los procesos de rectificación, ensamblaje de pistones y montaje del eje de levas. El contenido profundiza en el diagnóstico de fallas, los métodos de mantenimiento y las técnicas de ajuste y calibración, elementos esenciales para garantizar la eficiencia, durabilidad y seguridad del motor. Se enfatiza la importancia de cada etapa en la optimización de la combustión, la retención del aceite lubricante y la sincronización de las válvulas. Se sugiere desarrollar un mapa mental que resuma estos elementos, evidenciando la interrelación entre la estructura del motor y los procesos de mantenimiento y reparación, lo cual facilita una visión integral y práctica de los procedimientos y estándares aplicados en el ámbito automotriz.`)
      .col-auto
        a.anexo.mb-5(:href="obtenerLink('/downloads/Sintesis.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/bullets/icono-pdf.svg")
          .anexo__texto
            p Anexo. Síntesis

</template>

<script>
export default {
  name: 'Sintesis',
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
