import { fetchHealthStatus } from "@/api/features/health";
import { createAsyncThunk, createSlice, type PayloadAction } from "@reduxjs/toolkit";

export type HealthStatus = { status: boolean; message?: string; at?: string };

type HealthState = {
	status: HealthStatus | null;
};

// Initial state
const initialState: HealthState = {
	status: null,
};

export const fetchHealthStatusAsync = createAsyncThunk<HealthStatus, void>(
	"health/fetchHealthStatus",
	async (): Promise<HealthStatus> => {
		const response = await fetchHealthStatus();
		return response;
	}
);

// Slice
export const healthSlice = createSlice({
	name: "health",
	initialState,
	reducers: {
		setHealthStatus: (state, action: PayloadAction<HealthStatus>): void => {
			state.status = action.payload;
		},
	},
	extraReducers: (builder): void => {
		builder
			.addCase(fetchHealthStatusAsync.pending, (state): void => {
				state.status = null;
			})
			.addCase(fetchHealthStatusAsync.fulfilled, (state, action): void => {
				state.status = action.payload;
			})
			.addCase(fetchHealthStatusAsync.rejected, (state, action): void => {
				state.status = null;
			});
	},
});

// Action creators are generated for each case reducer function
export const { setHealthStatus } = healthSlice.actions;
export default healthSlice.reducer;
