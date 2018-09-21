import React from 'react'
class Filters extends React.Component {




  render() {
    return (
      <div className="ui form">
        <h3>Animal type</h3>
        <div className="field">
          {/*added event listender to select menu that fires the onChangeType that was defined in App*/}
          <select onChange={this.props.onChangeType} name="type" id="type">
            <option value="all">All</option>
            <option value="cat">Cats</option>
            <option value="dog">Dogs</option>
            <option value="micropig">Micropigs</option>
          </select>
        </div>

        <div className="field">
          {/*added event listender to button that fires the onFindPetsClick that was defined in App*/}
          <button onClick={this.props.onFindPetsClick}
            className="ui secondary button">Find pets
          </button>
        </div>
      </div>
    )
  }
}

export default Filters
