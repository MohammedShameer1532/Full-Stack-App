import React, { useEffect, useState } from 'react';
import '../App.css';
import { Link, useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';

const Update = () => {
  const { id } = useParams();
  const [name, setName] = useState({});
  const [email, setEmail] = useState({});
  const [password, setPassword] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    axios.get(`https://backend-eight-black.vercel.app/update/${id}`)
      .then(result => {
       
        setName(result.data.name)
        setEmail(result.data.email)
        setPassword(result.data.password)
      })
      .catch(err => console.log(err))
  }, [id])


  const UpdateOperation = (event) => {
    event.preventDefault();
    axios.put(`https://backend-eight-black.vercel.app/updateUser/${id}`,
      {
        name, email, password,
      })
      .then(result => {
        navigate("/read")
      })
      .catch(err => console.log(err))
  }
  return (
    <div>
      <div className='mt-4'>
        <h2>Update Operation</h2>
      </div>
      <form className='mt-2'>
        <div className="mb-3">
          <label className="form-label">Name</label>
          <input type="text" className="form-control" value={name} onChange={(event) => setName(event.target.value)} />
        </div>
        <div className="mb-3">
          <label className="form-label">Email address</label>
          <input type="email" className="form-control" aria-describedby="emailHelp" onChange={(event) => setEmail(event.target.value)} value={email} />
        </div>
        <div className="mb-3">
          <label className="form-label">Password</label>
          <input type="text" className="form-control" onChange={(event) => setPassword(event.target.value)} value={password} />
        </div>
        <button type="submit" className="btn btn-primary" onClick={UpdateOperation}>Update</button>
        <Link to="/">
        <div className='read'>
          <button className='btn btn-success'>Create Operation</button>
        </div>
      </Link>
      </form>

    </div>
  )
}

export default Update;
