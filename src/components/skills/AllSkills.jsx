import React, { useState, useEffect } from 'react';
import Skill from './Skill.jsx';
import Sections from '../Sections.jsx';
import uniqid from "uniqid";
import './main.css';
const AllSkills = () => {
	const getSkillsFromLocalStorage = localStorage.getItem('skillArray') || '{"Skills":"none"}';
	const generateSkills = JSON.parse(getSkillsFromLocalStorage);
	const [skillObject, setSkillObject] = useState({skill:"", certification: "", id: uniqid()});
	const [skillArray, setSkillArray] = useState(generateSkills);

	useEffect(() => {
		localStorage.setItem('skillArray', JSON.stringify(skillArray))
	}, [JSON.stringify(skillArray)])

	const handleSkillInput = (e) => {
		e.preventDefault();
		const target = e.target;
		const value = target.value;
		const name = target.name;
		setSkillObject({...skillObject, [name]:value});
	}

	const submitNewSkill = (e) => {
		e.preventDefault();
		setSkillArray([...skillArray, skillObject]);
		setSkillObject({skill:"", certification: "", id: uniqid()});
	}

	const deleteSkill = (id) => {
		setSkillArray(skillArray.filter(skill => skill.id !== id))

	}

	return (
		<div data-all-skills className="skill-container">
			<div className="skills">
				{
					skillArray.Skills === 'none' ? console.log("You should enter some skills")
					:
						skillArray.map((skill) => {
							return (
								<div className="each-skill" key={skill.id}>
									<div className="delete">
										<button onClick={() => deleteSkill(skill.id)}>&times;</button>
									</div>
									<div className="skill-row">
										<div>
											<span>Skill:</span>
											{skill.skill}
										</div>
										<div>
											<span>Certification:</span>
											{skill.certification}
										</div>
									</div>
								</div>
							)
						})
				}
			</div>
			<Sections>
			<div className="skill-form">
				<Skill {...{handleSkillInput, skillObject}}/>
			</div>
				<button className="submit-skills" onClick={submitNewSkill}>Add Skill</button>
			</Sections>
		</div>
	)
}

export default AllSkills
