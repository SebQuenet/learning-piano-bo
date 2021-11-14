import React from 'react';

import css from './Page404.module.scss';

const Page404 = () => (
  <div className={css.Box}>
    <div className={css.Content}>
      <h1 className={css.Title}>Page not found</h1>
      <p className={css.Description}>The page you requested does not exist.</p>
    </div>
  </div>
);

export default Page404;
