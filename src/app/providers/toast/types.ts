export type ToastType = "success" | "error" | "info" | "warning";

export interface IToast {
	id: string;
	message: string;
	type: ToastType;
	duration?: number; // in milliseconds, 0 = no auto close
}

export interface IToastContext {
	toasts: IToast[];
	addToast: (toast: Omit<IToast, "id">) => void;
	removeToast: (id: string) => void;
	clearToasts: () => void;
}
