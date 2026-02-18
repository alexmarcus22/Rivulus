import React, { FC } from "react";

import { useToast } from "@/app/providers/toast";
import Toast from "@/app/utils/toast";

const ToastContainer: FC = (): React.ReactElement => {
	const { toasts, removeToast } = useToast();

	return (
		<div
			className="fixed top-4 right-4 z-50 flex flex-col gap-3"
			role="region"
			aria-label="Notifications"
			aria-live="polite">
			{toasts.map((toast) => (
				<Toast key={toast.id} message={toast.message} type={toast.type} onClose={() => removeToast(toast.id)} />
			))}
		</div>
	);
};

export default ToastContainer;
