
import PropTypes from 'prop-types';
import React, { useState } from 'react';





function Texts(Props) {
    const [text, settext] = useState("");
    function TransferUp() {
        let newText = text.toUpperCase();
        settext(newText);

    }

    function TransferLo() {
        let newText = text.toLowerCase();
        settext(newText);

    }

    function copyAll() {
        let selectall = document.getElementById("textall");
        selectall.select();
        navigator.clipboard.writeText(selectall.value);
    }

    function spaceRemove() {
        let newText = text.split(/[ ]+/);
        settext(newText.join(" "));
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
            <div className="py-5">
                <div className='d-flex justify-content-center'>
                    <div className='w-75'>
                        <div className=''>
                            <label htmlFor="exampleFormControlTextarea1" className="form-label fw-bold fs-1">
                                Text
                            </label>
                            <textarea className={`form-control fs-5`} style={{backgroundColor : (Props.Mode === 'dark'?'grey':'white'),color: Props.Mode == 'dark'?'white':'black'}} id="textall" rows={4} value={text} onChange={Changing} />
                            <div className='my-3'>
                                <button className="btn btn-primary m-1" onClick={TransferUp}>Upper Case</button>
                                <button className="btn btn-primary m-1" onClick={TransferLo}>Lower Case</button>
                                <button className="btn btn-primary m-1" onClick={copyAll}>Copy Text</button>
                                <button className="btn btn-primary m-1" onClick={spaceRemove}>Remove Extra Spaces</button>
                                <button className="btn btn-primary m-1" onClick={ClearTxt}>Clear</button>

                            </div>
                        </div>
                        <div className='container'>
                            <h1>Summery</h1>
                            {/* <div>{text.split(" ").length - 1} words, {text.length} characters</div> */}
                            <div>{text.split(" ").length} words, {text.length} characters</div>
                            <div>{text.split(" ").length * 0.008} Reading Time</div>
                        </div>
                    </div>
                </div>
            </div>
        </>

    );

}


// set proptypes of props
Texts.propTypes = {


}

// set default value of props
Texts.defaultProps = {

}

export default Texts;