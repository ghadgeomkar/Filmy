import React, { Suspense, lazy, useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate, createBrowserRouter, RouterProvider } from 'react-router-dom';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../Utils/Firebase';
import AuthenticationUser from './AuthenticationUser';
import Home from './Home';
import { eventWrapper } from '@testing-library/user-event/dist/utils';


const Body = () => {
  
  const MoreMovies = lazy(() => import('./MoreMovie'))
  const WatchList = lazy(() => import('./WatchList'))
  const SearchMovie = lazy(() => import('./SearchMovie'))
  const WatchMovie = lazy(() => import('./WatchMovie'))



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
};

export default Body;


