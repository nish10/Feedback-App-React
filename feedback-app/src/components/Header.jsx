import React from 'react'
import PropTypes from 'prop-types'

function Header({ text = 'Default Header' }) {
  return (
  <header>
    <div className="container">
      <h2>{text}</h2>
    </div>
  </header>
  )
}

// Header.defaultProps = {
//   text: 'Default Header'
// }

Header.propTypes = {
  text: PropTypes.string.isRequired
}


export default Header