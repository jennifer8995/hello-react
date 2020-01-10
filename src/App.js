import React, { Component } from 'react';

import Header from './components/Header';
import Home from './components/Home';

class App extends Component {
  render() {
      // let content="";
      // if(true){
      // content="content";
      // }
  const user={
    name:"jlon",
    hobbies:["Sports","Reading"]
  }
    return (
      <div className="container">
          <div className="row">
            <div className="col-xs-l col-xs-offset-11">
              <h1>Hello!</h1>
            </div>
          </div>
          <div className="row">
            <div className="col-xs-l col-xs-offset-11">
              <Header/>
            </div>
          </div>

          {/* <div className="row">
            <div className="col-xs-l col-xs-offset-11">
              <Home/>
            </div>
          </div> */}
    
          <div className="row">
            <div className="col-xs-l col-xs-offset-11">
              {/* <h1>output auto data</h1> */}
              {/* {6+9}
              {"hello"} */}
              {/* {content} */}
              {/* {false ? "hello":"world"} */}
            </div>
          </div>


          <div className="row">
            <div className="col-xs-l col-xs-offset-11">
            <h1>组件间数据传递</h1>
              <Home name={"max"} initialAge={12} user={user}>

              </Home>
            </div>
          </div>
        </div>
    );
  }
}

export default App;