import React from 'react';
import { connect } from 'dva';
import ProductList from '../components/ProductList';
import { Button } from 'antd';



// const Products = ({ dispatch, products }) => {
//   function handleDelete(id) {
//     dispatch({
//       type: 'products/delete',
//       payload: id,
//     });
//   }
//   return (
//     <div>
//       <h2>List of Products</h2>
//       <ProductList onDelete={handleDelete} products={products} />
//     </div>
//   );
// };

// // export default Products;
// export default connect(({ products }) => ({
//   products,
// }))(Products);

//和上面效果相同

@connect(({products})=>({
    products
}))
export default class Products extends React.Component {
    constructor(props){
        super(props);
    }

    handleDelete=(id)=> {
        this.props.dispatch({
          type: 'products/delete',
          payload: id,
        });
    };

    tiaozhuan = ()=>{
      this.props.history.push(`/`);
    }
    
    render(){
        const {products} = this.props;
        return (
            <div>
              <Button onClick={this.tiaozhuan}>home</Button>
              <h2>List of Products</h2>
              <ProductList onDelete={this.handleDelete} products={products} />


            </div>
            
          );
    }
}


// export default Products;
// export default connect(({ products }) => ({
//     products,
//   }))(Products);


