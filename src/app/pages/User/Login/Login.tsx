import React, { useState } from "react";

const LoginComponent: React.FC = (): JSX.Element => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		console.log("Login attempt:", { email, password });
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

			<form onSubmit={handleSubmit} className="space-y-4">
				<div>
					<input
						type="email"
						id="email"
						value={email}
						onChange={(e) => setEmail(e.target.value)}
						className="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-lg text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blackfocus:border-transparent"
						placeholder="Email"
						required
					/>
				</div>

				<div>
					<input
						type="password"
						id="password"
						value={password}
						onChange={(e) => setPassword(e.target.value)}
						className="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-lg text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blackfocus:border-transparent"
						placeholder="Password"
						required
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
