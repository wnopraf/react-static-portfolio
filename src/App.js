import React from 'react'
import { Root } from 'react-static'
//

import Nav from './components/Nav'
import './app.css'
import Main from './pages'

// Any routes that start with 'dynamic' will be treated as non-static routes

function App({ children }) {
  return (
    <Root>
      <Nav />
      <div>
        <Main />
      </div>
    </Root>
  )
}

export default App
