/* eslint-disable no-unused-vars */

import { useState, useEffect } from 'react';

import { FaSignInAlt } from 'react-icons/fa';

function Login() {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const { email, password } = formData;
  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };
  const onSubmit = (e) => {
    e.preventDefault;
  };
  return (
    <>
      <section className="heading">
        <h1>
          <FaSignInAlt className='inline' /> Login
        </h1>
        <p> Login and Start Setting Goals</p>
      </section>
      <section className="form">
        <form>
          <div className="form-group">
            <input
              className="form-control"
              type="email"
              name="email"
              id="email"
              placeholder="Enter your email"
              value={email}
              onChange={onChange}
            />
          </div>
          <div className="form-group">
            <input
              className="form-control"
              type="password"
              name="password"
              id="password"
              placeholder="Enter your password"
              value={password}
              onChange={onChange}
            />
          </div>

          <div className="form-group">
            <button type="submit" className="btn btn-block" onSubmit={onSubmit}>
              Submit
            </button>
          </div>
        </form>
      </section>
    </>
  );
}

export default Login;
