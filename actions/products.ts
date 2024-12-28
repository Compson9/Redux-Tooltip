"use server"

import axios from 'axios';
 
export async function getAllProducts(){
    try {
        const res = await axios.get("https://api.escuelajs.co/api/v1/products")
        const products = res.data
        return products as Product[]

    } catch {
        return null
    }
}

