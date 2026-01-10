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
		<div className="min-h-screen flex items-center justify-center bg-gray-50">
			<div className="w-full max-w-sm p-8 space-y-6 ">
				<div className="text-center">
					<h1 className="text-3xl font-bold text-gray-900 mb-1">Recover Password</h1>
					<p className="text-gray-500 text-sm">Enter your email to reset your password</p>
				</div>

				{isSubmitted ? (
					<div className="text-center space-y-4">
						<p className="text-green-600 font-medium">
							If an account exists with this email, you will receive a password reset link.
						</p>
						<a href="sign-in" className="text-purple-600 hover:text-purple-700 font-medium">
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
								className="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-lg text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
							/>
						</div>

						<button
							type="submit"
							disabled={isLoading}
							className="w-full py-3 bg-purple-600 text-white font-semibold rounded-lg hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 transition disabled:opacity-50 disabled:cursor-not-allowed">
							{isLoading ? "Sending..." : "Send Reset Link"}
						</button>
					</form>
				)}

				<p className="text-center text-gray-500 text-sm">
					Remember your password?{" "}
					<a href="sign-in" className="text-purple-600 hover:text-purple-700 font-medium">
						Sign in
					</a>
				</p>
			</div>
		</div>
	);
};

export default RecoverPasswordComponent;
