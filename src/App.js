import React, { useEffect, useState } from "react";
import axios from "axios";
import moment from "moment";
import { BASE_URL, API_KEY, DEMO_KEY } from "./constants/constant";
import APoD from "./components/apod";
import "./App.css";

function App() {
	const [data, setData] = useState({});

	useEffect(() => {
		axios
			.get(`${BASE_URL}${API_KEY}`)
			.then((res) => {
				console.log(res.data);
				console.log(moment(res.data.date));
				setData(res.data);
			})
			.catch((error) => {
				console.log(error);
				const pastDate = moment().subtract(1, "day").format().slice(0, 10);
				axios.get(`${BASE_URL}${API_KEY}&date=${pastDate}`).then((res) => {
					console.log(res);
					console.log(res.data);
					console.log(moment(res.data.date));
					setData(res.data);
				});
			});
	}, []);

	return (
		<div className="App">
			<APoD photoData={data} />
		</div>
	);
}

export default App;
