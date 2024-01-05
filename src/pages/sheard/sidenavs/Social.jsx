import React, { useContext } from "react";
import { FaFacebook, FaGithub, FaGoogle, FaInstagram, FaTwitter } from "react-icons/fa";
import { AuthContext } from "../../../auth/Auth";

const Social = () => {
  const { logInWithGoogle,user,loading } = useContext(AuthContext)
 
  const handleGoogleLogin = () => {
    logInWithGoogle()
    .then(result => {
    console.log(result)
    })
    .catch(error => {
    console.log(error)
  })
}

  return (
    <>
      <div className={`flex flex-col gap-3 mb-6 transform overflow-hidden origin-top duration-100 ease-linear ${user?'scale-y-0 h-0':'scale-y-100 h-100'}`}>
        <h1 className="font-semibold text-xl">login with</h1>
        <div className="flex flex-col gap-3">
          <button onClick={handleGoogleLogin} className="w-full border-2 text-blue-300 font-semibold border-blue-300 rounded  py-3 flex items-center gap-3 justify-center hover:bg-blue-300 hover:text-white">
            {" "}
            <FaGoogle /> loging with google
          </button>
          <button className="w-full border-2 text-slate-600 font-semibold border-slate-300 rounded  py-3 flex items-center gap-3 justify-center hover:bg-slate-300 hover:text-white">
            {" "}
            <FaGithub />
            loging with Github
          </button>
        </div>
          </div>
          <div className="flex flex-col gap-3">
              <h1 className="font-semibold text-xl">
                  find us on
              </h1>
              <div className="border rounded  flex flex-col">
                  <button className="flex items-center px-6 py-2 border-b gap-3"><FaFacebook/> Facebook</button>
                  <button className="flex items-center px-6 py-2 border-b gap-3"><FaTwitter/> Twitter</button>
                  <button className="flex items-center px-6 py-2  gap-3"><FaInstagram/> Instagram</button>
              </div>
          </div>
    </>
  );
};

export default Social;
