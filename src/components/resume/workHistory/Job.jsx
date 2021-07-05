import React from 'react';

const Job = ({handleJobInput}) => {
	return (
		<div className="job">
			<div className="job-header">
				<label>Job</label>
				<input 
					type="text" 
					name="job" 
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
							onChange={handleJobInput}
						/>
					</div>
					<div>
						<label>End Date</label>
						<input 
							type="date" 
							name="endDate"
							onChange={handleJobInput}
						/>
					</div>
				</div>
				<div className="description">
					<label>Description</label>
					<input 
						type="text" 
						name="description"
						onChange={handleJobInput}
					/>
				</div>
				<div className="career-bottom">
					<div>
						<label>Reason For Quitting</label>
						<input 
							type="text" 
							name="quit" 
							onChange={handleJobInput}
						/>
					</div>
					<div>
						<label>Phone Number</label>
						<input 
							type="tel" 
							name="jobPhone" 
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
