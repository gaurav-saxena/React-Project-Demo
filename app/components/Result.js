import React,{Component} from 'react';
import PropTypes from 'prop-types';
import queryString from 'query-string';
import {fetchUserData} from '../utils/serviceAPI';
import {Link} from 'react-router-dom';

class Result extends Component{
  constructor(props){
    super(props);
    this.state={
      userData:null,
      error:false
    };
    this.getUserData = this.getUserData.bind(this);
  }
  getUserData(user1,user2){
    fetchUserData(user1,user2).then((res)=>{
      console.log(res);
      if(res===undefined){
        this.setState({
          error:true
        });
      }
      this.setState({
        userData:res
      });
    });
  }
  componentDidMount(){
    console.log('inside componentDidMount--');
    let queryStr = queryString.parse(this.props.location.search);
    console.log(queryStr);
    // fetchUserData(queryStr.user1, queryStr.user2);
    this.getUserData(queryStr.user1, queryStr.user2);
  }
  render(){
    console.log('inside render');
    let userData = this.state.userData;
    if(this.state.error){
    return (
        <div>
          <h2>Please check the username again</h2>
          <Link to="/battle" className="resetButton">Re-enter usernames</Link>
        </div>
      );
  }
    return(
      <div className="results">
      {!userData
          ? <h2 className="loading">loading...</h2>
          : <div>
              <UserInfo user="user1" userData={userData.user1}/>
              <UserInfo user="user2" userData={userData.user2}/>
            </div>
      }
      </div>
    );
  }
}


const UserInfo=(props)=>{
  let userData = props.userData;
  return(
    <div className="userDetails">
      <h1> {userData.result} </h1>
      <img className="userImg" src={userData.profile.avatar_url} />
      <h2>UserName: {userData.profile.login}</h2>
      <div className="starCount">Stars: {userData.star}</div>
      <div> Link: <a className="resetButton" href={userData.profile.html_url}>{userData.profile.html_url}</a></div>
    </div>
  );
};


export default Result;