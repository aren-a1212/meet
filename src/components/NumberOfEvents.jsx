import React from "react";
import { useState } from "react";

const NumberOfEvents = ({ currentNOE, setCurrentNOE, setErrorAlert }) => {
	const [number, setNumber] = useState(currentNOE ?? 32);

	const handleInputChanged = (event) => {
		const value = event.target.value;
		setNumber(value);

		const num = parseInt(value, 10);

		if (isNaN(num) || value <= 0) {
			setErrorAlert("Enter a valid number");
		} else if (num > 32) {
			setErrorAlert("Only maximum of 32 is allowed");
		} else {
			setErrorAlert("");
			setCurrentNOE(num);
		}
	};


	return (
		<div id="number-of-events">
			<label htmlFor="numberOfEventsInput">
				Number of Events:
			</label>

			<input
				type="text"
				value={number}
				onChange={handleInputChanged}
				data-testid="numberOfEventsInput"
			/>

		</div>
	);
};

export default NumberOfEvents;