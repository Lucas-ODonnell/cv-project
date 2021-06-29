import './App.css';
import React, { useState } from 'react';
import General from "./components/general/General.jsx"; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
library.add(fas)

const App = () => {
	const [isClicked, setIsClicked] = useState(false);

	const toggleVisibilityIcon = (e) => {
		e.preventDefault();
		setIsClicked(prev => !prev);
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

	return (
		<div className="container">
			<div className="cv-header">
				<h2>Your CV</h2>
			</div>
			<form className="cv-form">
				<div className="general-border" >
					<button onClick={toggleGeneralVisibility} >
						<FontAwesomeIcon icon={isClicked ? "eye-slash" : "eye"} />
					</button>
				</div>
				<br />
				<General />
			</form>
		</div>
	)
}



export default App;
