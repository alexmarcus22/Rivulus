import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router";

import Application from "@/app/Application";

import Providers from "@/app/providers";
import DefaulLayout from "@/layouts/default";

import HomeComponent from "@/pages/Home/Home";
import LoginComponent from "@/pages/User/Login/Login";
import RecoverPasswordComponent from "@/pages/User/Password/Recover";
import RegisterComponent from "@/pages/User/Register/Register";

const container = document.getElementById("root") as HTMLDivElement;
const root = createRoot(container);

root.render(
	<BrowserRouter>
		<Application>
			<Providers>
				<Routes>
					<Route element={<DefaulLayout />}>
						<Route index element={<HomeComponent />} />
						<Route path="sign-in" element={<LoginComponent />} />
						<Route path="sign-up" element={<RegisterComponent />} />
						<Route path="reset-password" element={<RecoverPasswordComponent />} />
					</Route>
				</Routes>
			</Providers>
		</Application>
	</BrowserRouter>
);
