import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { App } from "./app.jsx";
import store from "./store/index.js";
import "./styles.css";

const app = document.getElementById("app");
const root = createRoot(app);

root.render(
  <Provider store={store}>
    <App />
  </Provider>,
);
