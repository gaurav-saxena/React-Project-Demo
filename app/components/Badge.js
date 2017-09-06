import React from 'react';
import PropTypes from 'prop-types';

const Badge =(props)=>{
  return(
    <div>
      <img className="userImg" src={props.img} />
      <h1>Name: {props.name}</h1>
      <h3 className="username">{props.username}</h3>
    </div>
  );
};

Badge.propTypes={
  img:PropTypes.string.isRequired,
  username:PropTypes.string,
  name:PropTypes.string
};

export default Badge;
