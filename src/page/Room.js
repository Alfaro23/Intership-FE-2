import { useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { Swiper, SwiperSlide } from 'swiper/react';
import {Pagination} from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { CheckIn } from "../components/CheckIn";
import { useState } from "react";
import { CheckOut } from "../components/CheckOut";

export const Rooms = () => {
    const [view, setView] = useState(false)
    const [checkOut, setCheckOut] = useState(false)
    const { id } = useParams();

    const rooms = useSelector(state => state.toolkit.roomsList);
    
    return(
        rooms.filter((item) => item.id === id).map((item) => <div className="container container-room">
            <div className="panel"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/30/Home_free_icon.svg/2048px-Home_free_icon.svg.png" className="panel__img"></img> <button className="button button__back"><Link to="/" className="button__back">Back home</Link></button></div>

            <div className="singleRoom">
                
                <Swiper 
                    modules={[Pagination]}
                    spaceBetween={0}
                    slidesPerView={1}
                    pagination={{ clickable: true }}
                    loop={true}
                     className="slider">

                    {item.gallery.map((item, idex) => <SwiperSlide><img src={item} className="slider__image"></img></SwiperSlide>)}

                </Swiper>

                <div className="info">
                    <h1 className="info__number">Room {item.number}</h1>
                    <div className="info__text"><span className="info__title">Type: </span> {item.type}</div>
                    <div className="info__text"><span className="info__title">Occupancy: </span> {item.occupancy}</div>
                    <div className="info__text"><span className="info__title">Price: </span> {item.price}</div>
                    <div className="info__text"><span className="info__title">Guest: </span> {item.guest}</div>
                </div>
                <div className="rightInfo">
                    <div className="buttons">
                        <button className="button button__checkIn" onClick={() => {setView(true)}}>Check in</button>
                        <button className="button button__checkOut" onClick={() => {setCheckOut(true)}}>Check out</button>
                    </div>
                    <div className="features">
                        <h3 className="features__title" >Features</h3>
                        <ul className="features__list">
                            {item.features.map((item) => <li className="features__item">{item}</li>)}
                        </ul>
                    </div>
                </div>
            </div>
            <div className="description">
                <h2 className="description__title">Description: </h2>
                <p className="description__text">{item.description}</p>
            </div>
            <CheckIn id={item.id} view={view} setView={() => setView(false)}/>
            <CheckOut id={item.id} view={checkOut} setView={() => setCheckOut(false)} room={item.number}/>
        </div>)
    )
}