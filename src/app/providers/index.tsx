import React from "react";

import StoreProvider from "./store";

import { SocketProvider } from "@/app/providers/socket";
import { ToastProvider } from "@/app/providers/toast";

import SocketToastListener from "@/app/components/common/SocketToastListener";
import ToastContainer from "@/app/components/common/ToastContainer";

interface ProvidersProps {
	children: React.ReactNode;
}

const Providers: React.FC<ProvidersProps> = ({ children }) => {
	return (
		<ToastProvider>
			<SocketProvider>
				<StoreProvider>
					<ToastContainer />
					<SocketToastListener />
					{children}
				</StoreProvider>
			</SocketProvider>
		</ToastProvider>
	);
};

export default Providers;
