import "./simpleCart.css"
import { connect } from "react-redux";
import {useEffect} from "react";
import 'animate.css';
 function SimpleCart(props){
  // useEffect(()=>{},[])
    // console.log("cart 77777777 ",props?.cart);
    return(
        <div id="cart" >
            <h3>Cart</h3>
            
            {props?.cart?.map((element, idx) => {
                // console.log(element.item.name);
                // if(element?.item?.name!="")
                return(
                
                   <p class=" animate__flipOutX " key={idx}>{element?.item?.name}</p>
       
        
      )}
      )}
        </div>
    )
}
const mapDispatchToProps = { };

const mapStateToProps = (state) => ({
  cate: state.cate,
  product: state.product,
  cart:state.cart
});
export default connect(mapStateToProps, mapDispatchToProps)(SimpleCart);