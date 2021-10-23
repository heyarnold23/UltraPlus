import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { login } from '../../store/session';
import styles from './LoginForm.module.css'

const LoginForm = () => {
  const [errors, setErrors] = useState([]);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const user = useSelector(state => state.session.user);
  const dispatch = useDispatch();

  const onLogin = async (e) => {
    e.preventDefault();
    const data = await dispatch(login(email, password));
    if (data) {
      setErrors(data);
    }
  };

  const updateEmail = (e) => {
    setEmail(e.target.value);
  };

  const updatePassword = (e) => {
    setPassword(e.target.value);
  };

  if (user) {
    return <Redirect to='/whos-watching' />;
  }

  return (
    <div id={styles.formHolder}>
      <span id={styles.loginText}>Log in with your email</span>
      <form onSubmit={onLogin} id={styles.form}>
        <div>
          {errors.map((error, ind) => (
            <div key={ind}>{error}</div>
          ))}
        </div>
        <div>
          {/* <label htmlFor='email'>Email</label> */}
          <input
            id={styles.emailDiv}
            name='email'
            type='text'
            placeholder='Email'
            value={email}
            onChange={updateEmail}
          />
        </div>
        <div>
          {/* <label htmlFor='password'>Password</label> */}
          <input
            id={styles.passwordDiv}
            name='password'
            type='password'
            placeholder='Password'
            value={password}
            onChange={updatePassword}
          />
        </div>
        <button type='submit' id={styles.loginDiv}>LOG IN</button>
      </form>
    </div>
  );
};

export default LoginForm;
