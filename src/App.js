import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      persons: [
        {name: "sahoo", number: "8698657483"},
        {name: 'jolly', number: '7261999059'}
      ]
    }
  }

  add = (obj) => {
    let st = this.state;
    st.persons.push(obj);
    this.setState(st);
  }

  delete = (i) => {
    let st = this.state;
    let p = st.persons.filter((data, index) => index !== i);
    st.persons = p;
    this.setState(st);
  }

  render() {
    return (
      <body style="background-color:blue;">
      <div className="App">
        <header className="App-header">
		      Phone Register
        </header>

        <ul>
          {this.state.persons.map((data, index) => (<li key={index}>{data.name} {data.number} <button onClick={() => this.delete(index)}>delete</button></li>))}
        </ul>
        <button className="but" onClick={() => this.add({name: 'sanjay', number:'8698635501'})}>add</button>
      </div>
      </body>
    );
  }
}

export default App;
