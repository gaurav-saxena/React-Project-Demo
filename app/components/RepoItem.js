import React from 'react';
import PropTypes from 'prop-types';

const RepoItem = (props) => {
  return(
    <div className="repoItem">
      <ul>
        {props.items.map((items,i) => (
          <li key={items.id}>
            <span className="rank">#{i+1}</span>
            <img className="repoImg" src={items.owner.avatar_url} />
            <a href={items.html_url}><span className="repoName">{items.name}</span></a>
          </li>
        ))}
      </ul>
    </div>
  );
};

RepoItem.propTypes={
  items:PropTypes.array.isRequired
};

export default RepoItem;
