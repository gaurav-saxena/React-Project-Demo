import React,{Component} from 'react';
import PropTypes from 'prop-types';
// import LangNav from './LangNav';
import {fetchRepo} from '../utils/serviceAPI';
import RepoItem from './RepoItem';

const LangNav =(props) => {
  const lang=['All','JavaScript','CSS','JAVA', 'NODE'];
  return(
    <div>
      <ul className="langNav">
        {lang.map(lang =>(
            <li
              style={(props.selectedLang === lang)? {color:'red'} : {color:'#666'} }
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

class Popular extends Component{
  constructor(){
    super();
    this.state={
      selectedLang : 'All',
      repo:null
    };
    this.updatedLang = this.updatedLang.bind(this);
  }
  updatedLang(lang){
      this.setState({
        selectedLang : lang,
        repo:null
      });
      fetchRepo(lang).then((res)=>{
        this.setState({
          repo:res.data.items
        });
      });
  }
  componentDidMount(){
    console.log('this.state.selectedLang----',this.state.selectedLang);
    this.updatedLang(this.state.selectedLang);
  }
  render(){
    return(
      <div>
        <LangNav selectedLang={this.state.selectedLang} onSelect={this.updatedLang} />
        {!this.state.repo
          ? <h4 className="loading">loading...</h4>
          : <RepoItem items={this.state.repo} />}
      </div>
  );
  }
}

export default Popular;