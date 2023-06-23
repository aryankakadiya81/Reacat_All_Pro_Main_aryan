import React from 'react'

const Button = ({ name, onPlay, onPause }) => {

    let plays = false;
    function hande(){
        
        if (plays) {
            onPause();
        } 
        else {
            onPlay();
        }
        plays = !plays
    }
    return (
        <div>
            <button onClick={hande}>{name}</button>
        </div>
    )
}

export default Button
