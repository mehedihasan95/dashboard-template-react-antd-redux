import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";
import api from "./api/api";
import authSlice from "./features/authSlice";
import themeSlice from "./features/themeSlice";
import notificationSlice from "./features/notificationSlice";
import { useDispatch, useSelector, TypedUseSelectorHook } from "react-redux";

const persistConfig = {
  key: "ROOT_WEB_NAME",
  storage,
  whitelist: ["auth", "theme"],
};

const rootReducer = combineReducers({
  [api.reducerPath]: api.reducer,
  auth: authSlice,
  theme: themeSlice,
  notification: notificationSlice,
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

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export default store;
