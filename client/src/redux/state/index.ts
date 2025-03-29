import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface InitialStateTypes {
	isSidebarCollapsed: boolean;
	isDarkMode: boolean;
	language: string;
}

const initialState: InitialStateTypes = {
	isSidebarCollapsed: false,
	isDarkMode: false,
	language: 'en'
};

export const globalSlice = createSlice({
	name: 'global',
	initialState,
	reducers: {
		setIsSidebarCollapsed: (state, action: PayloadAction<boolean>) => {
			state.isSidebarCollapsed = action.payload;
		},
		setIsDarkMode: (state, action: PayloadAction<boolean>) => {
			state.isDarkMode = action.payload;
		},
		toggleLanguage: (state) => {
			state.language = state.language === 'en' ? 'bg' : 'en';
		}
	}
});

export const { setIsSidebarCollapsed, setIsDarkMode, toggleLanguage } =
	globalSlice.actions;

export default globalSlice.reducer;
