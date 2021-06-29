import React from "react"
import Name from "./Name.jsx"
import Address from "./Address.jsx"
import "./main.css"
const General = () => {
	return (
		<div data-is-general className="general">
			<Name />
			<Address />
		</div>
	)
}

export default General;
