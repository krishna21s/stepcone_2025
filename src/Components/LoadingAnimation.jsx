import React from 'react';
import './LoadingAnimation.css';
import StepconeLogo from '/Assets/STEPCONE[1].png';
const LoadingAnimation = ({ loading }) => {
    return (
        <>
            {loading ? (
                <div className="ballbox ballbox3">
                    <div className="ball ball3">
                    </div>
                    <div className='stepconeImg'>
                        <img className='' src={StepconeLogo} height='40px' alt="" />
                    </div>
                </div>
            ) : null}
        </>
    );
}

export default LoadingAnimation;