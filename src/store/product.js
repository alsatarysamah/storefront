//category association, name, description, price, inventory count
const  initialState ={
  product: [
    {
      cat: "",
      name: "",
      description: "",
      price: "",
      inventoryCount: "",
    },]}
const member = {
  product: [
    {
      cat: "food",
      name: "Apple",
      description: "Yummy thing",
      price: "2",
      inventoryCount: "10",
    },
    {
      cat: "food",
      name: "orang",
      description: "Yummy thing",
      price: "4",
      inventoryCount: "100",
    },
    {
      cat: "clothes",
      name: "dress",
      description: "nice thing",
      price: "8",
      inventoryCount: "20",
    },
    {
      cat: "electronic",
      name: "phone",
      description: "important thing",
      price: "100",
      inventoryCount: "35",
    },
  ],
};

export default (state = initialState, action) => {
  const { type, payload } = action;
 
  switch (type) {
    case "FILTER":
     console.log("ffffff state",member);
      var filtered = member.product.filter((element) => element.cat === payload);
      console.log({ payload });
      console.log({ filtered });
      return { product: filtered };
      case "RESET":return {product:member};
    default:
      return initialState;
  }
};

export const filterProduct = (name) => {
  console.log("dispatch Product");
  return {
    type: "FILTER",
    payload: name,
  };
};
export const reset = () => {
  console.log("dispatch reset");
  return {
    type: "RESET",
    
  };
};
