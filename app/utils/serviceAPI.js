// https://api.github.com/search/repositories?q=starts%3E1+language:all&sort:stars
import axios from 'axios';


const fetchUser=(user) => {
    let URL = 'https://api.github.com/users/'+user;
    return(
      axios.get(URL)
      .then((res)=>{
        return res;
      })
      .catch(error => {
      console.log(error);
      })
    );
  };

const fetchUserStar= (user) => {
    return(
      axios.get('https://api.github.com/users/'+user+'/repos')
        .then((res)=>{
          let repo = res.data;
          return repo.reduce((total,repo)=>{
            return total + repo.stargazers_count;
          },0);
        })
        .catch(error => {
        console.log(error);
        })
    );
  };

  module.exports={  
  fetchRepo : (lang) => {
    let URL = 'https://api.github.com/search/repositories?q=stars:>1+language:'+lang+'&sort=stars&order=desc&type=Repositories&per_page=10';
    return(
      axios.get(URL)
      .then((res)=>{
        return res;
      })
      .catch(error => {
      console.log(error);
      })
    );
  },
  fetchUserData : (u1,u2) => {
    return(
      axios.all([fetchUser(u1),fetchUserStar(u1),fetchUser(u2),fetchUserStar(u2)])
      .then((res)=>{
        let userData = {
          user1:{
            profile:res[0].data,
            star:res[1],
            result:(res[1]>res[3])?'Winner':(res[1]==res[3])?'Tie':'Loser'
          },
          user2:{
            profile:res[2].data,
            star:res[3],
            result:(res[3]>res[1])?'Winner':(res[1]==res[3])?'Tie':'Loser'
          }
        };
        return userData;
      })
      .catch(error => {
      console.log(error);
      })
    );
  }
};

