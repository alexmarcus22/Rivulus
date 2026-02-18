import { yupResolver } from "@hookform/resolvers/yup";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";

import EmailInput from "@/utils/inputs/email";

const initialValues = {
	email: "",
};

const RecoverPasswordComponent: React.FC = () => {
	const resolver = yup.object({
		email: yup.string().email("Invalid email format").required("Email is required"),
	});
	const [isLoading, setIsLoading] = useState(false);
	const [isSubmitted, setIsSubmitted] = useState(false);

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
			reset();
			setIsLoading(true);
			await new Promise((resolve) => setTimeout(resolve, 2000));
			setIsSubmitted(true);
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
				<h1 className="text-3xl font-bold text-gray-900 mb-1">Recover Password</h1>
				<p className="text-gray-500 text-sm">Enter your email to reset your password</p>
			</div>

			{isSubmitted ? (
				<div className="text-center space-y-4">
					<p className="text-green-600 font-medium">
						If an account exists with this email, you will receive a password reset link.
					</p>
					<a href="sign-in" className="text-black hover:text-gray-700 font-medium">
						Back to Sign in
					</a>
				</div>
			) : (
				<form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
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

					<button
						type="submit"
						disabled={isLoading}
						className="w-full py-3 bg-black text-white font-semibold rounded-lg hover:bg-black hover:cursor-pointer focus:outline-none focus:ring-2 focus:ring-black transition disabled:opacity-50 disabled:cursor-not-allowed">
						{isLoading ? "Sending..." : "Send Reset Link"}
					</button>
				</form>
			)}
		</div>
	);
};

export default RecoverPasswordComponent;
