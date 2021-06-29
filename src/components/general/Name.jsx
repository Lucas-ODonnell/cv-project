import React from 'react';
const Name = () => {
	return (
		<div className="header">
			<div>
				<label htmlFor="first-name">First Name</label>
				<input type="text" id="first-name-input"/>
			</div>
			<div>
				<label htmlFor="last-name">Last Name</label>
				<input type="text" id="last-name-input" />
			</div>
		</div>
	)
}

export default Name;

