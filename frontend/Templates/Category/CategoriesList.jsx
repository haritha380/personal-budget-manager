import React from "react";
import { FaTrash, FaEdit } from "react-icons/fa";
import { useMutation, useQuery } from "@tanstack/react-query";
import { Link } from "react-router-dom";

const CategoriesList = () => {
  return (
    <div id="g1">
      <h2 id="g2">Categories</h2>
      <ul id="g3">
        {[1, 1]?.map((category) => (
          <li
            key={category?._id}
            id="g4"
          >
            <div>
              <span id="g5">{category?.name}</span>
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
            <div id="g6">
              <Link to={`/update-category/${category._id}`}>
                <button id="g7">
                  <FaEdit />
                </button>
              </Link>
              <button
                // onClick={() => handleDelete(category?._id)}
                id="g8"
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
