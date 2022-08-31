import logo from "./logo.svg";
import "./App.css";
import NavBar from "./components/navBar/navBar.js";
import Footer from "./components/footer/footer.js";
import Categories from "./components/categories/categories";
import Product from "./components/products/products";

function App() {
  return (
    <div className="App">
      <NavBar></NavBar>
      <Categories></Categories>
      <Product></Product>
    
      <Footer></Footer>
    </div>
  );
}

export default App;
