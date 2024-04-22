import type { Talk } from '../types';
import * as Speakers from './speakers';

export const schedule:Talk[] = [
  {
    time: '09:00 AM',
    title: 'Bienvenida.',
    description: 'Bienvenida al evento.',
    speaker: Speakers.speakerOlga,
  },
  {
    time: '09:30 AM',
    title: 'Keynote.',
    description: 'Facere provident incidunt quos voluptas.',
    speaker: Speakers.speakerOlga
  },
  {
    time: '10:00 AM',
    title: 'Et voluptatem iusto dicta nobis.',
    description: 'Veniam accusantium laborum nihil',
    speaker: Speakers.speakerOlga
  },
  {
    time: '10:30 AM',
    title: 'Explicabo et rerum quis et ut ea.',
    description: 'Veniam accusantium laborum nihil eos eaque accusantium aspernatur.',
    speaker: Speakers.speakerOlga,
  },
  {
    time: '11:00 AM',
    title: 'Qui non qui vel amet culpa sequi.',
    description: 'Nam ex distinctio voluptatem doloremque suscipit iusto.',
    speaker: Speakers.speakerOlga
  },
  {
    time: '11:30 AM',
    title: 'Quos ratione neque expedita asperiores.',
    description: 'Eligendi quo eveniet est nobis et ad temporibus odio quo.',
    speaker: Speakers.speakerOlga
  },
  {
    time: '12:00 PM',
    title: 'Quo qui praesentium nesciunt',
    description: 'Voluptatem et alias dolorum est aut sit enim neque veritatis.',
    speaker: Speakers.speakerOlga,
  },
];
