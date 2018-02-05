import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import { connect } from 'react-redux'
import { goHome, addUsers,selectedUser, editUser } from './state/actions';

class EditUser extends Component {
  constructor(props) {
    super(props);

    this.state = {
      users: [],
      firstName:'',
      lastName:'',
      email:'',
  
    }

    this.editUser = this.editUser.bind(this);

    this.handleChange = this.handleChange.bind(this)
  }

addUsers(){
  this.props.addUsers();
}
showSelectedUser(){
  this.props.addUsers();
}
  editUser(userID) {
    //const {firstName, lastName, email} = this.state;
    //const userObj = {firstName, lastName, email} 
    axios.put(`http://5a74994008118e0012fd4c84.mockapi.io/users`+userID)
      .then( response => {
        console.log(response);
        this.editUser();
      })
  }

 

  handleChange(e) {
    this.setState({[e.target.name]: e.target.value} );

  }

  // componentDidMount(){
  //   this.addUser();
  // }

  render() {
   // const {email, username, avatar} = this.state;
   // console.log(this.props.users)
    return (
      <div>
      
          <h1>Edit User</h1>
        

        <form style={ {marginTop: '30px'} } onSubmit={ (e) => {
          e.preventDefault();
        
        } }>

          <p>
            First Name:
            <input onChange= {this.handleChange} name="firstName" value={this.state.firstName} />
          </p>

          <p>
            Last Name:
            <input onChange= {this.handleChange} name="lastName" value={this.state.lastName} />
          </p>
          <p>
            Email:
            <input onChange= {this.handleChange} name="email" value={this.state.email} />
          </p>
         
          <button onClick={this.editUser}>Update</button><br/>
          <a onClick={this.props.goHome}> Go Back</a> |<a onClick={this.props.showSelectedUser}> Show</a>
        </form>

        

        
      </div>
    );
  }
}

const getStateFromReduxPassToAppComponentAsProps = (state) => {
  return {
    appViewState: state.viewState,
    users: state.users
  }
}

const getDispatchFromReduxToAppComponentAsProps = (dispatch) => {
  return {
    appInitialView(dispatchName) {
      // dispatch(initialView(dispatchName))
    },


    goHome(data){
     dispatch(goHome(data))
    },
    editUser(id){
      dispatch(editUser(id))
     },
     showSelectedUser(id){
      dispatch(selectedUser(id))
    },

  }
}

export default connect(getStateFromReduxPassToAppComponentAsProps, getDispatchFromReduxToAppComponentAsProps)(EditUser)
