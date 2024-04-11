import { useState } from 'react'
import './App.css'
import Navigation from './customer/components/Navigation/Navigation.jsx';
import Homepage from './customer/Pages/Homepage/Homepage.jsx';
import Footer from './customer/components/Footer/Footer.jsx';

function App() {

  return (
    <>
      <div>
          <Navigation />

          <div>
            <Homepage />
          </div>

          <Footer />
      </div>
    </>
  )
}

export default App;