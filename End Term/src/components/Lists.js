import React from 'react'
import {useNavigate} from 'react-router-dom';
import StudentsLists from './StudentsLists';
import './contact.css'
import './lists.css'


function Lists() {
  let history=useNavigate();
  history('/');

  return (
    <div className='background'>
    <h1>LISTS</h1>
    <div className='tablecard'>
      <table>
        <thead>
          <tr>
            <th>FIRST NAME</th>
            <th>LAST NAME</th>
            <th>EMAIL</th>
            <th>REVIEWS</th>
          </tr>

        </thead>
        <tbody>
          {
            StudentsLists.map((item)=>{
              return(
                <tr >
                  <td>{item.First}</td>
                  <td>{item.Second}</td>
                  <td>{item.Third}</td>
                  <td>{item.Fourth}</td>

                </tr>
              )
            }
            )
          }
        </tbody>
      </table>
      </div>

    </div>
  )
}

export default Lists;

