import { useSelector, useDispatch } from "react-redux";
import { addRoomsList } from "../redux/toolkitReducer";

import { getDatabase, ref, child, push, update } from "firebase/database";

import {db} from "../firebase.js";
import {query, collection, onSnapshot, updateDoc, doc, addDoc, deleteDoc} from "firebase/firestore" 

export const CheckIn = ({id, view, setView}) => {

    const dispatch = useDispatch();
    const rooms = useSelector(state => state.toolkit.roomsList);
    const accounts = useSelector(state => state.toolkit.accountList);

    let check = [...rooms]
    
    let nameGuest, dataGuest;

    
    // function writeUserData(roomID, date, guest) {
    //     const db = getDatabase();
        
    //     const newPostKey = push(child(ref(db), 'newDB')).key;

    //     console.log(newPostKey);

    //     set(ref(db, 'newDB/' + roomID), {
    //         guest: guest,
    //         checkInDate: date,
    //     });
    // }
        
    const sendData = async () => {
        let count = 0;
        for(let item of check){
            if(item.id === id){
                let newObjData = {checkInDate: dataGuest, guest: nameGuest}
                
                item = Object.assign({}, item, newObjData);
                console.log(item);
                
                check.splice(count, 1, item);
                
                // check[count].guest = nameGuest;
                // check[count].checkInDate = dataGuest;
                //writeUserData(item.id, dataGuest, nameGuest);
            }
            count++
        }
        console.log(check);
        dispatch(addRoomsList(check));

        

        // await update(ref(db, "newDB"), {
        //     Accounts: accounts,
        //     Rooms: check,
        // })
        
    }

    if(view){
        return(
            <div className="modal-wrapper">
                <div className="modal-chekin">
                    <div className="modal-header">
                        <h3 className="modal-header__title">Check In</h3>
                        <button className="button button__close" onClick={() => setView(false)}>X</button>
                    </div>

                    <hr></hr>
                    <div className="modal-name">
                        <p className="modal__text">Please, enter a guest`s name: </p>
                        <input id="guest-name" type="text" onChange={(e) => nameGuest = e.target.value} className="modal-name__input" placeholder="Guest Name"></input>
                    </div>
                    <div className="modal-date">
                        <p className="modal__text">Please, enter the approximate date of guest checkout: </p>
                        <input id="date-name" type="date" onChange={(e) => dataGuest = e.target.value} className="modal-date__input"></input>
                    </div>

                    <div className="buttons">
                        <button className="button button__cancel" onClick={() => setView(false)}>Cancel</button>
                        <button className="button" onClick={sendData}>Check In</button>
                    </div>
                </div>
                
            </div>
        )
    }
}