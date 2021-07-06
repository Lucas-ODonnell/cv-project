import React from 'react';
const Name = ({handleGeneralInputChange, generalInfoObject}) => {
	return (
		<div className="header">
			<div>
				<label>First Name</label>
				<input 
					name="firstName"
					type="text" 
					onChange={handleGeneralInputChange}
					defaultValue={generalInfoObject.firstName}
				/>
			</div>
			<div>
				<label>Last Name</label>
				<input 
					name="lastName"
					type="text"
					onChange={handleGeneralInputChange}
					defaultValue={generalInfoObject.lastName}
				/>
			</div>
		</div>
	)
}

export default Name;

