import { useSelector } from "react-redux";
import { useState } from "react";
import { Pagination } from 'antd';
import { Link } from "react-router-dom";

export const Home = () => {

    const [checkInfo, setCheckInfo] = useState(false);
    const [priceSort, setPriceSort] = useState(false);
    const [typeSort, setTypeSort] = useState(false);
    const [occupancySort, setOccupancySort] = useState(false);
    const [totalCount, setTotalCount] = useState(10);


    const rooms = useSelector(state => state.toolkit.roomsList);

    let arrTest = [...rooms];

    const renderData = () => {
        
        if(checkInfo){
            
            return arrTest.filter((item) => !item.guest).map((item, index) => 
                <>
                    <div key={index} className="room">
                        <div className="room__number">{item.number}</div>
                        <div className="room__type">{item.type}</div>
                        <div className="room__occupancy">{item.occupancy}</div>
                        <div className="room__price">{item.price}</div>
                        <div className="room__guest">{item.guest}</div>
                        <button className="button button__room">
                            <Link to={`/room/${item.id}`} className="button__link">
                                More information
                            </Link>
                        </button>
                    </div>
                    <hr className="line"></hr>
                </>
            )
        }  
        if(priceSort){
            if(totalCount > 10){
                return arrTest.sort((a, b) => a.price - b.price).filter((_,index) => index >= 10 ).map((item, index) => 
                <>
                    <div key={index} className="room">
                        <div className="room__number">{item.number}</div>
                        <div className="room__type">{item.type}</div>
                        <div className="room__occupancy">{item.occupancy}</div>
                        <div className="room__price">{item.price}</div>
                        <div className="room__guest">{item.guest}</div>
                        <button className="button button__room">
                            <Link to={`/room/${item.id}`} className="button__link">
                                More information
                            </Link>
                        </button>
                    </div>
                    <hr className="line"></hr>
                </>
            )
            }
            
            return arrTest.sort((a, b) => a.price - b.price).filter((_,index) => index < totalCount ).map((item, index) => 
                <>
                    <div key={index} className="room">
                        <div className="room__number">{item.number}</div>
                        <div className="room__type">{item.type}</div>
                        <div className="room__occupancy">{item.occupancy}</div>
                        <div className="room__price">{item.price}</div>
                        <div className="room__guest">{item.guest}</div>
                        <button className="button button__room">
                            <Link to={`/room/${item.id}`} className="button__link">
                                More information
                            </Link>
                        </button>
                    </div>
                    <hr className="line"></hr>
                </>
            )
        }
        if(typeSort){
            if(totalCount > 10){
                return arrTest.sort((a, b) => {
                    if(a.type < b.type){
                        return -1
                    } else if(a.type > b.type){
                        return 1
                    }
                    return 0;
                }).filter((_,index) => index >= 10 ).map((item, index) => 
                    <>
                        <div key={index} className="room">
                            <div className="room__number">{item.number}</div>
                            <div className="room__type">{item.type}</div>
                            <div className="room__occupancy">{item.occupancy}</div>
                            <div className="room__price">{item.price}</div>
                            <div className="room__guest">{item.guest}</div>
                            <button className="button button__room">
                            <Link to={`/room/${item.id}`} className="button__link">
                                More information
                            </Link>
                        </button>
                        </div>
                        <hr className="line"></hr>
                    </>
                )
            }

            return arrTest.sort((a, b) => {
                if(a.type < b.type){
                    return -1
                } else if(a.type > b.type){
                    return 1
                }
                return 0;
            }).filter((_,index) => index < totalCount ).map((item, index) => 
                <>
                    <div key={index} className="room">
                        <div className="room__number">{item.number}</div>
                        <div className="room__type">{item.type}</div>
                        <div className="room__occupancy">{item.occupancy}</div>
                        <div className="room__price">{item.price}</div>
                        <div className="room__guest">{item.guest}</div>
                        <button className="button button__room">
                            <Link to={`/room/${item.id}`} className="button__link">
                                More information
                            </Link>
                        </button>
                    </div>
                    <hr className="line"></hr>
                </>
            )
        } 
        if(occupancySort){
            if(totalCount > 10){
                return arrTest.sort((a, b) => a.occupancy - b.occupancy).filter((_,index) => index >= 10 ).map((item, index) => 
                <>
                    <div key={index} className="room">
                        <div className="room__number">{item.number}</div>
                        <div className="room__type">{item.type}</div>
                        <div className="room__occupancy">{item.occupancy}</div>
                        <div className="room__price">{item.price}</div>
                        <div className="room__guest">{item.guest}</div>
                        <button className="button button__room">
                            <Link to={`/room/${item.id}`} className="button__link">
                                More information
                            </Link>
                        </button>
                    </div>
                    <hr className="line"></hr>
                </>
            )
            }
            return arrTest.sort((a, b) => a.occupancy - b.occupancy).filter((_,index) => index < totalCount ).map((item, index) => 
                <>
                    <div key={index} className="room">
                        <div className="room__number">{item.number}</div>
                        <div className="room__type">{item.type}</div>
                        <div className="room__occupancy">{item.occupancy}</div>
                        <div className="room__price">{item.price}</div>
                        <div className="room__guest">{item.guest}</div>
                        <button className="button button__room">
                            <Link to={`/room/${item.id}`} className="button__link">
                                More information
                            </Link>
                        </button>
                    </div>
                    <hr className="line"></hr>
                </>
            )
        } 
        else {
            if(totalCount > 10){
                return arrTest.filter((_,index) => index >= 10 ).map((item, index) => 
                <>
                    <div key={index} className="room">
                        <div className="room__number">{item.number}</div>
                        <div className="room__type">{item.type}</div>
                        <div className="room__occupancy">{item.occupancy}</div>
                        <div className="room__price">{item.price}</div>
                        <div className="room__guest">{item.guest}</div>
                        <button className="button button__room">
                            <Link to={`/room/${item.id}`} className="button__link">
                                More information
                            </Link>
                        </button>
                    </div>
                    <hr className="line"></hr>
                </>
            )
            }
            return arrTest.filter((_,index) => index < totalCount ).map((item, index) => 
                <>
                    
                    <div key={index} className="room">
                        <div className="room__number">{item.number}</div>
                        <div className="room__type">{item.type}</div>
                        <div className="room__occupancy">{item.occupancy}</div>
                        <div className="room__price">{item.price}</div>
                        <div className="room__guest">{item.guest}</div>
                        <button className="button button__room">
                            <Link to={`/room/${item.id}`} className="button__link">
                                More information
                            </Link>
                        </button>
                        
                    </div>
                    <hr className="line"></hr>
                </>
            )
        }
    }

    const clearAllFilter = () => {
        setTypeSort(false)
        setOccupancySort(false)
        setPriceSort(false)
        setCheckInfo(false)
    }

    return(
        <div className="container-home">
            <div className="container-top">
                <button className="button button__clear" onClick={() => clearAllFilter()}>Clear all filters</button>
                <label> <input type="checkbox" onClick={() => setCheckInfo(!checkInfo)} className="checkInput"></input> Free rooms only</label>
            </div>

            <div className="filters">
                <div className="filters__number">Number</div>
                <div className="filters__type"><button onClick={() => setTypeSort(!typeSort)} className='button button__sort'>Type</button></div>
                <div className="filters__occupancy"><button onClick={() => setOccupancySort(!occupancySort)} className='button button__sort'>Occupancy</button> </div>
                <div className="filters__price"><button onClick={() => setPriceSort(!priceSort)} className='button button__sort'>Price</button></div>
                <div className="filters__guest">Guest</div>
            </div>
            <div className="rooms">
                {
                    renderData()    
                }
            </div>
                
            <Pagination defaultCurrent={1} total={(arrTest.length / 10) * 10} onChange={(event) => event % 2 == 0 ? setTotalCount(totalCount + 10) : setTotalCount(totalCount - 10)} className="pagination"></Pagination>
        </div>
    )
}