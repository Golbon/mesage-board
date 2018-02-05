import { INITIAL_VIEW, GET_USERS, SELECTED_USER, EDIT_USER, GO_HOME,GO_ADD,DELETE_USER, ADD_USERS } from './actions'
import ListView from '../ListView';
import UserView from '../UserView';
import EditUser from '../EditUser';
import AddUsers from '../AddUsers';

const intialState = {
  users: [],
  userSelected: undefined,
  viewState: ListView,
  selectedUser: []
}

function reducer(state=intialState, action) {
  switch(action.type) {
    case INITIAL_VIEW:
      return {
        ...state,
        viewState: ListView
      }
      case GET_USERS:
      return {
        ...state,
        users: action.payload
      }
      case SELECTED_USER:
      let selUser = state.users.find( (user) => (user.id === action.payload))
      return {
        ...state,
        selectedUser: selUser,
        viewState: UserView
      }
      case EDIT_USER:
      return {
        ...state,
       edituser: action.payload,
        viewState:EditUser
      }
      case GO_HOME:
      return{
        ...state,
        viewState:ListView
      }
      case GO_ADD:
      return{
        ...state,
        viewState:AddUsers
      }
      case ADD_USERS:
      return{
        ...state,
        viewState:ListView
      }
      case DELETE_USER:
      return{
        ...state,
        viewState:ListView
      }
    default:
      return state;
  }
}

export default reducer;