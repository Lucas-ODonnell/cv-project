import React from 'react';
const Job = () => {
	return (
		<div className="career-history">
			<div className="date-row">
				<div>
					<label htmlFor="start-date">Start Date</label>
					<input type="date" id="start-date"/>
				</div>
				<div>
					<label htmlFor="end-date">End Date</label>
					<input type="date" id="end-date"/>
				</div>
			</div>
			<div className="description">
				<label htmlFor="description">Description</label>
				<input type="text" id="description"/>
			</div>
			<div className="career-bottom">
				<div>
				<label htmlFor="quit">Reason For Quitting</label>
				<input type="text" id="quit" />
				</div>
				<div>
				<label htmlFor="job-phone">Phone Number</label>
				<input type="tel" id="job-phone" />
				</div>
			</div>
		</div>
	)
}

export default Job;
