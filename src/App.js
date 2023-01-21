import { useSelector, useDispatch } from "react-redux";
import "./App.scss";
import { useEffect } from "react";

import { db } from "./firebase";
import { collection, onSnapshot, query } from "firebase/firestore";
import { addRoomsList, addAccountslList } from "./redux/toolkitReducer";

import { Route, Routes } from "react-router-dom";
import { AuthWindow } from "./components/AuthWindow";
import { Home } from "./page/Home";
import { Header } from "./components/Header";

const App = () => {

  const dispatch = useDispatch();
  // const accountList = useSelector(state => state.toolkit.accountList);
  // const roomsList = useSelector(state => state.toolkit.roomsList);
  
  useEffect(() => {
    const queryList = query(collection(db, "newDB"));

    const unSubScribe = onSnapshot(queryList, (querySnapshot) => {
      let articlesArr = []
    
      querySnapshot.forEach((doc) => articlesArr.push({...doc.data()}));

      const [{info}] = articlesArr;
      const {Rooms, Accounts} = info;

      dispatch(addRoomsList(Rooms));
      dispatch(addAccountslList(Accounts));
    });
    
    return () => unSubScribe()
  }, [])

  return(
    <Routes>
      <Route path="/" element={<AuthWindow/>}></Route>
      <Route path="/home" element={<Header/>}>
        <Route path="/home" element={<Home/>}></Route>
      </Route>
    </Routes>
    
  )
}

export default App;