import { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import { makeAuthenticatedRequest } from "../../service/axiosService";
import { API_METHODS } from "../../utility/constant";
import { getImageUrl } from "../../service/firebaseService";
import { Spin } from "antd";
import ProductList from "../../Home/Productdata";

const Product = () => {
    const [productList, SetProductList] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        makeAuthenticatedRequest('https://your-api.onrender.com/api/product/', API_METHODS.GET).then((response) => {
            updateProductListWithImages(response.data)
        })
    }, []);

    const updateProductListWithImages = async (productList) => {
        const updatedProductList = [];
        
        for (const product of productList) {
            try {
                await getImageUrl(product.image_path).then((imageUrl) => {
                    const updatedProduct = { ...product, imageUrl };
                    updatedProductList.push(updatedProduct);
                })
            } catch (error) {
                console.error('Error updating product with image URL:', error);
            }
        }
        SetProductList(updatedProductList)
        setLoading(false)
    };

    
    return ( <>
    <div className="bg-violet-200 text-center pt-10">
        <input
          type="text"
          placeholder="Search products..."

          className="w-full md:w-96 px-4 py-2 border rounded-lg shadow focus:outline-none focus:ring-2 focus:ring-violet-400"
        />
      </div>

    <ProductList/>
    </> );
}

export default Product;