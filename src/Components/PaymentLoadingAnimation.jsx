import React from 'react';
import './PaymentLoadingAnimation.css';
import StepconeLogo from '/Assets/STEPCONE[1].png';
const PaymentLoadingAnimation = ({ loading }) => {
    return (
        <>
            {loading ? (
                <div className="pay-ballbox ballbox3">
                    <div className="pay-ball pay-ball3">
                    </div>
                    <div className='pay-stepconeImg'>
                        <img className='' src={StepconeLogo} height='40px' alt="" />
                    </div>
                </div>
            ) : null}
        </>
    );
}

export default PaymentLoadingAnimation;