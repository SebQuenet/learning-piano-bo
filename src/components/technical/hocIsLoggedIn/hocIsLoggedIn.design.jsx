import React from 'react';
import t from 'prop-types';
import { Route } from 'react-router-dom';

import { Page403 } from 'components';

const AdminRoute = (props) => {
  const { component: Component, ...routeAttributes } = props;
  const isAdmin = !!localStorage.getItem('token');
  return (
    <Route
      {...routeAttributes}
      render={() =>
        isAdmin ? <Component match={routeAttributes.computedMatch} location={routeAttributes.location} /> : <Page403 />
      }
    />
  );
};

AdminRoute.propTypes = { component: t.node.isRequired };

export default AdminRoute;
