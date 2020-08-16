import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import CustomButton from '../../components/buttonComponent'


function Forms() {
    return(
        <div>

            <h1>Enter Employees Info</h1>
            <div style={{width: '500px'}}><input type= 'text' placeholder='Enter Name'className='form-control' /></div>
            <div style={{width: '500px'}}><input type='text' placeholder='Enter Job Position' className='form-control'/></div>
            <div style={{width: '500px'}}><input type='number' placeholder='Enter Salary' className='form-control'/></div>
            <div style={{width: '500px'}}><CustomButton text = 'Submit' class = 'btn btn-success'/></div>

        </div>
    )
}

export default Forms;