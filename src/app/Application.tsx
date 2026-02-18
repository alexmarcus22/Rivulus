import React from "react";

interface IApplicationProps {
	children: React.ReactNode;
}

import "./index.scss";

const Application: React.FC<IApplicationProps> = ({ children }) => {
	return (
		<div className="" id="Alex">
			{children}
		</div>
	);
};

export default Application;
