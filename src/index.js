import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import {
  BrowserRouter,
  createBrowserRouter,
  HashRouter,
  Route,
  Routes,
  useRouteError,
  redirect,
} from "react-router-dom";

import { routesPages } from "./utils/routes";
import { buscarCadena } from "./utils/funciones";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import { PersistGate } from "redux-persist/integration/react";
import { persistStore } from "redux-persist";
import AlertMessage from "./components/widgets/AlertMessage";

const router = createBrowserRouter(routesPages);

const root = ReactDOM.createRoot(document.getElementById("root"));

const rutas = localStorage.getItem("MENUS_CODIFICADO");
const listaModulos = JSON.parse(window.atob(rutas));

const persistor = persistStore(store);

root.render(
  <React.StrictMode>
    {/* <RouterProvider router={router} />     buscarCadena(listaModulos, route.path)*/}
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <BrowserRouter basename="/">
          <Routes>
            {routesPages.map((route) => {
              if (/* buscarCadena(listaModulos, route.path) */ true) {
                return (
                  <Route
                    key={route.path}
                    path={route.path}
                    element={route.element}
                  />
                );
              }
            })}
          </Routes>
          <AlertMessage />
        </BrowserRouter>
      </PersistGate>
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(////console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
