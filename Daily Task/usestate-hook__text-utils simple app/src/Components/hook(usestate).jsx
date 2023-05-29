
import PropTypes from 'prop-types';
import React, { useState } from 'react';





function Texts(Props) {

    // use state hooks
    const [text, settext] = useState("");


    // button function
    function Transfer()
    {
        let newText = text.toUpperCase();
        settext(newText);

    }

    // textarea change function
    function Changing()
    {
        settext(event.target.value)
    }

    return (

        <>
            <div className="my-5 d-flex justify-content-center">
                <div className='w-75'>
                    <label htmlFor="exampleFormControlTextarea1" className="form-label fw-bold fs-1">
                        Text
                    </label>
                    <textarea className="form-control" id="exampleFormControlTextarea1" rows={6} placeholder={Props.place} value={text} onChange={Changing}/>
                    <button className="btn btn-primary m-1" onClick={Transfer}>Submit</button>
                </div>
            </div>
        </>

    );

}


// set proptypes of props
Texts.propTypes = {
     place : PropTypes.string,

}

// set default value of props
Texts.defaultProps = {

}

export default Texts;