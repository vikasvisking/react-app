import React from 'react';
// import logo from './logo.svg';
// import { Greet } from './components/Greet'
// import { Welcome } from './components/Welcome'
// import FunctionClick from './components/FunctionClick'
// import ClassClick from './components/ClassClick'
// import Message from './components/Message';
// import Counter from './components/Counter';
import EventBinding from './components/EventBinding'
import './App.css';

class App extends React.Component {
	render(){
		return (
		    <div className="App">

				{/* Event hyandling */}
				<EventBinding />
				{/* <FunctionClick /> */}
				{/* <ClassClick /> */}
				{/* <Counter inc='5'/> */}
				{/* <Message /> */}
		      {/* {/* <Greet name="Vikas" man="Bat"> I am Vikas </Greet> */}

			  {/* Destruction of props  */}
		      {/* <Greet name="Vishal" man="Super"> I am Vishal </Greet> */}

			   {/* Destruction of state  */}
			   {/* <Welcome name="Vikas" man="Bat">I am vikasasadasda</Welcome>  */}


		      {/* <Greet name="Arsh" man="Raju"> I am Arsh </Greet> */}
		     
		    </div>
  		);
	}
}

export default App;
