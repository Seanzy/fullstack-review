import React from 'react';

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      term: ''
    }
    
    //every single async call needs to be bound to proper context with 'this'
    // this.delta = this.delta.bind(this);
    this.onChange = this.onChange.bind(this);
    this.search = this.search.bind(this);
  }

  onChange (e) {
    // console.log(this);
    // console.log(e);
    this.setState({
      term: e.target.value
    });
  }

  search() {
    // console.log('got here');
    this.props.onSearch(this.state.term);
    
  }

  render() {
    return (<div>
      <h4>Add more repos!</h4>
      Enter a github username: <input value={this.state.term} onChange={this.onChange}/>       
      <button onClick={this.search}> Add Repos </button>
    </div>) 
  }
}

export default Search;