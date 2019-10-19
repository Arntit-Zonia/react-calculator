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

const Buttons = ({ displayVal, setDisplayVal, setOutputVal }) => {
	const handleClick = (e) => {
		let input = e.target.textContent;

		// temporary fix for bug that displays text for all elms
		if (input.length < 3 && input !== "AC" && input !== "=") {
			// doesn't allow more than one 0
			if (
				displayVal.length === 1 &&
				displayVal === "0" &&
				input === "0"
			) {
				input = "0";
			}
			if (displayVal[displayVal.length - 1] === "." && input === ".") {
				input = "";
			}
			setDisplayVal(displayVal + input);
			setOutputVal(input);
		}
		if (displayVal.length === 1 && displayVal === "0") {
			setDisplayVal(input);
		}
		if (input === "X") {
			input = "";
			setDisplayVal(displayVal + "*");
		}
		if (input === "AC") {
			setDisplayVal("0");
			setOutputVal(null);
		}
		if (input === "=") setDisplayVal(eval(displayVal));
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
