import React from 'react'

import Pet from './Pet'

class PetBrowser extends React.Component {
    renderPets = (pets) => {
        return (
            pets.map((pet) => {
                return (
                    <Pet
                        key={pet.id}
                        id={pet.id}
                        type={pet.type}
                        gender={pet.gender}
                        age={pet.age}
                        weight={pet.weight}
                        name={pet.name}
                        isAdopted={pet.isAdopted}
                        onAdoptPet={this.props.onAdoptPet}
                    />
                )
            })
        )
    }
    render() {
        return(
            <div className="ui cards">
                <ul>
                    {this.renderPets(this.props.pets)}
                </ul>
            </div>
        ) 
    }
}

export default PetBrowser
