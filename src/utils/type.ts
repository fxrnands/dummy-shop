export interface CategoryProduct {
    id: number
    categoryName: string
    products: Product[]
  }
  
  export interface Product {
    id: number,
    title: string,
    price: string,
    category: string,
    description: string,
    image: string
    rating: {
      rate: number
      count: number
    }
  }

  export interface FilterType {
    searchProductName: string;
    minPrice: string;
    maxPrice: string;
  }

  export interface LoginFormType {
    username: string;
    password: string;
  }