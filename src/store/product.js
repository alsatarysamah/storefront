//category association, name, description, price, inventory count

import axios from "axios";
const initialState = [{}]
// {
//   product: [
//     {
//       // cat: "",
//       // name: "",
//       // description: "",
//       // price: "",
//       // inventoryCount: "",
//     },
//   ],
// };
// const member = {
//   product: [
    
//     {
//       cat: "food",
//       name: "orang",
//       description: "Yummy thing",
//       price: "4",
//       inventoryCount: 100,
//     },
//     {
//       cat: "game",
//       name: "toy",
//       description: "intersting thing",
//       price: "4",
//       inventoryCount: 10,
//     },
//     {
//       cat: "clothes",
//       name: "dress",
//       description: "nice thing",
//       price: "8",
//       inventoryCount: 20,
//     },
//     {
//       cat: "electronic",
//       name: "phone",
//       description: "important thing",
//       price: "100",
//       inventoryCount: 35,
//     },
//   ],
// };

export default (state = initialState, action) => {
  const { type, payload } = action;
// console.log("first state ");
  switch (type) {
    case "FILTER":
      console.log("ffffff filter", state);
      var filtered = state.filter(
        (element) => element.cat === payload
      );
      // console.log({ payload });
      // console.log({ filtered });
      return  filtered ;
      case "GETP":
        console.log("get get get "); 

        return  payload
    case "REDUCE":
      // console.log({ payload });
      state.forEach((element) => {
        if (element.name === payload) {
          // console.log("if");
          element.inventoryCount=element.inventoryCount-1;
          update(element)
          // console.log(element.inventoryCount);
        }
      });
      // console.log("statereduce ** ",state);
     
      return [...state];
  case "RESET":
    return [...state];
    default:
      return [...state];
  }
};

export const filterProduct = (name) => {
  // console.log("dispatch Product");
  return {
    type: "FILTER",
    payload: name,
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


const api = 'https://ms-book-shop.herokuapp.com/product';
export const getRemoteProduct = () => (dispatch) => {
  // console.log("remote");
    return axios.get(api).then((data) => {
        dispatch(getProduct(data.data));
    })
}
const getProduct = (data) => {
  // console.log({data});
   return {
       type: 'GETP',
       payload: data
   }
}
// export const updateRemoteProduct = () => (dispatch) => {
//   // console.log("remote");
//     return axios.put(api,{inventoryCount:item.inventoryCount}).then((data) => {
//         dispatch(update(data.data));
//     })
// }
// const  update=(item)=>{
//   return {
//     type: 'UPDATE',
//     payload: data
// }
// }
export function update(item){
  console.log({item});
  axios.put(`${api}/${item.id}`,{inventoryCount:item.inventoryCount})
  .then((data) => {})
  .catch((e)=>{console.log(e);})
}
