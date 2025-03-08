import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import './index.css'
import './style.css'
// customer panel components
import Layout from './Layout'
import ContactUs from './components/ContactUs'
import Pagenotfound from './components/Pagenotfound'
import 'bootstrap-icons/font/bootstrap-icons.css'
// admin panel components load here
import AdminLogin from './components/admin/AdminLogin'
import AdminLayout from './AdminLayout'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    
    <Router>
      <Routes>
        <Route path='/' element={<Layout />} />
        <Route path='/contact-us' element={<ContactUs />} />
        <Route path='*' element={<Pagenotfound />} />
        <Route path='/admin-login' element={<AdminLogin />} />
        <Route path='/admin-login/dashboard' element={<AdminLayout />} />
        
      </Routes>
    </Router>


  </StrictMode>,
)
