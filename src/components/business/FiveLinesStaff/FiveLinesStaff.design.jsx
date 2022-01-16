import React from 'react';
import t from 'prop-types';

import { gScaleNotes } from 'constants/scaleNotes';
import classes from './FiveLinesStaff.module.scss';

const FiveLinesStaff = ({ scaleIndex, scaleKey }) => (
  <div className={classes.fiveLinesStaffWrapper}>
    <span className={classes.fiveLinesStaff}>
      𝄀𝄚𝄚𝄚𝄚𝄚𝄚𝄚𝄚𝄚𝄚𝄚𝄚<span className={classes.endBar}>𝄂</span>
    </span>
    <span className={classes.gClef}>{scaleKey}</span>
    {gScaleNotes[scaleIndex]?.component()}
  </div>
);

FiveLinesStaff.propTypes = {
  scaleIndex: t.number.isRequired,
  scaleKey: t.string.isRequired,
};

export default FiveLinesStaff;
