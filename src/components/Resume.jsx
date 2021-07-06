import React from 'react';
import General from "./general/General.jsx"; 
import WorkHistory from "./workHistory/WorkHistory.jsx";
import AllSkills from "./skills/AllSkills.jsx";
const Resume = () => {
	return (
		<div className="container">
			<div className="cv-header">
				<h2>Your CV</h2>
			</div>
			<form className="cv-form">
				<General />
				<WorkHistory />
				<AllSkills />
				<br />
				<div className="submit-container">
					<button type="submit">Submit</button>
				</div>
			</form>
		</div>
	)
}

export default Resume;
