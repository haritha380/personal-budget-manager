import React from "react";
import { FaUserCircle, FaEnvelope, FaLock } from "react-icons/fa";
import { useFormik } from "formik";
import { useMutation } from "@tanstack/react-query";
import UpdatePassword from "./UpdatePassword";
import { updateProfileAPI } from "../../services/users/userService";
import AlertMessage from "../Alert/AlertMessage";

const UserProfile = () => {
  // Mutation
  const { mutateAsync, isPending, isError, error, isSuccess } = useMutation({
    mutationFn: updateProfileAPI,
    mutationKey: ["change-password"],
  });
  const formik = useFormik({
    initialValues: {
      email: "",
      username: "",
    },

    //Submit
    onSubmit: (values) => {
      mutateAsync(values)
        .then((data) => {
          console.log(data);
        })
        .catch((e) => console.log(e));
    },
  });
  return (
    <>
      <div id="u1">
        <h1 id="u2">
          Welcome
          {/* <span className="text-gray-500 text-sm ml-2">info@gmail.com</span> */}
        </h1>
        <h3 id="u3">
          Update Profile
        </h3>
        {/* Display message */}
        {isPending && <AlertMessage type="loading" message="Updating...." />}
        {isError && (
          <AlertMessage type="error" message={error.response.data.message} />
        )}
        {isSuccess && (
          <AlertMessage type="success" message="Updated successfully" />
        )}
        <form onSubmit={formik.handleSubmit} id="u4">
          {/* User Name Field */}
          <div id="u5">
            <FaUserCircle id="u6" />
            <div id="u7">
              <label
                htmlFor="username"
                id="u8"
              >
                Username
              </label>
              <input
                {...formik.getFieldProps("username")}
                type="text"
                id="username"
                className="u9"
                placeholder="Your username"
              />
            </div>
            {formik.touched.username && formik.errors.username && (
              <span id="u10">
                {formik.errors.username}
              </span>
            )}
          </div>

          {/* Email Field */}
          <div id="u11">
            <FaEnvelope id="u12" />
            <div id="u13">
              <label
                htmlFor="email"
                id="u14"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                {...formik.getFieldProps("email")}
                className="u15"
                placeholder="Your email"
              />
            </div>
            {formik.touched.email && formik.errors.email && (
              <span id="u16">
                {formik.errors.email}
              </span>
            )}
          </div>

          {/* Save Changes Button */}
          <div id="u17">
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"id="u18"
            >
              Save Changes
            </button>
          </div>
        </form>
      </div>
      <UpdatePassword />
    </>
  );
};

export default UserProfile;
