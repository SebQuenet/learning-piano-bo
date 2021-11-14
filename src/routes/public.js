import React from 'react';
import { Page404 } from 'components';

export default [
  {
    path: '/',
    exact: true,
    component: () => <div>Hello home !</div>,
  },
  {
    path: '*',
    exact: false,
    component: Page404,
  },
];
