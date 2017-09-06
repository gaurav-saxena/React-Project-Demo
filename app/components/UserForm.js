import React, { Component } from 'react';

class UserForm extends Component{
  render(){
    return(
      <div>
        <h2> User Info </h2>
        <form id="userForm">
          <input type="text" id="username" />
          <button value="click" />
        </form>
      </div>
    );
  }
}

export default UserForm;
