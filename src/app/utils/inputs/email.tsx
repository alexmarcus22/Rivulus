import { FC } from "react";
import { UseFormRegister } from "react-hook-form";

interface IEmailInputProps {
	id: string;
	register: UseFormRegister<any>;
	placeholder?: string;
	required?: boolean;
	autoComplete?: string;
	error?: string;
}

const EmailInput: FC<IEmailInputProps> = ({
	id,
	register,
	placeholder,
	required,
	autoComplete,
	error,
}): React.ReactElement => {
	return (
		<div>
			<input
				type="email"
				className={`w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-lg text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blackfocus:border-transparent ${
					error ? "border-red-500" : ""
				}`}
				placeholder={placeholder || "Email"}
				required={required || false}
				autoComplete={autoComplete || "email"}
				{...register(id)}
			/>
			{error && <p className="text-red-500 text-sm mt-1">{error}</p>}
		</div>
	);
};

export default EmailInput;
