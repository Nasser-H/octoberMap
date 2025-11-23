
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import Layout from './Layout'
import V1 from './Components/V1/V1'
import V2 from './Components/V2/V2'
import V3 from './Components/V3/V3'


function App() {
  const router = createBrowserRouter([
    {path: '', element: <Layout/>, children: [
        {index: true, element: <V1/>},
        {path: 'v2', element: <V2/>},
        {path: 'v3', element: <V3/>},
    ]},
  ])
  return <>
  <RouterProvider router={router}/>
  </>
}

export default App
