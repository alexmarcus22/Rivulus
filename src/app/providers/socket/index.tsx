import { createContext, useContext, useEffect, useState } from "react";
import { Socket } from "socket.io-client";

import { socket } from "./socket";

interface ISocketProviderProps {
	children: React.ReactNode;
}

export const SocketContext = createContext<Socket | null>(null);

export const SocketProvider = ({ children }: ISocketProviderProps) => {
	const [currentSocket, setCurrentSocket] = useState<Socket | null>(null);

	useEffect(() => {
		let isConnected = false;

		socket.on("connect", (): void => {
			if (!isConnected) {
				console.log("Connected:", socket.id);
				isConnected = true;
			}
		});

		socket.on("disconnect", (): void => {
			if (isConnected) {
				console.log("Disconnected");
				isConnected = false;
			}
		});

		// Suppress connect_error logs to prevent console spam
		socket.on("connect_error", (): void => {
			// Silently handle connection errors - user will see toast notification
		});

		setCurrentSocket(socket);
		return () => {
			socket.off("connect");
			socket.off("disconnect");
			socket.off("connect_error");
			socket.close();
		};
	}, []);

	return <SocketContext.Provider value={currentSocket}>{children}</SocketContext.Provider>;
};

export const useSocket = () => useContext(SocketContext);
