import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import HelloWorld from './hello'
import LoginForm from './components/login'

import ListEmployeeComponent from './components/EmployeeComponent'
import ListDevOpsComponent from './components/DevOpsComponent'
import ListFrontEndComponent from './components/FrontEndComponent'
import ListBackEndComponent from './components/BackEndComponent'
import ListFullStackComponent from './components/FullStackComponent'
import ListJuniorComponent from './components/JuniorComponent'
import ListSeniorComponent from './components/SeniorComponent'


import AddEmployee from './components/AddEmployee'
import AddDevOps from './components/AddDevOps'
import AddFrontEnd from './components/AddFrontEnd'
import AddBackEnd from './components/AddBackEnd.'
import AddFullStack from './components/AddFullStack'
import AddJunior from './components/AddJunior'
import AddSenior from './components/AddSenior'


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

          <Route path="/login" element={<LoginForm />} />


          <Route path="/employee" element={<ListEmployeeComponent />} />
          <Route path="/employee/add" element={<AddEmployee />} />
          <Route path="/employee/update/:id" element={<AddEmployee />} />

          <Route path="/devops" element={<ListDevOpsComponent />} />
          <Route path="/devops/add" element={<AddDevOps />} />
          <Route path="/devops/update/:id" element={<AddDevOps />} />     
          
          <Route path="/frontend" element={<ListFrontEndComponent />} />
          <Route path="/frontend/add" element={<AddFrontEnd />} />
          <Route path="/frontend/update/:id" element={<AddFrontEnd />} />   
          
          <Route path="/backend" element={<ListBackEndComponent />} />
          <Route path="/backend/add" element={<AddBackEnd />} />
          <Route path="/backend/update/:id" element={<AddBackEnd />} />  

          <Route path="/fullstack" element={<ListFullStackComponent />} />
          <Route path="/fullstack/add" element={<AddFullStack />} />
          <Route path="/fullstack/update/:id" element={<AddFullStack />} />  

          <Route path="/junior" element={<ListJuniorComponent />} />
          <Route path="/junior/add" element={<AddJunior />} />
          <Route path="/junior/update/:id" element={<AddJunior />} />  
            
          <Route path="/senior" element={<ListSeniorComponent />} />
          <Route path="/senior/add" element={<AddSenior />} />
          <Route path="/senior/update/:id" element={<AddSenior />} />  
            

        </Routes>

        


        <FooterComponent/>
    </BrowserRouter>
      </>
  )
}

export default App
