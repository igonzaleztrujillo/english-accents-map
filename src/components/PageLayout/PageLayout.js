import React from 'react'
import './styles.scss'

export default class PageLayout extends React.Component {
  render () {
    return (
      <div className='page-wrapper'>
        <div className='mdl-card mdl-shadow--6dp'>
          <div className='mdl-card__supporting-text'>
            {this.props.children}
          </div>
        </div>
      </div>
    )
  }
}

PageLayout.propTypes = {
  children: React.PropTypes.node
}
