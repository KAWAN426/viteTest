import moment from "moment";
import 'moment/locale/ko'

export function getKeyword(text) {
  const filterText = [' ','을','를','이','가','의','과','에','게','로','해','한'];
  const textArray = text.split('');
  let tempText = '';
  let resultArray = [];
  textArray.forEach((txt,i)=>{
    if(filterText.includes(txt)){
      if(tempText !== '') resultArray.push(tempText);
      resultArray.push(txt);
      tempText = '';
    }else if(i === textArray.length - 1){
      tempText += txt;
      resultArray.push(tempText);
    }else{
      tempText += txt;
    }
  })
  return resultArray;
}

export function getDate(overTime = 0,defaultDate = "YYMMDDHHmmss") {
  return  moment().format(defaultDate) + overTime
}

export function getRandomUid() {
  const chars = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXTZabcdefghiklmnopqrstuvwxyz';
  let uid = ''
  for (let i = 0; i < 8; i++) {
    const randomNum = Math.floor(Math.random() * chars.length)
    uid += chars.substring(randomNum, randomNum + 1)
  }
  return uid
}