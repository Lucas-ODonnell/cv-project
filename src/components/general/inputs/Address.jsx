import React from 'react';
const Address = ({handleGeneralInputChange, generalInfoObject}) => {
	return (
		<div className="address">
			<label>Address Line 1</label>
			<input 
				name="addressLineOne"
				type="text"
				onChange={handleGeneralInputChange}
				defaultValue={generalInfoObject.addressLineOne}
			/>
			<label>Address Line 2</label>
			<input 
				name="addressLineTwo"
				type="text" 
				onChange={handleGeneralInputChange}
				defaultValue={generalInfoObject.addressLineTwo}
			/>
			<div className ="city-row">
				<div>
					<label>City</label>
					<input 
						name="city"
						type="text" 
						onChange={handleGeneralInputChange}
						defaultValue={generalInfoObject.city}
					/>
				</div>
				<div>
					<label>State</label>
					<input 
						name="state"
						type="text" 
						onChange={handleGeneralInputChange}
						defaultValue={generalInfoObject.state}
					/>
				</div>
				<div>
					<label>Zip Code</label>
					<input 
						name="zipcode"
						type="number"  
						onChange={handleGeneralInputChange}
						defaultValue={generalInfoObject.zipcode}
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
						defaultValue={generalInfoObject.country}
					/>
				</div>
				<div>
					<label>Phone</label>
					<input 
						name="phone"
						type="text"  
						onChange={handleGeneralInputChange}
						defaultValue={generalInfoObject.phone}
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
						defaultValue={generalInfoObject.email}
					/>
				</div>
				<div>
					<label>Alma Mater</label>
					<input 
						name="almaMater"
						type="text"
						onChange={handleGeneralInputChange}
						defaultValue={generalInfoObject.almaMater}
					/>
				</div>
			</div>
		</div>
	)
}

export default Address;
