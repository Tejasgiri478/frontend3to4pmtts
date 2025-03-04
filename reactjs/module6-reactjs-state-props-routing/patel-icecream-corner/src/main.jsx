import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import './index.css'
import './style.css'
import Layout from './Layout'
import Pagenotfound from './components/Pagenotfound'
import 'bootstrap-icons/font/bootstrap-icons.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    
    <Router>
      <Routes>
        <Route path='/' element={<Layout />} />
        <Route path='*' element={<Pagenotfound />} />
      </Routes>
    </Router>


  </StrictMode>,
)
