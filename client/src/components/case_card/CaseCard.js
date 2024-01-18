import React from 'react'
import './CaseCard.css'

const  CaseCard = (props) => {
    return (
        <div className="case-card">
            <h3>{props.title}</h3>
            <p>{props.description}</p>
        </div>
    )
}
export default CaseCard