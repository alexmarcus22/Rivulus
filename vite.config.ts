/// <reference types="vitest" />
import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react-swc";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";

// https://vitejs.dev/config https://vitest.dev/config
export default defineConfig(({ mode }) => {
	const modeEnv = process.env.NODE_ENV || mode;
	const isProduction = modeEnv === "production";
	return {
		plugins: [
			tailwindcss(),
			react(),
			tsconfigPaths({
				root: "./",
			}),
		],
		server: isProduction
			? undefined
			: {
					proxy: {
						"/api": {
							target: "http://localhost:8000",
							changeOrigin: true,
							rewrite: (path) => path.replace(/^\/api/, ""),
						},
					},
				},
		css: {
			postcss: "./postcss.config.mjs",
			devSourcemap: true,
		},
		test: {
			globals: true,
			environment: "happy-dom",
			setupFiles: ".vitest/setup",
			include: ["**/test.{ts,tsx}"],
		},
	};
});
