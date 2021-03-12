import React from 'react';

function Formation(props) {
    return (
        <div id='formation'>
            <div className='formation-image'>
                <img src={props.image} alt='' />
            </div>
            <div className='formation-text'>
                <h2>{props.title}</h2>
                <p>{props.text}
                </p>
            </div>
        </div>
    )
}

export default Formation;
