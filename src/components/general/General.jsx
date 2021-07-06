import React, { useState } from "react"
import Name from "./inputs/Name.jsx"
import Address from "./inputs/Address.jsx"
import RenderGeneralView from "./views/RenderGeneralView.jsx"
import "./main.css"
const General = () => {
	const generalInfo = localStorage.getItem('generalInformation');
	const generalInfoObject = JSON.parse(generalInfo);
	const [generalObject, setGeneralObject] = useState(generalInfoObject);
	const [showForm, setShowForm] = useState(false)
	
	const updateForm = (e) => {
		e.preventDefault()
		if (showForm) {
					localStorage.setItem('generalInformation', JSON.stringify(generalObject));
		}
		setShowForm(!showForm);
	}

	const handleGeneralInputChange = (e) => {
		e.preventDefault();
		const target = e.target;
		const value = target.value;
		const name = target.name;
		setGeneralObject({...generalObject, [name]: value});
	}
	return (
		<div data-is-general className="general">
			{showForm ?
				<div className="input-show">
					<Name {...{handleGeneralInputChange, generalInfoObject}}/>
					<Address {...{handleGeneralInputChange, generalInfoObject}}/>
				</div>
				:
				<div className="view-show">
					<RenderGeneralView {...{generalInfoObject}}/>
				</div>
			}
			<button onClick={updateForm}>Update</button>
			<br />
		</div>
	)
}

export default General;
