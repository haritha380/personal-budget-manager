import React, { useState } from "react";
import { AiOutlineLock } from "react-icons/ai";
import { useMutation } from "@tanstack/react-query";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useDispatch } from "react-redux";
import { changePasswordAPI } from "../../services/users/userService";
import { logoutAction } from "../../redux/slice/authSlice";
import AlertMessage from "../Alert/AlertMessage";

import "./UpdatePassword.css"

const validationSchema = Yup.object({
  password: Yup.string()
    .min(5, "Password must be at least 5 characters long")
    .required("Email is required"),
});

const UpdatePassword = () => {
  //Dispatch
  const dispatch = useDispatch();
  // Mutation
  const { mutateAsync, isPending, isError, error, isSuccess } = useMutation({
    mutationFn: changePasswordAPI,
    mutationKey: ["change-password"],
  });
  const formik = useFormik({
    initialValues: {
      password: "",
    },
    // Validations
    validationSchema,
    //Submit
    onSubmit: (values) => {
      mutateAsync(values.password)
        .then((data) => {
          //Logout
          dispatch(logoutAction());
          //remove the user from storage
          localStorage.removeItem("userInfo");
        })
        .catch((e) => console.log(e));
    },
  });

  return (
    <div id="w1">
      <section id="load_section">
        <h2 id="w2">Change Your Password</h2>
        <form onSubmit={formik.handleSubmit} id="w3">
          <div id="w4">
            <label
              id="w5"
              htmlFor="new-password"
            >
              New Password
            </label>
            {isPending && <AlertMessage type="loading" message="Updating...." />}
            {isError && (
              <AlertMessage type="error" message={error.response.data.message} />
            )}
            {isSuccess && (
              <AlertMessage
                type="success"
                message="Password updated successfully"
              />
            )}
            <div id="w6">
              <AiOutlineLock id="w7" />
              <input
                id="new-password"
                type="password"
                name="newPassword"
                {...formik.getFieldProps("password")}
                className="w8"
                placeholder="Enter new password"
              />
            </div>
            {formik.touched.password && formik.errors.password && (
              <span id="w9">
                {formik.errors.password}
              </span>
            )}
          </div>
          <button
            type="submit"
            id="w10"
          >
            Update Password
          </button>
        </form>
      </section>
    </div>
  );
};

export default UpdatePassword;
