import React from "react";

interface FooterProps {
	title?: string;
}

const Footer: React.FC<FooterProps> = (): JSX.Element => {
	return (
		<footer className="text-center py-4 text-gray-500 text-sm">
			&copy; {new Date().getFullYear()} Rivulus. All rights reserved.
		</footer>
	);
};

export default Footer;
