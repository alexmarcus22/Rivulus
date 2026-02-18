import { yupResolver } from "@hookform/resolvers/yup";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";

import EmailInput from "@/utils/inputs/email";
import PasswordInput from "@/utils/inputs/password";

const initialValues = {
	name: "",
	email: "",
	password: "",
	confirmPassword: "",
};

const RegisterComponent: React.FC = () => {
	const [isLoading, setIsLoading] = useState(false);

	const resolver = yup.object({
		name: yup.string().min(2, "Name must be at least 2 characters").required("Name is required"),
		email: yup.string().email("Invalid email format").required("Email is required"),
		password: yup.string().min(6, "Password must be at least 6 characters").required("Password is required"),
		confirmPassword: yup
			.string()
			.oneOf([yup.ref("password")], "Passwords must match")
			.required("Confirm password is required"),
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
			setIsLoading(true);
			console.log("Register:", data);
			reset();
		} catch (error) {
			return error instanceof Error ? error.message : "An unknown error occurred";
		} finally {
			setIsLoading(false);
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
				<h1 className="text-3xl font-bold text-gray-900 mb-1">Create Account</h1>
				<p className="text-gray-500 text-sm">Sign up to get started</p>
			</div>

			<form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
				<div>
					<input
						type="text"
						id="name"
						placeholder="Full Name"
						{...register("name")}
						className="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-lg text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent"
					/>
					{errors.name && <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>}
				</div>

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
						autoComplete="new-password"
						placeholder="Password"
						required={false}
						error={errors.password?.message}
					/>
				</div>

				<div>
					<PasswordInput
						id="confirmPassword"
						register={register}
						autoComplete="new-password"
						placeholder="Confirm Password"
						required={false}
						error={errors.confirmPassword?.message}
					/>
				</div>

				<button
					type="submit"
					disabled={isLoading}
					className="w-full py-3 bg-black text-white font-semibold rounded-lg hover:bg-black hover:cursor-pointer focus:outline-none focus:ring-2 focus:ring-black transition disabled:opacity-50 disabled:cursor-not-allowed">
					{isLoading ? "Creating Account..." : "Sign Up"}
				</button>
			</form>

			<p className="text-center text-gray-500 text-sm mt-4">
				Already have an account?{" "}
				<a href="sign-in" className="text-black hover:text-gray-700 font-medium">
					Sign in
				</a>
			</p>
		</div>
	);
};

export default RegisterComponent;
