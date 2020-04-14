import React, { Component } from 'react';
import HEADER from './component/HEADER.js'
import SECTION from './component/SECTION.js'
import ARTICLE from './component/ARTICLE.js'
import SCROLL from './component/SCROLL.js'
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state={
      
    };
  }
  render(){
    return(
      <div class='container'>
        <HEADER></HEADER>
        <div class='content'>
          <SECTION></SECTION>
          <ARTICLE></ARTICLE>
        </div>
        <SCROLL></SCROLL>
      </div>
    );
  }
}

export default App;
