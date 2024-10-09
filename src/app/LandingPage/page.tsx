import { FC } from "react";
import Jumbotron from "@/components/Jumbotron";
import RecentWork from "@/components/RecentWork";
import Testimonial from "@/components/Testimonial";
import Footer from "@/components/Footer";

const LandingPage: FC = () => {
  return (
    <div className="overflow-x-hidden">
      <Jumbotron />
      <RecentWork />
      <Testimonial />
      <Footer />
    </div>
  );
};

export default LandingPage;
