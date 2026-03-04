import { useSelector, useDispatch } from "react-redux";
import { clearUser } from "../../store/userStore";
import { Link, useNavigate } from "react-router-dom";
import { ShoppingCartOutlined } from "@ant-design/icons";
import { Badge } from "antd";

const Navbar = () => {
    const { userData, checkoutProducts } = useSelector((state) => state.user);
    const navigate = useNavigate();
    const dispatch = useDispatch();

    return (
        <>
            <nav className="bg-white p-7 shadow-[0_10px_25px_rgba(0,0,0,0.15)]">
                <div className="flex items-center justify-between">
                    <div className="flex items-center">
                        <Link to="/"><span className="text-violet-700 text-2xl font-semibold">NexaMart</span></Link>
                    </div>

                    <div className="flex items-center">
                        <ul className="flex flex-col md:flex-row gap-4 md:gap-5 text-violet-100 font-mediumtext-center">
                            <li>
                                <a href="/" className="text-black hover:text-violet-500 transition duration-300">Home</a>
                            </li>

                            <li>
                                <a href="/products" className=" text-black hover:text-violet-500 transition duration-300">Products</a>
                            </li>

                            <li>
                                <a href="/contact" className="text-black hover:text-violet-500 transition duration-300">Contact</a>
                            </li>
                        </ul>

                        {userData?.isAdmin && <button onClick={() => {navigate("/productUpload")}} className="bg-green-500 hover:bg-violet-600 text-white p-2 rounded-md mr-2">Add Product</button>}

                        <a href="/login" className="bg-violet-500 hover:bg-violet-600 text-white px-3 py-2 rounded-md text-sm font-medium mx-3">Login</a>
                        <a href="/signup" className="bg-violet-500 hover:bg-violet-600 text-white px-3 py-2 rounded-md text-sm font-medium">Sign up</a>
                
                        <Badge size="small" count={checkoutProducts.length}>
                            <ShoppingCartOutlined style={{ fontSize: '24px', color: 'black', marginLeft: '5px' }} onClick={() => {navigate("/checkout")}} />
                        </Badge>
                    </div> 
                    
                    
                    {/**{ userData?.name ?
                    <div className="flex items-center">
                        <ul className="flex flex-col md:flex-row gap-4 md:gap-8 text-violet-100 font-mediumtext-center">
                            <li>
                                <a href="/" className="text-black hover:text-violet-500 transition duration-300">Home</a>
                            </li>

                            <li>
                                <a href="/products" className=" text-black hover:text-violet-500 transition duration-300">Products</a>
                            </li>

                            <li>
                                <a href="/contact" className="text-black hover:text-violet-500 transition duration-300">Contact</a>
                            </li>
                        </ul>
                        <label className="text-black px-3 py-2 rounded-md text-sm font-medium">Welcome {userData?.name}!</label>
                        {userData?.isAdmin && <button onClick={() => {navigate("/productUpload")}} className="bg-green-500 hover:bg-violet-600 text-white p-2 rounded-md mr-2">Add Product</button>}
                        <button className="border bg-slate-600 border-violet-500 text-white hover:bg-gray-500 hover:text-white font-semibold py-2 px-4 rounded-lg transition-all duration-300" onClick={() => dispatch(clearUser())}>Logout</button>
                        <Badge size="small" count={checkoutProducts.length}>
                            <ShoppingCartOutlined style={{ fontSize: '24px', color: 'black', marginLeft: '5px' }} onClick={() => {navigate("/checkout")}} />
                        </Badge>
                    </div> :
                    <div className="flex items-center">
                        <a href="/login" className="bg-violet-500 hover:bg-violet-600 text-white px-3 py-2 rounded-md text-sm font-medium mx-2">Login</a>
                        <a href="/signup" className="bg-violet-500 hover:bg-violet-600 text-white px-3 py-2 rounded-md text-sm font-medium">Sign up</a>
                    </div>
                    } */}
                    
                </div>
                
            </nav>
        </>
     );
}

export default Navbar;