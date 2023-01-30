import { useSelector, useDispatch } from "react-redux";
import { addRoomsList } from "../redux/toolkitReducer";
// import {db} from "./firebase.js";
// import {query, collection, onSnapshot, updateDoc, doc, addDoc, deleteDoc} from "firebase/firestore" 

export const CheckOut = ({id, view, setView, room}) => {

    const dispatch = useDispatch();
    const rooms = useSelector(state => state.toolkit.roomsList);

    let check = [...rooms]

    const checkOut = () => {
        let count = 0;
        for(let item of check){
            if(item.id === id){
                let newObjData = {checkInDate: "", guest: ""}
                
                item = Object.assign({}, item, newObjData);
                console.log(item);
                
                let newArr = check.splice(count, 1, item);
                
                // check[count].guest = nameGuest;
                // check[count].checkInDate = dataGuest;
            }
            count++
        }
        console.log(check);
        dispatch(addRoomsList(check))
    }

    if(view){
        return(
            <div className="modal-wrapper">
                <div className="modal-checkOut">
                    <div className="modal-header">
                        <h3 className="modal-header__title">Check In</h3>
                        <button className="button button__close" onClick={() => setView(false)}>X</button>
                    </div>

                    <hr></hr>
                    <div className="modal-name">
                        <p className="modal__text modal-checkOut__text">Do your confirm the check-out Room {room}</p>
                    </div>

                    <div className="buttons">
                        <button className="button button__cancel" onClick={() => setView(false)}>Cancel</button>
                        <button className="button" onClick={checkOut}>Check Out</button>
                    </div>
                </div>
                
            </div>
        )
    }
}