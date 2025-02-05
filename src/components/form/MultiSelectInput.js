import React from 'react';
import Select from 'react-select';

const colourOptions = [
	{ value: 'chocolate', label: 'Chocolate' },
	{ value: 'strawberry', label: 'Strawberry' },
	{ value: 'vanilla', label: 'Vanilla' }
]

export default function MultiSelectInput({ allOptions, selectedOptions, setSelectedOptions }) {

	const handleChange = (selected) => {
		// Check if the selected options are more than previously selected
		if (selected.length > selectedOptions.length) {
			console.log('An option was added.');
			// You can find the newly added option by comparing the arrays
			const addedOption = selected.find(option => !selectedOptions.includes(option));
			console.log('Added:', addedOption);
		} else if (selected.length < selectedOptions.length) {
			console.log('An option was removed.');
			// You can find the removed option by comparing the arrays
			const removedOption = selectedOptions.find(option => !selected.includes(option));
			console.log('Removed:', removedOption);
		}

		setSelectedOptions(selected);
	}


	return (
		<Select
			closeMenuOnSelect={false}
			value={selectedOptions}
			onChange={handleChange}
			isMulti
			options={allOptions}
			backspaceRemovesValue={false}
		/>
	);
}