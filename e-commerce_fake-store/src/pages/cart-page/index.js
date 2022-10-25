import Navbar from '../../components/navbar';
import Product from '../../components/product-card';
import {Link} from 'react-router-dom';

const Cart =()=>{
    let count=localStorage.getItem('cartcount');
    const allData= [];
    for(let i=0; i<count; i++){
        const data={
            name: localStorage.getItem('itemname'+i),
            price: localStorage.getItem('itemprice'+i),
            image: localStorage.getItem('itemimage'+i),
        }
        allData.push(data);
    }
    console.log(allData);
return(
    <>
    {count==0 && <h1>Cart is Empty, Add some Items</h1>}

    {count!=0 &&
    <>
    <h1>Cart has {localStorage.getItem('cartcount')} items</h1>
    <h3>Your Total is {localStorage.getItem('carttotal')}$</h3>
    <button><Link to={'/checkout'}>continue to checkout</Link></button>
    {allData.map(data =>(
        <Product title={data.name} price={data.price} image={data.image}/>
      ))}
      </>
    }
    </>
)
}
export default Cart;