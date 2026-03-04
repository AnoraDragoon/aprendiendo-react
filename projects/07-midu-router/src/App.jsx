import "./App.css";
import { HomePage } from "./pages/home";
import { AboutPage } from "./pages/about";
import Page404 from "./pages/404";

import { Router } from "./router";
import { Searchpage } from "./pages/search";

const routes = [
  {
    path: "/",
    Component: HomePage,
  },
  {
    path: "/about",
    Component: AboutPage,
  },
  {
    path: "/search/:query",
    Component: Searchpage,
  },
];

function App() {
  return (
    <main>
      <Router routes={routes} defaultComponent={Page404} />
    </main>
  );
}

export default App;
