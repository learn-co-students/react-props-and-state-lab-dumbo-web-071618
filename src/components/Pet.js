import React from 'react'

class Pet extends React.Component {

  handleClick = (event) => {
    this.props.onAdoptPet(event.target.dataset.id)
  }

  // renderButton = () => {
  //   if (this.props.pet.isAdpoted) {
  //     return <button className="ui disabled button">Already adopted</button>
  //   } else {
  //     return <button onClick={this.handleClick} className="ui primary button" data-id={this.props.pet.id}>Adopt pet</button>
  //   }
  // }

  renderGender = () => {
    if (this.props.pet.gender === "male") {
      return "♂"
    } else {
      return "♀"
    }
  }
  render() {
    const onAdoptPet = this.props.onAdoptPet

    const {age, name, weight, type, id} = this.props.pet
    return (
      <div className="card">
        <div className="content">
          <a className="header">
            {this.renderGender()}
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
          {/* {this.renderButton()} */}
          {this.props.pet.isAdopted ? <button className="ui disabled button">Already adopted</button> : <button onClick={ () => onAdoptPet(id)} className="ui primary button" data-id={this.props.pet.id}>Adopt pet</button> }
        </div>
      </div>
    )
  }
}

export default Pet
