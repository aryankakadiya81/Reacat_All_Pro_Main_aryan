import React from 'react'

const FakePrduct = (props) => {
    let { Id, Title, Description, Price, DiscountPercentage, Img1, Img2, Img3 ,Img4, Img5} = props;
    return (
        <div className='d-inline-block justify-around'>
            <div>
                <div className="card ms-2 mt-3" style={{ width: "15.4rem" }}>
                <img src={Img1} className="d-block" height={"200px"} width={"200px"} alt="..." />
                <img src={Img2} className="d-block" height={"200px"} width={"200px"} alt="..." />
                <img src={Img3} className="d-block" height={"200px"} width={"200px"} alt="..." />
                <img src={Img4} className="d-block" height={"200px"} width={"200px"} alt="..." />
                <img src={Img5} className="d-block" height={"200px"} width={"200px"} alt="..." />


                    <ul className="list-group list-group-flush- d-flex justify-between">
                        <li className="list-group-item"><b>Id:</b> {Id}</li>
                        <li className="list-group-item"><b>Title:</b> {Title}</li>
                        <li className="list-group-item"><b>Description:</b> {Description}</li>
                        <li className="list-group-item"><b>Price:</b> {Price}</li>
                        <li className="list-group-item"><b>DiscountPercentage:</b> {DiscountPercentage}</li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default FakePrduct;

                    // <img src={Images} className="card-img-top" height={'260px'} />