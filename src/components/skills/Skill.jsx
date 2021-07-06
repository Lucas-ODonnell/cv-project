import React from 'react';

const Skill = ({handleSkillInput, skillObject}) => {
	return (
		<div className="skill">
			<div>
				<label>Skill</label>
				<input 
					type="text" 
					name="skill" 
					value={skillObject.skill}
					onChange={handleSkillInput}
				/>
			</div>
			<div>
				<label>Certification</label>
				<input 
					type="text" 
					name="certification" 
					value={skillObject.certification}
					onChange={handleSkillInput}
				/>
			</div>
		</div>
	)
}

export default Skill;
