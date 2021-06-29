import React, { useState } from "react";
import CurrentJob from './CurrentJob.jsx';
import PreviousJob from './PreviousJob.jsx';
import uniqid from "uniqid";
import "./main.css";
const WorkHistory = () => {
	const [previousJobs, addPreviousJobs] = useState([]);
	const addAnotherJob = (e) => {
		e.preventDefault();
		addPreviousJobs([...previousJobs, <PreviousJob/>]);
	}

	return (
		<div data-work-history className="work-history">
			<div className="current-job-container">
				<CurrentJob />
			</div>
			<div data-previous-job className="previous-job-container">
				{previousJobs.map((job) => {
					return (
						<div key={uniqid()}>{job}</div>
					)
				})}
			</div>
				<button onClick={addAnotherJob}>Add Job</button>
		</div>
	)
}

export default WorkHistory;
