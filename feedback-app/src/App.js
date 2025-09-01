import React from 'react'


function App() {
  return (
    <div className='container'>
      <h1>My Feedback App</h1>
    </div>
  )
}

export default App

// Alternative way with <JSX></JSX>


// function App() {
//   return React.createElement('div', {className: 'container'}, 
//     React.createElement('h1', {}, 'My Feedback App')
//   )
// }

