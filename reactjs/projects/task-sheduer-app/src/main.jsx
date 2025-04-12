import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'
import 'bootstrap-icons/font/bootstrap-icons.min.css'
import './style.css'
// task manager app components
import LoginApp from './components/LoginApp'
import RegisterApp from './components/RegisterApp'
import Layout from './Layout'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Router>
      <Routes>
        <Route path='/' element={<LoginApp />} />
        <Route path='/register' element={<RegisterApp />} />
        <Route path='/dashboard' element={<Layout />} />
        
      </Routes>
    </Router>
  </StrictMode>,
)
