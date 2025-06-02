import React from "react";
import { useState } from "react";

const NumberOfEvents = ({ currentNOE, setCurrentNOE, setErrorAlert }) => {
	const [number, setNumber] = useState(currentNOE ?? 32);

	const handleInputChanged = (event) => {
		const value = event.target.value;
		setNumber(value);
		if (isNaN(value) || value <= 0) {
			setErrorAlert("Enter a valid number");
		} else if (value > 32) {
			setErrorAlert("Only maximum of 32 is allowed");
		} else {
			setErrorAlert("");
			setCurrentNOE(value);
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