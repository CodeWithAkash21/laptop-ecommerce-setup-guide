
export interface Product {
  id: string;
  name: string;
  brand: string;
  description: string;
  price: number;
  originalPrice?: number;
  images: string[];
  rating: number;
  specs: {
    processor: string;
    graphics: string;
    memory: string;
    storage: string;
    display: string;
  };
}

export interface CartItem {
  product: Product;
  quantity: number;
}
