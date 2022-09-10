import { connect } from "react-redux";

import { getRemoteProduct } from "../../store/product";
import { useEffect, useState } from "react";
import { reduceInventoryCount } from "../../store/product";
import { addToCart } from "../../store/cart";
import 'animate.css';

import "./product.css";
function Product(props) {
  // console.log("PPPPPPPPPPPP", props.product);
  // const [count, setCount] = useState(0);
  // useEffect(() => {}, []);

  return (
    <>
      <h1 class="animate__slideOutDown">{props.cate.activCat.toUpperCase()}</h1>

      {props.product.map((element, idx) => {
        if (element.cat === props.cate.activCat)
          return (
            <div class="card">
              <div class="container">
                <h4>
                  <b class="animate__slideOutDown">{element.name.toUpperCase()}</b>
                </h4>
                <p>Price : {element.price}</p>
                <p>description: {element.description}</p>
                <p> inventoryCount:{element.inventoryCount}</p>
                <button
                  id="add"
                  onClick={() => {
                    props.reduceInventoryCount(element.name);
                    props.addToCart(element);
                    // setCount(element.inventoryCount);
                  }}
                >
                  Add
                </button>
              </div>
            </div>
          );
      })}
    </>
  );
}

const mapDispatchToProps = {
  getRemoteProduct,
  reduceInventoryCount,
  addToCart,
};
const mapStateToProps = (state) => ({
  cate: state.cate,
  product: state.product,
});
export default connect(mapStateToProps, mapDispatchToProps)(Product);
