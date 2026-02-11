import React, { useState } from "react";

const RecoverPasswordComponent: React.FC = () => {
	const [formData, setFormData] = useState({
		email: "",
	});
	const [isLoading, setIsLoading] = useState(false);
	const [isSubmitted, setIsSubmitted] = useState(false);

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const { name, value } = e.target;
		setFormData((prev) => ({
			...prev,
			[name]: value,
		}));
	};

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();
		setIsLoading(true);
		console.log("Recover Password:", formData);
		setIsLoading(false);
		setIsSubmitted(true);
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
				<form onSubmit={handleSubmit} className="space-y-4">
					<div>
						<input
							type="email"
							id="email"
							name="email"
							value={formData.email}
							onChange={handleChange}
							placeholder="Email"
							required
							className="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-lg text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blackfocus:border-transparent"
						/>
					</div>

					<button
						type="submit"
						disabled={isLoading}
						className="w-full py-3 bg-black text-white font-semibold rounded-lg hover:bg-black hover:cursor-pointer focus:outline-none focus:ring-2 focus:ring-blacktransition disabled:opacity-50 disabled:cursor-not-allowed">
						{isLoading ? "Sending..." : "Send Reset Link"}
					</button>
				</form>
			)}
		</div>
	);
};

export default RecoverPasswordComponent;
