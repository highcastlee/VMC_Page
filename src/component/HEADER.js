import React,{ Component } from 'react';

class HEADER extends Component{
  render(){
    return(
    <nav className='header-bar'>
        <h1 className='main-logo'>
            <a href='index.html'><img src='images/vmc_logo.png'/></a>
        </h1>
        <div id='wide-menu'>
            <ul id='nav-text'>
                <li><a href='index.html' style='color:white;'>HOME</a></li>
                <li><a href='about.html'>ABOUT</a></li>
                <li><a href='Artist.html'>ARTIST</a></li>
                <li><a href='https://smartstore.naver.com/vmc_store' target="_blank" >STORE</a></li>
                <li><a href='contact.html'>CONTACT</a></li>
                <li><a href='FanLetter.html' >FAN-LETTER</a></li>
            </ul>
            <ul id='nav-logo'>
                <li><a href='https://www.facebook.com/vismajorcrew'><img src='images/facebook.png'style='width:25px;height:25px;'/></a></li>
                <li><a href='https://www.instagram.com/vismajor_company'><img src='images/instagram.png'/></a></li>
                <li><a href='https://twitter.com/vismajorcompany'><img src='images/twitter.png'/></a></li>
                <li><a href='https://www.youtube.com/user/vismajorcompany'><img src='images/youtube.png'/></a></li>
                <li><a href='https://soundcloud.com/vmcofficial'><img src='images/soundcloud.png'/></a></li>
            </ul>
        </div>
        <div className='m-menu' style='top:17px !important;'>
            <button id='m-menu-btn' value='on' onclick='MenuClick()'>&#8801</button>
        </div>
    </nav>
    );
  }
}

export default HEADER;