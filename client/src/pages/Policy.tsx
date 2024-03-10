import { Link } from "react-router-dom"
import {policy} from "../assets/data"
import { TbPointFilled } from "react-icons/tb";
import { IoHome } from "react-icons/io5";
import { useEffect } from "react";

const Policy = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
    <div className="gradient min-h-[50vh] text-white flex flex-col items-center justify-center relative">
      <Link to={"/"} className="flex items-start justify-start p-4 absolute top-0 left-0 cursor-pointer">
        <IoHome className=" text-3xl" />
        </Link>
        <p className="h-super">Privacy Policy</p>
        
      </div>
      <div className="section flex flex-col gap-4">
        <p className="h3">Introduction</p>
        <p>{policy.introduction}</p>
        <p className="h3">Information Collection And Use</p>
        {policy.use.map((item,i) => (
          <div className="flex flex-col gap-2" key={i}>
          <p className="font-bold">{item?.name}</p>
          <p>{item?.description}</p>
          </div>
        ))}
        <p className="h3">Use of Data</p>
        {
          policy.dataUse.map((item,i) => (<ul key={i} className="flex flex-col gap-1">
            <li className="flex items-center justify-start"><TbPointFilled />{item}</li>
          </ul>))
        }
        <p className="h3">Data Security</p>
        <p>{policy.dataSecurity}</p>
        <p className="h3">Data Sharing</p>
        <p>{policy.dataSharing}</p>
        <p className="h3">Your Rights</p>
        <p>You have the right to:</p>
        {
          policy.yourRights.map((item, i) => (<ul key={i} className="flex flex-col gap-1">
            <li className="flex items-center"><TbPointFilled />{item}</li>
          </ul>))
        }
        <p className="h3">Changes To This Privacy Policy</p>

<p>We may update our Privacy Policy from time to time. We will notify you of any changes by posting</p>
      </div>
    </>
  )
}

export default Policy
