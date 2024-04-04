import { lazy } from "react"

export const MainPageAsync = lazy(() => import('./Main'))

export const TestPageAsync = lazy(() => import('./Test'))
