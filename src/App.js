import logo from "./logo.svg";
import "./App.css";
import { useEffect } from "react";
import { connect } from "react-redux";
import NavBar from "./components/navBar/navBar.js";
import Footer from "./components/footer/footer.js";
import Categories from "./components/categories/categories";
import Product from "./components/products/products";
import {getRemoteCat} from "../src/store/cat"
import {getRemoteProduct} from "../src/store/product"
import SimpleCart from "./components/simpleCart/simpleCart";
function App(props) {
  useEffect(()=>{
props.getRemoteCat();
  },[])
  return (
    <div className="App">
      <NavBar></NavBar>
      <Categories></Categories>
      <SimpleCart></SimpleCart>
      <Product></Product>
    
      <Footer></Footer>
    </div>
  );
}


const mapDispatchToProps = { getRemoteCat ,getRemoteProduct};

const mapStateToProps = (state) => ({
  cate: state.cate,
  product: state.product,
});
export default connect(mapStateToProps, mapDispatchToProps)(App);

