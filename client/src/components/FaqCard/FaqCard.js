import React from 'react'
import './FaqCard.css'

const FaqCard = ({ question, answer }) => {
    return (
    <div className="faq-card">
      <h3>{question}</h3>
      <p>{answer}</p>
    </div>
  )
}
export default FaqCard;