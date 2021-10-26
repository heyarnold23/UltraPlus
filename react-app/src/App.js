import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import LoginForm from './components/auth/LoginForm';
import SignUpForm from './components/auth/SignUpForm';
import NavBar from './components/Navigation';
import Splash from './components/Splash';
import ProtectedRoute from './components/auth/ProtectedRoute';
import UsersList from './components/UsersList';
import User from './components/User';
import MainSplash from './components/MainSplash';
import LoginPage from './components/LoginPage';
import SignUpPage from './components/SignUpPage'
import Footer from './components/Footer';
import WhosWatching from './components/WhosWatching';
import SelectAvatar from './components/SelectAvatar';
import CreateProfile from './components/CreateProfile';
import EditProfile from './components/EditProfile';
import { authenticate } from './store/session';
import Watchlist from './components/Watchlist';
import WatchlistPage from './components/WatchlistPage';

function App() {
  const [loaded, setLoaded] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    (async() => {
      await dispatch(authenticate());
      setLoaded(true);
    })();
  }, [dispatch]);

  if (!loaded) {
    return null;
  }

  return (
    <BrowserRouter>
      <Switch>
        <Route path='/' exact={true} >
          <Splash/>
        </Route>
        <Route path='/login' exact={true}>
          <LoginPage />
        </Route>
        <Route path='/sign-up' exact={true}>
          <SignUpPage />
        </Route>
        <ProtectedRoute path='/whos-watching' exact={true} >
          <WhosWatching/>
        </ProtectedRoute>
        <ProtectedRoute path='/select-avatar' exact={true} >
          <SelectAvatar/>
        </ProtectedRoute>
        <ProtectedRoute path='/create-profile' exact={true} >
          <CreateProfile/>
        </ProtectedRoute>
        <ProtectedRoute path='/edit-profile' exact={true} >
          <EditProfile/>
        </ProtectedRoute>
        <ProtectedRoute path='/main' exact={true} >
          <NavBar />
          <MainSplash/>
        </ProtectedRoute>
        <ProtectedRoute path='/watchlist' exact={true} >
          <NavBar />
          <Watchlist/>
        </ProtectedRoute>
        <ProtectedRoute path='/watchlists/:id' exact={true} >
          <NavBar />
          <WatchlistPage/>
        </ProtectedRoute>
        <ProtectedRoute path='/users' exact={true} >
          <UsersList/>
        </ProtectedRoute>
        <ProtectedRoute path='/users/:userId' exact={true} >
          <User />
        </ProtectedRoute>
        {/* <ProtectedRoute path='/' exact={true} >
          <h1>My Home Page</h1>
        </ProtectedRoute> */}
      </Switch>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
