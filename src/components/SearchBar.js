import React, { Component } from 'react'

class SearchBar extends Component {
  constructor(props){
    super(props)
	this.state  = {
		iTimeoutId:null
	}
    this.handleChange = this.handleChange.bind(this);
}

  // componentDidUpdate(prevProps, prevState){
  //   if(this.props.filterText !== prevProps.filterText){
  //     this.handleChange();
  //   }
  // }
  // get filtertext from users' input and call the parent component <SearchResult/> function
 sendfinally(){
	alert("Sending")
	this.props.onUserInput(this.refs.filterText.value)
}
  handleChange() {
	if (this.state.iTimeoutId != null) {
        clearTimeout(this.state.iTimeoutId);
        this.setState({iTimeoutId:null});
    }
	this.setState({iTimeoutId: setTimeout(this.sendfinally.bind(this), 2000)}); 
  }

  render() {
    return (
      <div>
        {/* Input part for search bar */}
        <form className="search_bar">
          <input type="text" name="filterText" className="search"
          placeholder="Search Course Code or Name..." value={this.props.filterText} ref='filterText' onChange={this.handleChange.bind(this)}/>
        </form> 
      </div>
    )
  }
}

export default SearchBar
