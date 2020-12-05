import { lazy } from 'react';
import { RouteProps } from 'react-router';

const Admin = lazy(() => import(/* webpackChunkName: 'admin' */ '../pages/Admin/Layout'));
const User = lazy(() => import(/* webpackChunkName: 'User' */ '../pages/User/Layout'));
const Login = lazy(() => import(/* webpackChunkName: 'login' */ '../pages/Admin/Login'));

const routes: RouteProps[] = [
    {
        path: "/user",
        component: User,
    }, {
        path: "/admin",
        component: Admin,
    },{
        path: "/login",
        component: Login
    }, 
]

export default routes;