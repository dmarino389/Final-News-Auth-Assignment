import React from 'react';

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;

// This will be the signup function
const Signup = () => {
  
  const createUser = async (username, email, password) => {
    const url = BACKEND_URL + '/api/user/create';
    const options = {
      method: 'POST',
      headers: {
        "Content-Type": 'application/json'
      },
      body: JSON.stringify({
        username,
        email,
        password
      })
    };
  
    // This is fetching the data from the url, then it is checking if the status of the data is okay and if it is, it will show some kind of success message and then redirect to the login.
    const res = await fetch(url, options);
    const data = await res.json();
    if (data.status === 'ok'){
      //show success message
      // redirect to login page
    }
  }
  
  const handleSubmit = (e) => {
    e.preventDefault();

    // These are all pulling from my flask apps user models.py 
    const username = e.target.username.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    const confirmPassword = e.target.confirmPassword.value;

    if (password === confirmPassword){
      createUser(username, email, password);
    }
  };

  // This is my registration form layout
  return (
    <div className='text-center p-4'>
      <h1>Signup</h1>
      <form onSubmit={handleSubmit} className='mx-auto col-4 rounded border p-3 text-start'>
        <div className="mb-3">
          <label htmlFor="username" className="form-label">Username</label>
          <input type="text" className="form-control" id="username" aria-describedby="usernameHelp" name='username' />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
          <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" name='email' />
          <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
          <input type="password" className="form-control" id="exampleInputPassword1" name='password' />
        </div>
        <div className="mb-3">
          <label htmlFor="confirmPassword" className="form-label">Confirm Password</label>
          <input type="password" className="form-control" id="confirmPassword" name='confirmPassword' />
        </div>
        <div className="mb-3 form-check">
          <input type="checkbox" className="form-check-input" id="exampleCheck1" />
          <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    </div>
  ); 
};

export default Signup;
