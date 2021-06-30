import React from 'react';
const Name = ({handleInputChange}) => {
	return (
		<div className="header">
			<div>
				<label>First Name</label>
				<input 
					name="firstName"
					type="text" 
					onChange={handleInputChange}
				/>
			</div>
			<div>
				<label>Last Name</label>
				<input 
					name="lastName"
					type="text"
					onChange={handleInputChange}
				/>
			</div>
		</div>
	)
}

export default Name;

