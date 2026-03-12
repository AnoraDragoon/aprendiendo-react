import "./App.css";
import { lazy, Suspense } from "react";

import { Router } from "./router";
import { Route } from "./route";

import HomePage from "./pages/home";
import Page404 from "./pages/404";

const TestPage = lazy(() => import("./pages/test"));
const AboutPage = lazy(() => import("./pages/about"));
const Searchpage = lazy(() => import("./pages/search"));

const routes = [
  {
    path: "/",
    Component: HomePage,
  },
  {
    path: "/search/:query",
    Component: Searchpage,
  },
];

function App() {
  return (
    <main>
      <Suspense fallback={<div>Loading...</div>}>
        <Router routes={routes} defaultComponent={Page404}>
          <Route path="/:lang/about" Component={AboutPage} />
          <Route path="/test" Component={TestPage} />
        </Router>
      </Suspense>
    </main>
  );
}

export default App;
