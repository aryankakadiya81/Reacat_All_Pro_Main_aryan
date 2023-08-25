let redux = require('redux');

function Cake() {
    return (
        {
            type: "Buy_Cake",
            info: "Cake_Decre"
        }
    )
}

function Coco() {
    return (
        {
            type: "Buy_Coco",
            info: "Coco_Decre"
        }
    )
}

let Aryan = (state = { Cakes: 10, Cocos: 20 }, action) => {
    switch (action.type) {
        case "Buy_Cake": return ({
            ...state,
            Cakes: state.Cakes - 1
        })
        case "Buy_Coco": return ({
            ...state,
            Cocos: state.Cocos - 1
        })
        default: return (state)
    }
}


let Store = redux.createStore(Aryan);
console.log("Initial", Store.getState());

let Func = Store.subscribe(
    () => {
        console.log("Update", Store.getState())
    }
);

Store.dispatch(Cake());

Store.dispatch(Cake());

Store.dispatch(Coco());



// Func();