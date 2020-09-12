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
            <li><a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer"><img src="https://pbs.twimg.com/media/EBbTWAuVAAAfWsQ?format=jpg&name=900x900" alt='instagram'/></a></li>
            <li><a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer"><img src="https://pbs.twimg.com/media/EBbTWAvVAAA-4Fb?format=jpg&name=900x900" alt='instagram'/></a></li>
            <li><a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer"><img src="https://pbs.twimg.com/media/EBbTWAvUIAADTiB?format=jpg&name=900x900" alt='instagram'/></a></li>
            <li><a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer"><img src="https://pbs.twimg.com/media/EBbTWAwU4AAugjD?format=jpg&name=900x900" alt='instagram'/></a></li>
            <li><a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer"><img src="https://pbs.twimg.com/media/EBbTWAuVAAAfWsQ?format=jpg&name=900x900" alt='instagram'/></a></li>
            <li><a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer"><img src="https://pbs.twimg.com/media/EBbTWAvVAAA-4Fb?format=jpg&name=900x900" alt='instagram'/></a></li>
            <li><a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer"><img src="https://pbs.twimg.com/media/EBbTWAvUIAADTiB?format=jpg&name=900x900" alt='instagram'/></a></li>
            <li><a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer"><img src="https://pbs.twimg.com/media/EBbTWAwU4AAugjD?format=jpg&name=900x900" alt='instagram'/></a></li>
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