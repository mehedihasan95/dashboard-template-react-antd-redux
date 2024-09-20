import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import MyApp from "./MyApp.tsx";
import "./index.css";
import { HelmetProvider } from "react-helmet-async";
import { Provider } from "react-redux";
import store, { persistor } from "./app/store.ts";
import { PersistGate } from "redux-persist/integration/react";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <HelmetProvider>
          <MyApp />
        </HelmetProvider>
      </PersistGate>
    </Provider>
  </StrictMode>
);
