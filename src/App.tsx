import { RouterProvider } from 'react-router-dom'
import './App.scss'
import WorkshopRegForm from './pages/WorkshopRegForm/WorkshopRegForm'
import { router } from './routes'

function App() {

  return (
    <RouterProvider router={router} />
  )
}

export default App
