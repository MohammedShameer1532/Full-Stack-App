import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

const Read = () => {
  const [user, setUser] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:1527/read')
      .then(result => setUser(result.data))
      .catch(err => console.log(err))
  }, [])

  const handleDelete = (id) => {
    axios.delete(`http://localhost:1527/deleteUser/${id}`)
      .then(result => {
        console.log(result)
        window.location.reload()

      })

      .catch(err => console.log(err))

  }
  return (
    <div>
      <h2>Read Operation</h2>
     
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Id</th>
            <th scope="col">Name</th>
            <th scope="col">Email Address</th>
            <th scope="col">Password</th>
            <th scope='col'>Edit</th>
            <th scope='col'>Delete</th>

          </tr>
        </thead>
        <tbody>
          {
            user.map((element, index) => {
              return (
                <tr key={index}>
                  <th scope='col'>{element._id}</th>
                  <td>{element.name}</td>
                  <td>{element.email}</td>
                  <td>{element.password}</td>
                  <td><Link to={`/update/${element._id}`}><button className='btn btn-success'>Update</button></Link></td>
                  <td><button className='btn btn-warning' onClick={() => handleDelete(element._id)}>Delete</button></td>
                </tr>
              )
            })
          }
        </tbody>
      </table>
      <div id='back'>
        <Link to="/">
          <button type="submit" id='btn'>Back</button>
        </Link>
      </div>

    </div>
  )
}

export default Read;
