import React, { Component } from 'react';
import HEADER from './component/HEADER.js'
import HOME from './component/HOME.js'
import CONTACT from './component/CONTACT.js'
import ARTIST from './component/ARTIST.js'
import ABOUT from './component/ABOUT.js'
import './App.css';
import './VMC.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state={
      selected_content_id:'HOME',
      btn:'on'
    };
  }
  getContent(){
    var _article='';
    var id=this.state.selected_content_id;
    if(id==="HOME"){
      _article=<HOME></HOME>;
    }else if(id==='ABOUT'){
      _article=<ABOUT></ABOUT>;
    }else if(id==='ARTIST'){
      _article=<ARTIST></ARTIST>
    }else if(id==='STORE'){

    }else if(id==='CONTACT'){
      _article=<CONTACT></CONTACT>;
    }
    return _article
  }
  render(){
    return(
      <div class='container'>
        <HEADER
          onChangePage={function(id){
            this.setState({
              mode:'read',
              selected_content_id:id
            });
          }.bind(this)} 
          onclick={function(){
            if(this.state.btn==='on'){
                this.setState({btn:'off'});
            }else{
                this.setState({btn:'on'});
            }
          }.bind(this)}
        ></HEADER>
        {this.getContent()}
      </div>
    );
  }
}

export default App;
