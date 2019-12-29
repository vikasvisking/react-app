import React from 'react';

class UserComponent extends React.Component{
    
    constructor(){
        super()
        this.state = {
            isLoggedIn : true
        }
    }

    render(){

        // short circuit operator
        return this.state.isLoggedIn && <div>Hello Vishewas</div>

        // Terinary Operator
        // return this.state.isLoggedIn ?
        //     (<div>Wecome Wishwas</div>) : (<div>welcome Guest</div>)
        
        // element Variable
        // let messsage;
        // if (this.state.isLoggedIn){
        //     messsage = <div>Welcome Vishwas</div>
        // }
        // else{
        //     messsage = <div>Welcome Guest</div>
        // }
        // return messsage

        // if else approch
        // if (this.state.isLoggedIn){
        //     return(
        //         <div>
        //            Welcome vishwas 
        //         </div>
        //     )
        // }
        // else{
        //     return(
        //         <div>
        //            Welcome Guest 
        //         </div>
        //     )
        // }  
    }
}

export default UserComponent;