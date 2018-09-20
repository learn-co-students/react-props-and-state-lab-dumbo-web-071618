import React from 'react'

class Pet extends React.Component {

  // constructor(props){
  //   super(props)
  //   this.state = {
  //     isAdopted: props.isAdopted
  //   }
  // }

  // renderButton(){
  //   return this.state.isAdopted ? <button className="ui disabled button">Already adopted</button> : <button className="ui primary button">Adopt pet</button>
  // }
  //updateButton()

  render() {
    return (
      <div className="card">
        <div className="content">
          <a className="header">
            {this.props.gender + this.props.name}
          </a>
          <div className="meta">
            <span className="date">{this.props.type}</span>
          </div>
          <div className="description">
            <p>Age: {this.props.age}</p>
            <p>Weight: {this.props.weight}</p>
          </div>
        </div>
        <div className="extra content">
          {this.props.isAdopted && <button className="ui disabled button">Already adopted</button>}
          {!this.props.isAdopted && <button onClick={() => this.props.onAdoptPet(this.props.id)} className="ui primary button">Adopt pet</button>}
          {/* {this.renderButton()} */}
        </div>
      </div>
    )
  }
}
 

export default Pet
