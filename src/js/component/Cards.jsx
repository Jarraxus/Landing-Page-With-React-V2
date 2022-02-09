import React from "react";
import PropTypes from "prop-types";

export const Cards = (props) => {
	return (
		<div className="card text-center col-sm">
			<img
				className="card-img-top"
				src={props.imgUrl}
				alt="Card image cap"
			/>
			<div className="card-body">
				<h5 className="card-title">{props.title}</h5>
				<p className="card-text">{props.body}</p>
			</div>
			<div className="card-footer ">
				<form action={props.buttonUrl}>
					<button type="submit" class="btn btn-primary mx-5">
						{props.buttonLabel}
					</button>
				</form>
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
