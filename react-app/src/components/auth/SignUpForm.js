import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { Redirect, NavLink } from 'react-router-dom';
import { login, signUp } from '../../store/session';
import styles from './SignUpForm.module.css'

const SignUpForm = () => {
  const [errors, setErrors] = useState([]);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [repeatPassword, setRepeatPassword] = useState('');
  const user = useSelector(state => state.session.user);
  const dispatch = useDispatch();

  const onSignUp = async (e) => {
    e.preventDefault();
    if (password === repeatPassword) {
      const data = await dispatch(signUp(email, password));
      if (data) {
        setErrors(data)
      }
    }
    else {
      setErrors(["Passwords don't match"])
    }
  };


  const updateEmail = (e) => {
    setEmail(e.target.value);
  };

  const updatePassword = (e) => {
    setPassword(e.target.value);
  };

  const updateRepeatPassword = (e) => {
    setRepeatPassword(e.target.value);
  };

  if (user) {
    return <Redirect to='/whos-watching' />;
  }

  return (
    <div id={styles.formHolder}>
      <span id={styles.loginText}>Sign up with your email</span>
      <form onSubmit={onSignUp} id={styles.form}>
        <div id={styles.errors}>
          {errors.map((error, ind) => (
            <div key={ind}>{error}</div>
          ))}
        </div>
        <div>
          {/* <label>Email</label> */}
          <input
            id={styles.emailDiv}
            type='text'
            name='email'
            onChange={updateEmail}
            value={email}
          ></input>
        </div>
        <div>
          {/* <label>Password</label> */}
          <input
            id={styles.passwordDiv}
            type='password'
            name='password'
            onChange={updatePassword}
            value={password}
            placeholder='Password'
          ></input>
        </div>
        <div>
          {/* <label>Repeat Password</label> */}
          <input
            id={styles.passwordDiv}
            type='password'
            name='repeat_password'
            placeholder='Repeat Password'
            onChange={updateRepeatPassword}
            value={repeatPassword}
            required={true}
          ></input>
        </div>
        <button type='submit' id={styles.loginDiv}>Sign Up</button>
      </form>
      <span id={styles.signUpMssg}>
        Already have an account? <NavLink id={styles.signUpText} to='/login'>Sign in</NavLink>
      </span>
      <span id={styles.signUpMssg}>
        Or
      </span>
      <span id={styles.signUpMssg}>
        Sign In As A <span id={styles.signUpText} onClick={() => { dispatch(login("demo@aa.io", "password")) }}>Demo User</span>
      </span>
    </div>
  );
};

export default SignUpForm;
