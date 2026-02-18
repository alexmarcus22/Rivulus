import React from "react";

import { SocketProvider } from "@/app/providers/socket";
import StoreProvider from "./store";

interface AppProviderProps {
	children: React.ReactNode;
}

const AppProvider: React.FC<AppProviderProps> = ({ children }) => {
	return (
		<SocketProvider>
			<StoreProvider>{children}</StoreProvider>
		</SocketProvider>
	);
};

export default AppProvider;
