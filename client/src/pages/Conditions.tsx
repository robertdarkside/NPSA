import { IoHome } from "react-icons/io5"
import { Link } from "react-router-dom"
import {conditions } from "../assets/data"
import { TbPointFilled } from "react-icons/tb"
import { useEffect } from "react"


const Conditions = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
    <div className="gradient min-h-[50vh] text-white flex flex-col items-center justify-center relative">
      <Link to={"/"} className="flex items-start justify-start p-4 absolute top-0 left-0 cursor-pointer">
        <IoHome className=" text-3xl" />
        </Link>
        <p className="h-super">Terms & Conditions</p>        
    </div>
    <div className="section flex flex-col gap-4">
        <p className="h3">Introduction</p>
        <p>{conditions.introduction}</p>
        <p>{conditions.notice}</p>
        <p className="h3">Content</p>
        <p>{conditions.content}</p>
        <p className="h3">Copyright and Content Ownership</p>
        {
          conditions.copyrightAndContentOwnership.map((item,i) => (<ul key={i} className="flex flex-col gap-1">
            <li className="flex items-start justify-start gap-1"><TbPointFilled className="h-4 w-4" />{item}</li>
          </ul>))
        }
        <p className="h3">Use of the Site</p>
        {
          conditions.siteUse.map((item,i) => (<ul key={i} className="flex flex-col gap-1">
            <li className="flex items-start justify-start gap-1"><TbPointFilled className="h-4 w-4" />{item}</li>
          </ul>))
        }
        <p className="h3">Disclaimer of Warranties</p>
        <p>{conditions.disclaimer}</p>
        <p className="h3">Limitation of Liability</p>
        {
            conditions.liabilityLimitation.map((item,i) => (
                <p key={i}>{item}</p>
            ))
        }
        <p className="h3">General Representation and Warranty</p>
        {
            conditions.generalRepresentation.map((item,i) => (
                <p key={i}>{item}</p>
            ))
        }
        <p className="h3">Changes</p>
        <p>{conditions.changes}</p>
        <p className="h3">Contact Information</p>
        <p>For any questions regarding this Terms of Use, please <Link to={"/contact"} className="underline text-blue-700">contact us</Link> directly.</p>
    </div>
    </>
  )
}

export default Conditions
