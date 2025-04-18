import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'
import './style.css'
import ProtectedRoute from './components/ProtectedRoute'
import { UserAuthContextProvider } from './Context/UserAuthContext';
// task manager app components
import LoginApp from './components/LoginApp'
import RegisterApp from './components/RegisterApp'
import Layout from './Layout'
import AddTask from './components/AddTask'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
createRoot(document.getElementById('root')).render(
  <StrictMode>
   <UserAuthContextProvider>
    <Router>
      <Routes>
        <Route path='/' element={<LoginApp />} />
        <Route path='/register' element={<RegisterApp />} />
        <Route path='/dashboard' element={<ProtectedRoute> <Layout /> </ProtectedRoute>} />
        <Route path='/addtask' element={<AddTask />} />
        
      </Routes>
    </Router>
    </UserAuthContextProvider>
  </StrictMode>,
)
