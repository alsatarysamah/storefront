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

export const reduceInventoryCount = (name) => {
  // console.log("dispatch update");
  return {
    type: "REDUCE",
    payload: name,
  };
};
