import React from 'react'
import { Root, Routes, addPrefetchExcludes } from 'react-static'
//
import { a, Router } from 'components/Router'

import Nav from './components/Nav'
import './app.css'

// Any routes that start with 'dynamic' will be treated as non-static routes
const Suspenser = () => <p>loading</p>
function App({ children }) {
  return (
    <Root>
      <Nav />
      <div>
        <React.Suspense fallback={<Suspenser />}>
          <Routes default />
        </React.Suspense>
      </div>
    </Root>
  )
}

export default App
