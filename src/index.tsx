/* @refresh reload */
import { render } from "solid-js/web";
import { Router } from "solid-app-router";
import "bootstrap/dist/css/bootstrap.min.css";

import App from "./App";

render(
  () => (
    <Router>
      <App />
    </Router>
  ),
  document.getElementById("root") as HTMLElement
);
