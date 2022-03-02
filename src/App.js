import React from "react";
import Footer from "./components/layer/footer.layer";
import Navbar from "./components/layer/navbar.layer";
import SideNavbar from "./components/layer/sidenavbar.layer";
import Homepage from "./pages/home.page";

const App = () => {
  return (
    <div className="">
      <Navbar />
      <SideNavbar />
      <Homepage />
      <Footer />
    </div>
  );
};
export default App;
