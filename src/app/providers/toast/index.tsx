import React, { createContext, useCallback, useContext, useState } from "react";
import { IToast, IToastContext } from "./types";

const ToastContext = createContext<IToastContext | undefined>(undefined);

interface ToastProviderProps {
	children: React.ReactNode;
}

export const ToastProvider: React.FC<ToastProviderProps> = ({ children }) => {
	const [toasts, setToasts] = useState<IToast[]>([]);

	const removeToast = useCallback((id: string) => {
		setToasts((prev) => prev.filter((toast) => toast.id !== id));
	}, []);

	const addToast = useCallback(
		(toast: Omit<IToast, "id">) => {
			const id = Math.random().toString(36).substring(2, 11);
			const newToast: IToast = { ...toast, id };

			setToasts((prev) => [...prev, newToast]);

			// Auto-remove after duration
			if (toast.duration !== 0 && (toast.duration || 0) > 0) {
				setTimeout(() => {
					removeToast(id);
				}, toast.duration || 3000);
			}
		},
		[removeToast]
	);

	const clearToasts = useCallback(() => {
		setToasts([]);
	}, []);

	const value: IToastContext = {
		toasts,
		addToast,
		removeToast,
		clearToasts,
	};

	return <ToastContext.Provider value={value}>{children}</ToastContext.Provider>;
};

export const useToast = (): IToastContext => {
	const context = useContext(ToastContext);
	if (!context) {
		throw new Error("useToast must be used within a ToastProvider");
	}
	return context;
};
