import React from 'react'
import Home from './pages/Home'
import FormContainer from './components/FormContainer'

const App = () => {
  return (
    <div className='bg-zinc-100 w-full h-screen'>
      <Home />
      <FormContainer/>
    </div>
  )
}

export default App