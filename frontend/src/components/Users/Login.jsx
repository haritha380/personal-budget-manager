import React, { useEffect } from "react";
import { useFormik } from "formik";
import { useDispatch } from "react-redux";
import * as Yup from "yup";
import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { FaEnvelope, FaLock } from "react-icons/fa";
import { loginAPI } from "../../services/users/userService";
import AlertMessage from "../Alert/AlertMessage";
import { loginAction } from "../../redux/slice/authSlice";

//! Validations
const validationSchema = Yup.object({
  email: Yup.string().email("Invalid").required("Email is required"),
  password: Yup.string()
    .min(5, "Password must be at least 5 characters long")
    .required("Email is required"),
});

const LoginForm = () => {
  //Navigate
  const navigate = useNavigate();
  //Dispatch
  const dispatch = useDispatch();
  // Mutation
  const { mutateAsync, isPending, isError, error, isSuccess } = useMutation({
    mutationFn: loginAPI,
    mutationKey: ["login"],
  });

  const formik = useFormik({
    initialValues: {
      email: "ben@gmail.com",
      password: "123456",
    },
    // Validations
    validationSchema,
    //Submit
    onSubmit: (values) => {
      console.log(values);
      //http request
      mutateAsync(values)
        .then((data) => {
          //dispatch
          dispatch(loginAction(data));
          //Save the user into localStorage
          localStorage.setItem("userInfo", JSON.stringify(data));
        })
        .catch((e) => console.log(e));
    },
  });
  //Redirect
  useEffect(() => {
    setTimeout(() => {
      if (isSuccess) {
        navigate("/profile");
      }
    }, 3000);
  }, [isPending, isError, error, isSuccess]);
  return (
    <form
      onSubmit={formik.handleSubmit}
      id="n1"
    >
      <h2 id="n2">
        Login
      </h2>
      {/* Display messages */}
      {isPending && <AlertMessage type="loading" message="Login you in...." />}
      {isError && (
        <AlertMessage type="error" message={error.response.data.message} />
      )}
      {isSuccess && <AlertMessage type="success" message="Login success" />}
      <p id="n3">
        Login to access your account
      </p>

      {/* Input Field - Email */}
      <div id="n4">
        <FaEnvelope id="n5" />
        <input
          id="email"
          type="email"
          {...formik.getFieldProps("email")}
          placeholder="Email"
          className="n6"
        />
        {formik.touched.email && formik.errors.email && (
          <span id="n7">{formik.errors.email}</span>
        )}
      </div>

      {/* Input Field - Password */}
      <div id="n8">
        <FaLock id="n9" />
        <input
          id="password"
          type="password"
          {...formik.getFieldProps("password")}
          placeholder="Password"
          className="n10"
        />
        {formik.touched.password && formik.errors.password && (
          <span id="n11">{formik.errors.password}</span>
        )}
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        id="n12"
      >
        Login
      </button>
    </form>
  );
};

export default LoginForm;
