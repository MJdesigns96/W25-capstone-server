import { Link, Outlet} from "react-router-dom";
import ProductSmall from "../../components/ProductsSmall";
import { useState, useEffect } from "react";

const Products = (props) => {
  const [productPageProps, setProductPageProps] = useState([]);
  useEffect(() => {
          // console.log(props);
          setProductPageProps(props.props);
      }, [props]);

  // console.log(props.props);
    return (
      <>        
        <Outlet />
      </>
    )
  };
  
  export default Products;