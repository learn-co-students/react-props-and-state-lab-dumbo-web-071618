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

  handleChangeType = (type) => {
    this.setState({filters: {type: `${type}`}})
  }

  handleOnFindPetsClick = () => {
    let fetchURL = this.state.filters.type === 'all' ?
    `/api/pets` : `/api/pets?type=${this.state.filters.type}`

    fetch(fetchURL).then(res => res.json()).then(data => this.setState({pets:data}))
  }

  handleAdopt= (id)=> {
    let mappedPets = this.state.pets.map(pet => (
      pet.id === id ? {...pet, isAdopted: true} : pet
    ))

    this.setState({pets: mappedPets})
  }

  render() {
    return (
      <div className="ui container">
        <header>
          <h1 className="ui dividing header">React Animal Shelter</h1>
        </header>
        <div className="ui container">
          <div className="ui grid">
            <div className="four wide column">
              <Filters onChangeType={this.handleChangeType} onFindPetsClick={this.handleOnFindPetsClick}/>
            </div>
            <div className="twelve wide column">
              <PetBrowser pets={this.state.pets} onAdoptPet={this.handleAdopt}/>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App
