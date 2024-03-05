import React, { Suspense, lazy, useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate, createBrowserRouter, RouterProvider } from 'react-router-dom';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../Utils/Firebase';
import AuthenticationUser from './AuthenticationUser';
import Home from './Home';
import { eventWrapper } from '@testing-library/user-event/dist/utils';


const Body = () => {
  // const [user, setUser] = useState(null);
  const MoreMovies = lazy(() => import('./MoreMovie'))
  const WatchList = lazy(() => import('./WatchList'))
  const SearchMovie = lazy(() => import('./SearchMovie'))
  const WatchMovie = lazy(() => import('./WatchMovie'))

  // useEffect(() => {
  //   const unsubscribe = onAuthStateChanged(auth, (user) => {
  //     setUser(user);
  //   });

  //   return () => unsubscribe();
  // }, []);


  const appRouter = createBrowserRouter([
    {
      path: '/',
      element: <AuthenticationUser />
    },
    {
      path: '/home',
      element: <Home />
    },
    {
      path: '/watchList',
      element: <Suspense fallback={<h1>loading...</h1>} > <WatchList /> </Suspense>
    },
    {
      path: '/moremovies',
      element: <Suspense fallback={<h1>loading...</h1>} > <MoreMovies /> </Suspense>
    },
    {
      path: "/searchmovie/:id",
      element: <Suspense fallback={<h1>loading...</h1>} > <SearchMovie /> </Suspense>
    },
    {
      path: "/watchmovie/:id",
      element: <Suspense fallback={<h1>loading...</h1>} > <WatchMovie /> </Suspense>
    },

  ])

  return (
    <div>
      <RouterProvider router={appRouter} />
    </div>
  )

  //   return (
  //     <Router >
  //       <Routes>
  //         <Route path="/" element={<ConditionalAuthenticationUser user={user} />} />
  //         <Route path="/home" element={user ? <Home /> : <Navigate to="/" />} />
  //         <Route path="/watchlist" element={user ? <Suspense fallback={<h1>loading...</h1>} > <WatchList /> </Suspense> : <Navigate to="/" />} />
  //         <Route path="/moremovies" element={user ? <Suspense fallback={<h1>loading...</h1>} > <MoreMovies /> </Suspense> : <Navigate to="/" />} />
  //         <Route path="/searchmovie/:id" element={user ? <Suspense fallback={<h1>loading...</h1>} > <SearchMovie /> </Suspense> : <Navigate to="/" />} />
  //         <Route path="/watchmovie/:id" element={user ? <Suspense fallback={<h1>loading...</h1>} > <WatchMovie /> </Suspense> : <Navigate to="/" />} />
  //       </Routes>
  //     </Router>
  //   );
  // };

  // const ConditionalAuthenticationUser = ({ user }) => {
  //   return user ? <Navigate to="/home" /> : <AuthenticationUser />;
};

export default Body;


