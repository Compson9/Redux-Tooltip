"use server"

import { IProduct } from '@/types/types';
import axios from 'axios';

 
export async function getAllProducts(){
    try {
        const res = await axios.get("https://dummyjson.com/products")
        const products = res.data.products
        return products as IProduct[];
    } catch {
        return null
    }
}



