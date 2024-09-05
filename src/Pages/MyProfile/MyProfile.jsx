import { Avatar } from "@material-tailwind/react";
import { useState } from "react";
import { updateProfile } from "firebase/auth";

import { Helmet } from "react-helmet-async";
import useAuth from "../../Hooks/UseAuth/useAuth";
import Swal from "sweetalert2";

const MyProfile = () => {
  const { user, updateUser } = useAuth();
  console.log(user);

  const [updatedProfile, setUpdatedProfile] = useState(null);

  const handleUpdate = (e) => {
    e.preventDefault();

    const name = e.target.name.value;
    const imgURL = e.target.photo.value;

    updateUser(name, imgURL)
      .then((res) => {
        console.log(res);
        
        Swal.fire({
          title: "Update!",
          text: "User successfully Updated!",
          icon: "success",
        });
        setUpdatedProfile(user);
      })
      .catch(() => {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Update Profile failed. Something went wrong! ",
          footer: "please try again",
        });
      });
  };
  return (
    <>
      <Helmet>
        <title>Update Profile | The Daily Pulse </title>
      </Helmet>
      <div className=" my-28 lg:flex gap-16 ">
        <div className=" shadow-xl lg:flex justify-center lg:w-[720px] border border-[#29282859] rounded-sm py-8 mb-28 lg:mb-auto">
          <div>
            <div className=" text-center mb-7">
              <Avatar
                size="xl"
                src={updatedProfile?.photoURL || user?.photoURL}
                alt="avatar"
                withBorder={true}
                className="p-0.5"
              />
              <p className=" mt-4 mb-1">
                {updateProfile?.displayName || user?.displayName}
              </p>
              <p>{user?.email}</p>
            </div>
            <div className=" text-center">
              <h1 className=" font-bold text-xl">About Me</h1>
              <p className=" text-justify px-12 mt-4">
                {`As a passionate news blogger, I delve into a wide array of topics, from global events and political developments to technology trends and cultural shifts. My mission is to deliver timely, accurate, and engaging content that keeps you informed and helps you make sense of the ever-changing world around us.I pride myself on providing not just the headlines, but also the context and nuances behind the stories. `}
              </p>
            </div>
          </div>
        </div>
        <div className="shadow-xl flex justify-center w-full border border-[#29282859] rounded-sm pt-8">
          <form onSubmit={handleUpdate} className="w-full px-8 mb-7 lg:mb-2">
            <h1 className=" font-bold text-xl mb-6">Update Your Profile:</h1>
            <div className="relative z-0 w-full mb-5 group">
              <input
                type="text"
                name="name"
                defaultValue={user?.displayName}
                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
                required
              />
              <label className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                Your Name
              </label>
            </div>
            <div className="relative z-0 w-full mb-5 group">
              <input
                type="email"
                name="email"
                defaultValue={user?.email}
                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer cursor-none"
                placeholder=" "
                readOnly
              />
              <label className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                Email address
              </label>
            </div>
            <div className="relative z-0 w-full mb-5 group">
              <input
                type="text"
                name="photo"
                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
                required
              />
              <label className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                Photo URL
              </label>
            </div>
            <div className="relative z-0 w-full mb-5 group">
              <input
                type="password"
                name="password"
                id="password"
                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
                readOnly
              />
              <label className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 cursor-none ">
                Password
              </label>
            </div>
            <div className="relative z-0 w-full mb-5 group">
              <input
                type="password"
                readOnly
                name="update"
                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer cursor-none "
                placeholder=""
                

              />
              <label className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                Confirm password
              </label>
            </div>

            <div className=" ">
              <button
                type="submit"
                className="mt-6 bg-gradient-to-r from-[#EB3678] to-[#FB773C] px-12  py-3 rounded-lg font-bold text-white text-xl "
              >
                Update
              </button>
             
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default MyProfile;
