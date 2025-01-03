


export interface Product {
    id: number;
    title: string;
    price: number;
    description: string;
    category: string;
    image: string[];

}


export interface Dimensions {
    width: number;
    height: number;
    depth: number;
  }
  
  export interface Review {
    rating: number;
    comment: string;
    date: string; // ISO string format
    reviewerName: string;
    reviewerEmail: string;
  }
  
  export interface MetaData {
    createdAt: string; // ISO string format
    updatedAt: string; // ISO string format
    barcode: string;
    qrCode: string;
  }
  
  export interface IProduct {
    id: number;
    title: string;
    description: string;
    category: string;
    price: number;
    discountPercentage: number;
    rating: number;
    stock: number;
    tags: string[];
    brand: string;
    sku: string;
    weight: number;
    dimensions: Dimensions;
    warrantyInformation: string;
    shippingInformation: string;
    availabilityStatus: string;
    reviews: Review[];
    returnPolicy: string;
    minimumOrderQuantity: number;
    meta: MetaData;
    images: string[];
    thumbnail: string;
  }
  