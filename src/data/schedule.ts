import type { Talk } from '../types';
import * as Speakers from './speakers';

export const schedule:Talk[] = [
  {
    time: '09:30 AM',
    title: 'Bienvenida.',
    description: 'Bienvenida al evento.',
    speaker: Speakers.speakerJoangie,
  },
  {
    time: '09:45 AM',
    title: 'Conoce UX Research y sus metodologías.',
    description: 'La experiencia del usuario ha sido el foco de las estrategias del e-commerce para construir un viaje de compra fluido y eficiente para el usuario final, y dentro de esta área hay varias especializaciones que trabajan para entregar un buen trabajo de UX, una de ellas es UX Research.',
    speaker: Speakers.speakerOlga
  },
  {
    time: '10:30 AM',
    title: 'Construyendo caminos: Mujeres en la tecnología financiera.',
    description: 'Zully nos comparte su experiencia, desde sus inicios como estudiante de instituciones públicas y trabajadora al mismo tiempo hasta su posición actual como Tech Manager en una empresa internacional, con el objetivo de inspirar y motivar a otras mujeres que estén interesadas en seguir una carrera en el ámbito de la tecnología y fintech. A través de su historia, Zully busca transmitir lecciones aprendidas, desafíos superados, logros alcanzados y consejos prácticos para empoderar a las mujeres en el sector tech.',
    speaker: Speakers.speakerZully,
  },
  {
    time: '11:00 AM',
    title: 'El Poder de los Datos: Cómo el Análisis de Datos Impulsa la Toma de Decisiones.',
    description: 'Exploraremos cómo el análisis de datos puede transformar la forma en que tomamos decisiones y cómo esto está moldeando el mundo actual. Marta nos compartirá su experiencia como analista de datos y destacará la importancia creciente de esta disciplina en diversas industrias.',
    speaker: Speakers.speakerMartha,
  },
  {
    time: '11:30 AM',
    title: 'Mujeres en Ciberseguridad.',
    description: 'Sofía nos mostrará diferentes áreas, aplicaciones y oportunidades en el mundo de la ciberseguridad.',
    speaker: Speakers.speakerSofia,
  },
  {
    time: '11:50 AM',
    title: 'Construyendo Futuros Brillantes: Niñas y Mujeres en la Era de la Robótica Educativa.',
    description: 'Exploraremos cómo la introducción temprana de las niñas en el mundo de la robótica en la educación primaria y secundaria puede tener un impacto significativo en su desarrollo personal y profesional. Desde la desmitificación de los estereotipos de género en STEAM hasta el fortalecimiento del apoyo de los padres y la comunidad. Esta charla aborda cómo la participación en actividades de robótica puede empoderar a las niñas, brindándoles las herramientas y la confianza necesarias para forjar carreras exitosas en tecnología. A través de historias inspiradoras, datos impactantes y estrategias prácticas, exploraremos juntos cómo construir un futuro más inclusivo y equitativo.',
    speaker: Speakers.speakerAndrea,
  },
  {
    time: '12:20 PM',
    title: 'Mis primeros pasos en Tech.',
    description: 'Valeria nos hablará de su experiencia explorando los desafíos comunes en los primeros trabajos en tecnología, con especial énfasis en cómo estos pueden ser más evidentes para las mujeres. Se abordarán temas como el síndrome del impostor y la discriminación de género, proporcionando estrategias para manejar y superar estos obstáculos.',
    speaker: Speakers.speakerValeria,
  },
];
