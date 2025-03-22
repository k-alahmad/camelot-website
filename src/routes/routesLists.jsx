import { lazy } from "react";
export const publicRoutes = [
  { path: "/", element: lazy(() => import("../pages/home/index.jsx")) },
  {
    path: "/test",
    element: lazy(() => import("../pages/sampleTest/index.jsx")),
  },
];

export const protectedRoutes = [];
