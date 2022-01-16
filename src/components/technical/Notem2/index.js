import React from 'react';

import classes from "./Notem2.module.scss"

const Notem2 = () => <span className={classes.note}>
    <span className={classes.staff}>____</span>
    <span className={classes.innerNote}>♩</span>
  </span>

export default Notem2;