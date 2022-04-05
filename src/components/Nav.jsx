import styled from "styled-components";
import Svg_home from "../svg/home.svg?component";
import Svg_home_fill from "../svg/home_fill.svg?component";
import Svg_reserve from "../svg/reserve.svg?component";
import Svg_reserve_fill from "../svg/reserve_fill.svg?component";
import Svg_star from "../svg/star.svg?component";
import Svg_star_fill from "../svg/star_fill.svg?component";
import Svg_add from "../svg/add.svg?component";
import { useState } from "react";
import { Link } from "react-router-dom";

const Container = styled.div`
  width:100%;
  display:flex;
  align-items: center;
  justify-content: space-around;
  border-top: 2px solid rgba(64,80,110,0.25);
  background-color: #DBE2EF;
  position: fixed;
  bottom:0px;
  left:0px;
`

function Nav() {
  const [page,setPage] = useState(window.location.pathname);
  const svgProp = {width:24, height:24, fill:"#40506E",style:{padding:6,margin:4}}
  return (
    <Container>
      <Link to='/' onClick={()=>{setPage('/')}}>
        {
          page === '/'
          ? <Svg_home_fill {...svgProp} />
          : <Svg_home {...svgProp} />
        }
      </Link>
      <Link to='/reserve' onClick={()=>{setPage('/reserve')}}>
        {
          page === '/reserve'
          ? <Svg_reserve_fill {...svgProp} />
          : <Svg_reserve {...svgProp} />
        }
      </Link>
      <Link to='/add' onClick={()=>{setPage('/add')}}>
        <Svg_add width={32} height={32} style={{padding:4}} />
      </Link>
      <Link to='/subscribe' onClick={()=>{setPage('/subscribe')}}>
        {
          page === '/subscribe'
          ? <Svg_star_fill {...svgProp} />
          : <Svg_star {...svgProp} />
        }
      </Link>
      <Link to='/profile' onClick={()=>{setPage('/profile')}}>
        {
          page === '/profile'
          ? <Svg_home_fill {...svgProp} />
          : <Svg_home {...svgProp} />
        }
      </Link>
    </Container>
  );
}

export default Nav;
