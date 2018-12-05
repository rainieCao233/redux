
const ADD_GUN = "jiaqiang"
const REMOVE_GUN = "jianqiang"


//reducer
export function counter(state=10, action){
  switch(action.type){
    case ADD_GUN:
      return state+1
    case REMOVE_GUN:
      return state-1
    default:
      return state
  }
}

// action creater
export function addGUN(){
  return {type:ADD_GUN}
}
export function removeGUN(){
  return {type:REMOVE_GUN}
}
export function addGunAsync(){
  return dispatch=>{  //把dispatch传进去
    setTimeout(()=>{
      dispatch(addGUN())
    },2000)
  }
}
