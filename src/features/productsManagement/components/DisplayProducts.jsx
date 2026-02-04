import Loader from "@/ui/Loader";
import TableUi from "@/ui/Table";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import React, { useEffect } from "react";
import { useDisplayProducts } from "../hooks/useDisplayProducts";
import { displayError } from "@/utils/displayError";
import DisplayToastr from "@/ui/DisplayToastr";

export default function DisplayProducts() {
  const [products, isLoading, isError] = useDisplayProducts();
  useEffect(() => {
    if (isError) {
      displayError("products couldnt be fetched");
    }
  }, [isError]);
  if (isLoading) return <Loader />;

  return (
    <>
      <DisplayToastr />
      <TableUi
        displayedClos={["name", "id", "category", "price", "stock"]}
        tableData={products}
        render={(product) => (
          <TableRow
            key={product.id}
            className={`
                    
                      border-0 even:bg-gray-50 odd:bg-white rounded-2xl! `}
          >
            <TableCell className={"flex gap-4 items-center"}>
              <img
                src={product.image}
                alt={product.name}
                className="h-12 w-12 object-cover rounded "
              />
              <span className="font-semibold">{product.name}</span>
            </TableCell>
            <TableCell className={"text-center"}>
              #{product.id.slice(0, 6)}
            </TableCell>
            {/* Category */}
            <TableCell className={"text-center"}>{product.category}</TableCell>
            {/* Price */}
            <TableCell className="text-center">
              ${product.price.toFixed(2)}
            </TableCell>
            {/* Stock */}
            <TableCell>
              <span
                className={`text-center font-medium px-3 py-1 w-fit ${
                  product.stock === 0
                    ? "bg-amber-50 text-orange-600"
                    : "text-green-800"
                }`}
              >
                {" "}
                {product.stock === 0 ? "Out of Stock" : product.stock}
              </span>
            </TableCell>
            {/* Description */}
            {/* <TableCell>{product.description}</TableCell> */}
          </TableRow>
        )}
      />
    </>
  );
}
