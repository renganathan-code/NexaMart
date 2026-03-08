import Dashboardimg from "../assets/image/NexamartPreview.png"
import ProductList from "../Home/Productdata";
import Reviews from "../Home/reviews";

function Home(){
    return(
    <div className="bg-violet-200 py-10 px-6">
        
        <div className="max-w-7xl mx-auto">
            
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">

                <img 
                src={Dashboardimg}
                alt="NexaMart Online Shopping Banner"
                className="w-full h-[500px] object-cover"
                />
                <div className="absolute inset-0 bg-black/10"></div>
            </div>
        </div>
        
        <h2 className="text-3xl font-bold pt-20 px-6 md:px-20 text-gray-800">
            Featured Products
        </h2>

    <ProductList/>
    <Reviews/>

    </div>
    )
}


export default Home;