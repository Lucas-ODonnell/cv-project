import React from 'react';
const Name = ({handleGeneralInputChange}) => {
	return (
		<div className="header">
			<div>
				<label>First Name</label>
				<input 
					name="firstName"
					type="text" 
					onChange={handleGeneralInputChange}
				/>
			</div>
			<div>
				<label>Last Name</label>
				<input 
					name="lastName"
					type="text"
					onChange={handleGeneralInputChange}
				/>
			</div>
		</div>
	)
}

export default Name;

