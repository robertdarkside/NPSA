import {
  About,
  Contact,
  Features,
  Footer,
  Header,
  Navbar,
  Services,
  Team,
  Testimonials,
} from "../components";

const Homepage = () => {
  return (
    <div>
      <Navbar />
      <Header />
      <Services />
      <Features />
      <About />
      <Team />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
};

export default Homepage;
