import React,{ Component } from 'react';

class HEADER extends Component{
  constructor(props){
      super(props);
      this.state={
          menu:true,
          matches: window.matchMedia("(max-width: 1024px)").matches,
          lists:[
            {key:"1", title:"HOME", id:"HOME"},
            {key:"2", title:"ABOUT", id:"ABOUT"},
            {key:"3", title:"ARTIST", id:"ARTIST"},
            {key:"4", title:"STORE", id:"https://smartstore.naver.com/vmc_store"},
            {key:"5", title:"CONTACT", id:"CONTACT"}
          ],
          icons:[
              {key:'facebook',href:'https://www.facebook.com/vismajorcrew',src:"facebook"},
              {key:'instagram',href:'https://www.instagram.com/vismajor_company',src:'instagram'},
              {key:'twitter',href:'https://twitter.com/vismajorcompany',src:'twitter'},
              {key:'youtube',href:'https://www.youtube.com/user/vismajorcompany',src:'youtube'},
              {key:'soundcloud',href:'https://soundcloud.com/vmcofficial',src:'soundcloud'}
          ]
      };
      this.onChangeMenu = this.onChangeMenu.bind(this);
  }
  componentDidMount() {
    const handler = e => this.setState({matches: e.matches});
    window.matchMedia("(max-width: 1024px)").addListener(handler);
  }
  onChangeMenu(){
    this.setState(state =>({
      menu:!state.menu
    }));
  }
  render(){
    var listTag = [];
    var iconTag = [];
    for(var i = 0; i<this.state.lists.length; i++){
      var li = this.state.lists[i];
      if(i===3){
        listTag.push(<li key={li.key}><a href={'https://smartstore.naver.com/vmc_store'}
        target='_blank' rel="noopener noreferrer">{li.title}</a></li>);
      }else{
        listTag.push(<li key={li.key}><a href={'#'}
        onClick={function(id,e){
          e.preventDefault();
          this.props.onChangePage(id);
        }.bind(this,li.id)}>{li.title}</a></li>);
      }
    }
    for(var i = 0; i<this.state.icons.length;i++){
        var icon = this.state.icons[i];
        iconTag.push(<li key={icon.key}><a href={icon.href}><img src={require('./images/'+icon.src+'.png')}/></a></li>)
    }
    if (this.state.menu===true){
      var wideMenu={display:'none'};
    }else if(this.state.menu===false){
      var wideMenu={display:'block'};
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
            {this.state.matches && (
            <div id='wide-menu' style={wideMenu}>
              <ul id='nav-text'>
                  {listTag}
              </ul>
              <ul id='nav-logo'>
                  {iconTag}
              </ul>
            </div>)}
            {this.state.matches && (
            <div className='m-menu' style={{display:'block !important'}}>
                <button id='m-menu-btn' onClick={this.onChangeMenu}>
                  {this.state.menu ? 'M' : 'X'}
                </button>
            </div>)}
        </nav>
    </header>
    );
  }
}

export default HEADER;