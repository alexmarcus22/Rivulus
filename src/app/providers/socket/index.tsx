import { createContext, useContext, useEffect, useState } from "react";
import { Socket } from "socket.io-client";

import { socket } from "./socket";

interface ISocketProviderProps {
	children: React.ReactNode;
}

export const SocketContext = createContext<Socket | null>(null);

export const SocketProvider = ({ children }: ISocketProviderProps) => {
	const [currentSocket, setCurrentSocket] = useState<Socket | null>(null);

	console.log(currentSocket);

	useEffect(() => {
		socket.on("connect", (): void => console.log("Connected:", socket.id));
		socket.on("disconnect", (): void => console.log("Disconnected"));
		socket.on("connect_error", (e): void => console.log(e));

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
