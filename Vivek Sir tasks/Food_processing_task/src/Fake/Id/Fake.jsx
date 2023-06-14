import React from 'react'

const Fake = (props) => {
      let { userId, id, title, completed} = props;
    return (
        <div className='d-inline-block justify-around'>
            <div>
                <div className="card ms-2 mt-3" style={{ width: "15.4rem" }}>
                   <ul className="list-group list-group-flush- d-flex justify-between">
                        <li className="list-group-item"><b>userId:</b> {userId}</li>
                        <li className="list-group-item"><b>id:</b> {id}</li>
                        <li className="list-group-item"><b>title:</b> {title}</li>
                        <li className="list-group-item"><b>completed:</b> {completed}</li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Fake;
    