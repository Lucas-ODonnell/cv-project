import React, { useState } from 'react';
import Skill from './Skill.jsx';
import uniqid from "uniqid";
import './main.css';
const AllSkills = () => {
	const [skills, addSkills] = useState([]);

	const addAnotherSkill = (e) => {
		e.preventDefault();
		addSkills([...skills, <Skill />]);
	}
	return (
		<div data-all-skills className="skill-container">
			<div className="skill-form">
				{skills.map((skill) => {
					return (
						<div key={uniqid()}>{skill}</div>
					)
				})}
			</div>
					<button onClick={addAnotherSkill}>Add Skill</button>
		</div>
	)
}

export default AllSkills
