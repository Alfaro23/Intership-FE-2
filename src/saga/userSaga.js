// import { call, put, takeEvery } from "redux-saga/effects";
// import { db } from "./firebase";
// import { collection, onSnapshot, query } from "firebase/firestore";
// import { addHotelList } from "../redux/toolkitReducer";

// const fetchData = () => new Promise(res => {
//     const queryList = query(collection(db, "newDB"));

//     const unSubScribe = onSnapshot(queryList, (querySnapshot) => {
//       let articlesArr = [];
    
//       querySnapshot.forEach((doc) => articlesArr.push({...doc.data()}));

//     });
    
//     return () => unSubScribe()
// })

// function* fetchUserWorker(){
//     const data = yield call(fetchData)

//     // yield put(addHotelList(data))
//     console.log(data);
// }

// function* userWatcher(){
//     takeEvery()
// }  