import React from 'react';

const Job = ({handleJobInput, jobObject}) => {
	return (
		<div className="job">
			<div className="job-header">
				<label>Job</label>
				<input 
					type="text" 
					name="job" 
					value={jobObject.job}
					onChange={handleJobInput}
				/>
			</div>
			<div className="career-history">
				<div className="date-row">
					<div>
						<label>Start Date</label>
						<input 
							type="date" 
							name="startDate"
							value={jobObject.startDate}
							onChange={handleJobInput}
						/>
					</div>
					<div>
						<label>End Date</label>
						<input 
							type="date" 
							name="endDate"
							value={jobObject.endDate}
							onChange={handleJobInput}
						/>
					</div>
				</div>
				<div className="description">
					<label>Description</label>
					<input 
						type="text" 
						name="description"
						value={jobObject.description}
						onChange={handleJobInput}
					/>
				</div>
				<div className="career-bottom">
					<div>
						<label>Reason For Quitting</label>
						<input 
							type="text" 
							name="quit" 
							value={jobObject.quit}
							onChange={handleJobInput}
						/>
					</div>
					<div>
						<label>Phone Number</label>
						<input 
							type="tel" 
							name="jobPhone" 
							value={jobObject.jobPhone}
							onChange={handleJobInput}
						/>
					</div>
				</div>
			</div>
			<br />
		</div>
)
}

export default Job;
