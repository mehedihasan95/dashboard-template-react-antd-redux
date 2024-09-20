import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";
import authReducer from "./features/authSlice";
import api from "./api/api";
import themeReducer from "./features/themeSlice";

const persistConfig = {
  key: "ROOT_WEB_NAME",
  storage,
  whitelist: ["auth", "theme"],
};

const rootReducer = combineReducers({
  [api.reducerPath]: api.reducer,
  auth: authReducer,
  theme: themeReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }).concat(api.middleware),
  devTools: process.env.NODE_ENV !== "production",
});

export const persistor = persistStore(store);
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
