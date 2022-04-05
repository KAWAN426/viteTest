import { Link } from "react-router-dom";
import styled from "styled-components";
import Svg_reserve from "../svg/reserve.svg?component";
import Svg_clock from "../svg/clock.svg?component";
import Svg_upload from "../svg/upload.svg?component";
import Svg_menu from "../svg/menu.svg?component";

const Container = styled.div`
  display:flex;
  flex-direction: column;
  width:95vw;
  height:auto;
  margin: 2.5vw;
  margin-top: 3.5vw;
`
const YoutubeVideo = styled.iframe`
  width: 95vw;
  height:calc((95vw / 16 * 9) + 2.5vw);
  background-color: #D3E9EA;
  border-radius: 4px 4px 0px 0px;
`
const Content = styled.div`
  display:flex;
  flex-direction: column;
  background-color: #DBE2EF;
  border-radius: 0px 0px 4px 4px;
`
const Line = styled.div`
  display:flex;
  align-items: center;
  margin: 6px;
`
const Title = styled.h2`
  padding: 4px;
`
const Profile = styled.img`
  width:24px;
  height:24px;
  padding: 4px;
`
const Tag = styled.h5`
  color: #DBE2EF;
  padding: 6px;
  padding-left: 12px;
  padding-right: 12px;
  background-color : #D3E9EA;
  border-radius: 10px;
  margin-left: 6px;
  margin-right: 8px;
`
const FuncBtn = styled.div`
  display:flex;
  align-items: center;
  padding: 6px;
  margin: 2px;
  margin-right: 4px;
  cursor: pointer;
`
const FuncText = styled.h4`
  margin-left: 8px;
`

function Detail({data}) {
  const svgProp = {width:18, height:18, fill:"#D3E9EA"}
  const title = "간단한 컷편집 부탁해요!";
  const profileUrl = "https://yt3.ggpht.com/yti/APfAmoHjR07qQc8HPLecMV7kPHu5zReL5cRHyDEklKf7Uw=s88-c-k-c0x00ffffff-no-rj-mo";
  const videoUrl = "https://www.youtube.com/embed/DqS4EU3wcIU";
  const maxMoney = "30만원";
  const maxTime = "10분";
  const upload = "1";
  const reserve = "3";
  const uploadDate = "10분";
  const name = "CWIN77"

  return (
    <Container>
      <YoutubeVideo></YoutubeVideo>
      {/* <YoutubeVideo title={title} src={videoUrl + '?rel=0'} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" frameBorder="0" allowFullScreen/> */}
      <Content>
        <Line>
          <Profile alt={name} src={profileUrl} />
          <Link to="/">
            <Title>{title}</Title>
          </Link>
        </Line>
        <Line>
          <Tag>최대 {maxMoney}</Tag>
          <Tag>{maxTime} 이내로</Tag>
        </Line>
        <Line style={{justifyContent: 'space-between'}}>
          <div style={{display:'flex'}}>
            <FuncBtn>
              <Svg_upload {...svgProp} />
              <FuncText>업로드({upload})</FuncText>
            </FuncBtn>
            <FuncBtn>
              <Svg_reserve {...svgProp} />
              <FuncText>찜하기({reserve})</FuncText>
            </FuncBtn>
            <FuncBtn>
              <Svg_clock {...svgProp} />
              <FuncText>{uploadDate}전</FuncText>
            </FuncBtn>
          </div>
          <Svg_menu style={{marginRight:10,padding:8,cursor:'pointer'}} width={22} height={22} fill="#D3E9EA" />
        </Line>
      </Content>
    </Container>
  );
}

export default Detail;