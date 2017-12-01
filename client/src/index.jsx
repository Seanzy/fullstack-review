import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import Search from './components/Search.jsx';
import RepoList from './components/RepoList.jsx';

class App extends React.Component {
  constructor(props) {
    super(props); //call super(props first in the constructor, otherwise 'this' will be undefined)
    this.state = { 
      repos: [],
    }
    
    // this.search = this.search.bind(this);
  }
  
  componentDidMount() {
    console.log('got here');
    $.get("/repos", function(reposArray) {

      // console.log('77777777', reposArray);
    })
    .done(reposArray => {
      this.setState({
        repos: reposArray,
      });// 
    });  
    
  }

  search (term) {
    console.log(`${term} was searched`);
    $.ajax({
      method: "POST",
      url: "/repos",
      data: {data: term} // has to go in as a data object
    })
  .done(function(res) {
    console.log( "Data Saved: " + res );
  });
     
  }

  render () {
    return (<div>
      <h1>Seanzy's Github Fetcher</h1>
      <RepoList repos={this.state.repos}/>
      <Search onSearch={this.search.bind(this)}/>
    </div>)
  }
}

ReactDOM.render(<App />, document.getElementById('app'));


