import React,{ Component } from 'react';

class HEADER extends Component{
  constructor(props){
      super(props);
      this.state={
          list:[],
          icons:[
              {key:'facebook',href:'https://www.facebook.com/vismajorcrew',src:'/images/facebook.png'},
              {key:'instagram',href:'https://www.instagram.com/vismajor_company',src:'/images/instagram.png'},
              {key:'twitter',href:'https://twitter.com/vismajorcompany',src:'/images/twitter.png'},
              {key:'youtube',href:'https://www.youtube.com/user/vismajorcompany',src:'/images/youtube.png'},
              {key:'soundcloud',href:'https://soundcloud.com/vmcofficial',src:'/images/soundcloud.png'}
          ]
      }
  }
  componentDidMount(){
      fetch('list.json')
        .then(function(result){
            return result.json();
        })
        .then(function(json){
            this.setState({list:json});
        }.bind(this))
  }
  render(){
    var listTag = [];
    var iconTag = [];
    for(var i = 0; i<this.state.list.length; i++){
      var li = this.state.list[i];
      if(i===3){
        listTag.push(<li key={li.id}><a href={'https://smartstore.naver.com/vmc_store'}
        target='_blank'>{li.title}</a></li>);
      }else{
        listTag.push(<li key={li.id}><a href={'#'}
        onClick={function(id,e){
          e.preventDefault();
          this.props.onChangePage(id);
        }.bind(this,li.id)}>{li.title}</a></li>);
      }
    }
    for(var i = 0; i<this.state.icons.length;i++){
        var icon = this.state.icons[i];
        iconTag.push(<li key={icon.id}><a href={icon.href}><img src={icon.src}/></a></li>)
    }
    return(
    <header>
        <nav className='header-bar'>
            <h1 className='main-logo'>
                <a href='/'><img src={require('./images/vmc_logo.png')}/></a>
            </h1>
            <div id='wide-menu'>
                <ul id='nav-text'>
                    {listTag}
                </ul>
                <ul id='nav-logo'>
                    {iconTag}
                </ul>
            </div>
            <div className='m-menu' >
                <button id='m-menu-btn' value={this.state.btn} onclick={function(){this.props.onClick().bind(this)}}>M</button>
            </div>
        </nav>
    </header>
    );
  }
}

export default HEADER;