import { HomePage } from "pages/Home";
import { RouteProps } from "react-router-dom";

export enum AppRoutes {
  HOME = 'home',
}

export const RoutePath: Record<AppRoutes, string> = {
  [AppRoutes.HOME]: '/',
};

export const routeConfig: Record<AppRoutes, RouteProps> = {
  [AppRoutes.HOME]: {
    path: RoutePath.home,
    element: <HomePage />
  }
}