import React, { useContext } from "react";
import { AuthContext } from "../auth/Auth";
import { FaSignOutAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

const NavChildren = () => {
  const { user, loading, logOutUser } = useContext(AuthContext);
  // console.log(user.displayName)

  return (
    <div className="mx-[120px] flex justify-center list-none gap-6 relative ">
      <div className="flex gap-3">
        <li>home</li>
        <li>home</li>
        <li>home</li>
      </div>
      <div className="absolute right-0">
        {loading ? (
          <Link to={'/login'}>
            <button className="bg-gray-200 px-3 py-1 rounded">Login</button>
          </Link>
        ) : (
          <>
            {user ? (
              <div className="flex gap-3 items-center">
                <img src="" alt="" />
                <h1>{user.email}</h1>
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
