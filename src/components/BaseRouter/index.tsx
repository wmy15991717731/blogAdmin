import React, { FC, Suspense } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { IProps } from './interface';

const BaseRouters: FC<IProps> = ({ routes = [], basePath = '' }) => (
    <Suspense fallback={""}>
        <Switch>
            {routes.map(({ path, ...args }) => (
                <Route key={path} path={`${basePath}${path}`} {...args} />
            ))}
            <Redirect to={{ pathname: `${basePath}${routes[0].path}` }}/>
        </Switch>
    </Suspense>
)

export default BaseRouters;