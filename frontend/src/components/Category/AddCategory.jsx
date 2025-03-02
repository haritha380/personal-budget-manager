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
import { addCategoryAPI } from "../../services/category/categoryService";
import AlertMessage from "../Alert/AlertMessage";

const validationSchema = Yup.object({
  name: Yup.string().required("Category name is required"),
  type: Yup.string()
    .required("Category type is required")
    .oneOf(["income", "expense"]),
});

const AddCategory = () => {
  //Navigate
  const navigate = useNavigate();

  // Mutation
  const { mutateAsync, isPending, isError, error, isSuccess } = useMutation({
    mutationFn: addCategoryAPI,
    mutationKey: ["login"],
  });

  const formik = useFormik({
    initialValues: {
      type: "",
      name: "",
    },
    validationSchema,
    onSubmit: (values) => {
      mutateAsync(values)
        .then((data) => {
          navigate("/categories");
        })
        .catch((e) => console.log(e));
    },
  });

  return (
    <form
      onSubmit={formik.handleSubmit}
      id="Addc1"
    >
      <div id="Addc2">
        <h2  id="Addc3">
          Add New Category
        </h2>
        <p id="Addc4">Fill in the details below.</p>
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
      <div  id="Addc5">
        <label
          htmlFor="type"
           id="Addc6"
        >
          <FaWallet  id="Addc7" />
          <span>Type</span>
        </label>
        <select
          {...formik.getFieldProps("type")}
          id="type"
          className=" Addc8"
        >
          <option value="">Select transaction type</option>
          <option value="income">Income</option>
          <option value="expense">Expense</option>
        </select>
        {formik.touched.type && formik.errors.type && (
          <p  id="Addc9">{formik.errors.type}</p>
        )}
      </div>

      {/* Category Name */}
      <div className="flex flex-col">
        <label htmlFor="name"  id="Addc10">
          <SiDatabricks  id="SiDatabricks" />
          Name
        </label>
        <input
          type="text"
          {...formik.getFieldProps("name")}
          placeholder="Name"
          id="name"
          className="Addc11"
        />
        {formik.touched.name && formik.errors.name && (
          <p  id="Addc12">{formik.errors.name}</p>
        )}
      </div>

      {/* Submit Button */}
      <button
        type="submit"
         id="Addc13"
      >
        Add Category
      </button>
    </form>
  );
};

export default AddCategory;
