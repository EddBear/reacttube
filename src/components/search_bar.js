import React, { Component } from 'react';
/* This { Component } is the same as
  const Component = React.Component;*/

/* Every react component that's define by class shall have
and return by it's own render method */
class SearchBar extends Component {

  constructor(props){
    super(props);

    this.state = { term: '' };
  }

  render(){
      return (
        <div className="search-bar">
          <input
          onChange={ event => this.onInputChange(event.target.value) }/>
        </div>
        );
      }

      onInputChange(term){
          this.setState({term});
          this.props.onSearchTermChange(term);
      }

}

export default SearchBar;
