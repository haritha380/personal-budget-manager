import React, { useEffect } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import {
  FaDollarSign,
  FaCalendarAlt,
  FaRegCommentDots,
  FaWallet,
} from "react-icons/fa";
import { SiDatabricks } from "react-icons/si";
import { useQuery, useMutation } from "@tanstack/react-query";
import { useNavigate, useParams } from "react-router-dom";

const validationSchema = Yup.object({
  name: Yup.string()
    .required("Category name is required")
    .oneOf(["income", "expense"]),
  type: Yup.string()
    .required("Category type is required")
    .oneOf(["income", "expense"]),
});

const UpdateCategory = () => {
  const formik = useFormik({
    initialValues: {
      type: "",
      name: "",
    },
    onSubmit: (values) => {},
  });

  return (
    <form
      onSubmit={formik.handleSubmit}
      id="u1"
    >
      <div id="u2">
        <h2 id="u3">
          Update Category
        </h2>
        <p id="u4">Fill in the details below.</p>
      </div>
      {/* Display alert message */}
      {/* {isError && (
        <AlertMessage
          type="error"
          message={
            error?.response?.data?.message ||
            "Something happened please try again later"
          }
        />
      )}
      {isSuccess && (
        <AlertMessage
          type="success"
          message="Category updated successfully, redirecting..."
        />
      )} */}
      {/* Category Type */}
      <div className="space-y-2"id="u5">
        <label
          htmlFor="type"
          id="u6"
        >
          <FaWallet id="u7" />
          <span>Type</span>
        </label>
        <select
          {...formik.getFieldProps("type")}
          id="type"
          className="u8"
        >
          <option value="">Select transaction type</option>
          <option value="income">Income</option>
          <option value="expense">Expense</option>
        </select>
        {formik.touched.type && formik.errors.type && (
          <p id="u9">{formik.errors.type}</p>
        )}
      </div>

      {/* Category Name */}
      <div id="u10">
        <label htmlFor="name" id="u11">
          <SiDatabricks id="u12" />
          Name
        </label>
        <input
          type="text"
          {...formik.getFieldProps("name")}
          placeholder="Name"
          id="name"
          className="u13"
        />
        {formik.touched.name && formik.errors.name && (
          <p id="u14">{formik.errors.name}</p>
        )}
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        id="u15"
      >
        Update Category
      </button>
    </form>
  );
};

export default UpdateCategory;
