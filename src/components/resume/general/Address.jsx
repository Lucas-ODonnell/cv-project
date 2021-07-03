import React from 'react';
const Address = ({handleGeneralInputChange}) => {
	return (
		<div className="address">
			<label>Address Line 1</label>
			<input 
				name="addressLineOne"
				type="text"
				onChange={handleGeneralInputChange}
			/>
			<label>Address Line 2</label>
			<input 
				name="addressLineTwo"
				type="text" 
				onChange={handleGeneralInputChange}
			/>
			<div className ="city-row">
				<div>
					<label>City</label>
					<input 
						name="city"
						type="text" 
						onChange={handleGeneralInputChange}
					/>
				</div>
				<div>
					<label>State</label>
					<input 
						name="State"
						type="text" 
						onChange={handleGeneralInputChange}
					/>
				</div>
				<div>
					<label>Zip Code</label>
					<input 
						name="zipcode"
						type="number"  
						onChange={handleGeneralInputChange}
					/>
				</div>
			</div>
			<div className="country-row">
				<div>
					<label>Country</label>
					<input 
						name="country"
						type="text" 
						onChange={handleGeneralInputChange}
					/>
				</div>
				<div>
					<label>Phone</label>
					<input 
						name="phone"
						type="text"  
						onChange={handleGeneralInputChange}
					/>
				</div>
			</div>
			<div className="email-row">
				<div>
					<label>Email</label>
					<input 
						name="email"
						type="email" 
						onChange={handleGeneralInputChange}
					/>
				</div>
				<div>
					<label>Alma Mater</label>
					<input 
						name="almaMater"
						type="text"
						onChange={handleGeneralInputChange}
					/>
				</div>
			</div>
		</div>
	)
}

export default Address;
