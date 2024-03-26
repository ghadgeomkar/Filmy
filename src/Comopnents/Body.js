// Body.js
import React, { Suspense, lazy } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from '../Layout ';
import Home from './Home';
import LogIn from './LogIn';

const Body = () => {
  const MoreMovies = lazy(() => import('./MoreMovie'));
  const WatchList = lazy(() => import('./WatchList'));
  const SearchMovie = lazy(() => import('./SearchMovie'));
  const WatchMovie = lazy(() => import('./WatchMovie'));

  const appRouter = createBrowserRouter([
    {
      path: '/',
      element: <Layout><Home /></Layout>
    },
    {
      path: '/authentication',
      element: <Layout><LogIn /></Layout>
    },
    {
      path: '/watchList',
      element: <Layout><Suspense fallback={<h1>loading...</h1>}> <WatchList /> </Suspense></Layout>
    },
    {
      path: '/moremovies',
      element: <Layout><Suspense fallback={<h1>loading...</h1>}> <MoreMovies /> </Suspense></Layout>
    },
    {
      path: "/searchmovie/:id",
      element: <Layout><Suspense fallback={<h1>loading...</h1>}> <SearchMovie /> </Suspense></Layout>
    },
    {
      path: "/watchmovie/:id",
      element: <Layout><Suspense fallback={<h1>loading...</h1>}> <WatchMovie /> </Suspense></Layout>
    },
  ]);

  return (
    <div>
      <RouterProvider router={appRouter} />
    </div>
  )
};

export default Body;
