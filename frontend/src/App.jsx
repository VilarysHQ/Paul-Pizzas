import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Menu from "./components/Menu/MenuSection";
import Promotions from "./components/Promotions/PromotionsSection";

export default function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Menu />
      <Promotions />
    </>
  );
}