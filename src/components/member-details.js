import React from 'react'

import PropTypes from 'prop-types'

import './member-details.css'

const MemberDetails = (props) => {
  return (
    <div className="member-details-container">
      <img
        alt={props.image_alt1}
        src={props.image_src}
        className="member-details-image"
      />
      <h1 className="member-details-text TextXL">{props.heading1}</h1>
      <h1 className="member-details-text1 TextSM">{props.heading11}</h1>
    </div>
  )
}

MemberDetails.defaultProps = {
  heading11: 'MLBB',
  image_alt1: 'image_alt',
  heading1: 'Organization',
  image_alt: 'image',
  image_src:
    '/playground_assets/335204674_159339113640798_6459687634830556726_n-200h.jpg',
}

MemberDetails.propTypes = {
  heading11: PropTypes.string,
  image_alt1: PropTypes.string,
  heading1: PropTypes.string,
  image_alt: PropTypes.string,
  image_src: PropTypes.string,
}

export default MemberDetails
