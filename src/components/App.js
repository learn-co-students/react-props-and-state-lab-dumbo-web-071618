import React from 'react'

import Filters from './Filters'
import PetBrowser from './PetBrowser'
import { getAll, getByType, getBetweenAge } from './../data/pets'

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

  getPets = () => {
    const url = this.state.filters.type === "all" ? `/api/pets` : `/api/pets?type=${this.state.filters.type}`
    fetch(url).then(res => res.json()).then(pets => this.setState({pets: pets}))
  }

  onAdoptPet = (id) => {
    
    const mappedPets = this.state.pets.map(pet => {
      if(pet.id === id){
        return {...pet, isAdopted: true}
      }else {
        return pet
      }
    })
    console.log(mappedPets)
    this.setState({pets: mappedPets})
  }

  render(){
    console.log('this.state', this.state)
    return (
      <div className="ui container">
        <header>
          <h1 className="ui dividing header">React Animal Shelter</h1>
        </header>
        <div className="ui container">
          <div className="ui grid">
            <div className="four wide column">
              <Filters
              onChangeType={(type) => this.setState({filters: {type: type}})}
              onFindPetsClick={this.getPets} />
            </div>
            <div className="twelve wide column">
              <PetBrowser 
              pets={this.state.pets}
              onAdoptPet={this.onAdoptPet}/>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App
