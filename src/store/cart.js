import { update } from "./product";

//category association, name, description, price, inventory count
const initialState = [
  {
    // item: 
    //   {
    //     cat: "",
    //     name: "",
    //     description: "",
    //     price: "",
    //     inventoryCount: "",
    //   },
      
   
  },
];

export default (state = initialState, action) => {
  const { type, payload } = action;
  // console.log( {state} );
  // console.log({ payload });
  switch (type) {
    case "ADD":
        state.push(payload);
        return state; 
        case "REMOVE":
          console.log({payload});
          payload.item.inventoryCount++;
          update(payload.item)
        const  filterCart=  state.filter((element)=>element.item!==payload.item)
         console.log({filterCart});
          return filterCart;

    default:
      return state;
  }
};

export const addToCart = (item) => {
  // console.log("dispatch cart");
  // console.log({ item });
  return {
    type: "ADD",
    payload: { item },
  };
};
export const reset = () => {
  // console.log("dispatch reset");
  return {
    type: "RESET",
  };
};

export const removeCart = (item) => {
  console.log("dispatch resremoveet");
  return {
    type: "REMOVE",
    payload: { item },
  };
};

export const reduceInventoryCount = (name) => {
  // console.log("dispatch update");
  return {
    type: "REDUCE",
    payload: name,
  };
};
