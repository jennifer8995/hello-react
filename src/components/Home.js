import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Home extends Component {
  constructor(props){
    super(props);
    // this.age = this.props.age;
    this.state = {
      age:props.initialAge,
      status:0
    }
    setTimeout(() =>{
      this.setState({
        status:1
      })
    },3000)
  }

  onMakeOlder(){
    // this.age += 3;
    this.setState({
      age:this.state.age + 3
    })
     console.log(this);
  }
  render() {
   
    
    return (
      <div className="container">
          <div className="row">
            <div className="col-xs-l col-xs-offset-11">
              <h1>Home!</h1>
              <div> your name is {this.props.name},age is {this.state.age}</div>
              <p>Status:{this.state.status}</p>
              <button onClick={() =>this.onMakeOlder()} className="btn btn-primary">Make me older</button>
              {/* <button onClick={this.onMakeOlder.bind(this)} class="btn btn-primary">Make me older</button> */}
              {/* <div>
                <h4>hobbies</h4>
                <ul>
                  {this.props.user.hobbies.map((hobby,i) => <li key={i}>{hobby}</li>)}
                </ul>
              </div>
              <div>
                {this.props.children}
              </div> */}
            </div>
          </div>
        </div>
    );
  }
}

Home.propTypes = {
  name: PropTypes.string,
  age: PropTypes.number,
  user: PropTypes.object
}