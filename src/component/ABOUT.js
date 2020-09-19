import React,{ Component } from 'react';
import './about.css';
import {Helmet} from "react-helmet";
class ABOUT extends Component{
  render(){
    return(
      <div class='content'>
        <Helmet><title>VMC-ABOUT</title></Helmet>
        <section class='youtube'>
            <div class='text-large'>
                <h1 >WE MAKING</h1>
                <h2 >VISTORY!</h2>
            </div>
            <div class='text-small'>
                <p>한국힙합 레이블 VMC(Vismajor Company)는 2011년 딥플로우(Deepflow)가 베이비나인(Babynine), 우탄(Wutan), 벤(VEN)등과 
결성한 힙합 크루 비스메이저(Vismajor)로부터 시작되었다.<br/>
2014년 본격 레이블로 론칭 하였으며 현재는 딥플로우와 아트디렉터 로우디가(Row Digga)의 운영 하에
딥플로우(Deepflow)와 넉살(Nucksal)을 비롯, 던밀스(Don Mills), 우탄(Wutan), 오디(Odee), 빅원(BIGONE), 웹스터 B(Webster B)을 포함한 12명의
다채로운 뮤지션들이 소속, 활동 중이다.<br/>
<br/>
2013년 컴필레이션 앨범 RUN VMC를 시작으로 2016년 3월, 제13회 한국대중음악상 시상식에서
딥플로우(Deepflow)는 정규 3집 앨범 [양화]로  '올해의 음악인' 및 수록곡인 [작두]를 통해 '최우수 랩&힙합 노래' 상을 수상하였으며
넉살(Nucksal)의 데뷔앨범 [작은 것들의 신] 역시 2017 한국힙합어워즈에서 '올해의 힙합 앨범'을 수상하며
많은 힙합팬들에게 그 이름을 각인, 그들만의 행보를 이어가고 있다.</p>
            </div>
        </section>
      </div>
    );
  }
}

export default ABOUT;