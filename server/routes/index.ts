import { Router } from 'express';
import glob from 'glob';

export function registerRoutes(router: Router) {
  const dir = (__dirname + '/**/*.route.*').replace(/\\/g, '/');
  const routes = glob.sync(dir);
  routes.map(route => register(route, router));
  return routes;
}

function register(routePath: string, app: Router) {
  const route = require(routePath);
  route.register(app);
}
