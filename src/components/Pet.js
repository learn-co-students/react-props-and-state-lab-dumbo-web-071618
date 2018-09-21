import React from 'react'

class Pet extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            isAdopted: this.props.isAdopted
        }
    }
    render() {
        return (
            <div className="card">
                <div className="content">
                    <a className="header">
                        {/*'♀' OR '♂' */}
                        {this.props.gender === "female" ? '♀' : '♂'}
                        {this.props.name}
                    </a>
                    <div className="meta">
                        <span className="date">{this.props.type}</span>
                    </div>
                    <div className="description">
                        <p>Age: {this.props.age}</p>
                        <p>Weight:{this.props.weight}</p>
                    </div>
                </div>
                <div className="extra content">
                    {
                        this.state.isAdopted === true ?
                        <button className="ui disabled button">Already adopted</button>:
                        <button className="ui primary button" 
                                onClick={() => {this.props.onAdoptPet(this.props.id)
                                this.setState({isAdopted: true})}}
                        >
                                Adopt pet
                        </button>
                    }
                </div>
            </div>
        )
    }
}

export default Pet
