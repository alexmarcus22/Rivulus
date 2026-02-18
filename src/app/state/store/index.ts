import { configureStore } from "@reduxjs/toolkit";
import { healthSlice } from "../slices/healthSlice";

export const store = configureStore({
	reducer: {
		healthSlice: healthSlice.reducer,
	},
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
