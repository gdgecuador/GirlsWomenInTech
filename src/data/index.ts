
export { speakers } from './speakers';
export { schedule } from './schedule';

import type { Speaker } from '../types';

export const getModalId = (speaker: Speaker) => {
  return 'modal-' + speaker.name.split(' ').join('-');
};
