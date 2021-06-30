import React from "react"
import Name from "./Name.jsx"
import Address from "./Address.jsx"
import "./main.css"
const General = ({handleInputChange}) => {
	return (
		<div data-is-general className="general">
			<Name {...{handleInputChange}}/>
			<Address {...{handleInputChange}}/>
			<div className="section-divider"></div>
			<br />
		</div>
	)
}

export default General;
