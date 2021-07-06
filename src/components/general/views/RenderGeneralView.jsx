import React from 'react';
const RenderGeneralView = ({generalInfoObject}) => {

	return (
		<div>
			<div className="name-row">
				<div>
					<span>Name:</span>
					{generalInfoObject.firstName} {generalInfoObject.lastName}
				</div>
				<div>
					<span>Address:</span>
					{generalInfoObject.addressLineOne}
					{generalInfoObject.addressLineTwo}
				</div>
			</div>
			<div className="city-row views">
				<div>
					<span>City:</span>
					{generalInfoObject.city}
				</div>
				<div>
					<span>State:</span>
					{generalInfoObject.state}
				</div>
				<div>
					<span>Zip Code:</span>
					{generalInfoObject.zipcode}
				</div>
			</div>
			<div className="country-row views">
				<div>
					<span>Country:</span>
					{generalInfoObject.country}
				</div>
				<div>
					<span>Phone:</span>
					{generalInfoObject.phone}
				</div>
			</div>
			<div className="email-row views">
				<div>
					<span>Email:</span>
					{generalInfoObject.email}
				</div>
				<div>
					<span>Alma Mater:</span>
					{generalInfoObject.almaMater}
				</div>
			</div>
		</div>
	)
}

export default RenderGeneralView;
