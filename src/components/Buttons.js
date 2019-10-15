import React from "react";

const btnLayout = [
	{ id: "clear", value: "AC", type: "functionality" },
	{ id: "divide", value: "/", type: "operant" },
	{ id: "multiply", value: "X", type: "operant" },
	{ id: "seven", value: 7, type: "number" },
	{ id: "eight", value: 8, type: "number" },
	{ id: "nine", value: 9, type: "number" },
	{ id: "subtract", value: "-", type: "operant" },
	{ id: "four", value: 4, type: "number" },
	{ id: "five", value: 5, type: "number" },
	{ id: "six", value: 6, type: "number" },
	{ id: "add", value: "+", type: "operant" },
	{ id: "one", value: 1, type: "number" },
	{ id: "two", value: 2, type: "number" },
	{ id: "three", value: 3, type: "number" },
	{ id: "zero", value: 0, type: "number" },
	{ id: "decimal", value: ".", type: "operant" },
	{ id: "equals", value: "=", type: "functionality" }
];

const Buttons = ({ setDisplayVal, setOutputVal }) => {
	const handleClick = (e) => {
		const value = e.target.innerHTML;

		// temporary fix for bug that displayes text for all elms
		if (value.length < 3 && value !== "AC" && value !== "=") {
			setDisplayVal(value);
			setOutputVal(value);
		}
		if (value === "AC") {
			setDisplayVal([0]);
			setOutputVal(null);
		}
	};

	const renderLayout = btnLayout.map((button) => {
		return (
			<button key={button.id} id={button.id} className="btn">
				{button.value}
			</button>
		);
	});
	return (
		<div onClick={handleClick} className="layout">
			{renderLayout}
		</div>
	);
};

export default Buttons;
