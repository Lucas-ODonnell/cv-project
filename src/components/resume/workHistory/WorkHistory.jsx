import React from "react";
import Job from './Job.jsx';
import "./main.css";
const WorkHistory = ({handleJobInput}) => {
	return (
		<div data-work-history className="work-history">
			<div className="current-job-container">
				<Job {...{handleJobInput}}/>
			</div>
		</div>
	)
}

export default WorkHistory;
