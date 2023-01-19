import { useSelector, useDispatch } from "react-redux";
import "./App.scss";
import { useEffect, useState } from "react";

import { db } from "./firebase";
import { collection, onSnapshot, query } from "firebase/firestore";
import { addHotelList } from "./redux/toolkitReducer";

const App = () => {

  const [hotelData, setHotelData] = useState(null);

  const dispatch = useDispatch();
  const hotelList = useSelector(state => state.toolkit)
  
  useEffect(() => {
    const queryList = query(collection(db, "newDB"));

    const unSubScribe = onSnapshot(queryList, (querySnapshot) => {
      let articlesArr = []
    
      querySnapshot.forEach((doc) => articlesArr.push({...doc.data()}));

      setHotelData(articlesArr);
      dispatch(addHotelList(articlesArr))
    });
    
    return () => unSubScribe()
  }, [])

  console.log(hotelList)
  return(
    <div className="container">
        <h1 className="container__title">Hello</h1>
    </div>
    
  )
}

export default App;