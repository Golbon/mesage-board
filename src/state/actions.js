export const INITIAL_VIEW = 'INITIAL_VIEW'
export const GET_USERS = 'GET_USERS'
export const SELECTED_USER = 'SELECTED_USER'
export const EDIT_USER = 'EDIT_USER'
export const DELETE_USER ='DELETE_USER'
export const GO_HOME ='GO_HOME'
export const ADD_USERS= 'ADD_USERS'
export const GO_ADD= 'GO_ADD'

export const initialView = (payload) => {
  return {type: INITIAL_VIEW, payload}
};

export const getUsers = (payload) => {
  return {type: GET_USERS, payload}
};

export const selectedUser = (payload) => {
  return {type: SELECTED_USER, payload}
};

export const editUser = (payload) => {
  return {type: EDIT_USER, payload}
};

export const deleteUser = (payload)=>{
  return {type: DELETE_USER,payload}
}

export const goHome = (payload)=>{
  return {type: GO_HOME}
}
export const goAdd = (payload)=>{
  return {type: GO_ADD}
}

export const addUsers = ()=>{
  return {type: ADD_USERS}
}
