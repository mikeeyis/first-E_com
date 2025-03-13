import { useState, useEffect } from 'react';
import ProductCard from '../components/ProductCard';
import purpleHoodie from '../assets/image/purple-hoodie.jpg';
import blackJacket from '../assets/image/black-jacket.jpg';
import indigoShirt from '../assets/image/indigo-shirt.jpg';
import '../css/Home.css';

function Home() {
  const newArrivals = [
    { id: 1, name: "Purple Hoodie", price: 49.99, image: purpleHoodie },
    { id: 2, name: "Black Jacket", price: 79.99, image: blackJacket },
    { id: 3, name: "Indigo Shirt", price: 29.99, image: indigoShirt },
    { id: 1, name: "Purple Hoodie", price: 49.99, image: purpleHoodie },
    { id: 2, name: "Black Jacket", price: 79.99, image: blackJacket },
    { id: 3, name: "Indigo Shirt", price: 29.99, image: indigoShirt },
    { id: 1, name: "Purple Hoodie", price: 49.99, image: purpleHoodie },
    { id: 2, name: "Black Jacket", price: 79.99, image: blackJacket },
    { id: 3, name: "Indigo Shirt", price: 29.99, image: indigoShirt },
    { id: 1, name: "Purple Hoodie", price: 49.99, image: purpleHoodie },
    { id: 2, name: "Black Jacket", price: 79.99, image: blackJacket },
    { id: 3, name: "Indigo Shirt", price: 29.99, image: indigoShirt },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => setCurrentIndex((prev) => (prev + 1) % newArrivals.length);

  useEffect(() => {
    const interval = setInterval(nextSlide, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="home">
      <section className="hero">
        <div className="carousel">
          <ProductCard {...newArrivals[currentIndex]} />
        </div>
      </section>
      <section className="featured">
        <h2>Featured Items</h2>
        <div className="products-grid">
          {newArrivals.map(item => (
            <ProductCard key={item.id} {...item} />
          ))}
        </div>
      </section>
    </div>
  );
}

export default Home;