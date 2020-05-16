import React from "react";

class SearchBar extends React.Component {
  state = { term: "" };

  onInputChange = event => {
    this.setState({ term: event.target.value });
  };

  onFormSubmit = event => {
    event.preventDefault();

    this.props.onFormSubmit(this.state.term);

    this.setState({ term: "" });
  };

  render() {
    return (
      <div className="search-bar ui segment">
        <form onSubmit={this.onFormSubmit} className="ui form">
          <div className="field">
            <label>Video Search</label>
            <input
              type="text"
              value={this.state.term}
              onChange={this.onInputChange}
            />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;

/*
- 1: Create form tag and add 'Semantic-ui'
- 2: Manage the input value in the class state 
   - tell the "input" that it's 'value' will come from 'this.state.searchWord'
-3: the callback inside of 'onChange' will be called each time the input is changed
   - 'onInputChange' is a function that has arrow notation in order to bind 'this' with our class component 
-4: Set up a 'onSubmit' property that will take in a callback that will be triggered each time the user submits or enters the keyterm from our search bar.

*/
