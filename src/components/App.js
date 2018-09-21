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

    onChangeType = async (value) => {
        this.setState({
            filters: {
                type: value
            }
        })
    }

    onFindPetsClick = (event) => {
        let queryPath;
        console.log(this.state.filters.type)

        if (this.state.filters.type === "all") {
            queryPath = '/api/pets'
        } else {
            queryPath = `/api/pets?type=${this.state.filters.type}`
        }
        fetch(queryPath)
            .then(r => r.json())
            .then(r => this.setState({
                pets: r
            }))
    }

    onAdoptPet = () =>  {
        console.log("Pet was Adopted")
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
                        <Filters
                            onChangeType={this.onChangeType}
                            onFindPetsClick={this.onFindPetsClick}
                        />
                    </div>
                    <div className="twelve wide column">
                        <PetBrowser pets={this.state.pets} onAdoptPet={this.onAdoptPet}/>
                    </div>
                </div>
            </div>
        </div>
    )
}
}

export default App
