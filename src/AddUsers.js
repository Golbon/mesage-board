import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import { connect } from 'react-redux'
import { getUsers, goHome, addUsers } from './state/actions';

class AddUser extends Component {
  constructor(props) {
    super(props);

    this.state = {
      users: [],
      firstName:'',
      lastName:'',
      email:'',
  
    }

    this.addUser = this.addUser.bind(this);

    this.handleChange = this.handleChange.bind(this)
  }

addUsers(){
  this.props.addUsers();
}
  addUser() {
    const {firstName, lastName, email} = this.state;
    const userObj = {firstName, lastName, email} 
    axios.post(`http://5a74994008118e0012fd4c84.mockapi.io/users`,userObj)
      .then( response => {
        console.log(response);
        this.addUsers();
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
      
          <h1>Add Users</h1>
        

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
         
          <button onClick={this.addUser}>Add User</button><br/>
          <a onClick={this.props.goHome}> Go Back</a>
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

    appGetUsers(data) {
      dispatch(getUsers(data))
    },
    goHome(data){
     dispatch(goHome(data))
    },
    addUsers(){
      dispatch(addUsers())
     },

  }
}

export default connect(getStateFromReduxPassToAppComponentAsProps, getDispatchFromReduxToAppComponentAsProps)(AddUser)
