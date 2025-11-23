
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import Layout from './Layout'
import V1 from './Components/V1/V1'
import V2 from './Components/V2/V2'


function App() {
  const router = createBrowserRouter([
    {path: '', element: <Layout/>, children: [
        {index: true, element: <V1/>},
        {path: 'v2', element: <V2/>}
    ]},
  ])
  return <>
  <RouterProvider router={router}/>
  </>
}

export default App
