import React from "react";

const btnLayout = [
	{ id: "clear", value: "AC" },
	{ id: "divide", value: "/" },
	{ id: "multiply", value: "X" },
	{ id: "seven", value: 7 },
	{ id: "eight", value: 8 },
	{ id: "nine", value: 9 },
	{ id: "subtract", value: "-" },
	{ id: "four", value: 4 },
	{ id: "five", value: 5 },
	{ id: "six", value: 6 },
	{ id: "add", value: "+" },
	{ id: "one", value: 1 },
	{ id: "two", value: 2 },
	{ id: "three", value: 3 },
	{ id: "zero", value: 0 },
	{ id: "decimal", value: "." },
	{ id: "equals", value: "=" }
];

const operands = ["/", "X", "+", "-"];

const Buttons = ({ displayVal, setDisplayVal, setOutputVal }) => {
	const handleClick = (e) => {
		let input = e.target.textContent;
		let last = displayVal[displayVal.length - 1];
		const len = displayVal.length;
		const incudes = operands.includes(input);

		// temporary fix for bug that displays text for all elms
		if (input.length < 3) {
			if (input !== "AC" && input !== "=") {
				if (last === "." && input === last) {
					input = "";
				}
				if (input === "X") {
					input = "*";
				}

				setDisplayVal(displayVal + input);
			}

			if (displayVal === "0" && input === displayVal) {
				input = displayVal;
			}
			if (displayVal === "0" && input !== ".") {
				setDisplayVal(input);
			}
			if (displayVal === "0" && incudes)
				setDisplayVal(displayVal + input);

			// if (operands.includes(last) && incudes) {
			// 	setDisplayVal(displayVal.slice(0, -1) + input);
			// }

			if (last === "/" && incudes) {
				setDisplayVal(displayVal.slice(0, -1) + input);
			}
			if (last === "*" && incudes) {
				setDisplayVal(displayVal.slice(0, -1) + input);
			}
			if (last === "+" && incudes) {
				setDisplayVal(displayVal.slice(0, -1) + input);
			}
			if (last === "-" && incudes) {
				setDisplayVal(displayVal.slice(0, -1) + input);
			}

			if (input === "AC") {
				setDisplayVal("0");
				setOutputVal(null);
			}
			if (input === "=") setDisplayVal(eval(displayVal));
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
