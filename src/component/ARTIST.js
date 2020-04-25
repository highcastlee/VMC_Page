import React,{ Component } from 'react';
import ARTIST_LIST from './ARTIST_LIST.js'
import './artist.css';

class ARTIST extends Component{
  constructor(props){
    super(props);
    this.state={
      artist:[],
      producer:[]
    };
  }
  componentDidMount(){
    fetch('artist.json')
      .then(function(result){
          return result.json();
      })
      .then(function(json){
          this.setState({artist:json});
      }.bind(this))
  }
  render(){
    return(
      <div class='content'>
        <article class='artist'>
          <div class='artist-menu'>
              <div class='m-artist-menu-bar'>
                  <button id='m-artist-button' value='on' onclick='ArtistClick()'>ARTIST</button>
              </div>
              <div id='ARTIST' class='artist-menu-bar' >
                  <a class='inner-bar'>PERFOMANCE ARTIST</a>
              </div>
              <div id='PRODUCER' class='artist-menu-bar'>
                  <a class='inner-bar'>PRODUCER / DJ</a>
              </div>
          </div>
          <ul id='artist-list' value='ARTIST'>
              <ARTIST_LIST></ARTIST_LIST>
          </ul>
        </article>
      </div>
    );
  }
}

export default ARTIST;