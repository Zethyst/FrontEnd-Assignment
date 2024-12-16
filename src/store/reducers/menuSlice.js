import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  showMobileMenu: false,
  currentPage: "home",
};

const menuSlice = createSlice({
  name: "menu",
  initialState,
  reducers: {
    setShowMobileMenu(state, action) {
      state.showMobileMenu = action.payload;
    },
    setCurrentPage(state, action) {
      state.currentPage = action.payload;
    },
  },
});

export const { setShowMobileMenu, setCurrentPage } = menuSlice.actions;

export default menuSlice.reducer;
