const LOGIN = 'lOGIN'
const LOGOUT = 'lOGOUT'

const initState = {
	isAuth:false,
	user:'李云龙',
	age:20
}

//reducer
export function auth(state=initState, action){
  console.log(state,action)
  switch(action.type){
    case LOGIN:
      return {...state, isAuth:true}
    case LOGOUT:
      return {...state, isAuth:false}
    default:
      return {...state}
  }
}


//action
export function login(){
	return {type:LOGIN}
}
export function logout(){
	return {type:LOGOUT}
}
