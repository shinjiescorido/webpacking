import React from "react";
import ReactDOM from "react-dom";

class Layout extends React.Component {
	render() {
		return (
			<h1>It Workssss!</h1>
		);
	}
}

const app = document.getElementById('app');
console.log(app);
ReactDOM.render(<Layout/>, app);