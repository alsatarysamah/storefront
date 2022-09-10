import { Tab } from "@mui/material";
import { useEffect,useState } from "react";
import Box from "@mui/material/Box";
import { connect } from "react-redux";
import { changeActive } from "../../store/cat";
import Product, { filterProduct } from "../../store/product";
import product, { reset } from "../../store/product";
import {getRemoteCat} from "../../store/cat"
import {getRemoteProduct} from "../../store/product"
function Categories(props) {
  const [arr,setArr]=useState([]);
  // console.log("3njd ==> ",props.cate);
  useEffect(()=>{
    props.getRemoteProduct();
    console.log("hiiiiiiiii");
//     if(props.cate.activCat!="")
// {
//   console.log("if if");
// const arr = props.product.filter((element)=>element.cat===props.cate.activCat)
// setArr(arr);
// }
  },[])
  return (
    <>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        {props?.cate?.cat.map((element,idx)=>(
          <Tab 
          label={element.displayName}
          onClick={() => {
            props.getRemoteProduct();
          //  props.reset();
            props.filterProduct(element.normalizedName);
            props.changeActive(element.normalizedName);
            
          }}
        />
        ))}
       
      </Box>
    </>
  );
}

const mapDispatchToProps = { changeActive, filterProduct ,getRemoteCat,getRemoteProduct,reset };

const mapStateToProps = (state) => ({
  cate: state.cate,
  product: state.product,
});
export default connect(mapStateToProps, mapDispatchToProps)(Categories);
