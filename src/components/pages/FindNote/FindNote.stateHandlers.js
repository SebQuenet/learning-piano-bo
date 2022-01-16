import { withStateHandlers } from 'recompose';

const noteGLevel = () => Math.floor(Math.random() * 12);
const noteFLevel = () => Math.floor(Math.random() * 12);

const initialState = (props) => ({
  selectedMidiId: props.inputs[0]?.id,
  nextScaleIndex: noteGLevel(),
  score: 0,
  timer: 45,
  noteGLevel,
  noteFLevel,
});

const handlers = {
  setNextScaleIndex: () => () => ({ nextScaleIndex: noteGLevel() }),
  setScore: () => (score) => ({ score }),
  setTimer: () => (timer) => ({ timer }),
};

export default withStateHandlers(initialState, handlers);
