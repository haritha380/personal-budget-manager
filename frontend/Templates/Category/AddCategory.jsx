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
import { useNavigate } from "react-router-dom";

const validationSchema = Yup.object({
  name: Yup.string()
    .required("Category name is required")
    .oneOf(["income", "expense"]),
  type: Yup.string()
    .required("Category type is required")
    .oneOf(["income", "expense"]),
});

const AddCategory = () => {
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
      id="Ad1"
    >
      <div id="Ad2">
        <h2 id="Ad3">
          Add New Category
        </h2>
        <p id="Ad4">Fill in the details below.</p>
      </div>
      {/* Display alert message */}
      {isError && (
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
          message="Category added successfully, redirecting..."
        />
      )}
      {/* Category Type */}
      <div id="Ad5">
        <label
          htmlFor="type"
          id="Ad6"
        >
          <FaWallet id="Ad7" />
          <span>Type</span>
        </label>
        <select
          {...formik.getFieldProps("type")}
          id="type"
          className="Ad8"
        >
          <option value="">Select transaction type</option>
          <option value="income">Income</option>
          <option value="expense">Expense</option>
        </select>
        {formik.touched.type && formik.errors.type && (
          <p id="Ad9">{formik.errors.type}</p>
        )}
      </div>

      {/* Category Name */}
      <div id="Ad15">
        <label htmlFor="name" id="Ad10">
          <SiDatabricks id="Ad11" />
          Name
        </label>
        <input
          type="text"
          {...formik.getFieldProps("name")}
          placeholder="Name"
          id="name"
          className="Ad12"
        />
        {formik.touched.name && formik.errors.name && (
          <p id="Ad13">{formik.errors.name}</p>
        )}
      </div>

      {/* Submit Button */}
      <button
        type="submit"
       id="Ad14"
      >
        Add Category
      </button>
    </form>
  );
};

export default AddCategory;
