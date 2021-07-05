import React, { useState } from 'react';
import General from "./general/General.jsx"; 
import WorkHistory from "./workHistory/WorkHistory.jsx";
import AllSkills from "./skills/AllSkills.jsx";
import Sections from "./Sections.jsx";
const Resume = () => {
	const [generalObject, setGeneralObject] = useState({});
	const [jobObject, setJobObject] = useState([]);

	const handleGeneralInputChange = (e) => {
		e.preventDefault();
		const target = e.target;
		const value = target.value;
		const name = target.name;
		setGeneralObject({...generalObject, [name]: value});
	}

	const handleJobInput = (e) => {
		e.preventDefault();
		const target = e.target;
		const value = target.value;
		const name = target.name;
		setJobObject({...jobObject, [name]: value});
	}

	const jsonFunction = (e) => {
		e.preventDefault();
		const stringified = JSON.stringify(jobObject);
		console.log(stringified);
	}
	return (
		<div className="container">
			<div className="cv-header">
				<h2>Your CV</h2>
			</div>
			<form className="cv-form" onSubmit={jsonFunction}>
				<Sections>
					<General {...{generalObject, handleGeneralInputChange}}/>
				</Sections>
				<Sections> 
					<WorkHistory {...{handleJobInput}} />
				</Sections>
				<Sections>
					<AllSkills />
				</Sections>
				<br />
				<div className="submit-container">
					<button type="submit">Submit</button>
				</div>
			</form>
		</div>
	)
}

export default Resume;
