import React from 'react'

import Filters from './Filters'
import PetBrowser from './PetBrowser'

class App extends React.Component {
  //initializing the state
  constructor() {
    super()

    this.state = {
      pets: [],
      filters: {
        type: 'all'
      }
    }
  }

//a function that updates the state when the value of the dropdown has changed
//passed to filter component as a callback prop, which is a function with the key of onChangeType
  handleChange = (event) => {
      this.setState({
        filters: {
          ...this.state.filters,
          type: event.target.value
        }
      }, () => {console.log(this.state.filters.type)})

  }

//a function that fetches pet info (dependent on value of "type" of animal) from an api & updated the state with that info (filling the pets array)
//passed to filter component as a callback prop, which is a function with the key of onFindPetsClick
  handlePetsClick = () => {
    if (this.state.filters.type==="all") {
      fetch("/api/pets")
        .then(resp => resp.json())
        .then(pets => this.setState({pets: pets}))
    }
    else {
      fetch(`/api/pets?type=${this.state.filters.type}`)
      .then(resp => resp.json())
      .then(pets => this.setState({pets: pets}))
    }
  }

  render() {
    console.log(this.state.pets); //we consoled log here because we can use vanilla JS here. same area if we want to map, etc.
    return (
      <div className="ui container">
        <header>
          <h1 className="ui dividing header">React Animal Shelter</h1>
        </header>
        <div className="ui container">
          <div className="ui grid">
            <div className="four wide column">
              //passed props to both Filters and PetBrowser component
              <Filters
                onChangeType={this.handleChange}
                onFindPetsClick={this.handlePetsClick}/>
            </div>
            <div className="twelve wide column">
              //passing in the objects in the array "pets"
              <PetBrowser pets={this.state.pets}/>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App
