import React, { Component } from 'react';
import CardList from '../Components/CardList';
//import { robot } from './robot';
import Searchbox from '../Components/Searchbox';
import './App.css';
import ErrorBoundary from '../Components/ErrorBoundary';
import Scroll from '../Components/Scroll';
class App extends Component {
	constructor() {
		super()
		this.state ={
			robot: [],
			searchfield : " "
		}
	}

	componentDidMount(){
		fetch('https://jsonplaceholder.typicode.com/users')
			.then(response => response.json())
			.then(users => this.setState({robot: users}));

			}

	onSearchChange=(event)=> {
		this.setState({searchfield:event.target.value})
		}

	render() {
		const filteredRobot=this.state.robot.filter(robot =>{
			return robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
		})
		if(this.state.robot.length===0){
	return <h1>Loading</h1>
}else{
		return (
		<div className="tc">
			<h1 className='f1'>RoboFriends</h1>
			<Searchbox searchChange={this.onSearchChange}/>
			<Scroll>
				<ErrorBoundary>
					<CardList robot={filteredRobot}/>
				</ErrorBoundary>
			</Scroll>
		</div>
		);
	}
	}
}
export default App;