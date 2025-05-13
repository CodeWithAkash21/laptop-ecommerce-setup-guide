
import { Product } from '../types';

export const products: Product[] = [
  {
    id: "1",
    name: "Phantom X Pro",
    brand: "TechX",
    description: "High-performance gaming laptop with cutting-edge technology, designed for professional gamers and content creators who demand the best in class performance and visuals.",
    price: 2199.99,
    originalPrice: 2499.99,
    images: [
      "https://images.unsplash.com/photo-1603302576837-37561b2e2302?q=80&w=1200&h=600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1593642634524-b40b5baae6bb?q=80&w=1200&h=600&auto=format&fit=crop"
    ],
    rating: 4.9,
    specs: {
      processor: "Intel Core i9-13900H, 14-core, 5.4GHz",
      graphics: "NVIDIA RTX 4080 16GB GDDR6X",
      memory: "32GB DDR5 5600MHz",
      storage: "2TB NVMe SSD",
      display: "17.3-inch 240Hz QHD IPS"
    }
  },
  {
    id: "2",
    name: "Stealth 15 Elite",
    brand: "Razen",
    description: "Ultra-thin gaming powerhouse that combines mobility with exceptional gaming performance. Perfect for gamers on the go.",
    price: 1699.99,
    originalPrice: 1899.99,
    images: [
      "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?q=80&w=1200&h=600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1661961110671-77b71b929d52?q=80&w=1200&h=600&auto=format&fit=crop"
    ],
    rating: 4.7,
    specs: {
      processor: "AMD Ryzen 9 7900X, 12-core, 4.8GHz",
      graphics: "NVIDIA RTX 4070 8GB GDDR6",
      memory: "16GB DDR5 5200MHz",
      storage: "1TB NVMe SSD",
      display: "15.6-inch 165Hz QHD OLED"
    }
  },
  {
    id: "3",
    name: "Predator Extreme",
    brand: "Onyx",
    description: "Designed for hardcore gamers who need desktop-level performance in a portable format. Features advanced cooling technology for extended gaming sessions.",
    price: 2499.99,
    originalPrice: 2799.99,
    images: [
      "https://images.unsplash.com/photo-1593642702821-c8da6771f0c6?q=80&w=1200&h=600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1526657782461-9fe13402a841?q=80&w=1200&h=600&auto=format&fit=crop"
    ],
    rating: 4.8,
    specs: {
      processor: "Intel Core i9-14900K, 16-core, 5.8GHz",
      graphics: "NVIDIA RTX 4090 24GB GDDR6X",
      memory: "64GB DDR5 6000MHz",
      storage: "4TB NVMe SSD RAID 0",
      display: "18-inch 360Hz 4K Mini-LED"
    }
  },
  {
    id: "4",
    name: "Horizon Lite",
    brand: "TechX",
    description: "Budget-friendly gaming laptop that doesn't compromise on performance. Ideal for casual gamers and students.",
    price: 999.99,
    originalPrice: 1199.99,
    images: [
      "https://images.unsplash.com/photo-1542393545-10f5cde2c810?q=80&w=1200&h=600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1556656793-08538906a9f8?q=80&w=1200&h=600&auto=format&fit=crop"
    ],
    rating: 4.5,
    specs: {
      processor: "AMD Ryzen 7 7700X, 8-core, 4.5GHz",
      graphics: "NVIDIA RTX 4060 8GB GDDR6",
      memory: "16GB DDR5 4800MHz",
      storage: "512GB NVMe SSD",
      display: "15.6-inch 144Hz FHD IPS"
    }
  },
  {
    id: "5",
    name: "Nova Ultimate",
    brand: "Razen",
    description: "Revolutionary gaming laptop with customizable RGB lighting and mechanical keyboard. Engineered for maximum performance and style.",
    price: 2999.99,
    originalPrice: 3299.99,
    images: [
      "https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?q=80&w=1200&h=600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1531297484001-80022131f5a1?q=80&w=1200&h=600&auto=format&fit=crop"
    ],
    rating: 5.0,
    specs: {
      processor: "Intel Core i9-13950HX, 24-core, 5.6GHz",
      graphics: "NVIDIA RTX 4090 Ti 32GB GDDR6X",
      memory: "64GB DDR5 6400MHz",
      storage: "8TB NVMe SSD RAID 0",
      display: "17.3-inch 480Hz 4K OLED"
    }
  },
  {
    id: "6",
    name: "Valor 17",
    brand: "Onyx",
    description: "Mid-range gaming laptop with excellent thermal management and battery life. Perfect balance of performance and value.",
    price: 1399.99,
    originalPrice: 1599.99,
    images: [
      "https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?q=80&w=1200&h=600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1516387938699-a93567ec168e?q=80&w=1200&h=600&auto=format&fit=crop"
    ],
    rating: 4.6,
    specs: {
      processor: "Intel Core i7-13700H, 14-core, 5.0GHz",
      graphics: "NVIDIA RTX 4070 Ti 12GB GDDR6",
      memory: "32GB DDR5 5200MHz",
      storage: "2TB NVMe SSD",
      display: "17.3-inch 240Hz QHD IPS"
    }
  }
];
