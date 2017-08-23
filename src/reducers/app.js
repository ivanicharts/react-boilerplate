const initialState = {
  ip: ''
}



export default (state=initialState, action) => {
  switch (action.type) {
  
  case 'GET_IP':
    return {...state, ip: action.ip}
  default:
    return initialState
  
  }
}