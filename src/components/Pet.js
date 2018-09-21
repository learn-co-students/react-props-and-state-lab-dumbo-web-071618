import React from 'react'

class Pet extends React.Component {

  //initialize the state of isAdopted with the present value from the fectch. must pass in props to both constructor and superso that it can inherit from PetBrowser
  //"this" is the instance of the Pet component
  //we could have called props "beef" & would have same effect
  constructor(props){
    super(props) //inherting from higher-level component (this.props)
    this.state = {
      adopted: props.pet.isAdopted
    }
  }
  //adopted = false

  //function to return a symbol based on the value of the gender key on the pet object
  petGender = () => {
    if (this.props.pet.gender==="female") {
      return "♀"
    }
    else {
      return "♂"
    }
  }

  //an function that gets passed as an event listener, in which we remove the Apot Pet button & then update the state of the adopted key with the opposite of the value of isAdopted key of the pet object
  adopt = (event) => {
    event.target.remove()
    this.setState({
      adopted: !this.props.pet.isAdopted
    })
  }

  render() {
    {/*console.log(this.props.pet.isAdopted)*/}
    return (
      <div className="card">
        <div className="content">
          <a className="header">
            {this.petGender()}
            {/*invoking the petGender function which then passes in the return value (gender symbol) to be rendered on the DOM*/}

            Pet Name: {this.props.pet.name}
          </a>
          <div className="meta">
            <span className="date">Pet Type: {this.props.pet.type}</span>
          </div>
          <div className="description">
            <p>Age: {this.props.pet.age}</p>
            <p>Weight: {this.props.pet.weight} lbs</p>
          </div>
        </div>
        <div className="extra content">
          <button className="ui disabled button" hidden={this.state.adopted ? false : true}>Already adopted</button>
          {/* based on the updated state value of the "adopted" key, the ternerary evaluates the expression and either hides or reveals the "Already Adopted button" */}
          <button className="ui primary button" onClick={this.adopt}>Adopt pet</button>
          {/*adding event listener which fires the adopt function*/}
        </div>
      </div>
    )
  }
}

export default Pet
