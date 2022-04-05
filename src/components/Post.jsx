import { Link } from "react-router-dom";
import styled from "styled-components";
import Svg_reserve from "../svg/reserve.svg?component";
import Svg_clock from "../svg/clock.svg?component";
import Svg_upload from "../svg/upload.svg?component";
import Svg_play from "../svg/play.svg?component";
import Svg_stop from "../svg/stop.svg?component";
import { useEffect, useState } from "react";

const Container = styled.div`
  display:flex;
  flex-direction: column;
  width:calc(100% - 1.5rem);
  height:auto;
  margin: 0.75rem;
  margin-bottom: 1.5rem;
  background-color: #CBD3E2;
  /* box-shadow: 0px 8px 48px 4px rgba(0,0,0,0.2); */
  border-radius: 6px;
  @media only screen and (min-width:860px) {
    width:calc((100% - 4rem) / 2);
  }
  /* @media only screen and (min-width:1350px) {
    width:calc((100% - 6rem) / 3);
  } */
`
const Title = styled.h1`
  color:#40506E;
`
const Profile = styled.img`
  width:25px;
  height:25px;
  border-radius: 56px;
  margin-right: 7px;
`
const Setting = styled.h4`
  display:flex;
  padding: 6px;
  padding-left: 10px;
  padding-right: 10px;
  background-color: #40506E;
  color:#DBE2EF;
  margin-top: 20px;
  margin-bottom: 2px;
  margin-right: 16px;
  border-radius: 8px;
`
const FuncBtn = styled.h3`
  display:flex;
  align-items: center;
  margin-left: 16px;
  color:#40506E;
`
const PlayBtn = styled.button`
  background-color : #E1523E;
  margin: 1rem;
  margin-top: 0.75rem;
  margin-bottom: 1rem;
  margin-right: 18px;
  border-radius: 100px;
  padding: 14px;
  padding-top: 12px;
  padding-bottom: 10px;
  /* padding-top: 8px;
  padding-bottom: 7px;
  padding-right: 10px; */
`
const YoutubeVideo = styled.iframe`
  width: calc(100% - 1.5rem);
  height:calc((100vw - 2.5rem) / 16 * 9);
  margin: 0.75rem;
  margin-bottom: 0.25rem;
  border-radius: 6px;
  background-color: #D3E9EA;
  border-radius: 4px;
  @media only screen and (min-width:860px) {
    height:calc((100vw - 2.5rem) / 2 / 16 * 9);
  }
  /* @media only screen and (min-width:1350px) {
    height:calc((100vw - 2.5rem) / 3 / 16 * 9);
  } */
`

function Post({data}) {
  const funcSvg = {width:18, height:18,stroke:"#40506E", fill:"#40506E",style:{padding:"0.25rem",marginRight:'3px'}}
  const videoSvg = {width:13,height:13,fill:"D3E9EA"}
  const title = data.ti;
  const profileUrl = "https://yt3.ggpht.com/yti/APfAmoHjR07qQc8HPLecMV7kPHu5zReL5cRHyDEklKf7Uw=s88-c-k-c0x00ffffff-no-rj-mo";
  const videoUrl = "https://www.youtube-nocookie.com/embed/" + data.vi + '?modestbranding=1&rel=0&autoplay=1';
  const maxMoney = data.mm;
  const maxTime = data.mt;
  const upload = "1";
  const reserve = "3";
  const uploadDate = "10분";
  const name = "CWIN77"
  const downloadURL = data.do
  const [isShow,setIsShow] = useState(false)

  return (
    <Container>
      {
        isShow &&
        <YoutubeVideo title={title} src={videoUrl} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" frameBorder="0" allowFullScreen/>
      }
      <div style={{flexDirection:'column',padding:'0.25rem',paddingLeft:'0.5rem',paddingRight:'0.5rem',margin:'0.5rem',marginBottom:0}}>
        <div style={{alignItems:'center'}}>
          <Profile src={profileUrl} />
          <Title>{title}</Title>
        </div>
        <div>
          <Setting>10분 이내로</Setting>
          <Setting>최대 30만원</Setting>
        </div>
      </div>
      <div style={{alignItems:'center',justifyContent:'space-between'}}>
        <div>
          <FuncBtn onClick={()=>{window.open(downloadURL, '_blank')}}>
            <Svg_reserve {...funcSvg} />
            찜하기({reserve})
          </FuncBtn>
          <FuncBtn>
            <Svg_clock {...funcSvg} />
            {uploadDate}전
          </FuncBtn>
        </div>
        <div style={{alignItems:'center'}}>
          <PlayBtn onClick={()=>{setIsShow(!isShow)}}>
            {
              isShow
              ? <Svg_stop {...videoSvg} />
              : <Svg_play {...videoSvg} />
            }
          </PlayBtn>
          {/* {
            isShow
            ? <h1 style={{color:"#E1523E",marginBottom:6}}>Stop</h1>
            : <h1 style={{color:"#E1523E",marginBottom:6}}>Play</h1>
          } */}
        </div>
      </div>
    </Container>
  );
}

export default Post;