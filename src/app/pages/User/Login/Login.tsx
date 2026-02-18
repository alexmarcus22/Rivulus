import { yupResolver } from "@hookform/resolvers/yup";
import React from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";

import EmailInput from "@/utils/inputs/email";
import PasswordInput from "@/utils/inputs/password";

const initialValues = {
	email: "",
	password: "",
};

const LoginComponent: React.FC = (): JSX.Element => {
	const resolver = yup.object({
		email: yup.string().email("Invalid email format").required("Email is required"),
		password: yup.string().min(6, "Password must be at least 6 characters").required("Password is required"),
	});

	const {
		register,
		handleSubmit,
		reset,
		formState: { errors },
	} = useForm({
		defaultValues: initialValues,
		resolver: yupResolver(resolver),
	});

	const onSubmit = async (data: typeof initialValues) => {
		try {
			console.log(data);
			reset();
		} catch (error) {
			return error instanceof Error ? error.message : "An unknown error occurred";
		}
	};

	return (
		<div className="max-w-md mt-10 p-6 bg-white rounded-lg w-100">
			<button
				onClick={() => window.history.back()}
				className="absolute hover:cursor-pointer top-4 left-4 p-2 text-gray-600 hover:text-black transition"
				aria-label="Go back">
				<svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
					<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
				</svg>{" "}
				Back
			</button>
			<div className="text-center mb-3">
				<h1 className="text-3xl font-bold text-gray-900 mb-1">Welcome Back</h1>
				<p className="text-gray-500 text-sm">Sign in to your account</p>
			</div>

			<form onSubmit={handleSubmit(onSubmit)} className="space-y-4" method="POST">
				<div>
					<EmailInput
						id="email"
						register={register}
						autoComplete="email"
						placeholder="Email"
						required={false}
						error={errors.email?.message}
					/>
				</div>

				<div>
					<PasswordInput
						id="password"
						register={register}
						autoComplete="current-password"
						placeholder="Password"
						required={false}
						error={errors.password?.message}
					/>
				</div>

				<div className="text-right">
					<a href="reset-password" className="text-sm text-black hover:text-gray-700">
						Forgot password?
					</a>
				</div>

				<button
					type="submit"
					className="w-full py-3 bg-black text-white font-semibold rounded-lg hover:bg-black hover:cursor-pointer focus:outline-none focus:ring-2 focus:ring-blacktransition">
					Sign In
				</button>
			</form>

			<p className="text-center text-gray-500 text-sm py-3">
				Don't have an account?{" "}
				<a href="sign-up" className="text-black hover:text-gray-700 font-medium">
					Sign up
				</a>
			</p>
		</div>
	);
};

export default LoginComponent;
