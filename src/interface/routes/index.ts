import { authRoutes } from './auth.routes';
import { usersRoutes } from './users.routes';

export const routes = [
  {
    routeManager: authRoutes,
    prefix: '/auth'
  },
  {
    routeManager: usersRoutes,
    prefix: '/users',
  },
];
