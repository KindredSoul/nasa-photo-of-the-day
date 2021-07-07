import React from "react";
import moment from "moment";

import "./apod.css";

function APoD(props) {
	const { photoData } = props;
	const {
		title,
		hdurl,
		url,
		explanation,
		media_type,
		date,
		copyright,
	} = photoData;
	return (
		<div className="content-container">
			<header className="top-container">
				<h1 className="title">{title}</h1>
				<span className="date">{date}</span>
			</header>
			<main>
				<div className="img-container">
					<img src={hdurl} alt={`Taken by ${copyright}`} />
				</div>
				<div>
					<p className="details">{explanation} </p>
				</div>
			</main>
			<footer>Image Credit & Copyright: {copyright}</footer>
		</div>
	);
}

export default APoD;
