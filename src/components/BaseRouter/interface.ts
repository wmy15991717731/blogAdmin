import { RouteProps } from 'react-router';

export interface IProps {
    readonly routes: RouteProps[];
    readonly basePath?: string;
}