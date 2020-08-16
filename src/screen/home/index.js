import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import CustomButton from '../../components/buttonComponent'
import { Container, Button, lightColors, darkColors } from 'react-floating-action-button'
import LogIn from '../logIn'




   function Home (props){

    

    const [data,setData]= useState( ['hammad','Arif'] )

    const addItem = function(){
  
      const newData = [...data]
  
      newData.push(text)
      setData(newData)
      setText('')
      
      console.log(newData)
  
  
    }
  
    const [text,setText] = useState('')
  
    const naam= function(e){
      const input = e.target.value
      setText(input)
    }
  
   


    return (
      <div>

<Container>
    <Button
     tooltip="The big plus button!"  
     styles={{backgroundColor: darkColors.lighterRed, color: lightColors.white}
} onClick={()=>{props.setHomepage(false)}}
     />
</Container>
  
        <div style={{margin: '300px'}}>
          <h1>Employees Data</h1>
          <input type='text' placeholder='Enter' onChange={naam} value={text}/>
          <CustomButton text='add' class='btn btn-primary' onclick={addItem}/>
          <ol>
            
            {data.map(function(item){
              return(
              <li>{item}</li>
              )
              
            })}
          </ol>
        </div>
  
  
  
  
      </div> 

      
       
      
  
      
  
  
    );

  }


  export default Home;