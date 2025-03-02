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
import { updateCategoryAPI } from "../../services/category/categoryService";
import AlertMessage from "../Alert/AlertMessage";

const validationSchema = Yup.object({
  name: Yup.string()
    .required("Category name is required")
    .oneOf(["income", "expense"]),
  type: Yup.string()
    .required("Category type is required")
    .oneOf(["income", "expense"]),
});

const UpdateCategory = () => {
  //Params
  const { id } = useParams();
  console.log(id);
  //Navigate
  const navigate = useNavigate();

  // Mutation
  const { mutateAsync, isPending, isError, error, isSuccess } = useMutation({
    mutationFn: updateCategoryAPI,
    mutationKey: ["update-category"],
  });

  const formik = useFormik({
    initialValues: {
      type: "",
      name: "",
    },
    onSubmit: (values) => {
      const data = {
        ...values,
        id,
      };
      mutateAsync(data)
        .then((data) => {
          //redirect
          navigate("/categories");
        })
        .catch((e) => console.log(e));
    },
  });

  return (
    <form
      onSubmit={formik.handleSubmit}
       id="Up1"
    >
      <div className="text-center"id="Up2">
        <h2 id="Up3">
          Update Category
        </h2>
        <p id="Up4">Fill in the details below.</p>
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
          message="Category updated successfully, redirecting..."
        />
      )}
      {/* Category Type */}
      <div id="Up5">
        <label
          htmlFor="type"
          id="Up6"
        >
          <FaWallet id="FaWallet" />
          <span>Type</span>
        </label>
        <select
          {...formik.getFieldProps("type")}
          id="type"
          className="Up7"
        >
          <option value="">Select transaction type</option>
          <option value="income">Income</option>
          <option value="expense">Expense</option>
        </select>
        {formik.touched.type && formik.errors.type && (
          <p id="Up8">{formik.errors.type}</p>
        )}
      </div>

      {/* Category Name */}
      <div id="Up9">
        <label htmlFor="name" id="Up10">
          <SiDatabricks id="Up11" />
          Name
        </label>
        <input
          type="text"
          {...formik.getFieldProps("name")}
          placeholder="Name"
          id="name"
          className="Up12"
        />
        {formik.touched.name && formik.errors.name && (
          <p id="Up13">{formik.errors.name}</p>
        )}
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        className="Up14"
      >
        Update Category
      </button>
    </form>
  );
};

export default UpdateCategory;
