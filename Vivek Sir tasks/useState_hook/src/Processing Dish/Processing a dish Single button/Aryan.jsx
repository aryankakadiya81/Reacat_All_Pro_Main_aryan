import React from 'react'

let Data = [
    {
        photo: "https://images3.alphacoders.com/939/939772.jpg",
        Name: "Burger",
        Step1: "Standard Burger Patties",
        Step2: "Slider Burger Patties",
        Step3: "Stuffed Burger Patties",
        Step4: "Turkey Burger Patties",
        Step5: "Vegetable Burger Patties",
    },
    {
        photo: "https://riotfest.org/wp-content/uploads/2016/10/151_1stuffed_crust_pizza.jpg",
        Name: "Pizza",
        Step1: "Take Pizza Base",
        Step2: "Sprade mayonnaise on Base",
        Step3: "Sprade Sauce on Base",
        Step4: "Sprade Toppings on Base",
        Step5: "Bake in Microwave for 5 mins",
    }

]

const Aryan = (Props) => {

    if (Props.form1 == "burger") {
        var photo = Data[0].photo;
        var name = Data[0].Name;
        var Step1 = Data[0].Step1;
        var Step2 = Data[0].Step2;
        var Step3 = Data[0].Step3;
        var Step4 = Data[0].Step4;
        var Step5 = Data[0].Step5;

    }
    else if (Props.form1 == "pizza") {
        var photo = Data[1].photo;
        var name = Data[1].Name;
        var Step1 = Data[1].Step1;
        var Step2 = Data[1].Step2;
        var Step3 = Data[1].Step3;
        var Step4 = Data[1].Step4;
        var Step5 = Data[1].Step5;
    }

    return (
        <>
        <div>
        <h1 className='text-center fs-1'>{name}</h1>
        { Props.form1 && <div className='my-4 ms-5' style={{paddingLeft:"350px"}}>
                <div className="card" style={{ width: "30rem" }}>
                    <img className="card-img-top" src={photo} alt="Card image cap" />
                    <div className="card-body">
                        <p className="card-text fw-bold">Step 1 := {Step1}</p>
                        <p className="card-text fw-bold">Step 2 := {Step2}</p>
                        <p className="card-text fw-bold">Step 3 := {Step3}</p>
                        <p className="card-text fw-bold">Step 4 := {Step4}</p>
                        <p className="card-text fw-bold">Step 5 := {Step5}</p>
                        <p className="card-text fw-bold">Now your Fooddish is ready to Eat</p>


                    </div>
                </div>
            </div>}
            </div>

        </>
    )
}

export default Aryan
