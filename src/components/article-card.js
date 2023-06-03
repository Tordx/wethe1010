import React from 'react'

import PropTypes from 'prop-types'

import './article-card.css'

const ArticleCard = (props) => {
  return (
    <div className="article-card-container">
      <img
        alt={props.image_alt}
        src={props.image_src}
        className="article-card-image"
      />
      <div className="article-card-container1">
        <h3 className="article-card-text Healine">{props.new_prop}</h3>
        <div className="article-card-container2">
          <span className="article-card-text1">{props.description}</span>
        </div>
        <div className="article-card-container3">
          <img
            alt={props.avatar_alt}
            src={props.avatar_src}
            className="article-card-image1"
          />
          <div className="article-card-container4">
            <span className="article-card-text2">{props.name}</span>
            <div className="article-card-container5">
              <span className="article-card-text3 TextSM">{props.time}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

ArticleCard.defaultProps = {
  avatar_src: '15958451-f790-4024-a70e-cc38b82637f2',
  name: 'Laura Hanks',
  new_prop: 'Portofino one of the best for remote working',
  image_src: '/playground_assets/city-1-1400w.jpg',
  time: 'Published 3 days ago',
  avatar_alt: 'avatar',
  description:
    "Finding temporary housing should be as easy as renting an Airbnb. That's th e idea behinf portofino, which raised $65 million to expand its pet sitting businesses. This come as the right move for the investment while the planet is moving on work from home...",
  image_alt: 'image',
}

ArticleCard.propTypes = {
  avatar_src: PropTypes.string,
  name: PropTypes.string,
  new_prop: PropTypes.string,
  image_src: PropTypes.string,
  time: PropTypes.string,
  avatar_alt: PropTypes.string,
  description: PropTypes.string,
  image_alt: PropTypes.string,
}

export default ArticleCard
