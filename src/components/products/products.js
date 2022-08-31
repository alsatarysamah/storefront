import { Tab } from "@mui/material";
import Box from "@mui/material/Box";
import { connect } from "react-redux";
import ProductCard from "../productCard/productCard" 
function Product(props) {
//   console.log("product copmonenet", props.cate.cat);
console.log("PPPPPPPPPPPP",props.cate.activCat);
  let active=props.cate.cat.filter((element)=>element.normalizedName=== props.cate.activCat)
//   console.log(active[0].description);
  return (
    <>
 <h1>{active[0]?.displayName}</h1>
 <h3>{active[0]?.description}</h3>

      {props?.product?.map((element, idx) => (
        // <li key={idx}>{element.name}</li>
       
        element.name!=""&&<ProductCard element={element}></ProductCard>
      )
      )}

      
    </>
  );
}


const mapStateToProps = (state) => ({
    cate: state.cate,
  product: state.product.product,
});
export default connect(mapStateToProps)(Product);
