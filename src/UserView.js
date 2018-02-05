import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux'
import { editUser, deleteUser } from './state/actions';


class UserView extends Component {
    constructor(props) {
      super(props);
  
      this.state = {
        appSelectedUser: []
      }
    }

    deleteUser(userId){
     // const {email, username, avatar} = this.state;

      axios.delete(`http://5a74994008118e0012fd4c84.mockapi.io/users/`+ userId)
      .then(response=> {
        this.props.deleteUser();
      }).catch(error=>{
        console.log (error)
      })
    }
    render() {

    console.log("here we are")  
    console.log(deleteUser)
    let newId = this.props.appSelectedUser
      return (
        <div>
          <header>
          </header>
          <div>
          <table className="table" border="1">
            <thead><tr><th>Name</th><th>email</th><th>created at</th><th>actions</th></tr></thead>
            <tbody>
               <tr key={newId}>
                <td>{newId.firstName}</td>
                <td>{newId.email}</td>
                <td>{( (d) => {
                      d = new Date(parseInt(d, 10));
                      return `${d.getMonth()+1}/${d.getDay()+1}/${d.getFullYear()}`;
                    })(newId.createdAt)}</td>
                <td><p><a onClick={() => {this.props.appEditUser(newId.id)}}>Edit</a>&nbsp;<a onClick={() => {this.deleteUser(newId.id)}}>Delete</a></p></td>
              </tr>  
            </tbody>
            </table>
          </div>
        </div>
      );
    }
  }

  const getStateFromReduxPassToAppComponentAsProps = (state) => {
    return {
      appSelectedUser: state.selectedUser
    }
  }

  const getDispatchFromReduxToAppComponentAsProps = (dispatch) => {
    return {
      appEditUser(id){
        dispatch(editUser(id))
      },
      deleteUser(id){
        dispatch(deleteUser(id))
    },
    }
  }
export default connect(getStateFromReduxPassToAppComponentAsProps, getDispatchFromReduxToAppComponentAsProps)(UserView)
  