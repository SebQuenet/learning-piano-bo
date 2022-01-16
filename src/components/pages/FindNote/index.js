import { compose } from 'recompose';
import withStateHandlers from './FindNote.stateHandlers';
import withMidi from './FindNote.withMidi';
import FindNote from './FindNote.design';

export default compose(
  withMidi,
  withStateHandlers,
)(FindNote);