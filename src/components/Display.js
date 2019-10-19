import React from "react";
import Output from "./Output";

const Display = ({ displayVal, outputVal }) => {
	return (
		<div id="display">
			{/* <Output outputVal={outputVal} /> */}
			{displayVal}
		</div>
	);
};

export default Display;
