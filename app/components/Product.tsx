import { Button } from "@/components/ui/button";
import { ShoppingBag } from "lucide-react";
import Image from "next/image";

export default function Product(){


    return ( 
        <div className="">
        <div className="">
            <Image src="/swim.jpg" width={100} height={100} alt="Swimwear" />
            <h3 className="font-semibold">Swimwear </h3>
            <p className="font-normal text-sm py-2">Price: $300</p>
            <Button>
                <ShoppingBag />
                <span>Add to cart</span>
            </Button>
        </div>
    </div>
    )
}