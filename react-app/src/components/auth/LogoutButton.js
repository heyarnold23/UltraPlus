import React from 'react';
import { useDispatch } from 'react-redux';
import { removeProfileThunk } from '../../store/profiles';
import { logout } from '../../store/session';


const LogoutButton = () => {
  const dispatch = useDispatch()
  const onLogout = async (e) => {
    await dispatch(removeProfileThunk())
    await dispatch(logout());
  };

  return <button onClick={onLogout}>Logout</button>;
};

export default LogoutButton;
