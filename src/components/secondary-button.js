import React from 'react'

import PropTypes from 'prop-types'

import './secondary-button.css'

const SecondaryButton = (props) => {
  return (
    <div  className={`secondary-button-container ${props.rootClassName} `}>
      <button className="secondary-button-button TextXS button" onClick={props.onClick}>
        {props.button}
      </button>
    </div>
  )
}

SecondaryButton.defaultProps = {
  button: 'JOIN NOW',
  rootClassName: '',
}

SecondaryButton.propTypes = {
  button: PropTypes.string,
  rootClassName: PropTypes.string,
}

export default SecondaryButton
