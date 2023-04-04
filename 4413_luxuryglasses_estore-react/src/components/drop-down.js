import React, { useState } from 'react'

import PropTypes from 'prop-types'

import './drop-down.css'

const DropDown = (props) => {
  const [isAdmin, setIsAdmin] = useState(false)
  return (
    <div className={`drop-down-sidebar ${props.rootClassName} `}>
      <nav className="drop-down-nav">
        <span className="drop-down-text">Account</span>
        <span className="drop-down-text1">Reports</span>
        <span className="drop-down-text2">Register Admin</span>
        <span className="drop-down-text3">Login</span>
        <span className="drop-down-text4">Logout</span>
      </nav>
    </div>
  )
}

DropDown.defaultProps = {
  rootClassName: '',
}

DropDown.propTypes = {
  rootClassName: PropTypes.string,
}

export default DropDown
