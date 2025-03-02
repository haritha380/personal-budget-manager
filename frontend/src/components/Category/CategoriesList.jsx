import React from "react";
import { FaTrash, FaEdit } from "react-icons/fa";
import { useMutation, useQuery } from "@tanstack/react-query";
import { Link, useNavigate } from "react-router-dom";
import {
  deleteCategoryAPI,
  listCategoriesAPI,
} from "../../services/category/categoryService";
import AlertMessage from "../Alert/AlertMessage";

const CategoriesList = () => {
  //fetching
  const { data, isError, isLoading, isFetched, error, refetch } = useQuery({
    queryFn: listCategoriesAPI,
    queryKey: ["list-categories"],
  });

  //Deleting
  //Navigate
  const navigate = useNavigate();

  // Mutation
  const {
    mutateAsync,
    isPending,
    error: categoryErr,
    isSuccess,
  } = useMutation({
    mutationFn: deleteCategoryAPI,
    mutationKey: ["delete-category"],
  });
  //Delete handler
  const handleDelete = (id) => {
    mutateAsync(id)
      .then((data) => {
        //refetch
        refetch();
      })
      .catch((e) => console.log(e));
  };
  return (
    <div id="Ca1">
      <h2 id="Ca2">Categories</h2>
      {/* Display message */}
      {isLoading && <AlertMessage type="loading" message="Loading" />}
      {isError && (
        <AlertMessage type="error" message={error.response.data.message} />
      )}
      <ul id="Ca3">
        {data?.map((category) => (
          <li
            key={category?._id}
             id="Ca4"
          >
            <div>
              <span  id="Ca5">{category?.name}</span>
              <span
                className={`ml-2 px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                  category.type === "income"
                    ? "bg-green-100 text-green-800"
                    : "bg-red-100 text-red-800"
                }`}
              >
                {category?.type?.charAt(0).toUpperCase() +
                  category?.type?.slice(1)}
              </span>
            </div>
            <div  id="Ca6">
              <Link to={`/update-category/${category._id}`}>
                <button id="Ca7">
                  <FaEdit />
                </button>
              </Link>
              <button
                onClick={() => handleDelete(category?._id)}
                id="Ca8"
              >
                <FaTrash />
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CategoriesList;
