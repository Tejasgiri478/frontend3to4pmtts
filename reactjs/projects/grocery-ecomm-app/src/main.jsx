import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// ecomm user panel components
import Layout from './Layout'
// admin ecomm panel components
import AdminLayout from './AdminLayout'
import Login from './components/admin/Login'
import AddCategory from './components/admin/AddCategory'
import AddItems from './components/admin/AddItems'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import 'bootstrap-icons/font/bootstrap-icons.css'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Router>
    <Routes>
      <Route path='/' element={<Layout />}></Route>
      <Route path='/admin-login' element={<Login />}></Route>
      <Route path='/admin-login/dashboard' element={<AdminLayout />}></Route>
      <Route path='/admin-login/add-category' element={<AddCategory />}></Route>
      <Route path='/admin-login/add-items' element={<AddItems />}></Route>
       
    </Routes>
    </Router>
  </StrictMode>,
)
