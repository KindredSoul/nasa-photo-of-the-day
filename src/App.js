import React, { useEffect, useState } from "react";
import axios from "axios";
import { BASE_URL, API_KEY } from "./constants/constant";
import APoD from "./components/apod";
import "./App.css";

function App() {
	const [data, setData] = useState({});

	useEffect(() => {
		axios
			.get(`${BASE_URL}?api_key=${API_KEY}`)
			.then((res) => {
				console.log(res);
				console.log(res.data);
				setData(res.data);
			})
			.catch((error) => {
				console.log(error);
			});
	}, []);

	return (
		<div className="App">
			<APoD photoData={data} />
		</div>
	);
}

export default App;
