import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// ecomm user panel components
import Layout from './Layout'
import Register from './components/Register'
import SignIn from './components/SignIn'
import ContactUs from './components/ContactUs'
// admin ecomm panel components
import AdminLayout from './AdminLayout'
import Login from './components/admin/Login'
import AddCategory from './components/admin/AddCategory'
import DeleteCategory from './components/admin/DeleteCategory'
import EditCategory from './components/admin/EditCategory'
import AddItems from './components/admin/AddItems'
import ManageContact from './components/admin/ManageContact'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import 'bootstrap-icons/font/bootstrap-icons.css'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Router>
    <Routes>
      {/* user panel */}
      <Route path='/' element={<Layout />}></Route>
      <Route path='/register' element={<Register />}></Route>
      <Route path='/login-us' element={<SignIn />}></Route>
      <Route path='/contact-us' element={<ContactUs />}></Route>
      {/* admin panel */}
      <Route path='/admin-login' element={<Login />}></Route>
      <Route path='/admin-login/dashboard' element={<AdminLayout />}></Route>
      <Route path='/admin-login/add-category' element={<AddCategory />}></Route>
      <Route path='/admin-login/delete-category/:id' element={<DeleteCategory />}></Route>
      <Route path='/admin-login/edit-category/:id' element={<EditCategory />}></Route>
      <Route path='/admin-login/add-items' element={<AddItems />}></Route>
      <Route path='/admin-login/manage-contacts' element={<ManageContact />}></Route>
      
       
    </Routes>
    </Router>
  </StrictMode>,
)
