import firebase from "./config";

const db = firebase.firestore()

export function getCurrentUser() {
  const user = firebase.auth().currentUser;
  if (user !== null && user !== undefined) {
    const displayName = user.displayName;
    const photoURL = user.photoURL;
    const uid = user.uid;
    return {displayName,photoURL,uid}
  }else{
    return null
  }
}

export function signIn() {
  const user = getCurrentUser();
  if(user === null){
    firebase.auth().setPersistence(firebase.auth.Auth.Persistence.LOCAL)
      .then(() => {
        var provider = new firebase.auth.GoogleAuthProvider();
        return firebase.auth().signInWithPopup(provider);
      }).catch((error) => {
        alert('로그인 실패\n' + error.message)
      }).then((result) => {
        const displayName = result.user.displayName;
        const photoURL = result.user.photoURL;
        const uid = result.user.uid;
        const userData = {photoURL:photoURL,displayName:displayName,uid:uid}
        db.collection('user').doc(uid).set(userData).then(()=>{
          localStorage.setItem('user',JSON.stringify(userData))
          alert('로그인 성공!')
          window.location.reload();
        }).catch((err)=>{
          alert('사용자 정보 저장 실패' + err)
        })
      }).catch((error) => {
        alert('사용자 정보 저장 실패\n' + error.message)
      });
  }else{
    alert('이미 로그인 했습니다.')
  }
}

export function signOut() {
  const user = getCurrentUser();
  if(user){
    if(window.confirm('로그아웃 하겠습니까?')){
      firebase.auth().signOut().then(() => {
        alert('로그아웃완료');
        window.location.reload();
      }).catch((error) => {
        alert('로그아웃 실패\n' + error.message);
      });
    }
  }else{
    alert('로그인되어 있지 않습니다.');
  }
}