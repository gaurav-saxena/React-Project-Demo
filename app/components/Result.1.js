import React,{Component} from 'react';
import PropTypes from 'prop-types';
import queryString from 'query-string';
import {fetchUserData} from '../utils/serviceAPI';


class Result extends Component{
  constructor(props){
    super(props);
    this.state={
      userData:null,
      loading:true
    };
    this.getUserData = this.getUserData.bind(this);
  }
  getUserData(user1,user2){
    fetchUserData(user1,user2).then((res)=>{
      console.log(res);
      console.log('this here', this);
      this.setState({
        userData:res
      });
      console.log('this here', this);
      debugger;
    });
  }
  componentDidMount(){
    console.log('inside componentDidMount--');
    let queryStr = queryString.parse(this.props.location.search);
    console.log(queryStr);
    // fetchUserData(queryStr.player1, queryStr.player2);
    this.getUserData(queryStr.player1, queryStr.player2);
  }
  render(){
    console.log('inside render');
    let userData = this.state.userData;
    return(
      <div className="results">
      {!userData
          ? <h2 className="loading">loading...</h2>
          : <div>
              <UserInfo user="player1" username={userData.user1.profile.name} userURL={userData.user1.profile.url} userImg={userData.user1.profile.avatar_url} star={userData.user1.star} result={userData.user1.result}/>
              <UserInfo user="player2" username={userData.user2.profile.name} userURL={userData.user2.profile.url} userImg={userData.user2.profile.avatar_url} star={userData.user2.star} result={userData.user2.result}/>
            </div>
      }
      </div>
    );
  }
}


const UserInfo=(props)=>{
  return(
    <div className="userDetails">
      <h1>~~ {props.result} ~~ </h1>
      <img className="userImg" src={props.userImg} />
      <h2>Name: <a href={props.userURL}>{props.username}</a></h2>
      <div className="starCount">Stars: {props.star}</div>
    </div>
  );
};


export default Result;