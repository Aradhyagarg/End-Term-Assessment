import React, { useState } from 'react'
import StudentsLists from './StudentsLists';
import './contact.css'
import { useNavigate } from 'react-router-dom';
import student from './student.jpg';
import Navbar from './Navbar';


function Contact() {

    const [Name, setName] = useState('');
    const [Group, setGroup] = useState('');
    const [Email, setEmail] = useState('');
    const [RollNo, setRollNo] = useState('');

    let history = useNavigate();
    const handleSubmit = (e) => {
        e.preventDefault();
        let First = Name, Second = Group, Third = Email, Fourth = RollNo;
        StudentsLists.push({ First, Second, Third, Fourth });
        // history('/Thank');
        alert("Form Submitted Succesfully");
    }

    return (
        <div className='background'>
            <Navbar />
            <h1>CUSTOMER REVIEWS</h1>
            <form className='container' onSubmit={handleSubmit}>
                <label>FIRST NAME</label><br />
                <input type="text"
                    placeholder='Enter First Name'
                    onChange={(e) => setName(e.target.value)}
                    required
                />

                <br />
                <label>LAST NAME</label><br />
                <input type="text"
                    placeholder='Enter Last Name'
                    onChange={(e) => setGroup(e.target.value)}
                    required>
                </input>
                <br />
                <label >EMAIL</label><br />
                <input type="email"
                    placeholder='Enter email'
                    onChange={(e) => setEmail(e.target.value)}
                    required>
                </input>
                <br />
                <label >REVIEWS</label><br />
                <input type="text"
                    placeholder='Enter reviews'
                    onChange={(e) => setRollNo(e.target.value)}
                    required>
                </input>
                <br />

                <input className='btn'
                    type="submit"
                />

            </form>

        </div>
    )
}

export default Contact;
