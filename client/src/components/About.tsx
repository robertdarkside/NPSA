import { Link } from "react-router-dom";
import CountUp from "react-countup";

const About = () => {
  return (
    <div
      className="section bg-about w-full min-h-screen bg-cover md:bg-center bg-left-bottom text-white flex items-center"
      id="about"
    >
      <div className="flex flex-col lg:flex-row gap-10 h-full">
        <div className="flex items-start justify-start flex-1">
          <div className="flex flex-col gap-3 justify-start items-start">
            <p className="subheading text-[A4A2FF]">ABOUT</p>
            <p className="text-[24px]">
              The National Protection and Security Agency (NPSA) is a governmental organization dedicated to safeguarding the nation against a spectrum of security threats. The agency operates within a robust legal and ethical framework, fostering global cooperation, public awareness, and community engagement while adapting strategies to address the dynamic nature of security challenges.
            </p>
            {/* <Link
              className="py-2 px-8 gradient rounded font-bold hover:trans"
              to="about"
            >
              Learn More
            </Link> */}
          </div>
        </div>
        <div className="flex-1 flex flex-col items-center justify-end">
          <div className="flex-1 flex-col items-end justify-end lg:max-w-[450px]">
            <p className="font-light">
              With a primary mission encompassing counterterrorism, cybersecurity, intelligence gathering, and emergency response coordination, the NPSA employs a comprehensive and integrated approach to ensure the safety and security of the country.
            </p>
            <div className="flex flex-row pt-4 gap-x-20 gap-y-5 w-full flex-1">
              <div>
                <div className="font-bold lg:text-[56px] text-[46px]">
                  <CountUp end={95} duration={5} enableScrollSpy />%
                </div>
                <p>Successful</p>
              </div>
              <div>
                <div className="font-bold lg:text-[56px] text-[46px]">
                  <CountUp end={300} duration={5} enableScrollSpy />+
                </div>
                <p>Happy Clients</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
