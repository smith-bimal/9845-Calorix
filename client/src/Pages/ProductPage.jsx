import Navbar from "../components/Navbar";
import background from "../assets/background.png";
import ProductDetails from "./ProductDetailsPage";

const ProductPage = () => {

  return (
    <div className="min-h-screen max-w-[1450px] m-auto p-6">
      <div
        className="fixed inset-0 w-full h-full bg-cover bg-center -z-10"
        style={{
          backgroundImage: `url(${background})`,
        }}
      />

      <Navbar />

      <ProductDetails />
    </div>
  );
};

export default ProductPage;
