import './App.css';
import React, { useState } from 'react';
import General from "./components/general/General.jsx"; 
import WorkHistory from "./components/workHistory/WorkHistory.jsx";
import AllSkills from "./components/skills/AllSkills.jsx";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
library.add(fas)

const App = () => {
	const [isClicked, setIsClicked] = useState(false);
	const [isClickedCareer, setIsClickedCareer] = useState(false);
	const [isClickedSkills, setIsClickedSkills] = useState(false);
	const [cvObject, setCVObject] = useState({});

	const toggleVisibilityIcon = (e) => {
		e.preventDefault();
		setIsClicked(prev => !prev);
	}

	const toggleVisibilityIconCareer = (e) => {
		e.preventDefault();
		setIsClickedCareer(prev => !prev);
	}

	const toggleVisibilityIconSkills = (e) => {
		e.preventDefault();
		setIsClickedSkills(prev => !prev);
	}

	const toggleGeneralVisibility = (e) => {
		e.preventDefault();
		toggleVisibilityIcon(e);
		const generalInformation = document.querySelector('[data-is-general]');
		if (generalInformation.classList.contains('hidden')) {
			generalInformation.classList.remove('hidden');
		} else {
			generalInformation.classList.add('hidden');
		}
	}

	const toggleCareerVisibility = (e) => {
		e.preventDefault();
		toggleVisibilityIconCareer(e);
		const careerForm = document.querySelector('[data-work-history]');
		if (careerForm.classList.contains('hidden')) {
			careerForm.classList.remove('hidden');

		} else {
			careerForm.classList.add('hidden');
		}
	}

	const toggleSkillVisibility = (e) => {
		e.preventDefault();
		toggleVisibilityIconSkills(e);
		const skillForm = document.querySelector('[data-all-skills]');
		if (skillForm.classList.contains('hidden')) {
			skillForm.classList.remove('hidden');
		} else {
			skillForm.classList.add('hidden');
		}
	}

	const handleInputChange = (e) => {
		e.preventDefault();
		const target = e.target;
		const value = target.value;
		const name = target.name;
		setCVObject({...cvObject, [name]: value});
	}

	const jsonFunction = (e) => {
		e.preventDefault();
		const stringified = JSON.stringify(cvObject);
		console.log(stringified);
	}

	return (
		<div className="container">
			<div className="cv-header">
				<h2>Your CV</h2>
			</div>
			<form className="cv-form" onSubmit={jsonFunction}>
				<div className="border" >
					<button onClick={toggleGeneralVisibility} >
						<FontAwesomeIcon icon={isClicked ? "eye-slash" : "eye"} />
					</button>
				</div>
				<br />
				<General {...{handleInputChange}}/>
				<div className="border" >
					<button onClick={toggleCareerVisibility} >
						<FontAwesomeIcon icon={isClickedCareer ? "eye-slash" : "eye"} />
					</button>
				</div>
				<br />
				<WorkHistory />
				<div className="border" >
					<button onClick={toggleSkillVisibility} >
						<FontAwesomeIcon icon={isClickedSkills ? "eye-slash" : "eye"} />
					</button>
				</div>
				<br />
				<AllSkills />
				<br />
				<div className="submit-container">
				<button type="submit">Submit</button>
				</div>
			</form>
		</div>
	)
}
export default App;
