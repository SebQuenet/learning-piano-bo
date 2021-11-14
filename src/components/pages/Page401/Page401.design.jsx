import React from 'react';
import { Link } from 'react-router-dom';

import css from './Page401.module.scss';

const Page401 = () => (
  <div className={css.Box}>
    <div className={css.Content}>
      <h1 className={css.Title}>Authorization required</h1>
      <div className={css.Description}>
        <p>You should be logged to see this page.</p>
        <div>
          <Link to="/">
            <button type="button">Log in</button>
          </Link>
        </div>
      </div>
    </div>
  </div>
);

export default Page401;
