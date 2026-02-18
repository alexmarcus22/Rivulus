import React from "react";

import { useSocketToast } from "@/app/hooks/useSocketToast";

/**
 * Component that listens to socket events and displays toasts
 * Must be placed inside ToastProvider and SocketProvider
 */
export const SocketToastListener: React.FC = () => {
	useSocketToast();
	return null;
};

export default SocketToastListener;
