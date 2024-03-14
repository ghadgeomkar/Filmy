import React, { Suspense, lazy} from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './Home';
import LogIn from './LogIn';


const Body = () => {
  
  const MoreMovies = lazy(() => import('./MoreMovie'))
  const WatchList = lazy(() => import('./WatchList'))
  const SearchMovie = lazy(() => import('./SearchMovie'))
  const WatchMovie = lazy(() => import('./WatchMovie'))



  const appRouter = createBrowserRouter([
    {
      path: '/',
      element: <Home />
    },
    {
      path: '/authentication',
      element: <LogIn />
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


