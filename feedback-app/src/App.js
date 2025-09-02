import React from 'react'
import Header from './components/Header'

function App() {
  return (
    <>
      <Header text='Hello World'/>
      <div className='container'>
        <h1>My Feedback App</h1>
      </div>
    </>
  )
}

export default App

// Alternative way with <JSX></JSX>

// function App() {
//   return React.createElement('div', {className: 'container'}, 
//     React.createElement('h1', {}, 'My Feedback App')
//   )
// }

