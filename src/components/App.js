import React from 'react'

import Filters from './Filters'
import PetBrowser from './PetBrowser'

class App extends React.Component {
	constructor() {
		super()

		this.state = {
			pets: [],
			filters: {
				type: 'all'
			}
		}
	}

	changeTypeHandler = (type) => this.setState({filters: {type}})

	findPetsClickHandler = () => {
		const url = this.state.filters.type === "all" ? "/api/pets" : `/api/pets?type=${this.state.filters.type}`
		fetch(url).then(res => res.json()).then(pets => this.setState({pets}))
	}

	handleAdoptPet = petId => {
		const newPets = this.state.pets.map(pet => {
			return pet.id === petId ? {...pet, isAdopted: true} : pet
		})
		this.setState({pets: newPets})
	}

	render() {
		console.log(this.state);
		return (
			<div className="ui container">
				<header>
					<h1 className="ui dividing header">React Animal Shelter</h1>
				</header>
				<div className="ui container">
					<div className="ui grid">
						<div className="four wide column">
							<Filters onChangeType={(type) => this.changeTypeHandler(type)} onFindPetsClick={this.findPetsClickHandler} />
						</div>
						<div className="twelve wide column">
							<PetBrowser pets={this.state.pets} onAdoptPet={this.handleAdoptPet}/>
						</div>
					</div>
				</div>
			</div>
		)
	}
}

export default App