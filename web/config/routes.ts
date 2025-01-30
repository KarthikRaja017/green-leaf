import { includeGLRoutes } from './glroutes';

export default [
  {
    name: 'login',
    path: '/main',
    layout: false,
    component: './main',
  },
  includeGLRoutes,
];
