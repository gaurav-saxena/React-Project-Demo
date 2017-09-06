import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';

class Battle extends Component {
  constructor(props){
    super(props);
    this.state={
      player1:null,
      player2:null
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
    let player1=this.state.player1,
        player2=this.state.player2,
        player1Img= 'https://github.com/'+player1+'.png?size=200',
        player2Img= 'https://github.com/'+player2+'.png?size=200';
    return(
      <div>
        {(player1)
          ? <Badge username={player1} userImg={player1Img} id='player1' reset={this.reset} />
          : <UserForm id='player1' onSubmit={this.getUserData} />}
        {(player2)
          ? <Badge username={player2} userImg={player2Img} id='player2' reset={this.reset} />
          : <UserForm id='player2' onSubmit={this.getUserData}/>}
          {(player2)&&(player1)
            ? <Link
                className="resultBtn"
                to={{
                  pathname:'/result',
                  search: '?player1=' +player1+ '&player2='+player2
                }}>Result</Link>
            : ''}
      </div>
    );
  }
}

class UserForm extends Component{
  constructor(props){
    super(props);
    this.state={
      currentPlayer:''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.getUserName = this.getUserName.bind(this);
  }

  handleSubmit(event){
    event.preventDefault();
    console.log('getUserData---');
    console.log(event.target);
    this.props.onSubmit(this.props.id,this.state.currentPlayer);
  }

  getUserName(event){
    console.log('s');
    this.setState({currentPlayer:event.target.value});
    console.log(this.state);
  }
  render(){
    return(
      <div>
        <h2> User Info - {this.props.id}</h2>
        <form id={this.props.id} onSubmit={this.handleSubmit}>
          <input type="text" value={this.state.currentPlayer} onChange={this.getUserName} />
          <button className="btn">Click..</button>
        </form>
      </div>
    );
  }
}

const Badge =(props)=>{
  return(
    <div>
      <h1>Name: {props.username}</h1>
      <img className="userImg" src={props.userImg} />
      <button onClick={props.reset.bind(null,props.id)}> Reset </button>
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
