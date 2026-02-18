import { useEffect, useRef } from "react";

import { useSocket } from "@/app/providers/socket";
import { useToast } from "@/app/providers/toast";

/**
 * Hook that connects socket events to toast notifications
 * Automatically shows toasts when socket connection status changes
 */
export const useSocketToast = () => {
	const socket = useSocket();
	const { addToast, clearToasts } = useToast();
	const wasConnectedRef = useRef(false);
	const hasShownInitialConnectionRef = useRef(false);
	const hasShownErrorRef = useRef(false);

	useEffect(() => {
		if (!socket) return;

		const handleConnect = () => {
			// Show toast on successful connection (including initial)
			if (!hasShownInitialConnectionRef.current) {
				// First time connecting - don't show toast
				hasShownInitialConnectionRef.current = true;
			} else {
				// Reconnected after disconnect or after error
				clearToasts(); // Clear any "disconnected" or "unable to connect" toasts
				addToast({
					message: "Connected to server",
					type: "success",
					duration: 3000,
				});
			}
			wasConnectedRef.current = true;
			hasShownErrorRef.current = false;
		};

		const handleDisconnect = () => {
			// Only show toast if we were previously connected
			if (wasConnectedRef.current) {
				addToast({
					message: "Disconnected from server",
					type: "error",
					duration: 0, // Don't auto-close disconnect messages
				});
			}
			wasConnectedRef.current = false;
		};

		const handleConnectError = () => {
			// Show error toast only once if initial connection fails
			if (!hasShownErrorRef.current && !hasShownInitialConnectionRef.current) {
				addToast({
					message: "Unable to connect to server",
					type: "warning",
					duration: 0,
				});
				hasShownErrorRef.current = true;
			}
		};

		// Check initial connection state
		if (socket.connected) {
			wasConnectedRef.current = true;
			hasShownInitialConnectionRef.current = true;
		}

		socket.on("connect", handleConnect);
		socket.on("disconnect", handleDisconnect);
		socket.on("connect_error", handleConnectError);

		return () => {
			socket.off("connect", handleConnect);
			socket.off("disconnect", handleDisconnect);
			socket.off("connect_error", handleConnectError);
		};
	}, [socket, addToast]);
};
