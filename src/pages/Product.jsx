import React, { useContext } from 'react'
import { ShopContext } from '../Context/Shopcontext'
import { useParams } from 'react-router-dom'
import BreadCrum from '../Components/BreadCrums/BreadCrum'
import all_product from '../Assets/Frontend_Assets/all_product'
import ProductDisplay from '../Components/ProductDisplay/ProductDisplay'
import DescriptionBox from '../Components/DescriptionBox/DescriptionBox'
import RelatedProducts from '../Components/RelatedProducts/RelatedProducts'
const Product = () => { 
  const {products} = useContext(ShopContext);
  const {productId} = useParams();
  const product = all_product.find((e)=>e.id===Number(productId));
 return (
    <div>
      <BreadCrum product={product}/>
      <ProductDisplay product={product}/>
      <DescriptionBox/>  
      <RelatedProducts/>
    </div>
  )
}

export default Product
