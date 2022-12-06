import { Navbar } from "./components/Navbar/Navbar";
import { Carousel } from "./components/Carousel/Carousel";
import { HighlightProduct } from "./components/HighlightProduct/HighlightProduct";
import { Footer } from "./components/Footer/Footer";

export function Company() {
  return (
    <>
      <Navbar />
      <Carousel />
      <HighlightProduct title="camisetas" />
      <HighlightProduct title="cds/vinis" />
      <HighlightProduct title="camisetas" />
      <HighlightProduct title="cds/vinis" />
      <Footer />
    </>
  );
}
