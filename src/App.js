import React , {Component}from "react";
import CardList from "./cardlist";

import SearchBox from "./SearchBox.js";
import "./app.css";
import Scroll from "./Scroll";

class App extends Component
{
	constructor()
	{
		super();
		this.state=
		{
			Robots: [],
			searchfield: ''
		}
	}

	componentDidMount()
	{
		fetch("https://jsonplaceholder.typicode.com/users")
		.then(response=> response.json())
		.then(user=> this.setState({Robots: user}));
	}

	onSearchChange=(event)=>
	{
		this.setState({searchfield: event.target.value});
	}
	render(){
		const filterRobots=this.state.Robots.filter(Robots =>
			{return (Robots.name.toLowerCase().includes(this.state.searchfield.toLowerCase()));});
		if(this.state.Robots.length===0)
		{
			return(<h1>Loading</h1>
				);
		}
		else{
	return(
		<div className="tc">
		<h1>RoboFriends</h1>
		<SearchBox searchChange={this.onSearchChange}/>
		<Scroll>
		<CardList Robots={filterRobots} />
		</Scroll>
		</div>) ;
}
}
}

export default App;