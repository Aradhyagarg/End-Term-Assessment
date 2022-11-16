import React, { useState } from 'react'
import StudentsLists from './StudentsLists';
import { useNavigate } from 'react-router-dom';
import student from './student.jpg';
import Navbar from './Navbar';
import './admin.css'


function Admin() {

    const details = ["aradhya0107.be20@chitkara.edu.in","admin"];
    const [Email, setEmail] = useState('');
    const [Password, setPassword] = useState('');

    let history = useNavigate();
    const handleSubmit = () =>{
    if(Email == details[0] && Password == details[1]){
        alert("Admin Login Successfully");
        history('/lists');
    }
    else{
        alert("Wrong Password or Email is entered");
    }
};
    return (
        <div className='background'>
        <Navbar />
            <h1>LOGIN</h1>
            <form className='container' onSubmit={handleSubmit}>
            <br></br>

                <label >Email</label><br />
                <input type="email"
                    placeholder='Enter email'
                    onChange={(e) => setEmail(e.target.value)}
                    required>
                </input>
                <br />
                <br></br>
                <label >Password</label><br />
                <input type="password"
                    placeholder='Enter password'
                    onChange={(e) => setPassword(e.target.value)}
                    required>
                </input>
                 <input className='btn'
                    type="submit"
                />

            </form>

        </div>
    )
}

export default Admin;
