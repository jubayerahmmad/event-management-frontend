import Banner from "./_components/Banner";
import CTA from "./_components/CTA";
import Features from "./_components/Features";
import HowItWorks from "./_components/HowItWorks";
import Newsletter from "./_components/Newsletter";
import Stats from "./_components/Stats";
import Testimonial from "./_components/Testimonial";

const Home = () => {
  return (
    <div>
      <Banner />
      <Stats />
      <Features />
      <HowItWorks />
      <Testimonial />
      <Newsletter />
      <CTA />
    </div>
  );
};

export default Home;
