import React, { useEffect } from "react";
import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";
import * as Yup from "yup";
import { useMutation, useQuery } from "@tanstack/react-query";
import {
  FaDollarSign,
  FaCalendarAlt,
  FaRegCommentDots,
  FaWallet,
} from "react-icons/fa";
import { listCategoriesAPI } from "../../services/category/categoryService";
import { addTransactionAPI } from "../../services/transactions/transactionService";
import AlertMessage from "../Alert/AlertMessage";

const validationSchema = Yup.object({
  type: Yup.string()
    .required("Transaction type is required")
    .oneOf(["income", "expense"]),
  amount: Yup.number()
    .required("Amount is required")
    .positive("Amount must be positive"),
  category: Yup.string().required("Category is required"),
  date: Yup.date().required("Date is required"),
  description: Yup.string(),
});

const TransactionForm = () => {
  //Navigate
  const navigate = useNavigate();

  // Mutation
  const {
    mutateAsync,
    isPending,
    isError: isAddTranErr,
    error: transErr,
    isSuccess,
  } = useMutation({
    mutationFn: addTransactionAPI,
    mutationKey: ["add-transaction"],
  });
  //fetching
  const { data, isError, isLoading, isFetched, error, refetch } = useQuery({
    queryFn: listCategoriesAPI,
    queryKey: ["list-categories"],
  });

  const formik = useFormik({
    initialValues: {
      type: "",
      amount: "",
      category: "",
      date: "",
      description: "",
    },
    validationSchema,
    onSubmit: (values) => {
      mutateAsync(values)
        .then((data) => {
          console.log(data);
        })
        .catch((e) => console.log(e));
    },
  });

  return (
    <form
      onSubmit={formik.handleSubmit}
      id="f1"
    >
      <div id="f2">
        <h2 id="f3">
          Transaction Details
        </h2>
        <p id="f4">Fill in the details below.</p>
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
        <AlertMessage type="success" message="Transaction added successfully" />
      )}
      {/* Transaction Type Field */}
      <div id="f5">
        <label
          htmlFor="type"
          id="f6"
        >
          <FaWallet id="f7" />
          <span>Type</span>
        </label>
        <select
          {...formik.getFieldProps("type")}
          id="type"
          className="f8"
        >
          <option value="">Select transaction type</option>
          <option value="income">Income</option>
          <option value="expense">Expense</option>
        </select>
        {formik.touched.type && formik.errors.type && (
          <p id="f9">{formik.errors.type}</p>
        )}
      </div>

      {/* Amount Field */}
      <div id="f10">
        <label htmlFor="amount" id="f11">
          <FaDollarSign id="f12" />
          Amount
        </label>
        <input
          type="number"
          {...formik.getFieldProps("amount")}
          id="amount"
          placeholder="Amount"
          className="f13"
        />
        {formik.touched.amount && formik.errors.amount && (
          <p id="f14">{formik.errors.amount}</p>
        )}
      </div>

      {/* Category Field */}
      <div id="f15">
        <label htmlFor="category" id="f16">
          <FaRegCommentDots id="f17" />
          Category
        </label>
        <select
          {...formik.getFieldProps("category")}
          id="category"
          className="f18"
        >
          <option value="">Select a category</option>
          {data?.map((category) => {
            return (
              <option key={category?._id} value={category?.name}>
                {category?.name}
              </option>
            );
          })}
        </select>
        {formik.touched.category && formik.errors.category && (
          <p id="f19">
            {formik.errors.category}
          </p>
        )}
      </div>

      {/* Date Field */}
      <div id="f20">
        <label htmlFor="date" id="f21">
          <FaCalendarAlt id="f22" />
          Date
        </label>
        <input
          type="date"
          {...formik.getFieldProps("date")}
          id="date"
          className="f23"
        />
        {formik.touched.date && formik.errors.date && (
          <p id="f24">{formik.errors.date}</p>
        )}
      </div>

      {/* Description Field */}
      <div id="f25">
        <label htmlFor="description" id="f26">
          <FaRegCommentDots id="f27" />
          Description (Optional)
        </label>
        <textarea
          {...formik.getFieldProps("description")}
          id="description"
          placeholder="Description"
          rows="3"
          className="f28"
        ></textarea>
        {formik.touched.description && formik.errors.description && (
          <p id="f29">
            {formik.errors.description}
          </p>
        )}
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        id="f30"
      >
        Submit Transaction
      </button>
    </form>
  );
};

export default TransactionForm;
