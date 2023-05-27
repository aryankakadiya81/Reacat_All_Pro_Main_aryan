// for proptypes only 
import PropTypes from 'prop-types';





function Card(Props) {
// {Props.field} this is method of use props
return (

        <>
        <div className="row mt-5 mx-3" id="maindiv">
            <div className="card" style={{width: "18rem"}}>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item">Name: {Props.Name}</li>
                    <li className="list-group-item">Email: {Props.Email}</li>
                    <li className="list-group-item">Qualification: {Props.Qualification}</li>
                    <li className="list-group-item">Contect: {Props.Contect}</li>
                    <li className="list-group-item">Address: {Props.Address}</li>
                </ul>
            </div>
        </div>
        </>

    );

}


// set proptypes of props
Card.propTypes = {
    Name : PropTypes.string.isRequired,
    Email : PropTypes.string.isRequired,
    Qualification : PropTypes.string.isRequired,
    Contect : PropTypes.number.isRequired,
    Address : PropTypes.string.isRequired
}

// set default value of props
Card.defaultProps = {
    Name : "Aryan",
    Qualification : "MBA"
}

export default Card;