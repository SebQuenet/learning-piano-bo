import React from 'react';
import t from 'prop-types';

import classes from './Header.module.scss';

const Header = ({ inputs, setSelectedMidiId }) => (
  <header className={classes.header}>
    🎹 Learning Piano
    <nav>
      <a href="/">Home</a>
      <select
        onChange={(e) => {
          setSelectedMidiId(e.target.value);
        }}
      >
        {inputs?.map((input) => (
          <option key={input.id} value={input.id}>
            {input.name}
          </option>
        ))}
      </select>
    </nav>
  </header>
);

Header.propTypes = {
  inputs: t.arrayOf(t.any).isRequired,
  setSelectedMidiId: t.func.isRequired,
};

export default Header;
