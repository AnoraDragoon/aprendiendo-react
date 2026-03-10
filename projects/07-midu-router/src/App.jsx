import "./App.css";
import { HomePage } from "./pages/home";
import { AboutPage } from "./pages/about";
import Page404 from "./pages/404";

import { Router } from "./router";
import { Searchpage } from "./pages/search";
import { Route } from "./route";
import { TestPage } from "./pages/test";

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
      <Router routes={routes} defaultComponent={Page404}>
        <Route path="/about" Component={AboutPage} />
        <Route path="/test" Component={TestPage} />
      </Router>
    </main>
  );
}

export default App;
