import React from 'react'
import Pet from './Pet'

class PetBrowser extends React.Component {

  generatePets() {
    return this.props.pets.map((pet, idx) => {
      return <Pet
                id={pet.id}
                key={idx}
                isAdopted={pet.isAdopted}
                onAdoptPet={this.props.onAdoptPet}
                name={pet.name}
                type={pet.type}
                age={pet.age}
                weight={pet.weight}
                gender={pet.gender === 'male' ? '♂' : '♀'}/>
    })
  }

  render() {
    return <div className="ui cards">{this.generatePets()}</div>
  }
}

export default PetBrowser
