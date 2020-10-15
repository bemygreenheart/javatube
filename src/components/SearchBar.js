import React from 'react';

class SearchBar extends React.Component{
  state = {term : ''};

  onInputChange = (event) =>{
    this.setState({term : event.target.value});
  }

  onFormSubmit = (event) =>{
    event.preventDefault();
    
    this.props.onSearchSubmit(this.state.term);
  }

  render(){
    return(
      <div className="ui segment" style={{marginTop : '10px'}}>
        <form action="" className="ui form" onSubmit={this.onFormSubmit}>
          <div className="field">
          <label htmlFor="search">Search</label>
          <input type="text" id="search" value={this.state.term} onChange={this.onInputChange }/>
          </div>
        </form> 
      </div>
    );
  }
}

export default SearchBar;