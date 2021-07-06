import React from 'react';
import General from "./general/General.jsx"; 
import WorkHistory from "./workHistory/WorkHistory.jsx";
import AllSkills from "./skills/AllSkills.jsx";
const Resume = () => {
	const savedSkills = localStorage.getItem("skillArray");
	const savedJobs = localStorage.getItem("jobArray");
	const savedGeneral = localStorage.getItem("generalInformation");
	const cv = {savedGeneral, savedJobs, savedSkills};

	const exportJSON = (e) => {
		e.preventDefault()
		window.alert(JSON.stringify(cv));
	}
	return (
		<div className="container">
			<div className="cv-header">
				<h2>Curriculum Vitae</h2>
			</div>
			<form className="cv-form">
				<General />
				<WorkHistory />
				<AllSkills />
				<br />
				<div className="submit-container">
					<button onClick={exportJSON}>Export Raw JSON</button>
				</div>
			</form>
		</div>
	)
}

export default Resume;
