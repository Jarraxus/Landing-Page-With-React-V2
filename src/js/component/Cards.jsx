import React from "react";
import PropTypes from "prop-types";

export const Cards = (props) => {
	return (
		<div class="card" style="width: 18rem;">
			<img class="card-img-top" src={props.imgUrl} alt="Card image cap" />
			<div class="card-body">
				<h5 class="card-title">{props.title}</h5>
				<p class="card-text">{props.body}</p>
				<a href={props.buttonUrl} class="btn btn-primary">
					{props.buttonLabel}
				</a>
			</div>
		</div>
	);
};

Cards.propTypes = {
	imgUrl: PropTypes.string,
	title: PropTypes.string,
	body: PropTypes.string,
	buttonUrl: PropTypes.string,
	buttonLabel: PropTypes.string,
};
