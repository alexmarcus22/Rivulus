import { io } from "socket.io-client";

const URL = process.env.NODE_ENV === "production" ? undefined : "http://localhost:8000";

export const socket = io(URL, {
	path: "/ws/socket.io",
	transports: ["websocket", "polling"],
	withCredentials: true,
	autoConnect: true,
	reconnection: true,
	reconnectionAttempts: Infinity,
	reconnectionDelay: 3000, // Wait 3 seconds between attempts
	reconnectionDelayMax: 10000, // Max 10 seconds between attempts
	timeout: 5000,
});
