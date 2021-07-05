import React, { useState }from "react";
import Job from './Job.jsx';
import "./main.css";
const WorkHistory = ({handleJobInput}) => {
	const [jobs, addJobs] = useState([1]);

	const createNewJob = (e) => {
		e.preventDefault();
		addJobs([...jobs, 1])
	}
	return (
		<div data-work-history className="work-history">
			<div className="current-job-container">
				<Job {...{handleJobInput}}/>
				{jobs.forEach(() => {
					<div><Job /></div>
				})}
											</div>
						<button onClick={createNewJob}>Add Job</button>
		</div>
	)
}

export default WorkHistory;
