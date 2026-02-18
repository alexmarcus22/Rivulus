import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router";

import DefaulLayout from "@/layouts/default";

import HomeComponent from "@/pages/Home/Home";
import LoginComponent from "@/pages/User/Login/Login";
import RecoverPasswordComponent from "@/pages/User/Password/Recover";
import RegisterComponent from "@/pages/User/Register/Register";

import { store } from "@/app/state/store";

import "./app/index.scss";

const container = document.getElementById("root") as HTMLDivElement;
const root = createRoot(container);

root.render(
	<BrowserRouter>
		<Provider store={store}>
			<Routes>
				<Route element={<DefaulLayout />}>
					<Route index element={<HomeComponent />} />
					<Route path="sign-in" element={<LoginComponent />} />
					<Route path="sign-up" element={<RegisterComponent />} />
					<Route path="reset-password" element={<RecoverPasswordComponent />} />
				</Route>
			</Routes>
		</Provider>
	</BrowserRouter>
);
