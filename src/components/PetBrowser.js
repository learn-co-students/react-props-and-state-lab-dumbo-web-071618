import React from 'react'

import Pet from './Pet'

class PetBrowser extends React.Component {
  render() {
    //mapped over the array of pets we got from the App (fetch request, which was added to the pets array). we passed in the state as a prop value here. at each iteration, it returns a Pet component that has a pet object as a prop
    let singlePet = this.props.pets.map((pet)=> {
      return <Pet pet={pet}/>
    })

    return <div className="ui cards">
      //we passed in the return value of the map 
      {singlePet}
    </div>
  }
}

export default PetBrowser
