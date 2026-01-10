import React from "react";
import { Outlet } from "react-router";
import Header from "../../components/shared/Header/Header";

export const DefaultLayout: React.FC = (): JSX.Element => {
	return (
		<div className="layout relative overflow-auto" role="region">
			<div className="container mx-auto">
				<Header />
				<main role="main">
					<Outlet />
				</main>
				<footer role="contentinfo"></footer>
			</div>
		</div>
	);
};

export default DefaultLayout;
