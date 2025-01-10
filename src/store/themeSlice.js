import { createSlice } from '@reduxjs/toolkit';

const getThemeFromLocal = () => {
  try {
    const theme = localStorage.getItem('theme');
    if (theme) {
      return JSON.parse(theme); 
    }
  } catch (error) {
    console.error('Error getting theme from local storage:', error);
  }
  return false;
};

export const themeSlice = createSlice({
  name: 'theme',
  initialState: {
    value: getThemeFromLocal(), 
  },
  reducers: {
    toggleTheme: (state) => {
      state.value = !state.value;
    },
    setTheme: (state, action) => {
      state.value = action.payload;
    }
  },
});

export const { toggleTheme, setTheme } = themeSlice.actions;

export default themeSlice.reducer;
