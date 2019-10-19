import React, { useState } from "react";
import "../styles.css";
import Display from "./Display";
import Buttons from "./Buttons";

const App = () => {
	const [displayVal, setDisplayVal] = useState("0");
	const [outputVal, setOutputVal] = useState(null);

	return (
		<div className="app">
			<Display displayVal={displayVal} outputVal={outputVal} />
			<Buttons
				displayVal={displayVal}
				setDisplayVal={setDisplayVal}
				setOutputVal={setOutputVal}
			/>
		</div>
	);
};

export default App;
