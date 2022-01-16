import React, { useState, useEffect, useRef } from 'react';
import t from 'prop-types';

import MIDISounds from 'midi-sounds-react';
import { Header, FiveLinesStaff, Interstaves } from 'components';
import { fScaleNotes, gScaleNotes } from 'constants/scaleNotes';

import classes from './FindNote.module.scss';

// <div>𝄞♩♭♯𝄚</div>

const FindNote = (props) => {
  const { inputs, event, setSelectedMidiId, nextScaleIndex, setNextScaleIndex, score, setScore } = props;

  let midiSounds = useRef();
  const intervalRef = useRef();

  useEffect(() => {
    if (!event?.on) {
      // midiSounds.stopPlayLoop();
    }
    if (!event?.on) return;
    const note = midiSounds.playChordNow(3, [event?.note], 2.5);
    if (event.note === gScaleNotes[nextScaleIndex]?.noteNumber) {
      setScore(score + 1);
    }

    setNextScaleIndex();
  }, [event]);

  return (
    <div>
      <Header inputs={inputs} setSelectedMidiId={setSelectedMidiId} />
      <MIDISounds
        ref={(ref) => {
          midiSounds = ref;
          return midiSounds;
        }}
        appElementName="root"
        instruments={[3]}
      />

      <div className={classes.scoreWrapper}>
        <p className={classes.timer}>Temps: ?</p>
        <p className={classes.score}>Score : {score}</p>
      </div>

      <p style={{ display: 'flex', flexDirection: 'row' }}>
        <span className={classes.foreBracket}>𝄔</span>
        <div>
          <FiveLinesStaff scaleIndex={nextScaleIndex} scaleKey="𝄞" scaleNotes={gScaleNotes} />
          <Interstaves />
          <FiveLinesStaff scaleIndex={undefined} scaleKey="𝄢" scaleNotes={fScaleNotes} />
        </div>
      </p>
    </div>
  );
};

FindNote.propTypes = {
  inputs: t.arrayOf(t.any),  // eslint-disable-line
  event: t.any, // eslint-disable-line
  setSelectedMidiId: t.any, // eslint-disable-line  
  nextScaleIndex: t.number.isRequired,
  setNextScaleIndex: t.number.isRequired,
  score: t.number.isRequired,
  setScore: t.func.isRequired,
};

export default FindNote;
