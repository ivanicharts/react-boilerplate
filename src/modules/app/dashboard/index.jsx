import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import { getMyIp } from 'actions/saga'

const Dashboard = (props) => {
  !props.ip && props.getMyIp()

  return (
    <div>
      Your ip is: { props.ip ? props.ip : 'fetching....' }
    </div>
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard)

function mapStateToProps (state) {
  return {
    ip: state.app.ip
  }
}

function mapDispatchToProps (dispatch) {
  return {
    getMyIp: bindActionCreators(getMyIp, dispatch)
  }
}