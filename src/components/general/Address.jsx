import React from 'react';
const Address = ({handleInputChange}) => {
	return (
		<div className="address">
			<label>Address Line 1</label>
			<input 
				name="addressLineOne"
				type="text"
				onChange={handleInputChange}
			/>
			<label>Address Line 2</label>
			<input 
				name="addressLineTwo"
				type="text" 
				onChange={handleInputChange}
			/>
			<div className ="city-row">
				<div>
					<label>City</label>
					<input 
						name="city"
						type="text" 
						onChange={handleInputChange}
					/>
				</div>
				<div>
					<label>State</label>
					<input 
						name="State"
						type="text" 
						onChange={handleInputChange}
					/>
				</div>
				<div>
					<label>Zip Code</label>
					<input 
						name="zipcode"
						type="number"  
						onChange={handleInputChange}
					/>
				</div>
			</div>
			<div className="country-row">
				<div>
					<label>Country</label>
					<input 
						name="country"
						type="text" 
						onChange={handleInputChange}
					/>
				</div>
				<div>
					<label>Phone</label>
					<input 
						name="phone"
						type="text"  
						onChange={handleInputChange}
					/>
				</div>
			</div>
			<div className="email-row">
				<div>
					<label>Email</label>
					<input 
						name="email"
						type="email" 
						onChange={handleInputChange}
					/>
				</div>
				<div>
					<label>Alma Mater</label>
					<input 
						name="almaMater"
						type="text"
						onChange={handleInputChange}
					/>
				</div>
			</div>
		</div>
	)
}

export default Address;
