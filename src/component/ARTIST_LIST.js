import React,{ Component } from 'react';

class ARTIST_LIST extends Component{

  render(){
    return(
        <li className='list' key ={this.props.data.key}>
            <img className="img" src={require('./images/'+this.props.data.src+'.png')} alt='artist'/>
            <div className="artist-text">
                <p>{this.props.data.EngName}<br/>
                    <span>{this.props.data.KorName}</span>
                </p>
                <ul className="artist-sns">
                    <li><span ><img src="images/instagram.png" alt="instagram"/></span></li>
                    <li><span ><img src="images/facebook.png" alt="facebook"/></span></li>
                </ul>
            </div>
        </li>
    );
  }
}

export default ARTIST_LIST;