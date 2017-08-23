const initialState = {
  ip: ''
}



export default (state=initialState, action) => {
  switch (action.type) {
  
  case 'IP_SUCCESS':
    return {...state, ip: action.ip}
  default:
    return initialState
  
  }
}