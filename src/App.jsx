import { BrowserRouter, Route, Routes } from "react-router";
import { Header } from "./Components/Header";
import { Main } from "./Components/Main";
import { ProductDetailPage } from "./Pages/ProductDetailPage";
import { useState } from "react";

const products = [
  {
    id: 1,
    name: "Cool Sunglasses",
    price: 29,
    emoji: "😎",
    description: "Protect your eyes with style.",
  },
  {
    id: 2,
    name: "Retro Camera",
    price: 199,
    emoji: "📷",
    description: "Capture moments in vintage style.",
  },
  {
    id: 3,
    name: "Headphones",
    price: 89,
    emoji: "🎧",
    description: "Immersive sound experience.",
  },
  {
    id: 4,
    name: "Running Shoes",
    price: 120,
    emoji: "👟",
    description: "Run faster and further.",
  },
  {
    id: 5,
    name: "Backpack",
    price: 45,
    emoji: "🎒",
    description: "Carry your essentials everywhere.",
  },
  {
    id: 6,
    name: "Smart Watch",
    price: 250,
    emoji: "⌚",
    description: "Track your fitness goals.",
  },
  {
    id: 7,
    name: "Coffee Mug",
    price: 15,
    emoji: "☕",
    description: "Start your day right.",
  },
  {
    id: 8,
    name: "Plant",
    price: 25,
    emoji: "🪴",
    description: "Add some green to your room.",
  },
];

function App() {
  const [cart, setCart] = useState([]);

  return (
    <>
      <BrowserRouter>
        <Header itemCount={cart.length}></Header>
        <Routes>
          <Route
            path="/"
            element={
              <Main products={products} cart={cart} setCart={setCart}></Main>
            }
          />
          <Route
            path="product/:id"
            element={<ProductDetailPage products={products} />}
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
