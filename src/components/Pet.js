import React from 'react'

const renderGender = (pet) => {
  if (pet.gender === "male") {
    return "♂"
  } else {
    return "♀"
  }
}

const Pet = (props) => {
    const onAdoptPet = props.onAdoptPet
    const {age, name, weight, type, id} = props.pet

    return (
      <div className="card">
        <div className="content">
          <a className="header">
            {renderGender(props.pet)}
            {name}
          </a>
          <div className="meta">
            <span className="date">{type}</span>
          </div>
          <div className="description">
            <p>Age: {age}</p>
            <p>Weight: {weight}</p>
          </div>
        </div>
        <div className="extra content">
          {props.pet.isAdopted ? <button className="ui disabled button">Already adopted</button> : <button onClick={ () => onAdoptPet(id)} className="ui primary button" data-id={props.pet.id}>Adopt pet</button> }
        </div>
      </div>
    )
  
}

export default Pet
