import React from 'react';
// import logo from './logo.svg';
import { Greet } from './components/Greet'
import { Welcome } from './components/Welcome'
// import Message from './components/Message';
// import Counter from './components/Counter';
import './App.css';

class App extends React.Component {
	render(){
		return (
		    <div className="App">
				{/* <Counter inc='5'/> */}
				{/* <Message /> */}
		      {/* {/* <Greet name="Vikas" man="Bat"> I am Vikas </Greet> */}

			  {/* Destruction of props  */}
		      <Greet name="Vishal" man="Super"> I am Vishal </Greet>

			   {/* Destruction of state  */}
			   <Welcome name="Vikas" man="Bat">I am vikasasadasda</Welcome> 


		      {/* <Greet name="Arsh" man="Raju"> I am Arsh </Greet> */}
		     
		    </div>
  		);
	}
}

export default App;
