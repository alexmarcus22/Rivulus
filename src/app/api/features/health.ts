import { http } from "@/api/axios";

export type HealthStatusResponse = { status: boolean; message?: string; at?: string };

export const fetchHealthStatus = async (): Promise<HealthStatusResponse> => {
	try {
		const response = await http.get<HealthStatusResponse>("/api/health");
		return response.data;
	} catch (error) {
		throw error;
	}
};
