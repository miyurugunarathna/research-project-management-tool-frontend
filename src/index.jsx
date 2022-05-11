import { createRoot } from "react-dom/client";
import { App } from "./app.jsx";
import { Provider } from "react-redux";
import store from "./store/index.js";
import "./styles.css";

const app = document.getElementById("app");
const root = createRoot(app);

root.render(
  <Provider store={store}>
    <App />
  </Provider>,
);
