import React from 'react'


function App() {
  const title = 'Blog Post'
  const body = 'This is my blog'
  const comments = [
    {id: 1, text: 'Comment one'},
    {id: 2, text: 'Comment two'},
    {id: 3, text: 'Comment three'}, 
  ]
  const loading = false
  const showComments = true

  if (loading) return <h1>Loading...</h1>

  const commentBlocks = (
        <div className="comments">
        <h3>Comments {comments.length}</h3>
        <ul>
            {comments.map((comment, index) => {
              return (<li key={index}>{comment.text}</li>)
            })}
        </ul>
      </div>
      )

  return (
    <div className='container'>
      <h1>{title.toUpperCase() }</h1>
      <p>{body}</p>

      {showComments && commentBlocks}
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

