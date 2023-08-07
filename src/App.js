import { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header"
import Footer from "./components/Footer/Footer";
import "./css/main.css";
import "./css/responsive.css";
import Home from "./pages/Home/Home";
import PopularDestinations from "./pages/PopularDestinations/PopularDestinations";
import India from "./pages/PopularDestinations/Countries/India/India";
import Manali from "./pages/PopularDestinations/Countries/India/Manali";
import France from "./pages/PopularDestinations/Countries/France/France";
import Singapore from "./pages/PopularDestinations/Countries/Singapore/Singapore";
import Thailand from "./pages/PopularDestinations/Countries/Thailand/Thailand";
import UAE from "./pages/PopularDestinations/Countries/UAE/UAE";
import USA from "./pages/PopularDestinations/Countries/USA/USA";
import Shimla from "./pages/PopularDestinations/Countries/India/Shimla";
import Jaipur from "./pages/PopularDestinations/Countries/India/Jaipur";
import Agra from "./pages/PopularDestinations/Countries/India/Agra";
import Paris from "./pages/PopularDestinations/Countries/France/Paris";
import Riviera from "./pages/PopularDestinations/Countries/France/Riviera";
import Biarritz from "./pages/PopularDestinations/Countries/France/Biarritz";
import Gardens from "./pages/PopularDestinations/Countries/Singapore/Gardens";
import HajiLane from "./pages/PopularDestinations/Countries/Singapore/HajiLane";
import JohnsIsland from "./pages/PopularDestinations/Countries/Singapore/JohnsIsland";
import Bangkok from "./pages/PopularDestinations/Countries/Thailand/Bangkok";
import Krabi from "./pages/PopularDestinations/Countries/Thailand/Krabi";
import Phuket from "./pages/PopularDestinations/Countries/Thailand/Phuket";
import Similan from "./pages/PopularDestinations/Countries/Thailand/Similan";
import BurjKhalifa from "./pages/PopularDestinations/Countries/UAE/BurjKhalifa";
import DubaiMall from "./pages/PopularDestinations/Countries/UAE/DubaiMall";
import SafariDesert from "./pages/PopularDestinations/Countries/UAE/SafariDesert";
import Newyork from "./pages/PopularDestinations/Countries/USA/Newyork";
import Walt from "./pages/PopularDestinations/Countries/USA/Walt";
import Disney from "./pages/PopularDestinations/Countries/USA/Disney";
import Hawai from "./pages/PopularDestinations/Countries/USA/Hawai";
import TourPackages from "./pages/TourPackages/TourPackages";
import Offers from "./pages/Offers/Offers";
import Enquire from "./pages/Enquire/Enquire";
import Success from "./pages/Enquire/Success";
import Gallery from "./pages/Gallery/Gallery";
import Login from "./components/Login/Login";
import Register from "./components/Login/Register";
import ChangePassword from "./components/Login/ChangePassword";
import AboutUs from "./components/Footer/AboutUs";
import ContactUs from "./components/Footer/ContactUs";
import Terms from "./components/Footer/Terms";

function App() {
  
  useEffect(() => {
    if (!localStorage.getItem("userName")) {
      const nav = document.getElementsByClassName("nav-links");
      nav[0].classList.add("disable-nav");
      const navbtn = document.getElementsByClassName("nav-btn");
      navbtn[0].classList.add("disable-nav");
    }
  }, []);

  return (
    <BrowserRouter>
      <Header />
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/popularDestinations" element={<PopularDestinations />} />
          <Route path="/popularDestinations/India" element={<India />}/>
            <Route path="/popularDestinations/India/Manali" element={<Manali />}/>
            <Route path="/popularDestinations/India/Shimla" element={<Shimla />}/>
            <Route path="/popularDestinations/India/Jaipur" element={<Jaipur />}/>
            <Route path="/popularDestinations/India/Agra" element={<Agra />}/>

          <Route path="/popularDestinations/France" element={<France />} />
            <Route path="/popularDestinations/France/Paris" element={<Paris />}/>
            <Route path="/popularDestinations/France/Riviera" element={<Riviera />}/>
            <Route path="/popularDestinations/France/Biarritz" element={<Biarritz />}/>

          <Route path="/popularDestinations/Singapore" element={<Singapore />} />
            <Route path="/popularDestinations/Singapore/Gardens" element={<Gardens />}/>
            <Route path="/popularDestinations/Singapore/HajiLane" element={<HajiLane />}/>
            <Route path="/popularDestinations/Singapore/JohnsIsland" element={<JohnsIsland />}/>

          <Route path="/popularDestinations/Thailand" element={<Thailand />} />
            <Route path="/popularDestinations/Thailand/Bangkok" element={<Bangkok />}/>
            <Route path="/popularDestinations/Thailand/Krabi" element={<Krabi />}/>
            <Route path="/popularDestinations/Thailand/Phuket" element={<Phuket />}/>
            <Route path="/popularDestinations/Thailand/Similan" element={<Similan />}/>

          <Route path="/popularDestinations/UAE" element={<UAE />} />
            <Route path="/popularDestinations/UAE/BurjKhalifa" element={<BurjKhalifa />} />
            <Route path="/popularDestinations/UAE/DubaiMall" element={<DubaiMall />} />
            <Route path="/popularDestinations/UAE/SafariDesert" element={<SafariDesert />} />

          <Route path="/popularDestinations/USA" element={<USA />} />
            <Route path="/popularDestinations/USA/Newyork" element={<Newyork />} />
            <Route path="/popularDestinations/USA/Walt" element={<Walt />} />
            <Route path="/popularDestinations/USA/Disney" element={<Disney />} />
            <Route path="/popularDestinations/USA/Hawai" element={<Hawai />} />

          <Route path="/tourPackages" element={<TourPackages />} />
          <Route path="/offers" element={<Offers />} />
          <Route path="/enquire" element={<Enquire />} />
            <Route path="/enquire/success" element={<Success />} />
          
          <Route path="/gallery" element={<Gallery />}/>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/changePassword" element={<ChangePassword />} />

          <Route path="/about" element={<AboutUs/>} />
          <Route path="/contact" element={<ContactUs/>} />
          <Route path="/terms" element={<Terms/>} />

          {/* <Route path="/person/:id" element={<People />} /> */}
          {/* <Route path="/search/:query" element={<SearchResult />} /> */}
          {/* <Route path="/explore/:mediaType" element={<Explore />} /> */}
          {/* <Route path="*" element={<PageNotFoundError />} /> */}
        </Routes>
      <Footer />
    </BrowserRouter>
    // <>
    // <Header/>
    // <Footer/>
    // </>
        
  );
}

export default App;
