const initialState = {
  cat: [
    {
      normalizedName: "food",
      displayName: "FOOD",
      description: "Taste, Texture and Beyond",
    },
    {
        normalizedName: "clothes",
        displayName: "CLOTHES",
        description: "nice thing",
      },
      {
        normalizedName: "electronic",
        displayName: "ELECTRONIC",
        description: "important thing",
      },
  ],
  activCat:""
};

export default (state=initialState,action)=>{
    // console.log("cat -- ",state.cat);
    const{type,payload}=action;
    switch(type){
        
        case "CHANGE":
            
            return {
                cat:state.cat,
                activCat:payload
            }
            default:return state;
    }

}

export const changeActive = (name) => {
   console.log(name);
    return {
        type: 'CHANGE',
        payload: name
    }
}
