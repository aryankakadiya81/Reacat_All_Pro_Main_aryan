import React from 'react'
import Button from './Button'

const Bmain = () => {

    return (
        <div>
            <Button name="click"
                onPlay={() => { console.log("Play") }}
                onPause={() => { console.log("Pause") }}></Button>
        </div>
    )
}

export default Bmain
