import Product from "../components/Product";
import {getAllProducts} from "@/actions/products";


export default async function page() {
    const products = await getAllProducts()

    return (
        <div className="bg-blue-50 py-8 px-8 min-h-screen">
            <div>
                <h2 className = "px-16 font-bold text-xl">Product list ({products.length}) </h2>
                    {products && products.length > 0 ? (
                        <div className="py-8 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
                            {products.map((item)=> 
                            <Product product={item} key= {item.id}/>
                            )}
                        </div>
                    ) : (
                        <div className="py-8 grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
                            <p>No products Found</p>
                        </div>
                    )}
                
            </div>
        </div>
    )
}
