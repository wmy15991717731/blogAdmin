import React, { FC } from 'react';
import {
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import { RouteComponentProps } from 'react-router';
import routes from './routes';

const Order: FC<RouteComponentProps> = ({ match }) => {
  const basePath = match.path;
  console.log(basePath)
  return (
        <Switch>
          {
            routes.map(({ path, ...args }) => (
              <Route path={`${basePath}${path}`} {...args} />
            ))
          }
          <Redirect to={{ pathname: `/index` }} />
        </Switch>
  );
};

export default Order;