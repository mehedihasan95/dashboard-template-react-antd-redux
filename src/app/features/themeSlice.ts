import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";

export const themePresets: ThemeStateType[] = [
  {
    mode: "light",
    name: "Default",
    siderBg: "#FFFFFF",
    headerBg: "#FFFFFF",
    itemBg: "#FFFFFF",
    colorPrimary: "#664DC9",
  },
  {
    mode: "dark",
    name: "Dark",
    siderBg: "#1F1F1F",
    headerBg: "#000000",
    itemBg: "#1F1F1F",
  },
  {
    mode: "light",
    name: "Blossom",
    siderBg: "#FDE4DF",
    headerBg: "#FFFFFF",
    itemBg: "#FDE4DF",
    colorPrimary: "#f14927",
  },
  {
    mode: "light",
    name: "Forest",
    siderBg: "#C4F4E6",
    headerBg: "#FFFFFF",
    itemBg: "#C4F4E6",
    colorPrimary: "#3ddbac",
  },
  {
    mode: "light",
    name: "Sky",
    siderBg: "#D1F0F9",
    headerBg: "#FFFFFF",
    itemBg: "#D1F0F9",
    colorPrimary: "#34bee5",
  },
  {
    mode: "light",
    name: "Ocean",
    siderBg: "#CCDBFA",
    headerBg: "#FFFFFF",
    itemBg: "#CCDBFA",
    colorPrimary: "#2e6dea",
  },
  {
    mode: "light",
    name: "Hot Pink",
    siderBg: "#FEDFF8",
    headerBg: "#FFFFFF",
    itemBg: "#FEDFF8",
    colorPrimary: "#f820cd",
  },
];

type ThemeStateType = {
  mode: "dark" | "light";
  fontFamily?: string;
  fontSize?: number;
  colorPrimary?: string;

  name: string;
  siderBg: string;
  headerBg: string;
  itemBg: string;

  // BUTTON COLOR
  viewBtn?: string;
  editBtn?: string;
  deleteBtn?: string;
};

const initialState: ThemeStateType = {
  ...themePresets[0],
  mode: "light",
  fontFamily: "Roboto, sans-serif",
  fontSize: 14,

  viewBtn: "#38CB89",
  editBtn: "#FFAB00",
  deleteBtn: "#EF4B4B",
};

const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    toggleTheme: (state, { payload }: PayloadAction<ThemeStateType>) => {
      return { ...state, ...payload };
    },
  },
});

export const ThemeState = (state: RootState) => state.theme;

export const { toggleTheme } = themeSlice.actions;

export default themeSlice.reducer;
