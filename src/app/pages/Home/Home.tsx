import React, { FC } from "react";

const HomeComponent: FC = (): React.ReactElement => {
	return (
		<div className="h-screen sm:pb-40 sm:pt-24 lg:pb-48 lg:pt-40">
			<div className="sm:max-w-lg">
				<h1 className="text-[5rem] font-semibold" role="heading">
					Welcome!
				</h1>
			</div>
		</div>
	);
};

export default HomeComponent;
