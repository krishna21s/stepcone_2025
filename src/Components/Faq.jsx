import React, { useState } from 'react'
import './Faq.css'
import faqIcon from '/Assets/faqicon.png'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleXmark } from '@fortawesome/free-solid-svg-icons';
import FaqBox from './FaqBox.jsx';
const Faq = () => {
    const [msgbox, setmsgbox] = useState(0)
    const handlebox = () => {
        msgbox == 0 ? setmsgbox(1) : setmsgbox(0)
    }
    return (
        <>
            <div className='faqmsgicon position-fixed bottom-0 end-0 ' onClick={handlebox}>
                {
                    msgbox ? <FontAwesomeIcon icon={faCircleXmark} size="lg" style={{ color: "black", }} /> : <img src={faqIcon} alt="" />
                }

            </div>
            <div className={`msg-box-screen ${msgbox ? '' : 'd-none'}`}>

                {
                    msgbox && (
                        <FaqBox />
                    )
                }
            </div>
        </>
    )
}

export default Faq;