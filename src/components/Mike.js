import React from 'react';

class Mike extends React.Component {
  constructor(props){
    super(props);
  }
  render(){
    return (
      <div>
        <p> My favorite color and number is {this.props.color} and {this.props.num}. </p>
        <input type="search" placeholder="Input text"/>
        <button>Submit</button>
      </div>
    )
  }
}

export default Mike;
