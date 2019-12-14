import React from 'react';
import logo from './logo.svg';
import { Greet } from './components/Greet'
import { Welcome } from './components/Welcome'
import './App.css';

class App extends React.Component {
	render(){
		return (
		    <div className="App">
		      <Greet name="Vikas" man="Bat"> I am Vikas </Greet>
		      <Greet name="Vishal" man="Super"> I am Vishal </Greet>
		      <Greet name="Arsh" man="Raju"> I am Arsh </Greet>
		      <Welcome name="Vikas" man="Bat">I am vikasasadasda</Welcome>
		    </div>
  		);
	}
}

export default App;
