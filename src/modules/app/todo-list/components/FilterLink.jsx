import React from 'react'
import { connect } from 'react-redux'

import { setVisibilityFilter } from '../actions'
import Link from 'shared/components/Link'

const mapStateToProps = (state, ownProps) => ({ 
  active: ownProps.filter === state.todo.visibilityFilter 
})
const mapDispatchToProps = (dispatch, ownProps) => ({ 
  onClick: () => dispatch(setVisibilityFilter(ownProps.filter))
})

export default connect(mapStateToProps, mapDispatchToProps)(Link)