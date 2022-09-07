import { Tab } from "@mui/material";
import Box from "@mui/material/Box";
import { connect } from "react-redux";
import { changeActive } from "../../store/cat";
import Product, { filterProduct } from "../../store/product";
import product, { reset } from "../../store/product";

function Categories(props) {
  // console.log({props});
  return (
    <>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tab
          label="FOOD"
          onClick={() => {
            props.reset();
            props.changeActive("food");
            props.filterProduct("food");
            
          }}
        />
        
        <Tab
          label="CLOTHES"
          onClick={() => {
            props.reset();
            props.changeActive("clothes");
            props.filterProduct("clothes");
            
          }}
        />
        <Tab
          label="ELECTRONIC"
          onClick={() => {
             props.reset();
            props.changeActive("electronic");
            props.filterProduct("electronic");
           
          }}
        />
      </Box>
    </>
  );
}

const mapDispatchToProps = { changeActive, filterProduct, reset };

const mapStateToProps = (state) => ({
  cate: state.cate,
  product: state.product,
});
export default connect(mapStateToProps, mapDispatchToProps)(Categories);
