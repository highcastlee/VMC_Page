import React,{ Component } from 'react';
import './artist.css';

class ARTIST_LIST extends Component{

  render(){
    return(
        <li class='list' >
            <img class="img" src="/images/artist1.png"/>
            <div class="artist-text">
                <p>DEEPFLOW<br/>
                    <span>딥플로우</span>
                </p>
                <ul class="artist-sns">
                    <li><a href="#"><img src="images/instagram.png" /></a></li>
                    <li><a href="#"><img src="images/facebook.png" /></a></li>
                </ul>
            </div>
        </li>
    );
  }
}

export default ARTIST_LIST;