import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import App from './App.tsx'
import './index.css'
import Blog from './pages/BlogPage.tsx'
import NotFound from './pages/NotFound.tsx'
import ToolsList from './pages/ToolsList.tsx'
import UploadFile from './pages/UploadFile.tsx'


const router=createBrowserRouter([
  {
    path:'/',
    element:<App />,
    errorElement:<NotFound />
  },
  {
    path:'/Blog',
    element:<Blog />
  },
  {
    path:'Tools_list',
    element:<ToolsList />
  },
  { 
  path: "/tools/:tool",
  element: <UploadFile />

  }
])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    
    <RouterProvider router={router} />    
  </StrictMode>,
)
