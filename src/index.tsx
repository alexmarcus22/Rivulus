import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router";

import DefaulLayout from "@/layouts/default";
import NoLayout from "@/layouts/no-layout";

import HomeComponent from "@/pages/Home/Home";
import LoginComponent from "@/pages/User/Login/Login";
import RecoverPasswordComponent from "@/pages/User/Password/Recover";
import RegisterComponent from "@/pages/User/Register/Register";

import "./app/index.scss";

const container = document.getElementById("root") as HTMLDivElement;
const root = createRoot(container);

root.render(
	<BrowserRouter>
		<Routes>
			<Route element={<DefaulLayout />}>
				<Route index element={<HomeComponent />} />
			</Route>
			<Route element={<NoLayout />}>
				<Route path="sign-in" element={<LoginComponent />} />
				<Route path="sign-up" element={<RegisterComponent />} />
				<Route path="reset-password" element={<RecoverPasswordComponent />} />
			</Route>
		</Routes>
	</BrowserRouter>
);
