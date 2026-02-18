import axios from "axios";
/**
 * Axios instance configured for your app.
 * - baseURL: same-origin by default; set VITE_API_URL for cross-origin prod calls
 * - timeout: default 5s
 * - withCredentials: enable if you use cookies/sessions
 */

export const http = axios.create({
	baseURL: import.meta.env.VITE_API_URL || "", // empty -> same-origin
	timeout: 5000,
	// withCredentials: true, // uncomment if using cookies
});

// Optional: response interceptor to always return data
http.interceptors.response.use(
	(res) => res,
	(err): Promise<unknown> => Promise.reject(err)
);
