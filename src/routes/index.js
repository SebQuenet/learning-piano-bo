import React from 'react';
import { Route, Switch } from 'react-router-dom';

import { AdminRoute } from 'components';

import adminRoutes from './admin';
import publicRoutes from './public';

const routes = [
  ...adminRoutes.map((route) => ({ ...route, CustomRoute: AdminRoute })),
  ...publicRoutes.map((route) => ({ ...route, CustomRoute: Route })),
];

const Routes = () => (
  <Switch>
    {routes.map(({ path, exact, component, CustomRoute }) => (
      <CustomRoute key={path} path={path} exact={exact} component={component} />
    ))}
  </Switch>
);

export default Routes;
