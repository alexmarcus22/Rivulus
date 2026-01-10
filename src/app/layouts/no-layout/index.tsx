import React from "react";
import { Outlet } from "react-router";

export const NoLayout: React.FC = (): JSX.Element => {
	return (
		<div className="no-layout relative overflow-auto" role="region">
			<Outlet />
		</div>
	);
};

export default NoLayout;
