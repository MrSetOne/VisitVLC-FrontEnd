import React, { useState } from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRightLong, faArrowLeftLong, faRoute, faCircleChevronDown, faStar } from "@fortawesome/free-solid-svg-icons";
import './MapFooter.scss'
import RouteInfo from '../RouteInfo/RouteInfo';

const MapFooter = ({data, setVisibleDrawer, visibleDrawer}) => {
    const [current, setCurrent] = useState(0);
    
    return (

        <div className="mapFooter">
        <button className='footer-btns'>
            <FontAwesomeIcon icon={faRoute} />
        </button>
        <button className='footer-btns'>
            <FontAwesomeIcon icon={faArrowLeftLong} onClick={()=>setCurrent(current-1)}/>
        </button>
        <button className='center-btn'>
            <FontAwesomeIcon icon={faCircleChevronDown} />
        </button>
        <button className='footer-btns'>
        <div className="svg-text">
                <FontAwesomeIcon icon={faArrowRightLong} onClick={()=>setCurrent(current+1)} />
            </div>
        </button>
        <button className='footer-btns' >
            <FontAwesomeIcon icon={faStar} />
        </button>
        <RouteInfo current={current} setCurrent={setCurrent} data={data} visibleDrawer={visibleDrawer} setVisibleDrawer={setVisibleDrawer} />
    </div>


  )
}

export default MapFooter