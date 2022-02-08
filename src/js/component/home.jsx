import React from "react";
import { Navbar } from "./Navbar.jsx";

//create your first component
export const Home = () => {
	return (
		<div className="container">
			<Navbar
				landing="Start Bootstrap"
				link1="https://www.google.com/"
				label1="Home"
				link2="https://www.google.com/"
				label2="About"
				link3="https://www.google.com/"
				label3="Services"
				link4="https://www.google.com/"
				label4="Contact"
			/>
			{/* <Jumbotron />
			<Card />
			<Card />
			<Card />
			<Card /> */}
		</div>
	);
};
