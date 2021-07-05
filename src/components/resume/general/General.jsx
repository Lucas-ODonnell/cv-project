import React, { useState } from "react"
import Name from "./inputs/Name.jsx"
import Address from "./inputs/Address.jsx"
import RenderGeneralView from "./views/RenderGeneralView.jsx"
import "./main.css"
const General = ({handleGeneralInputChange, generalObject}) => {
	const [showForm, setShowForm] = useState(false)
	const generalInfo = localStorage.getItem('generalInformation');
	const generalInfoObject = JSON.parse(generalInfo);
	const updateForm = (e) => {
		e.preventDefault()
		if (showForm) {
					localStorage.setItem('generalInformation', JSON.stringify(generalObject));
		}
		setShowForm(!showForm);
	}
	return (
		<div data-is-general className="general">
			{showForm ?
				<div>
					<Name {...{handleGeneralInputChange, generalInfoObject}}/>
					<Address {...{handleGeneralInputChange, generalInfoObject}}/>
				</div>
				:
				<div>
					<RenderGeneralView {...{generalInfoObject}}/>
				</div>
			}
			<button onClick={updateForm}>Update</button>
			<br />
		</div>
	)
}

export default General;
