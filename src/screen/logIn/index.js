import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import CustomButton from '../../components/buttonComponent'


function LogIn(props){

    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')
  
    const updateEmail = function(e){
      setEmail(e.target.value)
  
    }
  
    const updatePassword = function(e){
      setPassword(e.target.value)
      
    }

    return(
        <div>
            <div style={{width: '300px'}}>
            <input type= 'text' placeholder='Enter Email' className='form-control' onChange={updateEmail}/>
            <input type= 'password' placeholder='Enter Password' className='form-control' onChange={updatePassword}/>
            <CustomButton text='Log In' class='btn btn-success' onclick={() => props.updateUser({email,password})}/>
            </div>

            
        </div>

        

        

    )
}

export default LogIn;