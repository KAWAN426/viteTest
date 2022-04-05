import styled from "styled-components";
import Svg_search from "../svg/search.svg?component";
import Svg_bell from "../svg/bell.svg?component";
import Svg_setting from "../svg/setting.svg?component";

const Container = styled.div`
  width:100%;
  display:flex;
  flex-direction: column;
  /* align-items: center;
  justify-content: space-between; */
`
const Title = styled.h1`
  letter-spacing:2.5px;
  padding: 0.5rem;
  margin: 0.5rem;
  color:#EA4923;
`
const SettingIcon = styled.h4`
  display:flex;
  align-items: center;
  color:#DBE2EF;
  background-color: #40506E;
  padding: 7.5px;
  padding-left: 14px;
  padding-right: 14px;
  margin-right: 2px;
  margin-left: 16px;
  margin-top: 6px;
  margin-bottom: 6px;
  border-radius: 8px;
`

function Header() {
  const svgProp = {width:24, height:24, fill:"#40506E",style:{padding:'0.5rem',margin:'0.5rem'}}
  return (
    <Container>
      <div style={{justifyContent:'space-between',alignItems:'center'}}>
        <Title>Weditor</Title>
        <div style={{display:'flex',alignItems: 'center'}}>
          <Svg_bell {...svgProp} />
          <Svg_search {...svgProp} />
        </div>
      </div>
      <div style={{alignItems:'center',flexWrap:'wrap'}}>
        <Svg_setting fill="#40506E" width={24} height={24} style={{padding:'0.5rem',margin:'0.5rem',marginRight:0}} />
        <SettingIcon>8분 이내</SettingIcon>
      </div>
    </Container>
  );
}

export default Header;
