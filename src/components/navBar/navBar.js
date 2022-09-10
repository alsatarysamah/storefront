// import { Link } from 'react-router-dom';
// import { LoginContext } from "../../context/login"
// import {When} from 'react-if';
// import { useContext } from 'react';
import { connect } from "react-redux";
import 'animate.css';
import "./navBar.css"
 function NavBarToDo(props) {
  // const login=useContext(LoginContext);
  // console.log("length ",props.cart);
  //({props?.cart?.item.length})
  return (
    <>
      <nav  class="bp4-navbar .modifier">
        <div class="bp4-navbar-group bp4-align-left">
          <div class="bp4-navbar-heading" className="link">
           Perfect Store
          </div>
        </div>
        <div class="bp4-navbar-group bp4-align-right">
          {/* <Link to={`/todo-app`} className="link" >Home</Link > */}
          {/* <a href='/todo-app'>home</a> */}
          {/* <Link to={`/userForm`}  className="link">Form</Link> */}
          {/* <a href='/userForm'>form</a> */}
          <span class="bp4-navbar-divider"></span>

          <button class="bp4-button bp4-minimal  animate__flipOutX  " >Cart ({props?.cart?.length-1})</button>
          <button class="bp4-button bp4-minimal bp4-icon-cog"></button>
        </div>
      </nav>
    </>
  );
}

const mapStateToProps = (state) => ({
  cate: state.cate,
  product: state.product,
  cart: state.cart,
});
export default connect(mapStateToProps)(NavBarToDo);