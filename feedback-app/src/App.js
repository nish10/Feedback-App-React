import React from 'react'
import Header from './components/Header'
import FeedbackList from './components/FeedbackList'
import { useState } from 'react'
import FeedbackData from './data/FeedbackData'
import FeedbackStats from './components/FeedbackStats'
import FeedbackForm from './components/FeedbackForm'
import { v4 as uuidv4 } from 'uuid'
import AboutPage from './pages/AboutPage'
import { BrowserRouter as Router, Route, Routes, NavLink } from 'react-router-dom'
import AboutIconLink from './components/AboutIconLink'
import Card from './components/shared/Card'
import Post from './components/Post'


function App() {
  const [feedback, setFeedback] = useState(FeedbackData)

  const deleteFeedback = (id) => {
    if (window.confirm('Are you sure you want to delete ?')) {
      setFeedback(feedback.filter((item) => item.id !== id))
    }
  }

  const addFeedback = (newFeedback) => {
    newFeedback.id = uuidv4()
    setFeedback([newFeedback, ...feedback])
  }

  return (
    <Router>
      <Header bgColor="#1A1A2E" color="#ff6a95" text="Feedback UI" />
      <div className="container">
        <Routes>
          <Route exact path="/" element={
            <>
              <FeedbackForm handleAdd={addFeedback} />
              <FeedbackStats feedback={feedback} />
              <FeedbackList feedback={feedback} handleDelete={deleteFeedback} />
              <AboutIconLink />
            </>
          } />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/post/:id/:name" element={<Post />} />
        </Routes>
        {/* <Card>
          <NavLink to='/' activeClasses='active'>
            Home
          </NavLink>
          <NavLink to='/about' activeClasses='active'>
            About
          </NavLink>
        </Card> */}
      </div>
    </Router>
  )
}

export default App
