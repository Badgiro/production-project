import { lazy } from "react";
export const MainPageAsync = lazy(() => new Promise(res=> {
    // @ts-ignore  // TS doesn't recognize import() as a module
    setTimeout(() => res(import('./MainPage')), 1000);
}));