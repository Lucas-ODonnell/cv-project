import React from 'react';

const Skill = () => {
	return (
		<div className="skill">
			<div>
				<label htmlFor="skill">Skill</label>
				<input type="text" id="skill" />
			</div>
			<div>
				<label htmlFor="certification">Certification</label>
				<input type="text" id="certification" />
			</div>
		</div>
	)

}

export default Skill;
