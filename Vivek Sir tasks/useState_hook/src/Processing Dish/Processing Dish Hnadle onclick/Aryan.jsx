import React from 'react'

const Aryan = () => {
    function Burger() {
        let abc = document.getElementById("Aryan");
        return (
            abc.innerHTML =

            `<h1 className='text-center fs-1'>Burger</h1>
                <div className='my-4 ms-5' style={{ paddingLeft: "350px" }}>
                        <div className="card" style={{ width: "30rem" }}>
                        
                        <div className="card-body">
                        <p className="card-text fw-bold">Step 1 := Standard Burger Patties</p>
                        <p className="card-text fw-bold">Step 2 := Slider Burger Patties</p>
                        <p className="card-text fw-bold">Step 3 := Stuffed Burger Patties</p>
                        <p className="card-text fw-bold">Step 4 := Turkey Burger Patties</p>
                        <p className="card-text fw-bold">Step 5 := Vegetable Burger Patties</p>
                        <p className="card-text fw-bold">Now your Fooddish is ready to Eat</p>
                        
                        </div>
                        </div>
                        </div>`

        )
    }
    function Pizza() {
        let abc = document.getElementById("Aryan");

        return (
            abc.innerHTML =
            `<div>
                            <h1 className='fs-1'>Pizza</h1>
                            <div className='my-4 ms-5' style={{ paddingLeft: "350px" }}>
                            <div className="card" style={{ width: "30rem" }}>
                            <div className="card-body">
                            <p className="card-text fw-bold">Step 1 := Take Pizza Base</p>
                            <p className="card-text fw-bold">Step 2 := Sprade mayonnaise on Base</p>
                            <p className="card-text fw-bold">Step 3 := Sprade Sauce on Base</p>
                            <p className="card-text fw-bold">Step 4 := Sprade Toppings on Base</p>
                            <p className="card-text fw-bold">Step 5 := Bake in Microwave for 5 mins</p>
                            <p className="card-text fw-bold">Now your Fooddish is ready to Eat</p>
                            
                        
                        </div>
                        </div>
                        </div>
                        </div>`
        )

    }

    let Data = false;
    function mainData() {
        if (Data) {
            Burger()
        }
        else {
            Pizza()
        }
        Data = !Data;
    }

    return ( 
        <>

            <div >
                <button type="button" className="btn btn-primary" id='' onClick={mainData}>Click</button>
                <div className='m-5'>
                    <div id='Aryan' className='w-25 fw-bold text-center border border-dark border-3 rounded'>
                    </div>
                </div>
            </div>


        </>
    )
}

export default Aryan
                    // <img className="card-img-top" height={"300px"} width={"400px"} src="https://riotfest.org/wp-content/uploads/2016/10/151_1stuffed_crust_pizza.jpg" alt="Card image cap"/>
                    // <img className="card-img-top" height={"300px"} width={"400px"} src="https://images3.alphacoders.com/939/939772.jpg" alt="Card image cap" />