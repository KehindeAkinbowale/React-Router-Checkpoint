import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './components/Home'
import Filter from './components/Filter'
const App = () => {
  


  return (
    <div>
      <Routes>
        <Route path='/' element={<Home />}/>
      </Routes>
      <Routes>
        <Route path='/filter' element={<Filter name="Kenny" description="HELLO THERE I AM A DEVELOPER"/>}/>
      </Routes> 
    </div>
  )
}

export default App