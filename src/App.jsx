import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import LandingPage from './pages/LandingPage';
import ContactUsPage from './pages/ContactUsPage';
import ProductPage from './pages/ProductPage'; 
import ProductDetailsPage from './pages/ProductDetailsPage'; 
import CategoryPage from './pages/CategoryPage';
import ProfilePage from './pages/ProfilePage';
import MyCartPage from './pages/MyCartPage';
import BuyNow from './pages/BuyNow';
import Signup from "./pages/SignUp";
import Login from "./pages/Login";

function App() {
  return (
    <>
      <Navbar />
      {/* <CategoryPage /> */}
      {/* <ProductPage /> */}
      {/* <ProductDetailsPage /> */}
      {/* <ProfilePage /> */}
      {/* <MyCartPage /> */}
      <BuyNow />
      {/* <Signup /> */}
      {/* <Login /> */}
      {/* <LandingPage /> */}
      {/* <ContactUsPage /> */}
      <Footer />
    </>
  );
}

export default App;