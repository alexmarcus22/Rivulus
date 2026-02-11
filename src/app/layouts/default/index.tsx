import React from "react";
import { Outlet, useLocation } from "react-router";
import Header from "../../components/shared/Header/Header";

export const DefaultLayout: React.FC = (): JSX.Element => {
	const location = useLocation();
	const authPaths = ["/sign-in", "/sign-up", "/reset-password"];
	const isAuthPage = authPaths.includes(location.pathname);

	return (
		<div className="layout relative overflow-auto" role="region">
			<div className="container mx-auto">
				{!isAuthPage && <Header />}
				<main role="main" className={isAuthPage ? "flex items-center justify-center min-h-screen" : ""}>
					<Outlet />
				</main>
				{!isAuthPage && (
					<footer className="text-center py-4 text-gray-500 text-sm">
						&copy; {new Date().getFullYear()} Rivulus. All rights reserved.
					</footer>
				)}
			</div>
		</div>
	);
};

export default DefaultLayout;
