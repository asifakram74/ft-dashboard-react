import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { I18nextProvider } from "react-i18next";
import i18n from "./i18n";
import App from "./App";
import { Provider } from "react-redux";
import { store } from "./store/configureStore";
import axios from "axios";
import "./assets/css/test.css";

// import { store, persistor } from "./store/configureStore";
// import { PersistGate } from "redux-persist/integration/react";

// axios.interceptors.response.use((response) => {
//   console.log("axios Response Interceptors");
//   return response;
// });

ReactDOM.render(
  <>
    {/* <Suspense fallback={<div>Loading......</div>}> */}
    <Provider store={store}>
      {/* <PersistGate loading={null} persistor={persistor}> */}
      <I18nextProvider i18n={i18n}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </I18nextProvider>
      {/* </PersistGate> */}
    </Provider>
    {/* </Suspense> */}
  </>,
  document.getElementById("root")
);
