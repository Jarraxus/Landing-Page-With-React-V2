import React from "react";
import PropTypes from "prop-types";

export const Navbar = (props) => {
	return (
		<nav class="navbar navbar-expand-lg navbar-dark bg-dark">
			<a class="navbar-brand" href="#">
				&nbsp;&nbsp;&nbsp;Start {props.landing}
			</a>
			<button
				class="navbar-toggler"
				type="button"
				data-toggle="collapse"
				data-target="#navbarNavAltMarkup"
				aria-controls="navbarNavAltMarkup"
				aria-expanded="false"
				aria-label="Toggle navigation">
				<span class="navbar-toggler-icon"></span>
			</button>
			<div class="collapse navbar-collapse" id="navbarNavAltMarkup">
				<div class="navbar-nav ms-auto">
					<a class="nav-item nav-link active" href={props.link1}>
						{props.label1} <span class="sr-only">(current)</span>{" "}
					</a>
					<a class="nav-item nav-link" href={props.link2}>
						{props.label2}
					</a>
					<a class="nav-item nav-link" href={props.link3}>
						{props.label3}
					</a>
					<a class="nav-item nav-link" href={props.link4}>
						{props.label4}
					</a>
				</div>
			</div>
		</nav>
	);
};

Navbar.propTypes = {
	landing: PropTypes.string,
	link1: PropTypes.string,
	label1: PropTypes.string,
	link2: PropTypes.string,
	label2: PropTypes.string,
	link3: PropTypes.string,
	label3: PropTypes.string,
	link4: PropTypes.string,
	label4: PropTypes.string,
};
