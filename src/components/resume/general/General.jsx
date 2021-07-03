import React from "react"
import Name from "./Name.jsx"
import Address from "./Address.jsx"
import "./main.css"
const General = ({handleGeneralInputChange}) => {
	return (
		<div data-is-general className="general">
			<Name {...{handleGeneralInputChange}}/>
			<Address {...{handleGeneralInputChange}}/>
			<div className="section-divider"></div>
			<br />
		</div>
	)
}

export default General;
