import React from 'react';
import Job from './Job.jsx'

const CurrentJob = () => {
	return (
		<div className="current-job">
			<div className="current-job-header">
				<label htmlFor="current-job">Current/Most Recent Job</label>
				<input type="text" id="current-job" />
			</div>
			<Job />
			<div className="section-divider"></div>
			<br />
		</div>
	)
}

export default CurrentJob;
