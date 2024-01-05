import React, { useContext } from "react";
import { AuthContext } from "../auth/Auth";
import { FaSignOutAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

const NavChildren = () => {
  const { user, loading, logOutUser } = useContext(AuthContext);
  // console.log(user.displayName)

  return (
    <div className="mx-[120px] max-sm:hidden flex justify-center list-none gap-6 relative">
      <div className="flex gap-3">
        <li>home</li>
        <li>home</li>
        <li>home</li>
      </div>
      <div className="absolute right-0">
        {loading ? (
          <Link to={"/login"}>
            <button className="bg-gray-200 px-3 py-1 rounded">Login</button>
          </Link>
        ) : (
          <>
            {user ? (
              <div className="flex gap-3 items-center">
                <div className="font-semibold w-10 h-10 flex justify-center items-center text-white rounded-full bg-red-300">
                  {user.photoURL ? (
                    <img className="w-10 h-10 " src={user.photoURL}></img>
                  ) : (
                    <h1>{user.displayName.charAt(0).toUpperCase()}</h1>
                  )}
                </div>
                <h1>{user.displayName}</h1>
                <button className="p-3 border rounded-lg" onClick={logOutUser}>
                  <FaSignOutAlt></FaSignOutAlt>
                </button>
              </div>
            ) : (
              <button className="bg-gray-200 px-3 py-1 rounded">Login</button>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default NavChildren;
