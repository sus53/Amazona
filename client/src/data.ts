import { Product } from "./types/Product";

export const sampleProducts: Product[] = [
    {
        name: "Nike Slim Shirt",
        slug: "nike-slim-shirt",
        image: "/images/p1.jpg",
        category: "Shirts",
        brand: "Nike",
        price: 120,
        countInStock: 10,
        description: "Good quality",
        rating: 4,
        numReviews: 10
    },
    {
        name: "Nike Slim Pant",
        slug: "nike-slim-pant",
        image: "/images/p4.jpg",
        category: "Pants",
        brand: "Nike",
        price: 150,
        countInStock: 18,
        description: "Fit and high quality",
        rating: 5,
        numReviews: 6
    },
    {
        name: "Adidas Slim Shirt",
        slug: "adidas-slim-shirt",
        image: "/images/p2.jpg",
        category: "Shirts",
        brand: "Adidas",
        price: 100,
        countInStock: 5,
        description: "White and Handsome",
        rating: 3,
        numReviews: 15
    },
    {
        name: "Adidas Slim Pant",
        slug: "adidas-slim-pant",
        image: "/images/p3.jpg",
        category: "Pants",
        brand: "Adidas",
        price: 200,
        countInStock: 20,
        description: "Best quality by Adidas",
        rating: 4.5,
        numReviews: 6
    }
]