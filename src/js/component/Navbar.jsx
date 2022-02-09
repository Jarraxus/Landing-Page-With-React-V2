import React from "react";
import PropTypes from "prop-types";

export const Navbar = (props) => {
	return (
		<nav className="navbar navbar-expand-lg navbar-dark bg-dark fw-bold">
			<a className="navbar-brand" href="#">
				&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
				{props.landing}
			</a>
			<button
				className="navbar-toggler"
				type="button"
				data-toggle="collapse"
				data-target="#navbarNavAltMarkup"
				aria-controls="navbarNavAltMarkup"
				aria-expanded="false"
				aria-label="Toggle navigation">
				<span className="navbar-toggler-icon"></span>
			</button>
			<div className="collapse navbar-collapse" id="navbarNavAltMarkup">
				<div className="navbar-nav ms-auto">
					<a className="nav-item nav-link active" href={props.link1}>
						{props.label1} <span class="sr-only">(current)</span>{" "}
					</a>
					<a className="nav-item nav-link" href={props.link2}>
						{props.label2}
					</a>
					<a className="nav-item nav-link" href={props.link3}>
						{props.label3}
					</a>
					<a className="nav-item nav-link" href={props.link4}>
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
