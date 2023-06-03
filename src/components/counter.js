import React from 'react'

import PropTypes from 'prop-types'

import './counter.css'

const Counter = (props) => {
  return (
    <div className="counter-container">
      <h1 className="counter-text TextXL">{props.number}</h1>
      <span className="counter-text1 TextSM">{props.type}</span>
    </div>
  )
}

Counter.defaultProps = {
  type: 'Friends',
  number: '22',
}

Counter.propTypes = {
  type: PropTypes.string,
  number: PropTypes.string,
}

export default Counter
