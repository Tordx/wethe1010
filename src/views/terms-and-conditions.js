import React from 'react'

import { Helmet } from 'react-helmet'

import './terms-and-conditions.css'

const TermsAndConditions = (props) => {
  return (
    <div className="terms-and-conditions-container">
      <Helmet>
        <title>Terms-and-Conditions - Notus Pro</title>
        <meta property="og:title" content="Terms-and-Conditions - Notus Pro" />
      </Helmet>
    </div>
  )
}

export default TermsAndConditions
