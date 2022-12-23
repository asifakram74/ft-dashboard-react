// import { createStore, applyMiddleware, compose } from "redux";
// import { persistStore, persistReducer } from "redux-persist";
// import thunk from "redux-thunk";
// import rootReducer from "./reducers";
// import storage from "redux-persist/lib/storage";

// const persistConfig = {
//   key: "reducer",
//   storage,
//   blacklist: ["loginReducer"],
// };
// const presistedReducer = persistReducer(persistConfig, rootReducer);
// const composeEnhancers =
//   process.env.NODE_ENV === "development"
//     ? // process.env.NODE_ENV === "server"
//       window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
//     : null || compose;

// const store = createStore(
//   presistedReducer,
//   composeEnhancers(applyMiddleware(thunk))
// );
// const persistor = persistStore(store);
// export { persistor, store };

import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import rootReducer from "./reducers";

const composeEnhancers =
  // process.env.NODE_ENV === "development"
  process.env.NODE_ENV === "server"
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    : null || compose;
const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk))
);
export { store };
