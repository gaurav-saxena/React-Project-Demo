import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';

class Battle extends Component {
  constructor(props){
    super(props);
    this.state={
      user1:null,
      user2:null
    };
    this.getUserData = this.getUserData.bind(this);
    this.reset = this.reset.bind(this);
  }

  getUserData(id,username){
    event.preventDefault();
    console.log('getUserData---');
    let newState= {};
    newState[id]=username; 
    this.setState(newState);
  }

  reset(id){
    let newState= {};
    newState[id]=null; 
    this.setState(newState);
  }

  render(){
    let user1=this.state.user1,
        user2=this.state.user2,
        user1Img= 'https://github.com/'+user1+'.png?size=200',
        user2Img= 'https://github.com/'+user2+'.png?size=200';
    return(
      <div>
        {(user1)
          ? <Badge username={user1} userImg={user1Img} id='user1' reset={this.reset} />
          : <UserForm id='user1' onSubmit={this.getUserData} />}
        {(user2)
          ? <Badge username={user2} userImg={user2Img} id='user2' reset={this.reset} />
          : <UserForm id='user2' onSubmit={this.getUserData}/>}
          {(user2)&&(user1)
            ? <Link
                className="button"
                to={{
                  pathname:'/result',
                  search: '?user1=' +user1+ '&user2='+user2
                }}>Compare</Link>
            : ''}
      </div>
    );
  }
}

class UserForm extends Component{
  constructor(props){
    super(props);
    this.state={
      currentUser:''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.getUserName = this.getUserName.bind(this);
  }

  handleSubmit(event){
    event.preventDefault();
    console.log('getUserData---');
    console.log(event.target);
    this.props.onSubmit(this.props.id,this.state.currentUser);
  }

  getUserName(event){
    console.log('s');
    this.setState({currentUser:event.target.value});
    console.log(this.state);
  }
  render(){
    return(
      <div className="userDetail">
        <h2> {this.props.id} : Name</h2>
        <form id={this.props.id} onSubmit={this.handleSubmit}>
          <input type="text" value={this.state.currentUser} onChange={this.getUserName} />
          <button className="btn">Click..</button>
        </form>
      </div>
    );
  }
}

const Badge =(props)=>{
  return(
    <div className="userDetail">
      <h2>Name: {props.username}</h2>
      <img className="userImg" src={props.userImg} />
      <div><button className="resetButton" onClick={props.reset.bind(null,props.id)}> Reset </button></div>
    </div>
  );
};
Badge.propTypes={
  id:PropTypes.string.isRequired,
  userImg:PropTypes.string.isRequired,
  username:PropTypes.string.isRequired,
  reset:PropTypes.func.isRequired
};


export default Battle;
