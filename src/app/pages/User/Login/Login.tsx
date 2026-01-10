import React, { useState } from "react";

const LoginComponent: React.FC = () => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		console.log("Login attempt:", { email, password });
	};

	return (
		<div className="min-h-screen flex items-center justify-center bg-gray-50">
			<div className="w-full max-w-sm p-8 space-y-6">
				<div className="text-center">
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
							className="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-lg text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
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
							className="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-lg text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
							placeholder="Password"
							required
						/>
					</div>

					<div className="text-right">
						<a href="reset-password" className="text-sm text-purple-600 hover:text-purple-700">
							Forgot password?
						</a>
					</div>

					<button
						type="submit"
						className="w-full py-3 bg-purple-600 text-white font-semibold rounded-lg hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 transition">
						Sign In
					</button>
				</form>

				<p className="text-center text-gray-500 text-sm">
					Don't have an account?{" "}
					<a href="sign-up" className="text-purple-600 hover:text-purple-700 font-medium">
						Sign up
					</a>
				</p>
			</div>
		</div>
	);
};

export default LoginComponent;
