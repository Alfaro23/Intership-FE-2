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
import { Rooms } from "./page/Room";

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
      console.log(Rooms);
      dispatch(addRoomsList(Rooms));
      dispatch(addAccountslList(Accounts));
    });
    
    return () => unSubScribe()
  }, [])

  return(
    <Routes>
      <Route path="/login" element={<AuthWindow/>}></Route>
      <Route path="/" element={<Header/>}>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/room/:id" element={<Rooms/>}></Route>
      </Route>
    </Routes>
    
  )
}

export default App;