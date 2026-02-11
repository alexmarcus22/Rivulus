import React from "react";

interface HeaderProps {
	title?: string;
}

const Header: React.FC<HeaderProps> = ({ title = "Rivulus" }): JSX.Element => {
	return (
		<header className="header" role="contentinfo">
			<div className="header-container">
				<nav className="navigation flex justify-between items-center py-6" role="navigation">
					<h1 className="header-title text-[2rem] font-semibold">{title}</h1>
					<ul className="nav-links flex space-x-7">
						<li className="nav-link">
							<a href="/">Home</a>
						</li>
						<li className="nav-link">
							<a href="/sign-in">Login</a>
						</li>
						<li className="nav-link">
							<a href="sign-up">Register</a>
						</li>
						<li className="nav-link">
							<a href="#">Contact</a>
						</li>
					</ul>
				</nav>
			</div>
		</header>
	);
};

export default Header;
