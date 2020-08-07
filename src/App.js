import React from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import CustomButton from './components/buttonComponent'
import Background from './images/e-commerce.jpg';
// import Cards from './components/cardComponent/'


function App() {
  return (
    <div>

      <div style={{backgroundColor: 'darkblue', display: 'flex', justifyContent: 'space-evenly', color: 'white', fontSize: '20px', height: '70px' }}>
      <div style={{paddingTop: '20px'}}>Home</div>
      <div style={{paddingTop: '20px'}}>Products</div>
      <div style={{paddingTop: '20px'}}>Carts</div>
      <div style={{paddingTop: '20px'}}>Contact Us</div>
      <div style={{paddingTop: '20px', display: 'flex'}}><input type='text' placeholder='Search here' className='form-control'/>
      <CustomButton class= 'btn btn-secondary' text= 'search'/>
      
      </div>
      <div style={{paddingTop: '20px'}}>Log In</div>
      </div>

      <div style={{ background: `url(${Background})`, backgroundSize: 'cover', backgroundPositionY: 'center', height: '500px', backgroundAttachment: 'fixed'}}>
        

      </div>

      <div style={{backgroundColor: '#dedede'}}>

        {/* <Cards /> */}




      </div>






    </div> 
     
    

    


  );
}

export default App;
