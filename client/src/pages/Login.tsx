import { useState } from "react";
import axios from "axios";
import InputPassword from "../components/InputPassword";
// import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import idme from "../assets/idme-logo.svg";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  // const navigate = useNavigate();

  const onSubmit = (e: any) => {
    e.preventDefault();
    const data = { email, password };
    setLoading(true);

    axios
      .post("http://127.0.0.1:5555/user/login", data)
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
    <>
      <div className="flex min-h-screen flex-col items-center px-4">
        <div className="py-8">
          <img src={idme} alt="idme-logo" className="w-[100px] h-[28px]" />
        </div>

        <form
          className=" rounded-xl p-9 flex flex-col gap-5 w-full md:max-w-[400px] shadow-xl"
          onSubmit={onSubmit}
        >
          <div className="flex flex-col gap-5 items-center w-full">
            <p className="text-2xl font-semibold">Sign in to ID.me</p>
            <div className="bg-[#f2faff] py-3 text-center w-full">
              <p>New to ID.me</p>
              <Link to="/" className="underline text-blue-800">
                Create an ID.me account
              </Link>
            </div>
          </div>
          <div className="flex flex-col">
            <label className="font-semibold">Email</label>
            <input
              type="email"
              value={email}
              placeholder="Enter your email address"
              onChange={(e) => {
                setEmail(e.target.value), setError("");
              }}
              className="placeholder:text-slate-500 border-[#8696AC] border-2 rounded-md px-4 py-2"
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
          <button
            type="submit"
            className="text-white bg-blue-800 rounded-md py-2"
          >
            Sign in
          </button>
          {error && <p className="text-red-500 text-center">{error}</p>}
        </form>
      </div>
    </>
  );
}

export default Login;
