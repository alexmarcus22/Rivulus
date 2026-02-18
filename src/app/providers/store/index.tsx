import React from "react";
import { Provider } from "react-redux";

import { store } from "@/app/state/store";

interface IStoreProps {
	children: React.ReactNode;
}

const StoreProvider: React.FC<IStoreProps> = ({ children }) => {
	return <Provider store={store}>{children}</Provider>;
};

export default StoreProvider;
