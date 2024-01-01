import React, { useContext, useState } from "react";
import { FaPlus } from "react-icons/fa";
import { Link } from "react-router-dom";
import { AuthContext } from "../../auth/Auth";
import { updateProfile } from "firebase/auth";

const Register = () => {
  const { createUser,auth } = useContext(AuthContext);
  const [img, setImg] = useState();
  const [accept, setAccept] = useState(false);

  const handleAccept = () => {
    setAccept(!accept);
  };

  const handleImg = (e) => {
    const selectedImg = e.target.files[0];

    const reader = new FileReader();
    reader.onload = () => {
      setImg(reader.result);
    };

    reader.readAsDataURL(selectedImg);

    console.log(img);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
      const username = form.username.value;
      console.log(username)
    const email = form.email.value;
    const password = form.password.value;
    const reTypePass = form.confirmPassword.value;

    console.log(password);
    console.log(reTypePass);

    if (!accept) {
      alert("hell0");
      return;
    }

    if (!/^(?=.*\d).{8,}$/.test(password)) {
      alert(
        "Your password must contain at least one number and be 8 characters long."
      );
      return;
    }

    if (reTypePass !== password) {
      alert("Your passwords do not match.");
      return;
    }

    createUser(email, password)
    .then((userData) => {
        const user = userData.user;
        
        // Assuming img is a URL string, if not, modify accordingly
        const photoURL = img; 
    
        // Update the user's profile
        return updateProfile(auth.currentUser, {
          displayName: username,
          photoURL: photoURL
        });
    })
        .then(() => {
            console.log('hello')
        })
      .catch((error) => {
        const errorMsg = error.message;
        alert(`Error: ${errorMsg}`);
      });
  };

  return (
    <section className="mx-[120px] flex flex-col items-center">
      <div className="flex flex-col items-center bg-slate-50 p-24 w-[50%] relative">
        <div className="flex justify-between w-full align-middle items-center mb-[50px]">
          <h1 className="text-3xl font-semibold">Register Your Account</h1>
          <label
            className="w-32 h-32 bg-gray-100 border flex justify-center cursor-pointer items-center rounded"
            htmlFor="image"
          >
            <img
              className={`object-cover w-32 h-32 rounded ${
                img ? "" : "hidden"
              }`}
              src={img}
              alt=""
            />
            <FaPlus className={img ? "hidden" : ""}></FaPlus>
            <input
              id="image"
              className="hidden"
              type="file"
              accept="image/png,image/jpeg"
              onChange={handleImg}
            />
          </label>
        </div>
        <div className="border-b-2 w-full"></div>

        <form onSubmit={handleSubmit} className="w-full" action="">
          <label
            className="w-full flex flex-col gap-4 mt-[24px] mb-[24px]"
            htmlFor=""
          >
            <h1 className="text-xl font-semibold">Username</h1>
            <input
              className="w-full p-4 rounded-lg bg-slate-100 text-xl"
              type="text"
              name="username"
            />
          </label>

          <label
            className="w-full flex flex-col gap-4 mt-[24px] mb-[24px]"
            htmlFor=""
          >
            <h1 className="text-xl font-semibold">Email Address</h1>
            <input
              className="w-full p-4 rounded-lg bg-slate-100 text-xl"
              type="email"
              name="email"
            />
          </label>

          <label
            className="w-full flex flex-col gap-4 mt-[24px] mb-[24px]"
            htmlFor=""
          >
            <h1 className="text-xl font-semibold">Password</h1>
            <div className="relative">
              <input
                className="bg-slate-100 w-full p-4 rounded-lg text-xl"
                type="password"
                name="password"
              />
              <div className="absolute right-5 top-1/2 transform -translate-y-1/2 cursor-pointer"></div>
            </div>
          </label>

          <label
            className="w-full flex flex-col gap-4 mt-[24px] mb-[24px]"
            htmlFor=""
          >
            <h1 className="text-xl font-semibold">Retype Password</h1>
            <input
              className="bg-slate-100 w-full p-4 rounded-lg text-xl"
              type="password"
              name="confirmPassword"
            />
          </label>

          <label
            className="w-full flex items-center gap-2 mt-[24px] mb-[50px]"
            htmlFor=""
          >
            <input onChange={handleAccept} type="checkbox" name="agreeToTerms" />
            <span className="text-xl">I agree to the terms and conditions</span>
          </label>

          <button className="py-4 bg-slate-700 w-full text-white text-2xl font-semibold">
            Register
          </button>

          <h1 className="mt-6 text-center">
            Already have an account?{" "}
            <Link to={"/login"}>
              <span className="text-blue-400">Login</span>
            </Link>
          </h1>
        </form>
      </div>
    </section>
  );
};

export default Register;
