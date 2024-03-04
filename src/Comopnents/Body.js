import React, { Suspense, lazy, useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../Utils/Firebase';
import AuthenticationUser from './AuthenticationUser';
import Home from './Home';

  // "homepage": "https://ghadgeomkar.github.io/Filmy",

const Body = () => {
  const [user, setUser] = useState(null);
  const MoreMovies = lazy(() => import('./MoreMovie'))
  const WatchList = lazy(() => import('./WatchList'))
  const SearchMovie = lazy(() => import('./SearchMovie'))
  const WatchMovie = lazy(() => import('./WatchMovie'))

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
    });

    return () => unsubscribe();
  }, []);

  return (
    <Router >
      <Routes>
        <Route path="/" element={<ConditionalAuthenticationUser user={user} />} />
        <Route path="/home" element={user ? <Home /> : <Navigate to="/" />} />
        <Route path="/watchlist" element={user ? <Suspense fallback={<h1>loading...</h1>} > <WatchList /> </Suspense> : <Navigate to="/" />} />
        <Route path="/moremovies" element={user ? <Suspense fallback={<h1>loading...</h1>} > <MoreMovies /> </Suspense> : <Navigate to="/" />} />
        <Route path="/searchmovie/:id" element={user ? <Suspense fallback={<h1>loading...</h1>} > <SearchMovie /> </Suspense> : <Navigate to="/" />} />
        <Route path="/watchmovie/:id" element={user ? <Suspense fallback={<h1>loading...</h1>} > <WatchMovie /> </Suspense> : <Navigate to="/" />} />
      </Routes>
    </Router>
  );
};

const ConditionalAuthenticationUser = ({ user }) => {
  return user ? <Navigate to="/home" /> : <AuthenticationUser />;
};

export default Body;


