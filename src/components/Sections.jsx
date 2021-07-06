import React, { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
library.add(fas)

const Sections = ({ children }) => {
	const [show, setShow] = useState(false);
	return (
		<section>
			<div className="border">
				<button
					onClick={(e) => {
						e.preventDefault();
						setShow(!show);
					}}
				>
					<FontAwesomeIcon icon={show ? "minus" : "plus"} />
				</button>
			</div>
			{show && (
				children 
			)}
		</section>
	)
}

export default Sections;
