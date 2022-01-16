import { useState } from 'react';
import { withProps } from 'recompose';
import { useMIDI, useMIDINote } from '@react-midi/hooks';

export default withProps(() => {
  const { inputs } = useMIDI();
  const [selectedMidiId, setSelectedMidiId] = useState(inputs[0]?.id);
  const midiController = inputs.find((input) => input.id === selectedMidiId);
  const event = useMIDINote(midiController);

  return {
    inputs,
    setSelectedMidiId,
    midiController,
    event,
  };
});
