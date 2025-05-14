import AboutUs from "./components/aboutus";
import DestinationsPage from "./components/explore";
import LandingPage from "./components/heropage";
import Navbar from "./components/navbar";
import PremiumServices from "./components/services";


export default function Home() {
  return (
    <div className=" overflow-hidden">
    <Navbar />
    <LandingPage/>
    {/* <PremiumServices/> */}
    <AboutUs/>
    <DestinationsPage/>
    
    </div>
  );
}
