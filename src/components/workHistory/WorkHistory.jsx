import React from "react";
import Job from "./Job.jsx";
import "./main.css";
const WorkHistory = () => {
	return (
		<div data-work-history className="work-history">
			<div className="current-job">
				<div className="current-job-header">
					<label htmlFor="current-job">Current/Most Recent Job</label>
					<input type="text" id="current-job" />
				</div>
				<Job />
			</div>
		</div>
	)
}

export default WorkHistory;
