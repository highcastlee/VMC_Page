import React,{ Component } from 'react';
import ARTIST_LIST from './ARTIST_LIST.js'
import './artist.css';

class ARTIST extends Component{
  constructor(props){
    super(props);
    this.state={
      menu:true,
      matches: window.matchMedia("(max-width: 1024px)").matches,
      artists:[],
      position:'artist'
    };
    this.onChangeMenu = this.onChangeMenu.bind(this);
  }
  componentDidMount(){
    fetch('artist.json')
      .then(function(result){
          return result.json();
      })
      .then(function(json){
          this.setState({artists:json});
      }.bind(this))
      .catch(e => console.log(e));
    const handler = e => this.setState({matches: e.matches});
    window.matchMedia("(max-width: 1024px)").addEventListener("change",handler);
  }
  onChangePosition(position){
    this.setState({
      position:position
    });
    console.log("onchangeposition 실행");
  }
  onChangeMenu(){
    this.setState(state =>({
      menu:!state.menu
    }));
  }
  onChangeTemplet(){
    let artistTemplet = [];
    let producerTemplet = [];
    let member = this.state.artists;
    for(let i=0;i<member.length;i++){
      if(member[i].position==='artist'){
        artistTemplet.push(<ARTIST_LIST key={member[i].key} data={member[i]}></ARTIST_LIST>);
      }else if(member[i].position==='producer'){
        producerTemplet.push(<ARTIST_LIST key={member[i].key} data={member[i]}></ARTIST_LIST>);
      }
    }
    if(this.state.position==='artist'){
      return artistTemplet;
    }else if(this.state.position==='producer'){
      return producerTemplet;
    }
  }
  render(){
    let mobileMenu;
    if (this.state.menu===true){
      mobileMenu={display:'none'};
    }else if(this.state.menu===false){
      mobileMenu={display:'block'};
    }
    return(
      <div className='content'>
        <article className='artist'>
          <div className='artist-menu'>
              <div className='m-artist-menu-bar'>
                  <button id='m-artist-button' onClick={this.onChangeMenu} >ARTIST</button>
              </div>
              <div id='ARTIST' className='artist-menu-bar' >
                  <div className='inner-bar'
                  onClick={function(){
                    this.onChangePosition('artist');
                    
                  }.bind(this)}
                  >PERFOMANCE ARTIST</div>
              </div>
              {this.state.matches && (
              <div id='ARTIST' className='artist-menu-bar' style={mobileMenu}>
                <div  className='inner-bar'
                onClick={function(){
                  this.onChangePosition('artist');
                  this.setState(state =>({
                    menu:!state.menu
                  }));
                }.bind(this)}
                >PERFOMANCE ARTIST</div>
              </div>)}

              <div id='PRODUCER' className='artist-menu-bar'>
                  <div  className='inner-bar'
                  onClick={function(){
                    this.onChangePosition('producer');
                  }.bind(this)}>PRODUCER / DJ</div>
              </div>
              {this.state.matches && (
              <div id='PRODUCER' className='artist-menu-bar' style={mobileMenu}>
                <div className='inner-bar'
                onClick={function(){
                  this.onChangePosition('producer');
                  this.setState(state =>({
                    menu:!state.menu
                  }));
                }.bind(this)}>PRODUCER / DJ</div>
              </div>)}
          </div>
          <ul id='artist-list' value='ARTIST'>
              {this.onChangeTemplet()}
          </ul>
        </article>
      </div>
    );
  }
}

export default ARTIST;