import Dashboardimg from "../assets/image/NexamartPreview.png"
import ProductList from "../Home/Productdata";

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
          
    <ProductList/>

    </div>
    )
}


export default Home;