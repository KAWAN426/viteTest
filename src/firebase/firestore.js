import firebase from "./config";

import {getKeyword,getDate,getRandomUid} from './function';
import {getCurrentUser} from './auth';

const db = firebase.firestore();

async function getDataByQuery(query,storageName) {
  const sStorage = storageName ? JSON.parse(sessionStorage.getItem(storageName)) : false;
  if(sStorage && sStorage[0] > getDate()){
    sStorage.shift();
    return sStorage
  }else{
    const dataArray = []
    await query.then((docs)=>{
      const user = getCurrentUser();
      docs.forEach((doc)=>{
        const data = doc.data()
        // console.log(data)
        // let bookmark = false;
        // let like = false;
        // if(user){
        //   if(data.bookmark.includes(user.uid)){
        //     bookmark = true
        //   }
        //   if(data.like.includes(user.uid)){
        //     like = true
        //   }
        // }
        // dataArray.push({...doc.data(),id:doc.id,bookmark:bookmark,like:like,likeCount:data.like.length,bookmarkCount:data.bookmark.length});
        dataArray.push({...data})
      })
      //dataArray.unshift(getDate(1400)) // 데이터 리프레시 주기 13000( 1분 30초 )
      dataArray.unshift(getDate(100))
    }).catch(err=>{
      alert('게시물 불러오기 실패\n' + err);
    })
    if(storageName){
      sessionStorage.setItem(storageName,JSON.stringify(dataArray))
    }
    dataArray.shift();
    return dataArray
  }
}

export async function getHomeData() {
  const query = db.collection('p').get()
  return getDataByQuery(query,"home")
}