console.log('firebase file')

// Your web app's Firebase configuration (firebase 설정 객체-내 firebase에 대한 정보)
const firebaseConfig = {
    apiKey: "AIzaSyC6LNRLQG2mZmBcg4YZs09bY95MptuYJ8k",
    authDomain: "fir-test-5845f.firebaseapp.com",
    databaseURL: "https://fir-test-5845f-default-rtdb.firebaseio.com",
    projectId: "fir-test-5845f",
    storageBucket: "fir-test-5845f.appspot.com",
    messagingSenderId: "1086802380862",
    appId: "1:1086802380862:web:d34cd67b0929accebb696f"
  };

  // Initialize Firebase(firebase 앱 초기화)
  const app = firebase.initializeApp(firebaseConfig);

  const database = firebase.database()

  // firebase에 데이터 쓰기
  const writeUserData = (userId, name, email)=>{
    firebase.database().ref('users/'+userId).set({
        name : name, 
        email : email
    })
  }

// firebase에 있는 데이터 읽기
const readUserData = (userId)=>{
    const userRef = firebase.database().ref('users/')
                    //'users/'라는 경로의 참조를 가져옴
    userRef.once('value').then((res)=>{
        const data = res.val()
        console.log(data)
    })
}


// Misson
// 1. addUserBtn이름을 가진 버튼 클릭 시 
// 2. 사용자가 input에 입력한 세 개의 데이터를 각각 console 창에 찍어보기
// 02. JS 실전폴더 ex04참고

let btn = document.getElementById("addUserBtn")
let frm = document.frm.elements


btn.addEventListener("click", ()=>{
    console.log(frm[0].value);
    console.log(frm[1].value);
    console.log(frm[2].value);
    writeUserData(frm[0].value, frm[2].value, frm[1].value)
})

let getUserBtn = document.getElementById("getUserBtn")
getUserBtn.addEventListener("click", ()=>{
    console.log('유저 가져오기ck');
    readUserData('123')
})