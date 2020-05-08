import React,{ Component } from 'react';
import './VMC.css';

class HOME extends Component{
  render(){
    return(
      <div className='content'>
        <section className='youtube'>
          <iframe width="1126" height="634" src="https://www.youtube.com/embed/jOgLkdZJOJQ" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
        </section>
        <article className='instagram'>
        <p className="insta-txt">
            <span className="txt1">INSTAGRAM</span>
            <span className="txt2">VMC OFFICIAL INSTAGRAM</span>
            <span className="txt3"># VISMAJOR CREW # Since 2011 # VISMAJOR COMPANY # Since 2014</span>
        </p>
        <ul className='insta-list'>
            <li><a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer"><img src="https://scontent.ficn2-1.fna.fbcdn.net/v/t1.0-9/65612687_2416516371743563_8026884668919906304_n.jpg?_nc_cat=103&_nc_sid=110474&_nc_oc=AQldP-INQMs_BkrDF57t7nyP5IJTD-VyJMd_jyabNkftOLqw_IEb0PADG71tw2o-GEQ&_nc_ht=scontent.ficn2-1.fna&oh=4aa827029574d9ec040c8d8f2b1f5675&oe=5ED80470" alt='instagram'/></a></li>
            <li><a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer"><img src="https://pbs.twimg.com/media/EBbTWAuVAAAfWsQ?format=jpg&name=900x900" alt='instagram'/></a></li>
            <li><a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer"><img src="https://pbs.twimg.com/media/EBbTWAvVAAA-4Fb?format=jpg&name=900x900" alt='instagram'/></a></li>
            <li><a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer"><img src="https://pbs.twimg.com/media/EBbTWAvUIAADTiB?format=jpg&name=900x900" alt='instagram'/></a></li>
            <li><a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer"><img src="https://pbs.twimg.com/media/EBbTWAwU4AAugjD?format=jpg&name=900x900" alt='instagram'/></a></li>
            <li><a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer"><img src="https://scontent.ficn2-1.fna.fbcdn.net/v/t1.0-9/11156305_470038539826008_5845506821297679892_n.jpg?_nc_cat=107&_nc_sid=43edb5&_nc_oc=AQnlilA81DQQWlhCRzgpIn5lKT0lI8UPGxNCtzGeusgEg0i2QpdXf79ai11UdBrczds&_nc_ht=scontent.ficn2-1.fna&oh=6ee2ca79f9d5301eca8bbad9dfab8b46&oe=5ED7A056" alt='instagram'/></a></li>
            <li><a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer"><img src="https://scontent.ficn2-1.fna.fbcdn.net/v/t31.0-8/p960x960/11167991_469592956537233_7394324501657408261_o.jpg?_nc_cat=101&_nc_sid=43edb5&_nc_oc=AQk4R0c5q9FDcHsPBBCu_4q6ss_2VFlM_hBGrjTQAC6h6tdw1_JYYzQpB96f4hHIHFM&_nc_ht=scontent.ficn2-1.fna&_nc_tp=6&oh=54ab78f1f6c88d216be4579eb21d1238&oe=5EDA7EB0" alt='instagram'/></a></li>
            <li><a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer"><img src="https://scontent.ficn2-1.fna.fbcdn.net/v/t1.0-9/75250979_2661524743909390_4909766562770059264_n.jpg?_nc_cat=103&_nc_sid=110474&_nc_oc=AQke2J1Yjc2EthSun6hQS4pAP9ILwVKnfAXhZIlQD8L-OeMjm3bw5x5xFxtBXCHlu-c&_nc_ht=scontent.ficn2-1.fna&oh=bb834a1fa3780a3b1cab2841e7b1a629&oe=5EDB820D" alt='instagram'/></a></li>
        </ul>
        <div className='follow'>
            <a href='https://www.instagram.com/vismajor_company/?hl=ko' target="_blank" rel="noopener noreferrer"><button id='btn-follow' ><span>Follow</span></button></a>
        </div>
    </article>
      </div>
    );
  }
}

export default HOME;