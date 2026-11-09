import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Menu from "./components/Menu/MenuSection";
import Promotions from "./components/Promotions/PromotionsSection";
import WhyChooseUs from "./components/WhyChooseUs/WhyChooseUs";
import LocalSection from "./components/Local/LocalSection";

export default function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Menu />
      <Promotions />
      <WhyChooseUs />
      <LocalSection />
    </>
  );
}