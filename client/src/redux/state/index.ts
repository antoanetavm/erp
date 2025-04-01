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
		setNewlanguage: (state, action: PayloadAction<string>) => {
			state.language = action.payload;
		}
	}
});

export const { setIsSidebarCollapsed, setIsDarkMode, setNewlanguage } =
	globalSlice.actions;

export default globalSlice.reducer;
