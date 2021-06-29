import React from 'react';
import Job from './Job.jsx';

const PreviousJob = () => {
	return (
		<div className="previous-job">
				<div className="previous-job-header">
					<label htmlFor="previous-job">Job</label>
					<input type="text" id="previous-job" />
				</div>
				<Job />
			<div className="section-divider"></div>
			<br />
			</div>
	)
}

export default PreviousJob;
