import Product from "../components/Product";

export default async function Page() {
    const products = await getAllProducts()


    return (
        <div className="bg-blue py-8 px-8 min-h-screen">
            <div className="font-bold px-16 text-xl">
                <h2>Product list</h2>
                <div className="py-8 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
                    {products && products.lenght > 0 ? (
                        <div className="py-8 grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
                            <Product />
                        </div>
                    ) : (
                        <div className="py-8 grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
                            <p>No products Found</p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}
