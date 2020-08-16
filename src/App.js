import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import CustomButton from './components/buttonComponent'
import Background from './images/e-commerce.jpg';
// import Cards from './components/cardComponent/'
import LogIn from './screen/logIn'
import Home from './screen/home'
import Forms from './screen/form'




function App() {

  const [homepage,setHomepage] = useState(true) 


  const [user,setUser] = useState(false)
   
  
  const updateUser = function(userObj){
    console.log(userObj)

    setUser(true)


  }






  return(
    <div className='main'>

      
    


      {!user ? <LogIn updateUser={updateUser}/>  : <Home/>  }
      {/* {!user && <LogIn updateUser={updateUser} />}

      {user && !Home && <Forms/> }

      {user && Home && <Home homepage={homepage}/>} */}

      {/* <Forms/> */}



    </div>
  )

  
 
}

export default App;
