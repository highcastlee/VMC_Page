import React,{ Component } from 'react';
import './VMC.css';

class HOME extends Component{
  render(){
    return(
      <div class='content'>
        <section class='youtube'>
          <iframe width="1126" height="634" src="https://www.youtube.com/embed/jOgLkdZJOJQ" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </section>
        <article class='instagram'>
        <p class="insta-txt">
            <span class="txt1">INSTAGRAM</span>
            <span class="txt2">VMC OFFICIAL INSTAGRAM</span>
            <span class="txt3"># VISMAJOR CREW # Since 2011 # VISMAJOR COMPANY # Since 2014</span>
        </p>
        <ul class='insta-list'>
            <li><a href="https://www.instagram.com/p/B9bDRT2AUXc/" target="_blank"><img src="https://scontent.cdninstagram.com/v/t51.2885-15/sh0.08/e35/s640x640/89364316_139301990733409_5791611324835333283_n.jpg?_nc_ht=scontent.cdninstagram.com&amp;_nc_ohc=eeEuqAZYxPkAX-PZkrB&amp;oh=04459dda3aed8a80829d59a853fdf0f2&amp;oe=5EA44453"/></a></li>
            <li><a href="https://www.instagram.com/p/B73QxwmgjDQ/" target="_blank"><img src="https://scontent.cdninstagram.com/v/t51.2885-15/sh0.08/e35/s640x640/81597765_376884949848367_9052598154760329775_n.jpg?_nc_ht=scontent.cdninstagram.com&_nc_ohc=_7ztP6G0pssAX8ZPEOk&oh=80736aa87874caf038b64bf07b7922f5&oe=5EA51629"/></a></li>
            <li><a href="https://www.instagram.com/p/B7P9DMeAJMr/" target="_blank"><img src="https://scontent.cdninstagram.com/v/t51.2885-15/sh0.08/e35/s640x640/80543612_533991163865532_7188653998630551847_n.jpg?_nc_ht=scontent.cdninstagram.com&_nc_ohc=15jVlF8E7wIAX89aBzj&oh=08612044c65e66316f25cc897bb0003a&oe=5EA397C0"/></a></li>
            <li><a href="https://www.instagram.com/p/B7OK0c9ARdO/" target="_blank"><img src="https://scontent.cdninstagram.com/v/t51.2885-15/sh0.08/e35/s640x640/83399744_792105631295913_3535234101273769226_n.jpg?_nc_ht=scontent.cdninstagram.com&_nc_ohc=z90Z0YnoB2UAX-1v8nj&oh=ec0e81d3d9f09c3401ab70a9e90b43d9&oe=5E9F6A44"/></a></li>
            <li><a href="https://www.instagram.com/p/B6-Ra73gQT8/" target="_blank"><img src="https://scontent.cdninstagram.com/v/t51.2885-15/sh0.08/e35/s640x640/80567942_870252426740871_8140566653957805116_n.jpg?_nc_ht=scontent.cdninstagram.com&_nc_ohc=07_C3tbqiSMAX_Ur3e7&oh=cb64a0157391707bcb38d4f73c7fe1fe&oe=5E9F31A8"/></a></li>
            <li><a href="https://www.instagram.com/p/B699TxdAiCO/" target="_blank"><img src="https://scontent.cdninstagram.com/v/t51.2885-15/sh0.08/e35/s640x640/79793973_642182562988315_3942958713481655600_n.jpg?_nc_ht=scontent.cdninstagram.com&_nc_ohc=1fVGtVMxLUUAX_EFrXc&oh=edf35e1c793c98244a85ef10e5fc69ea&oe=5E9D1BC3"/></a></li>
            <li><a href="https://www.instagram.com/p/B62WDM3gFiz/" target="_blank"><img src="https://scontent.cdninstagram.com/v/t51.2885-15/sh0.08/e35/s640x640/79851878_470472760543225_8533463379570428143_n.jpg?_nc_ht=scontent.cdninstagram.com&_nc_ohc=nFhjIxfzXmQAX_e1m9r&oh=5dd6921dedc9640aea83faaf1628ac28&oe=5E7AADE0"/></a></li>
            <li><a href="https://www.instagram.com/p/B60NrMEAs0J/" target="_blank"><img src="https://scontent.cdninstagram.com/v/t51.2885-15/sh0.08/e35/s640x640/79783743_600581994103149_404811497010636400_n.jpg?_nc_ht=scontent.cdninstagram.com&_nc_ohc=icRxbV9HrV0AX8p3qy3&oh=bc1ad3ede5ff4463ddcff38c7cdbd67f&oe=5E7A2F8E"/></a></li>
        </ul>
        <div class='follow'>
            <a href='https://www.instagram.com/vismajor_company/?hl=ko' target="_blank"><button id='btn-follow' ><span>Follow</span></button></a>
        </div>
    </article>
      </div>
    );
  }
}

export default HOME;