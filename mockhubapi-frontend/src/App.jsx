import React from 'react'
import Header from './components/Header'
import { Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
import GuidePage from './pages/GuidePage'
import Footer from './components/Footer'


const App = () => {
  return (
    <div className='flex flex-col min-h-screen'>
      <Header />
      <main className='flex-grow flex-1'>
        <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/guide' element={<GuidePage/>} />
      </Routes>
      </main>
      <Footer/>
    </div>
  )
}

export default App