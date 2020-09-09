import React from "react";

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
				<h2 className="title">{title}</h2>
				<span className="date">{date}</span>
			</header>
			<main>
				<div className="img-container">
					<img src={hdurl} alt={`Taken by ${copyright}`} />
				</div>
				<p className="details">{explanation} </p>
			</main>
			<footer>{copyright}</footer>
		</div>
	);
}

export default APoD;
