<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno(icono="far fa-question-circle" titulo="Actividad didáctica")
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5
  
      #Actividad                
        <Actividad :cuestionario="cuestionario"/>
  
  </template>

<script>
import Actividad from 'ecored-pkg-fliz/plugin/components/actividad/Actividad.vue'
export default {
  name: 'ActividadDidactica',
  components: {
    Actividad,
  },
  data: () => ({
    cuestionario: {
      tema:
        'Evaluación Integral sobre el funcionamiento del bloque motor: cilindros y pistones.',
      titulo: 'Cuestionario',
      introduccion:
        '<b> Objetivo:</b> Comprender el funcionamiento del bloque motor, con un enfoque en los cilindros y alojamientos de los pistones, para optimizar su rendimiento mecánico.',
      barajarPreguntas: true,
      titulo_aprobado: '¡BUEN TRABAJO!..',
      titulo_reprobado: 'VUELVA A INTENTARLO..',
      preguntas: [
        {
          id: 1,
          texto: '¿Cuál es la función principal de los cilindros en un motor?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Lubricar las piezas internas.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Transferir el combustible al tanque.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Facilitar el desplazamiento del pistón para generar potencia.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Enfriar el motor.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 2,
          texto:
            '¿De qué material suelen estar hechos los cilindros del motor?',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Plástico.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Aluminio o hierro fundido.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Cobre.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Madera.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 3,
          texto: '¿Qué componente se mueve dentro del cilindro?',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'La válvula.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'El pistón.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'El árbol de levas.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'El cárter.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 4,
          texto: '¿Cuál es la finalidad del alojamiento del pistón?',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Proteger el sistema de transmisión.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Asegurar la lubricación.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Proporcionar espacio para el movimiento del pistón.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Controlar la mezcla de aire y combustible.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 5,
          texto:
            '¿Cómo se denomina el proceso en el que el pistón baja en el cilindro?',
          imagen: require('@/assets/actividad/imagen5.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Compresión.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Admisión.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Expulsión.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Escape.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 6,
          texto:
            '¿Qué tipo de movimiento realiza el pistón dentro del cilindro?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Circular.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Lineal alternativo.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Oscilante.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Rotatorio.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 7,
          texto: '¿Qué sucede en el ciclo de compresión del pistón?',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Se inyecta el combustible.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Se cierra la válvula de escape.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Se comprime la mezcla de aire y combustible.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Se expulsa el aire.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 8,
          texto: '¿Qué sucede cuando hay desgaste en los cilindros?',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Aumenta la eficiencia del motor.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Se produce una fuga de gases.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Se reduce el consumo de aceite.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'El pistón se vuelve más eficiente.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 9,
          texto:
            '¿Cómo se denomina el conjunto formado por el pistón, las bielas y el cigüeñal?',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Tren de válvulas.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Tren alternativo.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Sistema de encendido.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Colector de escape.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 10,
          texto: '¿Qué material es comúnmente usado en los pistones modernos?',
          imagen: require('@/assets/actividad/imagen5.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Aluminio.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Bronce.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Plástico reforzado.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Acero inoxidable.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 11,
          texto:
            '¿Qué consecuencia tiene un mal ajuste entre pistón y cilindro?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Mejor lubricación.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Pérdida de potencia del motor.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Aumento en la eficiencia de la combustión.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Reducción del ruido del motor.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 12,
          texto:
            '¿Qué elemento se encarga de transformar el movimiento lineal del pistón en movimiento rotatorio?',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Árbol de levas.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Cigüeñal.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Bujía.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Volante motor.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 13,
          texto: '¿Qué función cumple el cigüeñal en el motor?',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Regular la temperatura del motor.adero',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Convertir el movimiento alternativo en rotatorio.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Abrir las válvulas de admisión.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Impulsar el sistema de refrigeración.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 14,
          texto: '¿Qué puede causar un daño en el bloque motor?',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Mala lubricación y sobrecalentamiento.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Combustible de alta calidad.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Un ajuste correcto de los aros del pistón.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Un buen sistema de escape.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 15,
          texto: '¿Qué puede causar un exceso de presión en los cilindros?',
          imagen: require('@/assets/actividad/imagen5.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Mayor eficiencia del motor.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Daños en las juntas de culata.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Aumento en la velocidad del pistón.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Reducción de la temperatura.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 16,
          texto: '¿Cuál es el objetivo de los aros del pistón?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Reducir la fricción entre pistón y cilindro.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Sellar el paso de gases y evitar pérdidas.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Sostener el cigüeñal.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Enfriar el pistón.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 17,
          texto:
            '¿Cuál es una posible causa del mal funcionamiento de los cilindros?',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Bajo nivel de aceite.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Exceso de aire en la mezcla.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Alta temperatura en el sistema de escape.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Lubricación excesiva.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 18,
          texto: '¿Qué puede causar un pistón roto?',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Sobrecalentamiento del motor.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Exceso de presión de combustible.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Un mal ajuste del cigüeñal.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Sistema de encendido defectuoso.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 19,
          texto:
            '¿Qué puede causar un desgaste prematuro en los segmentos del pistón?',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Mala lubricación.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Combustible de baja calidad.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Alta temperatura en la cámara de combustión.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Exceso de aire en la mezcla.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 20,
          texto: '¿Cuál es el objetivo de la culata del motor?',
          imagen: require('@/assets/actividad/imagen5.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Aumentar la velocidad del pistón.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Cerrar la cámara de combustión.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Impulsar el cigüeñal.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Regular la mezcla de aire y combustible.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
      ],
      mensaje_final_aprobado:
        '¡Excelente! Lo felicito, ha superado la actividad y demuestra sólidos conocimientos sobre el componente formativo.',
      mensaje_final_reprobado:
        'No ha superado la actividad. Le recomendamos volver a revisar el componente formativo e intentar nuevamente la actividad didáctica.',
    },
  }),
}
</script>
