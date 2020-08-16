import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import CustomButton from '../../components/buttonComponent'




function Forms(props) {
    console.log(props)

    const [namee,setNamee] = useState('')
    const [job,setJob] = useState('')
    const [salary,setSalary] = useState('')

    const employeName = function(e){

        setNamee(e.target.value)

    }

    const employeJob = function(e){

        setJob(e.target.value)

    }

    const employeSalary = function(e){

        setSalary(e.target.value)

    }


    return(
        <div>

            <h1>Enter Employees Info</h1>
            <div style={{width: '500px'}}><input type= 'text' placeholder='Enter Name'className='form-control' onChange={employeName} /></div>
            <div style={{width: '500px'}}><input type='text' placeholder='Enter Job Position' className='form-control' onChange={employeJob}/></div>
            <div style={{width: '500px'}}><input type='number' placeholder='Enter Salary' className='form-control' onChange={employeSalary}/></div>
            <div style={{width: '500px'}}><CustomButton text = 'Submit' class = 'btn btn-success' onclick={()=>{


props.employeData({namee,job,salary})

            }}/></div>



        </div>
    )
}

export default Forms;