import React from 'react';
import { Link } from 'react-router-dom';

import css from './Page403.module.scss';

const Page403 = () => (
  <div className={css.Box}>
    <div className={css.Content}>
      <h1 className={css.Title}>Authorization required</h1>
      <div className={css.Description}>
        <p>You should be logged as an admin to see this page.</p>
        <div>
          <Link to="/">
            <button type="button">Log in</button>
          </Link>
        </div>
      </div>
    </div>
  </div>
);

export default Page403;
