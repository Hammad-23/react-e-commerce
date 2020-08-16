import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import CustomButton from '../../components/buttonComponent'
import { Container, Button, lightColors, darkColors } from 'react-floating-action-button'
import LogIn from '../logIn'

import Forms from '../form';




   function Home (props){
       console.log(props)
       

       const [data,setData] = useState([{}])

       const employeData = function(allData){

        setData([...data, allData])
        setSelect(false)


       }

       console.log(data)

    const [select,setSelect] = useState(false)

    

    

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
} onClick={()=>{setSelect(true)}}
     />
</Container>

{select ? <Forms updateSelect={setSelect} employeData={employeData}/> :     <div style={{margin: '300px'}}>
          <h1>Employees Data</h1>
          {/* <input type='text' placeholder='Enter' onChange={naam} value={text}/>
          <CustomButton text='add' class='btn btn-primary' onclick={addItem}/> */}
          {/* <ol>
            
            {data.map(function(item){
              return(
              <li>{item}</li>
              )
              
            })}
          </ol> */}

          <table >
              <thead style={{border: 'solid black'}}>
                  <tr style={{fontSize : '30px'}}>
                  <td>Name</td>
                  <td style={{paddingLeft: '80px'}}>JOB</td>
                  <td style={{paddingLeft: '80px'}}>Salary</td>
                  </tr>
              </thead>
              <tbody style={{border: 'solid black'}}>
                  {data.map(function(item){
                      return(
                        <tr>
                        <td>{item.namee}</td>
                      <td style={{paddingLeft: '80px'}}>{item.job}</td>
                      <td style={{paddingLeft: '80px'}}>{item.salary}</td>
                    </tr>

                      )

                  })}
                  


              </tbody>


          </table>


        </div>
        
        }
  
    
  
  
  
  
      </div> 

      
       
      
  
      
  
  
    );

  }


  export default Home;