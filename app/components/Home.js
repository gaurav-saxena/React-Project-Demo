import React from 'react';
import {Link} from 'react-router-dom';

const Home =() => {
  return(
    <div>
      <h1> Compare two user's profiles </h1>
      <Link className='button' to='/battle'> Start..</Link>
    </div>
  );
};

export default Home;