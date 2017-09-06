import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';

class Battle extends Component {
  constructor(props){
    super(props);
    this.state={
      player1:null,
      player1Img:null,
      player2:null,
      player2Img:null
    };
    this.getUserData = this.getUserData.bind(this);
    this.getUserName = this.getUserName.bind(this);
    this.reset = this.reset.bind(this);
  }

  getUserData(event){
    event.preventDefault();
    console.log('getUserData---');
    console.log(event.target);
    let playerImg = 'https://github.com/'+this.state.currentPlayer+'.png?size=200';
    let newState ={};
    newState[event.target.id] = this.state.currentPlayer;
    newState[event.target.id+'Img'] = playerImg;
    this.setState(newState);
  }

  getUserName(event){
    this.setState({currentPlayer:event.target.value});
  }

  reset(id){
    let newState ={};
    newState[id]='';
    newState[id+'Img']=null;
    this.setState(newState);
  }

  UserForm(id){
    return(
      <div>
        <h2> User Info </h2>
        <form id={id} onSubmit={this.getUserData}>
          <input type="text" value={this.state.username} onChange={this.getUserName} />
          <button className="btn">Click..</button>
        </form>
      </div>
    );
  }

  render(){
    let match = this.props.match;
    return(
      <div>
        {(this.state.player1)
          ? <Badge username={this.state.player1} userImg={this.state.player1Img} id='player1' reset={this.reset} />
          : this.UserForm('player1')}
        {(this.state.player2)
          ? <Badge username={this.state.player2} userImg={this.state.player2Img} id='player2' reset={this.reset} />
          : this.UserForm('player2')}
          {(this.state.player2)&&(this.state.player1)
            ? <Link
                className="resultBtn"
                to={{
                  pathname:match.url+'/result',
                  search: '?player1Name=' +this.state.player1+ '&player2Name='+this.state.player2
                }}>Result</Link>
            : ''}
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
