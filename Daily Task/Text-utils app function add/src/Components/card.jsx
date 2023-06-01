
import PropTypes from 'prop-types';
import React, { useState } from 'react';





function Texts(Props) {

    // use state hooks
    const [text, settext] = useState("");


    // button function
    function TransferUp() {
        let newText = text.toUpperCase();
        settext(newText);

    }

    function TransferLo() {
        let newText = text.toLowerCase();
        settext(newText);

    }

    function ClearTxt() {
        let newText = "";
        settext(newText);

    }


    // textarea change function
    function Changing() {
        settext(event.target.value)
    }

    return (

        <>
            <div className="my-5 d-flex justify-content-center">
                <div className='w-75'>
                    <div className=''>
                        <label htmlFor="exampleFormControlTextarea1" className="form-label fw-bold fs-1">
                            Text
                        </label>
                        <textarea className="form-control" id="exampleFormControlTextarea1" rows={4} placeholder={Props.place} value={text} onChange={Changing} />
                        <div className='my-3'>
                            <button className="btn btn-primary m-1" onClick={TransferUp}>Upper</button>
                            <button className="btn btn-primary m-1" onClick={TransferLo}>Lower</button>
                            <button className="btn btn-primary m-1" onClick={ClearTxt}>Clear</button>

                        </div>
                    </div>
                    <div className='container'>
                        <h1>Summery</h1>
                        {/* <p>{text.split(" ").length - 1} words, {text.length} characters</p> */}
                        {/* <p>{text.split(" ").length} words, {text.length} characters</p> */}
                        {/* <p>{text.split(" ").length * 0.008}</p> */}
                    </div>
                </div>
            </div>
        </>

    );

}


// set proptypes of props
Texts.propTypes = {
    place: PropTypes.string,

}

// set default value of props
Texts.defaultProps = {

}

export default Texts;