import React from 'react';
import PropTypes from 'prop-types';

const LangNav =(props) => {
  var lang=['All','JavaScript','CSS','JAVA'];
  return(
    <div>
      <ul className="langNav">
        {lang.map(lang =>(
            <li
              style={(props.selectedLang == lang)? {color:'red'} : {color:'#666'} }
              key={lang}
              onClick={props.onSelect.bind(null, lang)}>
              {lang}
            </li>
        ))}
      </ul>
    </div>
  );
};

LangNav.propTypes={
  selectedLang:PropTypes.string.isRequired,
  onSelect:PropTypes.func.isRequired
};

export default LangNav;