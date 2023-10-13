import axios from 'axios';
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Create = () => {
  const [name, setName] = useState({});
  const [email, setEmail] = useState({});
  const [password, setPassword] = useState({});
  const navigate = useNavigate();

  const headers = { "Access-control-Allow-Origin": "*" };
  const handleSubmit = (event) => {
    event.preventDefault();
    axios.post('https://full-stack-backend-jet.vercel.app/create',
      {
        name, email, password,
        headers
      })
      .then(result => {
        navigate("/read")
      })
      .catch(err => console.log(err))
  };
  return (
    <div>
      <h2>Create Operation</h2>

      <form className='mt-5'>
        <div className="mb-3">
          <label className="form-label">Name</label>
          <input type="text" onChange={(event) => setName(event.target.value)} className="form-control" />
        </div>
        <div className="mb-3">
          <label className="form-label">Email address</label>
          <input type="email" onChange={(event) => setEmail(event.target.value)} className="form-control" aria-describedby="emailHelp" />
        </div>
        <div className="mb-3">
          <label className="form-label">Password</label>
          <input type="text" onChange={(event) => setPassword(event.target.value)} className="form-control" />
        </div>
        <button type="submit" onClick={handleSubmit} className="btn btn-primary">Submit</button>
      </form>
      <Link to="/read">
        <div className='read'>
          <button className='btn btn-success'>Read Operation</button>
        </div>
      </Link>
    </div>
  )
}

export default Create;
