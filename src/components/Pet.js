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
    let id = this.props.pet.id
    return (
      <div className="card">
        <div className="content">
          <a className="header">
            {this.renderGender()}
            {this.props.pet.name}
          </a>
          <div className="meta">
            <span className="date">{this.props.pet.type}</span>
          </div>
          <div className="description">
            <p>Age: {this.props.pet.age}</p>
            <p>Weight: {this.props.pet.weight}</p>
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
