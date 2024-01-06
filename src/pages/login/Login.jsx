import React, { useContext, useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link,  Navigate,  useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../auth/Auth";

const Login = () => {
  const location = useLocation()
  const navigate = useNavigate()

  const from = location.state?.from?.pathname || '/'
  console.log(from)

  console.log(location)
  const [showPass, setShowPass] = useState(false);
    const [error, setError] = useState(null);
    const{LoginWithEmail} = useContext(AuthContext)

  const handleShowPass = () => {
    setShowPass(!showPass);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const pass = form.password.value;


      
    LoginWithEmail(email, pass)
          .then(userData => {
            console.log(userData.user)
            navigate(from,{replace:true})
          })
          .catch(error => {
          setError(error.message)
      })
  };

  return (
    <section className="mx-[120px] flex flex-col items-center">
      <div className="flex flex-col items-center bg-slate-50 p-24 w-[50%]">
        <h1 className="text-3xl font-semibold mb-[50px]">Login Your Account</h1>

        <div className="border-b-2 w-full"></div>
        <form onSubmit={handleSubmit} className="w-full" action="">
          <label
            className="w-full flex flex-col gap-4 mt-[50px] mb-[24px]"
            htmlFor=""
          >
            <h1 className="text-xl font-semibold">Email Address</h1>
            <input
              className=" w-full p-4 rounded-lg bg-slate-100 text-xl"
              type="email"
              name="email"
            />
          </label>
          <h1 className="text-xl font-semibold">password</h1>
          <label
            className="w-full flex flex-col gap-4 mt-[24px] mb-[50px] "
            htmlFor=""
          >
            <label className="relative">
              <input
                className="bg-slate-100 w-full p-4 rounded-lg text-xl "
                type={showPass ? "text" : "password"}
                name="password"
              />
              <div
                onClick={handleShowPass}
                className="absolute right-5 top-1/2 transform -translate-y-1/2"
              >
                {showPass ? <FaEyeSlash /> : <FaEye />}
              </div>
            </label>
            <h1 className={`text-red-400`}>{error}</h1>
          </label>

          <button className="py-4 bg-slate-700 w-full text-white text-2xl font-semibold">
            login
          </button>
          <h1 className="mt-6 text-center">
            Dont Have an account?{" "}
            <Link to={"/register"}>
              {" "}
              <span className="text-blue-400 ">Register</span>
            </Link>
          </h1>
        </form>
      </div>
    </section>
  );
};

export default Login;
