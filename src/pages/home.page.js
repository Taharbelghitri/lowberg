import Rect from "react";
import Feedbacks from "../components/feedbacks.component";
import HomeComponent from "../components/home.component";
import MenuComponent from "../components/menu.component";
import PlansComponents from "../components/plans.component";
import SignupComponents from "../components/signup.component";
import StepsComponent from "../components/steps.component";

const Homepage = () => {
  return (
    <div className="flex flex-col items-center ">
      <HomeComponent />
      <StepsComponent />
      <MenuComponent />
      <PlansComponents />
      <Feedbacks />
      <SignupComponents />
    </div>
  );
};
export default Homepage;
