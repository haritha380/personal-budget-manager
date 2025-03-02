import React, { useEffect } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";
import { useMutation } from "@tanstack/react-query";
import { FaUser, FaEnvelope, FaLock } from "react-icons/fa";
import { registerAPI } from "../../services/users/userService";
import AlertMessage from "../Alert/AlertMessage";

//Validations
const validationSchema = Yup.object({
  username: Yup.string().required("Username is required"),
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
  password: Yup.string()
    .min(6, "Password must be at least 6 characters long")
    .required("Password is required"),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password"), null], "Passwords must match")
    .required("Confirming your password is required"),
});
const RegistrationForm = () => {
  //Navigate
  const navigate = useNavigate();
  // Mutation
  const { mutateAsync, isPending, isError, error, isSuccess } = useMutation({
    mutationFn: registerAPI,
    mutationKey: ["register"],
  });
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
      username: "",
    },
    // Validations
    validationSchema,
    //Submit
    onSubmit: (values) => {
      console.log(values);
      //http request
      mutateAsync(values)
        .then((data) => {
          console.log(data);
        })
        .catch((e) => console.log(e));
    },
  });
  //Redirect
  useEffect(() => {
    setTimeout(() => {
      if (isSuccess) {
        navigate("/login");
      }
    }, 3000);
  }, [isPending, isError, error, isSuccess]);
  return (
    <form
      onSubmit={formik.handleSubmit}
      id="r1"
    >
      <h2 id="r2">
        Sign Up
      </h2>
      {/* Display messages */}
      {isPending && <AlertMessage type="loading" message="Loading...." />}
      {isError && (
        <AlertMessage type="error" message={error.response.data.message} />
      )}
      {isSuccess && (
        <AlertMessage type="success" message="Registration success" />
      )}
      <p id="r3">
        Join our community now!
      </p>

      {/* Input Field - Username */}
      <div id="r20">
        <FaUser id="r4" />
        <input
          id="username"
          type="text"
          {...formik.getFieldProps("username")}
          placeholder="Username"
          className="r5"
        />
        {formik.touched.username && formik.errors.username && (
          <span id="r6">{formik.errors.username}</span>
        )}
      </div>

      {/* Input Field - Email */}
      <div id="r7">
        <FaEnvelope id="r8" />
        <input
          id="email"
          type="email"
          {...formik.getFieldProps("email")}
          placeholder="Email"
          className="r9"
        />
        {formik.touched.email && formik.errors.email && (
          <span id="r10">{formik.errors.email}</span>
        )}
      </div>

      {/* Input Field - Password */}
      <div id="r11">
        <FaLock id="r12" />
        <input
          id="password"
          type="password"
          {...formik.getFieldProps("password")}
          placeholder="Password"
          className="r13"
        />
        {formik.touched.password && formik.errors.password && (
          <span id="r14">{formik.errors.password}</span>
        )}
      </div>

      {/* Input Field - Confirm Password */}
      <div id="r15">
        <FaLock id="r16" />
        <input
          id="confirmPassword"
          type="password"
          {...formik.getFieldProps("confirmPassword")}
          placeholder="Confirm Password"
          className="r17"
        />
        {formik.touched.confirmPassword && formik.errors.confirmPassword && (
          <span id="r18">
            {formik.errors.confirmPassword}
          </span>
        )}
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        id="r19"
      >
        Register
      </button>
    </form>
  );
};

export default RegistrationForm;
