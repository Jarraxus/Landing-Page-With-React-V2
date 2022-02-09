import React from "react";
import PropTypes from "prop-types";

export const Jumbotron = (props) => {
	return (
		<div className="jumbotron">
			<h1 className="display-4 fw-normal">{props.title}</h1>
			<p className="lead">{props.body}</p>
			<p className="lead">
				<a
					class="btn btn-primary btn-lg"
					href={props.buttonUrl}
					role="button">
					{props.buttonLabel}
				</a>
			</p>
		</div>
	);
};

Jumbotron.propTypes = {
	title: PropTypes.string,
	body: PropTypes.string,
	buttonUrl: PropTypes.string,
	buttonLabel: PropTypes.string,
};
