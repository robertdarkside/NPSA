import {
  About,
  Contact,
  FAQs,
  Features,
  Footer,
  Header,
  Navbar,
  Services,
  Team,
  Testimonials,
  BlogNews,
  WorkProcess,
} from "../components";

const Homepage = () => {
  return (
    <div className="relative">
      <Navbar />
      <Header />
      <Services />
      <About />
      <Features />
      <WorkProcess />
      <Team />
      <Testimonials />
      <FAQs />
      <Contact />
      <BlogNews />
      <Footer />
    </div>
  );
};

export default Homepage;
