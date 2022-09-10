import "./simpleCart.css"
import { connect } from "react-redux";
import {useEffect} from "react";
import 'animate.css';
import {removeCart} from "../../store/cart"
import CancelPresentationIcon from '@mui/icons-material/CancelPresentation';
 function SimpleCart(props){
  // useEffect(()=>{},[])
    // console.log("cart 77777777 ",props?.cart);
    return(
        <div id="cart" >
            <h3>Cart</h3>
            
            {props?.cart?.map((element, idx) => {
                console.log("nameeeeeeeeee ",element.item);
                if(element.item)
                return(
                
                 element.price!=""&&  <p class=" animate__flipOutX " rel="shortcut icon" key={idx}>

                  <CancelPresentationIcon id="cancle" onClick={()=>{props.removeCart(element.item)}}  ></CancelPresentationIcon>
                    
                    {element?.item?.name}</p>
       
        
      )}
      )}
        </div>
    )
}
const mapDispatchToProps = { removeCart};

const mapStateToProps = (state) => ({
  cate: state.cate,
  product: state.product,
  cart:state.cart
});
export default connect(mapStateToProps, mapDispatchToProps)(SimpleCart);