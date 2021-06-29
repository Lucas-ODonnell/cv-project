import React from 'react';
const Address = () => {
	return (
		<div className="address">
				<label htmlFor="street-one">Address Line 1</label>
				<input type="text" id="street-one-input" />
				<label htmlFor="street-two">Address Line 2</label>
				<input type="text" id="street-two-input" />
				<div className ="city-row">
					<div>
						<label htmlFor="city">City</label>
						<input type="text" id="city-input" />
					</div>
					<div>
						<label htmlFor="state">State</label>
						<input type="text" id="state-input" />
					</div>
					<div>
						<label htmlFor="zip">Zip Code</label>
						<input type="number" id="zip-input" />
					</div>
				</div>
				<div>
					<label htmlFor="country">Country</label>
					<input type="text" id="country-input" />
					<label htmlFor="phone">Phone</label>
					<input type="text" id="phone-input" />
					<label htmlFor="email">Email</label>
					<input type="email" id="email-input" />
				</div>
			</div>
	)
}

export default Address;
