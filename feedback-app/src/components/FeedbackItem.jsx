import React from "react"
import Card from "./shared/Card"
import PropTypes from "prop-types"
import { FaTimes } from "react-icons/fa"

function FeedbackItem({ item, handleDelete }) {
  return (
    <Card reverse={false}>
      <div className="num-display">{item.rating}</div>
      <button
        onClick={() => {
          handleDelete(item.id)
        }}
        className="close"
      >
        <FaTimes color="purple"></FaTimes>
      </button>
      <div className="text-dispay">{item.text}</div>
    </Card>
  )
}

FeedbackItem.propTypes = {
  item: PropTypes.object,
}

export default FeedbackItem
