import { Button } from "@/components/ui/button";
import { ShoppingBag } from "lucide-react";
import Image from "next/image";
import { type IProduct } from "@/types/types";

export default function Product({product}: {product: IProduct}){
    return ( 
        
        <div className="">
            <Image 
            
             src={product.images[0] ?? "/swimwear.jpg"}
             width={100} height={100} alt="Swimwear" />
            <h3 className="font-semibold">{product.title} </h3>
            <p className="font-normal text-sm py-2">Price: ${product.price}</p>
            <Button>
                <ShoppingBag />
                <span>Add to cart</span>
            </Button>
        </div>
    
    )
}