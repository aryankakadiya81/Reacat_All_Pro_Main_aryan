import React from 'react'

const Book = (props) => {
    // ${Img}.jpg

    let { Name, Email, Qualification, Contect, Address, Img} = props;
    return (
        <div className='d-inline-block justify-around'>
            <div>
                <div className="card ms-2 mt-3" style={{ width: "15.4rem" }}>
                    <img src={Img} className="card-img-top" height={'260px'}/>
                    <ul className="list-group list-group-flush- d-flex justify-between">
                        <li className="list-group-item"><b>Name:</b> {Name}</li>
                        <li className="list-group-item"><b>Email:</b> {Email}</li>
                        <li className="list-group-item"><b>Qualification:</b> {Qualification}</li>
                        <li className="list-group-item"><b>Contect:</b> {Contect}</li>
                        <li className="list-group-item"><b>Address:</b> {Address}</li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Book;
    // <div>
    //     <img src='https://m.media-amazon.com/images/I/51FnFhekNsL._SY264_BO1,204,203,200_QL40_FMwebp_.jpg' alt='photo' />
    //     <h2>Shriman Yogi</h2>
    //     <p>Ranjeet Desai</p>
    //     <p>Rs. 598.00</p>
    //     <button>Add to card</button>
    // </div>