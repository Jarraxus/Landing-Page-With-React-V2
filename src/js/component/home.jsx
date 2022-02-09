import React from "react";
import { Navbar } from "./Navbar.jsx";
import { Jumbotron } from "./Jumbotron.jsx";
import { Cards } from "./Cards.jsx";
import { Footer } from "./Footer.jsx";

//create your first component
export const Home = () => {
	return (
		<div className="container-fullwidth bg-light">
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
			<div className="container-fullwidth">
				<Jumbotron
					title="A Warm Welcome!"
					body="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut at
					nisi quis turpis ullamcorper dictum. Sed sollicitudin, orci
					rhoncus pretium vulputate, dui nibh maximus tellus, eu congue
					arcu ex id elit. Proin malesuada in lacus eget luctus. 
					Mauris bibendum elit ex, non ultricies ante fringilla et. 
					Fusce dictum pretium mollis. Nulla a turpis id nibh dapibus placerat id a risus. 
					Integer molestie condimentum massa sed efficitur. Vestibulum volutpat, 
					augue in porta fringilla, orci massa viverra mi, sit amet dapibus tortor risus ac diam."
					buttonUrl="https://www.google.com/"
					buttonLabel="Call to action!"
				/>
			</div>
			<div className="container-fullwidth bg-light">
				<div className="row">
					<div className="col">
						<Cards
							imgUrl="https://via.placeholder.com/500x325.png"
							title="Card Title"
							body="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
							buttonUrl="https://www.google.com/"
							buttonLabel="Find Out More!"
						/>
					</div>
					<div className="col">
						<Cards
							imgUrl="https://via.placeholder.com/500x325.png"
							title="Card Title"
							body="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
							buttonUrl="https://www.google.com/"
							buttonLabel="Find Out More!"
						/>
					</div>
					<div className="col">
						<Cards
							imgUrl="https://via.placeholder.com/500x325.png"
							title="Card Title"
							body="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
							buttonUrl="https://www.google.com/"
							buttonLabel="Find Out More!"
						/>
					</div>
					<div className="col">
						<Cards
							imgUrl="https://via.placeholder.com/500x325.png"
							title="Card Title"
							body="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
							buttonUrl="https://www.google.com/"
							buttonLabel="Find Out More!"
						/>
					</div>
				</div>
			</div>
			<Footer
				owner="Jarraxus"
				date="2022"
				link="https://github.com/Jarraxus"
			/>
		</div>
	);
};
