import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import HelloWorld from './hello'
import ListEmployeeComponent from './components/EmployeeComponent'
import AddEmployee from './components/AddEmployee'
import HeaderComponent from './components/HeaderComponent'
import FooterComponent from './components/FooterComponent'
import {BrowserRouter, Routes, Route} from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
        <HeaderComponent />


      
        <Routes>
          <Route path="/employee" element={<ListEmployeeComponent />} />

          <Route path="/employee/add" element={<AddEmployee />} />

          <Route path="/employee/update/:id" element={ <AddEmployee/>} />
        </Routes>

        


        <FooterComponent/>
    </BrowserRouter>
      </>
  )
}

export default App
