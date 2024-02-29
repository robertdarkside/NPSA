import { AiOutlineDownCircle } from "react-icons/ai";
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from "react-accessible-accordion";
import "react-accessible-accordion/dist/fancy-example.css";
import { faqData } from "../assets/data";

const FAQs = () => {
  return (
    <div
      className="section bg-faq-bg bg-opacity-85 w-full h-full bg-cover bg-center"
      id="f.a.qs"
    >
      <div className="lg:min-h-screen flex flex-col lg:flex-row items-center justify-center h-full">
        <div className="flex-1"></div>
        <div className="flex-1 flex flex-col order-2 bg-white h-fit lg:w-[550px] p-10">
          <p className="subheading">STILL HAVE QUESTIONS?</p>
          <p className="heading">Frequently Asked Questions</p>

          {faqData?.map((item, index) => {
            // destructure service
            const { heading, details } = item;
            return (
              <div key={index} className="flex flex-col items-center">
                <Accordion
                  allowZeroExpanded={true}
                  className="flex flex-col gap-4 justify-center md:w-[600px] w-full px-10"
                >
                  <AccordionItem className="border-b-[1px] py-3  border-[#F3E5D4]">
                    <AccordionItemHeading>
                      <AccordionItemButton className="flex items-center justify-between gap-10 w-full py-4 font-bold">
                        {heading}
                        <AiOutlineDownCircle className="text-[#7271DA] h-[20px] w-[20px] font-thin" />
                      </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>{details}</AccordionItemPanel>
                  </AccordionItem>
                </Accordion>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default FAQs;
