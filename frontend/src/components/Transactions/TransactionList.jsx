import React, { useState } from "react";
import { useMutation, useQuery } from "@tanstack/react-query";
import { FaTrash, FaEdit } from "react-icons/fa";

import { ChevronDownIcon } from "@heroicons/react/24/solid";
import { listTransactionsAPI } from "../../services/transactions/transactionService";
import { listCategoriesAPI } from "../../services/category/categoryService";
import "./TransactionList.css";
import { getUserFromStorage } from "../../utils/getUserFromStorage";
import axios from "axios";
const TransactionList = () => {
  //!Filtering state
  const [filters, setFilters] = useState({
    startDate: "",
    endDate: "",
    type: "",
    category: "",
  });
  //!Handle Filter Change
  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters((prev) => ({ ...prev, [name]: value }));
  };

  //fetching
  const {
    data: categoriesData,
    isLoading: categoryLoading,
    error: categoryErr,
  } = useQuery({
    queryFn: listCategoriesAPI,
    queryKey: ["list-categories"],
  });
  //fetching
  const {
    data: transactions,
    isError,
    isLoading,
    isFetched,
    error,
    refetch,
  } = useQuery({
    queryFn: () => listTransactionsAPI(filters),
    queryKey: ["list-transactions", filters],
  });

  return (
    <div id="l1">
      <div id="l2">
        {/* Start Date */}
        <input
          type="date"
          name="startDate"
          value={filters.startDate}
          onChange={handleFilterChange}
          id="l3"
        />
        {/* End Date */}
        <input
          value={filters.endDate}
          onChange={handleFilterChange}
          type="date"
          name="endDate"
          id="l4"
        />
        {/* Type */}
        <div id="l5">
          <select
            name="type"
            value={filters.type}
            onChange={handleFilterChange}
            className="w-full p-2 rounded-lg border-gray-300 focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50 appearance-none"id="l6"
          >
            <option value="">All Types</option>
            <option value="income">Income</option>
            <option value="expense">Expense</option>
          </select>
          <ChevronDownIcon id="l7" />
        </div>
        {/* Category */}
        <div id="l8">
          <select
            value={filters.category}
            onChange={handleFilterChange}
            name="category"
            className="w-full p-2 rounded-lg border-gray-300 focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50 appearance-none"id="l9"
          >
            <option value="All">All Categories</option>
            <option value="Uncategorized">Uncategorized</option>
            {categoriesData?.map((category) => {
              return (
                <option key={category?._id} value={category?.name}>
                  {category?.name}
                </option>
              );
            })}
          </select>
          <ChevronDownIcon id="l10" />
        </div>
      </div>
      <div id="l11">
        {/* Inputs and selects for filtering (unchanged) */}
        <div id="l12">
          <h3 id="l13">
            Filtered Transactions
          </h3>
          <ul className="list-disc pl-5 space-y-2"id="l14">
            {transactions?.map((transaction) => (
              <li
                key={transaction._id}
                id="l15"
              >
                <div>
                  <span id="l16">
                    {new Date(transaction.date).toLocaleDateString()}
                  </span>
                  <span
                    className={`ml-2 px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                      transaction.type === "income"
                        ? "bg-green-100 text-green-800"
                        : "bg-red-100 text-red-800"
                    }`}
                  >
                    {transaction.type.charAt(0).toUpperCase() +
                      transaction.type.slice(1)}
                  </span>
                  <span id="l17">
                    {transaction.category?.name} - $
                    {transaction.amount.toLocaleString()}
                  </span>
                  <span id="l18">
                    {transaction.description}
                  </span>
                </div>
                <div id="l19">
                  {/* <button
                    onClick={() => handleUpdateTransaction(transaction._id)}
                    id="l20"
                  >
                    <FaEdit /> */}
                  {/* </button> */}
                  <button
                    // onClick={() => handleDelete(transaction._id)}
                    onClick={() => {
                      axios.delete(`http://localhost:8000/api/v1/transactions/delete/${transaction._id}`, {
                        headers: {
                          Authorization: `Bearer ${getUserFromStorage()}`,
                        }
                      })
                      transaction._id
                    }}
                    id="l21"
                  >
                    <FaTrash />
                  </button>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default TransactionList;
