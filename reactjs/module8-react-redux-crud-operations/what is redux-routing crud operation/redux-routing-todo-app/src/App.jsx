import React from 'react'
import {Provider} from 'react-redux'
import store from './store'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from './Layout';
import CounterApp from './components/CounterApp';
import PageNotFound from './components/PageNotFound';
import AddTask from './components/AddTask';
export default function App() {
  return (
  <Provider store={store}>
   <Router>
       <Routes>
        <Route path='/' element={<Layout />} />
        <Route path='/add-task' element={<AddTask />} />
        <Route path='/counter-app' element={<CounterApp />} />
        <Route path='*' element={<PageNotFound />} />
       </Routes>
   </Router>
  </Provider>
  )
}
