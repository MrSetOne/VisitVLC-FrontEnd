import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRightLong, faArrowLeftLong, faRoute, faCircleChevronDown, faStar } from "@fortawesome/free-solid-svg-icons";
import './MapFooter.scss'

const MapFooter = () => {
  return (
    <div className="mapFooter">
        <button className='footer-btns'>
            <FontAwesomeIcon icon={faRoute} />
            {/* <p>Anterior</p> */}
        </button>
        <button className='footer-btns'>
            <FontAwesomeIcon icon={faArrowLeftLong} />
            {/* <p>Anterior</p> */}
        </button>
        <button className='center-btn'>
            <FontAwesomeIcon icon={faCircleChevronDown} />
        </button>
        <button className='footer-btns'>
        <div className="svg-text">
                <FontAwesomeIcon icon={faArrowRightLong} />
                {/* <p>Siguiente</p> */}
            </div>
        </button>
        <button className='footer-btns'>
            <FontAwesomeIcon icon={faStar} />
        </button>
    </div>
  )
}

export default MapFooter