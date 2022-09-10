import axios from "axios";
const initialState = {
  cat: [
    // {
    //   normalizedName: "food",
    //   displayName: "FOOD",
    //   description: "Taste, Texture and Beyond",
    // },
    // {
    //     normalizedName: "clothes",
    //     displayName: "CLOTHES",
    //     description: "nice thing",
    //   },
    //   {
    //     normalizedName: "electronic",
    //     displayName: "ELECTRONIC",
    //     description: "important thing",
    //   },
  ],
  activCat:""
};

export default (state=initialState,action)=>{
    // console.log("cat -- ",state.cat);
    const{type,payload}=action;
    switch(type){
        
        case "CHANGE":
          //  console.log("change"); 
          // console.log({payload});
            return {
                cat:state.cat,
                activCat:payload
            };
            case "GET":return {
              cat:payload,
              activCat:state.activCat
          };
            default:return state;
    }

}

export const changeActive = (name) => {
  //  console.log("name");
    return {
        type: 'CHANGE',
        payload: name
    }
}

const api = 'https://ms-book-shop.herokuapp.com/cat';
export const getRemoteCat = () => (dispatch) => {
  // console.log("remote");
    return axios.get(api).then((data) => {
        dispatch(getCat(data.data));
    })
}
const getCat = (name) => {
  // console.log(name);
   return {
       type: 'GET',
       payload: name
   }
}