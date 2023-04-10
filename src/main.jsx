import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from './components/Home';
import Statistic from './components/Statistic';
import Blog from './components/Blog';
import ErrorPage from './components/ErrorPage';
import { getJobsAndAppliedData } from './loaders/getJobs&AppliedData';
import JobDetails from './components/JobDetails';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    errorElement: <ErrorPage></ErrorPage>,
    loader: getJobsAndAppliedData,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/statistics",
        element: <Statistic></Statistic>,
      },
      {
        path: "/appliedjobs",
        element: <div>appliedjobs</div>,
      },
      {
        path: "/job/:id",
        element: <JobDetails></JobDetails>,
        loader: async ({params}) => {
          const res = await fetch("/fakeJobs.json");
          const data = await res.json();
          const singleData = data.find(job => job.id == params.id)
          if(!singleData){
            return {}
          }
          else{
            return singleData;
          }
        }
      },
      {
        path: "/blog",
        element: <Blog></Blog>,
      },
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
