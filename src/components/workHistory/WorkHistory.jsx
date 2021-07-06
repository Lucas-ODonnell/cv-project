import React, { useState, useEffect }from "react";
import Job from './Job.jsx';
import Sections from '../Sections.jsx';
import uniqid from 'uniqid'
import "./main.css";
const WorkHistory = () => {
	const getJobFromLocalStorage = localStorage.getItem('jobArray') || '{"Jobs":"none"}';
	const generatedJobs = JSON.parse(getJobFromLocalStorage);
	const [jobObject, setJobObject] = useState({
		job: "",
		startDate: "",
		endDate: "",
		description: "",
		quit: "",
		jobPhone: "",
		id: uniqid()
	});
	const [jobArray, setJobArray] = useState(generatedJobs);

	useEffect(() => {
		localStorage.setItem('jobArray', JSON.stringify(jobArray))
	}, [JSON.stringify(jobArray)]);

	const handleJobInput = (e) => {
		e.preventDefault();
		const target = e.target;
		const value = target.value;
		const name = target.name;
		setJobObject({...jobObject, [name]: value});
	}

	const submitNewJob = (e) => {
		e.preventDefault();
		setJobArray([...jobArray, jobObject])
		setJobObject({
			job: "",
			startDate: "",
			endDate: "",
			description: "",
			quit: "",
			jobPhone: "",
			id: uniqid()
		});
	}

	const deleteJob = (id) => {
		setJobArray(jobArray.filter(job => job.id !== id))
	} 

	return (
		<div data-work-history className="work-history">
			<div className="jobs">
				{
					jobArray.Jobs === 'none' ? console.log("This message will go away once you have entered at least one job")
					:
						jobArray.map((job) => {
							return (
								<div className="each-job" key={job.id}>
									<div className="delete">
										<button onClick={() => deleteJob(job.id)}>&times;</button>
									</div>
									<div className="job-row">
										<div>
											<span>Job:</span>
											{job.job}
										</div>
									</div>
									<div className="date-row">
										<div>
											<span>Start Date:</span>
											{job.startDate}
										</div>
										<div>
											<span>End Date:</span>
											{job.endDate}
										</div>
									</div>
									<div className="description">
										<div>
											<span>Description:</span>
											{job.description}
										</div>
									</div>
									<div className="career-bottom">
										<div>
											<span>Reason For Quitting:</span>
											{job.quit}
										</div>
										<div>
											<span>Contact Number:</span>
											{job.jobPhone}
										</div>
									</div>
								</div>
							)
						})}
			</div>
			<Sections>
				<div className="current-job-container">
					<Job {...{handleJobInput, jobObject}}/>
				</div>
				<button className="submit-job" onClick={submitNewJob}>Add Job</button>
			</Sections>
		</div>
	)
}

export default WorkHistory;
