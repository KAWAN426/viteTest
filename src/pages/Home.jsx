import { useEffect, useState } from "react";
import styled from "styled-components";
import Post from "../components/Post";
import {getHomeData} from '../firebase/firestore'
// import Svg_arrow_down from "../svg/arrow_down.svg?component";


const Container = styled.div`
  display:flex;
  flex-direction: column;
  width:100%;
  min-height:100%;
`
const AlginPost = styled.div`
  display:flex;
  align-items: center;
  width:100%;
  background-color: #DBE2EF;
`
const AlginBtn = styled.h4`
  padding:6px;
  padding-left: 10px;
  padding-right: 10px;
  margin: 12px;
  margin-right: 4px;
  background-color: #D3E9EA;
  border-radius: 8px;
  color:#DBE2EF;
  display:flex;
  align-items: center;
`
const PostWrapper = styled.div`
  display:flex;
  flex-wrap: wrap;
`

function Home() {
  const arrowProp = {width:15, height:15, fill:"#DBE2EF",style:{marginLeft:4}}
  const [resultData,setResultData] = useState(null)

  useEffect(()=>{

    getHomeData().then((result)=>{setResultData(result)})
  },[])

  return (
    <Container>
      <PostWrapper>
        {
          resultData &&
          resultData.map((data,key)=>{
            return <Post key={key} data={data}/>
          })
        }
      </PostWrapper>
    </Container>
  );
}

export default Home;
